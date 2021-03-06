import React from 'react';
import CollapsableContentEntry from './CollapsableContentEntry';
import ScholorShipsInfo from "../contentcomponents/ScholorshipsInfo";
import GeneralInfo from "../contentcomponents/GeneralInfo";
import RelativeNumberInfo from "../contentcomponents/RelativeNumberInfo";

const Home = () => {
    return (
        <div>
            <CollapsableContentEntry id="aboutId" bgColorCssClass="bg-light" isRoundedTop={false}
                                     isRoundedBottom={false}
                                     textColorCssClass="text-dark"
                                     header="Information Holmgrenska" secondHeader="Holmgrenska släktföreningen"
                                     areaLabel="generalInfo" isInitiallyCollapsed={false}
                                     isDisplayArrowDown={true}>
                <GeneralInfo/>
            </CollapsableContentEntry>
            <CollapsableContentEntry id="scholorshipsId" bgColorCssClass="background-color-light-blue"
                                     isRoundedTop={false}
                                     isRoundedBottom={false}
                                     textColorCssClass="text-dark" header="Stipendier"
                                     secondHeader="Information till stipendiater"
                                     areaLabel="Scholorships"
                                     isInitiallyCollapsed={true}
                                     isDisplayArrowDown={true}>
                <ScholorShipsInfo/>
            </CollapsableContentEntry>
            <CollapsableContentEntry id="relativeInfoId" bgColorCssClass="bg-light" isRoundedTop={false}
                                     isRoundedBottom={true}
                                     textColorCssClass="text-dark" header="Släktnummer" secondHeader="Vad har jag för släktnummer"
                                     areaLabel="relativeInfo"
                                     isInitiallyCollapsed={true}
                                     isDisplayArrowDown={true}>
                <RelativeNumberInfo/>
            </CollapsableContentEntry>
        </div>
    )
};

export default Home