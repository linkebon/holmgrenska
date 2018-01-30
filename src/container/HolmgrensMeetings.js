import React, {Component} from 'react';
import CollapsableContentEntry from "../components/CollapsableContentEntry";
import YearlyMeeting from "../components/YearlyMeeting";
const uuidv1 = require('uuid/v1');

class HolmgrensMeetings extends Component {
    constructor(props) {
        super(props)
    }

    generateComponentId() {
        return uuidv1();
    }

    render() {
        const images = [
            {
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar0'
            },
            {
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar1'
            },
            {
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar2'
            }
        ];
        return (
            <CollapsableContentEntry id={this.generateComponentId()} bgColorCssclassName="bg-light" isRoundedTop={false}
                                     isRoundedBottom={false}
                                     textColorCssclassName="text-dark"
                                     header="2017" secondHeader=""
                                     areaLabel="2017Info" isInitiallyCollapsed={false}
                                     isDisplayArrowDown={true}>
                <YearlyMeeting carouselId={this.generateComponentId()} images={images}/>
            </CollapsableContentEntry>
        )
    }
}

export default HolmgrensMeetings
