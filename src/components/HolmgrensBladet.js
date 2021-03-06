import React from 'react';
import CollapsableContentEntry from "./CollapsableContentEntry";

const HolmgrensBladet = () => (
    <div>
        <CollapsableContentEntry id="holmgrensbladetId" bgColorCssClass="bg-light" isRoundedTop={false}
                                 isRoundedBottom={false}
                                 textColorCssClass="text-dark" header="" secondHeader="Holmgrensbladet"
                                 areaLabel="holmgrensbladet" isInitiallyCollapsed={false} isDisplayArrowDown={false}
                                 isCollapseDisabled={true}>
            <p>
                Holmgrensbladet är föreningens tidning som kommer ut en gång om året. I den finner du artiklar om
                släktingar och även utdrag ur skrifter om släkten. Vi har också flera medlemmar som släktforskar och om
                deras forskning kan du också läsa. Kanske finner du något intressant om just din släktgren! Vi vill
                också berätta om nya barn i släkten och om de släktingar som avlidit under året. Den informationen får
                vi från våra medlemmar, men tyvärr kommer inte allt med utan vi är tacksamma om alla som har något att
                förmedla gör det.
            </p>
            <p>Ansvarig för Holmgrensbladet är Hampus Holmgren. e-postadress: <a
                href="mailto:bladet@holmgrenska.se">bladet@holmgrenska.se</a></p>
            <br/><img src="img/holmgrensbladet.gif"/>
            <br/>
            <p>Holmgrensbladets logotype är utförd av Tom Hård af Segersted (5621)</p>
            <br/>
            <br/>
            <CollapsableContentEntry id="holmgrensBladetEarlierId" bgColorCssClass="background-color-light-blue"
                                     isRoundedTop={false} isRoundedBottom={false}
                                     textColorCssClass="text-dark"
                                     header="Utgåvor" secondHeader="Klicka för att ladda hem eller öppna!"
                                     areaLabel="holmgrensBladetEarlier" isInitiallyCollapsed={false}
                                     isDisplayArrowDown={true}>
                <div>
                    <br />
                    <ul>
                        <li><a style={{color: "#000000"}} href="holmgrensblad/2017.pdf" target="_blank"><h4>2017 års holmgrensblad</h4></a></li>
                    </ul>
                </div>
            </CollapsableContentEntry>
        </CollapsableContentEntry>
    </div>
);


export default HolmgrensBladet