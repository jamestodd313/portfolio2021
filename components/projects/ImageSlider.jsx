import React from 'react'

export const ImageSlider = ({images}) => {
    console.log(images)
    return (
        <div className="slider-outer">
            <div className="slider-inner">
                {images.map(image=> <img key={image+Math.random()} src={image} className="project-image"/> )}
            </div>
        </div>
    )
}
