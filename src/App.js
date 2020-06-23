import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import errImg from './components/FaceRecognition/err404.png'

function App() {

  const particalesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3ca901",
          blur: 5
        }
      }
    }
  }

  const app = new Clarifai.App({
    apiKey: '257c0c8f72a940d8b434f2665213e725'
  });

  const [input, setInput] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [box, setBox] = useState({})
  const [err, setErr] = useState('')

  const calculateFaceLocation = (data) => {
    console.log(data)
    const age = data.outputs[0].data.regions[0].data.concepts[0].name;
    const possibility = data.outputs[0].data.regions[0].data.concepts[0].value;
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      age,
      possibility,
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

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
        setErr("Sorry,The url is not valid. Please try another one.")
        setImgURL(errImg);
      })
  }
  return (
    <div className="App">
      <Particles className="particles" params={particalesOptions} />
      <Navigation><Logo /></Navigation>
      <Rank />
      <ImageLinkForm input={input} onChangeInput={onChangeInput} onSubmit={onSubmit} err={err} />
      <FaceRecognition imgURL={imgURL} box={box} />
    </div>
  );
}

export default App;
