import React from 'react'
import './face.css'
import BoundingBox from './boundingBox'

function FaceRecognition({ imgURL, box }) {
    return (
        <div className="center face" >
            <div className="face-container mt2 ">
                <img src={imgURL} alt="" id="inputImage" className="img-fluid" />

                {box.length &&
                    box.map((x, index) => <BoundingBox box={x} key={index} />)

                }
            </div>
        </div>

    )
}

export default FaceRecognition
