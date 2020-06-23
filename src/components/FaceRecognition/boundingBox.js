import React from 'react'

function BoundingBox({ box }) {
    return (
        <div className="bounding-box-concepts">
            <div className="bounding-box__concept">
                <span className="text-white mr-2">Age: {box.age}  </span>
                <span>Possibility: {`${Math.floor(box.possibility * 100)}%`}</span>
            </div>
        </div>


    )
}

export default BoundingBox
