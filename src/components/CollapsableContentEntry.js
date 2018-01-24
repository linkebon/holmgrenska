import React from 'react';
import $ from 'jquery';
import RotatableArrow from "./RotatableArrow";

const CollapsableContentEntry = ({id, header, secondHeader, children, bgColorCssClass, textColorCssClass, isRoundedTop, isRoundedBottom, isInitiallyCollapsed, isDisplayArrowDown, areaLabel,}) => {
    const collapsedClass = isInitiallyCollapsed ? '' : 'show';
    const roundedTop = isRoundedTop ? 'rounded-top' : '';
    const roundedBottom = isRoundedBottom ? 'rounded-bottom' : '';
    const arrowIconId = id + 'ArrowIcon';
    const displayArrow = () => {
        return isDisplayArrowDown ? <RotatableArrow id={arrowIconId}/> : '';
    };
    return (
        <div className="pos-f-t">
            <div className={'collapse ' + collapsedClass} id={id}>
                <div className={bgColorCssClass + ' p-4 ' + roundedTop}>
                    <h6 className={'text-capitalize ' + textColorCssClass}>{secondHeader}</h6>
                    <div className="text-muted">{children}</div>
                </div>
            </div>
            <div className={'navbar ' + bgColorCssClass + ' ' + roundedBottom}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target={'#' + id} aria-controls={id}
                        aria-expanded="false" aria-label={areaLabel} onClick={(e) => {
                    e.preventDefault();
                    if (isDisplayArrowDown) {
                        $('#' + arrowIconId).toggleClass("down")
                    }
                }}>
                    <h4 className={textColorCssClass}>{displayArrow()}{header}</h4>
                </button>
            </div>
        </div>
    )
};

export default CollapsableContentEntry