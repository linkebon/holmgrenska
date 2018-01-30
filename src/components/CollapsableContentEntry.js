import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class CollapsableContentEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowDirection: props.isInitiallyCollapsed ? 0 : 180
        };
    }

    flipArrow() {
        this.setState(this.state.arrowDirection === 0 ? {arrowDirection: 180} : {arrowDirection: 0});
    }

    render() {
        const {id, header, secondHeader, children, bgColorCssClass, textColorCssClass, isRoundedTop, isRoundedBottom, isInitiallyCollapsed, isCollapseDisabled = false, isDisplayArrowDown, areaLabel} = this.props;
        const collapsedClass = isInitiallyCollapsed ? '' : 'show';
        const roundedTop = isRoundedTop ? 'rounded-top' : '';
        const roundedBottom = isRoundedBottom ? 'rounded-bottom' : '';

        return (
            <div className="pos-f-t">
                <div className={'collapse ' + collapsedClass} id={id}>
                    <div className={bgColorCssClass + ' p-4 ' + roundedTop}>
                        <h6 className={'text-capitalize ' + textColorCssClass}>{secondHeader}</h6>
                        <div className="text-muted">{children}</div>
                    </div>
                </div>
                <div className={'navbar ' + bgColorCssClass + ' ' + roundedBottom}>
                    <button disabled={isCollapseDisabled} className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target={'#' + id} aria-controls={id}
                            aria-expanded="false" aria-label={areaLabel} onClick={(e) => {
                        e.preventDefault();
                        if (isDisplayArrowDown) {
                            this.flipArrow();
                        }
                    }}>
                        <h4 className={textColorCssClass}><FontAwesomeIcon icon="chevron-down" className={isDisplayArrowDown ? '': 'hidden'} size="xs" transform={{rotate: this.state.arrowDirection}}/><span style={{marginRight: '10px'}} />{header}</h4>
                    </button>
                </div>
            </div>
        )
    }
}

export default CollapsableContentEntry