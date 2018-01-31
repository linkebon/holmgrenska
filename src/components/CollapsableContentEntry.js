import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

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
        const {id, children, header, secondHeader, bgColorCssClass, textColorCssClass, isRoundedTop, isRoundedBottom, isInitiallyCollapsed, isCollapseDisabled = false, isDisplayArrowDown, areaLabel} = this.props;
        const collapsedClass = isInitiallyCollapsed ? '' : 'show';
        const roundedTop = isRoundedTop ? 'rounded-top' : '';
        const roundedBottom = isRoundedBottom ? 'rounded-bottom' : '';

        return <div className="pos-f-t">
            <div className={'collapse ' + collapsedClass} id={id}>
                <div className={bgColorCssClass + ' p-4 ' + roundedTop}>
                    <h6 className={'text-capitalize ' + textColorCssClass}>{secondHeader}</h6>
                    <div className="text-muted">{children}</div>
                </div>
            </div>
            <div className={'navbar ' + bgColorCssClass + ' ' + roundedBottom}>
                <button disabled={isCollapseDisabled} className="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-target={'#' + id} aria-controls={id}
                        aria-expanded="false" aria-label={areaLabel} onClick={(e) => {
                    e.preventDefault();
                    if (isDisplayArrowDown) {
                        this.flipArrow();
                    }
                }}>
                    <h4 className={textColorCssClass}>
                        <FontAwesomeIcon icon="chevron-down"
                                         className={isDisplayArrowDown ? '' : 'hidden'}
                                         size="xs"
                                         transform={{rotate: this.state.arrowDirection}}/>
                        <span style={{marginRight: '10px'}}/>{header}
                    </h4>
                </button>
            </div>
        </div>
    }
}

CollapsableContentEntry.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    header: PropTypes.string,
    secondHeader: PropTypes.string,
    bgColorCssClass: PropTypes.string,
    textColorCssClass: PropTypes.string,
    isRoundedTop: PropTypes.bool,
    isRoundedBottom: PropTypes.bool,
    isInitiallyCollapsed: PropTypes.bool,
    isCollapseDisabled: PropTypes.bool,
    isDisplayArrowDown: PropTypes.bool,
    areaLabel: PropTypes.string
};

export default CollapsableContentEntry