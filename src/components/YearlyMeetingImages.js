import React from 'react';
import ImagesCarousel from "./ImagesCarousel";

const YearlyMeetingImages = ({carouselId, images}) => {
    return (
        <ImagesCarousel carouselId={carouselId} images={images} autoPlay={true} interval={7000}/>
    )
};

export default YearlyMeetingImages