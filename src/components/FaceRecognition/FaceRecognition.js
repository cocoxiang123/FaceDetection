import React from 'react'
import './face.css'
import BoundingBox from './boundingBox'

function FaceRecognition({ imgURL, box }) {
    return (
        <div className="center face" >
            <div className="face-container mt2">
                <img src={imgURL} alt="" id="inputImage" />
                <div className="bounding-box"
                    style={{
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol
                    }}>
                    {box.age &&
                        <BoundingBox box={box} />
                    }
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition
