import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import PropTypes from 'prop-types';

const ImagesCarousel = ({carouselId, images, autoPlay = false, interval = 5000}) => {
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

    const renderAutoPlayText = () => {
        return autoPlay ?
            <p className="text-center small">Bilderna roterar var {interval / 1000} sekund. Håll musen över bilden för
                att sluta rotera dom.</p> : ''
    };


    return (
        <div className="carousel-style">
            <Carousel autoPlay={autoPlay} interval={interval} dynamicHeight={true} infiniteLoop={true}>
                {renderImages()}
            </Carousel>
            {renderAutoPlayText()}
        </div>
    )
};

ImagesCarousel.propTypes = {
    carouselId: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }
    )),
    autoPlay: PropTypes.bool,
    interval: PropTypes.number
};

export default ImagesCarousel