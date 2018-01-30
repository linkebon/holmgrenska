import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const YearlyMeeting = ({carouselId, images}) => {
    const carouselIdAnchor = '#' + carouselId;
    const renderImages = () => {
        return images.map((img, index) => {
            const active = index === 0 ? 'active' : '';
            return (
                <div key={carouselId + index} className={"carousel-item " + active}>
                    <img className="d-block img-fluid" src={img.url} alt={img.alt}/>
                </div>
            )
        })
    };

    return (
        <div id={carouselId} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                {renderImages()}
            </div>
            <a className="carousel-control-prev text-muted" href={carouselIdAnchor} role="button" data-slide="prev">
                <FontAwesomeIcon icon="chevron-left" size="3x"/>
            </a>
            <a className="carousel-control-next text-muted" href={carouselIdAnchor} role="button" data-slide="next">
                <FontAwesomeIcon icon="chevron-right" size="3x"/>
            </a>
        </div>
    )
};

export default YearlyMeeting