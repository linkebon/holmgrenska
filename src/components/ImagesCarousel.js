import React from 'react';
import {Carousel} from 'react-responsive-carousel'

const ImagesCarousel = ({carouselId, images}) => {
    const renderImages = () => {
        return images.map((img, index) => {
            const active = index === 0 ? 'active' : '';
            return (
                <div key={carouselId + index}>
                    <img src={img.url} alt={img.alt}/>
                    <p className="legend">{img.text}</p>
                </div>
            )
        })
    };

    return (
        <div className="carousel-style">
            <Carousel>
                {renderImages()}
            </Carousel>
        </div>
    )
};
export default ImagesCarousel