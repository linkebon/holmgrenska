import React from 'react';
import ImagesCarousel from './ImagesCarousel'
import uuidv1 from "uuid/v1";

const FamilyInformation = ({familyNumber, familyName, generalFamilyTextMarkup, images}) => {
    return (
        <div>
            <h4>Information om släkten med släktnummer {familyNumber} - {familyName}</h4>
            <div>
                {generalFamilyTextMarkup}
            </div>
            <br/>
            <ImagesCarousel carouselId={uuidv1()} images={images} autoPlay={true} interval={7000}/>
        </div>
    )
};

export default FamilyInformation;