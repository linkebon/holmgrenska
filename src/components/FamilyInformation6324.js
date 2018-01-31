import React from 'react';
import CollapsableContentEntry from "./CollapsableContentEntry";
import FamilyInformation from "./FamilyInformation";

const uuidv1 = require('uuid/v1');

const FamilyInformation6324 = () => {
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
            text: 'John Doe, Jane Doe 2'
        }, {
            url: 'http://blog.shopgala.com/wp-content/uploads/2017/07/Free-button1.jpg',
            alt: 'testar0',
            header: 'Bild1',
            text: 'John Doe, Jane Doe 2'
        }
    ];
    const generalFamilyTextMarkup = <div>
        Thomas och Elisabet är föräldrar och har barnen i följd med fruar
        <ul>
            <li>Fredrik 63241 & Viktoria</li>
            <li>Mikael 63242 & Eva</li>
            <li>Björn 63243 & Carline</li>
            <li>Karin 63244 & Staffan</li>
            <li>Staffan (63245)& Matilda</li>
        </ul>

        med barnbarn:
        <ul>
            <li>Viggo</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </div>;
    return (
        <div>
            <CollapsableContentEntry id={uuidv1()} bgColorCssClass="bg-light" isCollapseDisabled={true}
                                     isRoundedTop={false}
                                     isRoundedBottom={true}
                                     textColorCssclassName="text-dark"
                                     header="" secondHeader=""
                                     areaLabel="6324FamilyInfo" isInitiallyCollapsed={false}
                                     isDisplayArrowDown={false}>
                <FamilyInformation familyNumber="6324" familyName="Holmgren"
                                   generalFamilyTextMarkup={generalFamilyTextMarkup} images={images}/>
            </CollapsableContentEntry>
        </div>
    )
};


export default FamilyInformation6324
