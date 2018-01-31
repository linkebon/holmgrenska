import React, {Component} from 'react';
import CollapsableContentEntry from "../components/CollapsableContentEntry";
import YearlyMeeting from "../components/YearlyMeetingImages";

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
                url: 'img/6324/63245_matildastaffanviggo.jpg',
                alt: 'Staffan, Matilda och Viggo',
                text: 'Staffan Holmgren (63245) , Matilda Holmgren och Viggo Holmgren, Thailand, Koh Lanta 2017, december'
            }
        ];
        return (
            <div>
                <CollapsableContentEntry id={this.generateComponentId()} bgColorCssclassName="bg-light"
                                         isRoundedTop={false}
                                         isRoundedBottom={false}
                                         textColorCssclassName="text-dark"
                                         header="2017" secondHeader="Bilder från 2017 års släktträff"
                                         areaLabel="2017Info" isInitiallyCollapsed={false}
                                         isDisplayArrowDown={true}>
                    <YearlyMeeting carouselId={this.generateComponentId()} images={images}/>
                </CollapsableContentEntry>
            </div>
        )
    }
}

export default HolmgrensMeetings
