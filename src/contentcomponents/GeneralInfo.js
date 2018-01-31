import React from 'react';

const GeneralInfo = () => (
    <div>
        <p>
            Släktföreningen startade i Stockholm 1924.
            Medlemmarna är alla ättlingar till Hovpredikanten i Västra Ny, Östergötlands län
            Anders Holmgren (1784 - 1874) och hans hustru Gustafva Nordwall (1797 - 1860).
        </p>

        <div className="text-center">
            <img className="rounded" src="img/anders_holmgren_small.gif"/>
            <p className="text-muted small" style={{marginTop: '5px'}}>Anders Holmgren (1784 - 1874)</p>
        </div>
        <p>
            Föreningen har ca 400 medlemmar. Vi har årsmöte varje år oftast i Stockholm.
            Som medlem får du Holmgrensbladet som innehåller information om släktingar,
            anekdoter och inte minst aktuella bidrag om t ex våra stipendiater.
            <br/>
            <br/>
            <b>Bli medlem</b>
            <br/>
            Årsavgiften till föreningen är för enskild medlem 15 kr och familjeavgiften är 30 kr. Ständig medlem kan du
            också bli för 300 kr.
            Medlemsavgiften betalas till
        </p>
        <ul>
            <li>
                Plusgiro 3365 - 4
            </li>
        </ul>
        <p>Ange namn och om möjligt släktnummer. Hur släktnumren beräknas ser du nedan under rubriken Släktnummer.</p>
    </div>
);
export default GeneralInfo