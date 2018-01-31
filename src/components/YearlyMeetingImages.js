import React from 'react';
import ImagesCarousel from "./ImagesCarousel";
import PropTypes from 'prop-types';

const YearlyMeetingImages = ({carouselId, images}) => {
    return (
        <ImagesCarousel carouselId={carouselId} images={images} autoPlay={true} interval={7000}/>
    )
};

YearlyMeetingImages.propTypes = {
    carouselId: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }
    ))
};

export default YearlyMeetingImages