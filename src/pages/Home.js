import React, { useState } from 'react'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai'
import errImg from '../components/FaceRecognition/err404.png'
import Rank from '../components/Rank/Rank'

function Home({ logIn }) {


    const app = new Clarifai.App({
        apiKey: '5dbb1070533f43c89ea11cdf5c7d4480'
    });

    const [input, setInput] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [box, setBox] = useState({})
    const [err, setErr] = useState('')

    const calculateFaceLocation = (data) => {
        const image = document.getElementById('inputImage')
        const width = Number(image.width);
        const height = Number(image.height);
        const output = data.outputs[0].data.regions;
        const outputs = output.map(x => {
            const age = x.data.concepts[0].name;
            const possibility = x.data.concepts[0].value;
            const clarifaiFace = x.region_info.bounding_box;
            return {
                age,
                possibility,
                leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height - (clarifaiFace.bottom_row * height)
            }

        })
        return outputs;
    }
    const onChangeInput = (e) => {
        setInput(e.target.value)
    }
    const onSubmit = () => {
        setBox({})
        setImgURL(input);
        setErr('');
        app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", input)
            .then(response =>
                setBox(calculateFaceLocation(response))
            )
            .catch(err => {
                setErr("Sorry, the url is not valid. Please try another one.")
                setImgURL(errImg);
            })
    }
    return (
        <div>

            {logIn && <Rank />}
            <ImageLinkForm input={input} onChangeInput={onChangeInput} onSubmit={onSubmit} err={err} />
            <FaceRecognition imgURL={imgURL} box={box} />
        </div>
    )
}

export default Home
