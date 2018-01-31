import React from 'react';
import CollapsableContentEntry from "./CollapsableContentEntry";
import FamilyInformation from "./FamilyInformation";

const uuidv1 = require('uuid/v1');

const FamilyInformation6324 = () => {
    const images = [
        {
            url: 'img/6324/63245_matildastaffanviggo.jpg',
            alt: 'Staffan, Matilda och Viggo',
            header: '',
            text: 'Staffan Holmgren (63245) , Matilda Holmgren och Viggo Holmgren, Thailand, Koh Lanta 2017, december'
        }, {
            url: 'img/6324/6324_thomas_elisabeth.jpg',
            alt: 'Thomas Elisabeth',
            header: '',
            text: 'Thomas Holmgren (6324), Elisabet Holmgren'
        }
    ];
    const generalFamilyTextMarkup =
        <div>
            <p className="font-weight-bold">Thomas och Elisabet Holmgren är föräldrar och har barnen i nedan följd</p>
            <ul className="tree">
                <li>Thomas Holmgren 6324 & Elisabet Holmgren
                    <ul>
                        <li>Fredrik Holmgren 63241 & Viktoria Holmgren
                            <ul>
                                <li>Lukas Holmgren 632411</li>
                                <li>Emmie Holmgren 632412</li>
                                <li>Tilde Holmgren 632413</li>
                            </ul>
                        </li>
                        <li>Mikael Holmgren 63242 & Eva Holmgren
                            <ul>
                                <li>Simon Holmgren 632421</li>
                                <li>Alva Holmgren 632422</li>
                                <li>Arvid Holmgren 63243</li>
                            </ul>
                        </li>
                        <li>Björn Holmgren 63243 & Carline Holmgren
                            <ul>
                                <li>Axel Holmgren 632431</li>
                                <li>Vincent Holmgren 632432</li>
                                <li>Natan Holmgren 6324323</li>
                            </ul>
                        </li>
                        <li>Karin Holmgren 63244 & Staffan Holmgren
                            <ul>
                                <li>Gustav Holmgren 632441</li>
                                <li>Felix Holmgren 632442</li>
                            </ul>
                        </li>
                        <li>Staffan Holmgren 63245 & Matilda Holmgren
                            <ul>
                                <li>Viggo Holmgren 632451</li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>;
    return (
        <div>
            <CollapsableContentEntry id={uuidv1()} bgColorCssClass="" isCollapseDisabled={true}
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
