import React from 'react';
import Selector from './Selector';

function OptionsLine(props) {
    return <>
        <div className="grid">
            <label>
                <Selector region="Region" opt={["Deutschland", "50Hertz", "Amprion", "TenneT TSO", "TransnetBW"]}/>
            </label>
            <label>
                <Selector region="Leistungsart" opt={["Primärregelleistung","Sekundärregelleistung","Tertiärregelleistung","Windleistung","Solarleistung"]}/>
            </label>
        </div>
    </>
};

export default OptionsLine;