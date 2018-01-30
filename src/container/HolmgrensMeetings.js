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
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar0',
                header: 'Bild1',
                text: 'John Doe, Jane Doe 1'
            }, {
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar0',
                header: 'Bild1',
                text: 'John Doe, Jane Doe 2'
            }, {
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar0',
                header: 'Bild1',
                text: 'John Doe, Jane Doe 3'
            }, {
                url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
                alt: 'testar0',
                header: 'Bild1',
                text: 'John Doe, Jane Doe 4'
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
                <CollapsableContentEntry id={this.generateComponentId()} bgColorCssclassName="bg-light"
                                         isRoundedTop={false}
                                         isRoundedBottom={false}
                                         textColorCssclassName="text-dark"
                                         header="2016" secondHeader="Bilder från 2016 års släktträff"
                                         areaLabel="2016Info" isInitiallyCollapsed={true}
                                         isDisplayArrowDown={true}>
                    <YearlyMeeting carouselId={this.generateComponentId()} images={images}/>
                </CollapsableContentEntry>
                <CollapsableContentEntry id={this.generateComponentId()} bgColorCssclassName="bg-light"
                                         isRoundedTop={false}
                                         isRoundedBottom={false}
                                         textColorCssclassName="text-dark"
                                         header="2015" secondHeader="Bilder från 2015 års släktträff"
                                         areaLabel="2015Info" isInitiallyCollapsed={true}
                                         isDisplayArrowDown={true}>
                    <YearlyMeeting carouselId={this.generateComponentId()} images={images}/>
                </CollapsableContentEntry>
            </div>
        )
    }
}

export default HolmgrensMeetings
