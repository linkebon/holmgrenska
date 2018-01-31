import React from 'react';
import ImagesCarousel from "./ImagesCarousel";

const YearlyMeetingImages = ({carouselId, images}) => {
    return (
        <ImagesCarousel carouselId={carouselId} images={images}/>
    )
};

export default YearlyMeetingImages