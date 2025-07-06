import React, { useContext } from 'react';
import Selector from './Selector';

import {FetchingContext} from './Datentool'

function OptionsHeat(props) {

    const {regions, setRegions, datatypes, setDatatypes} = useContext(FetchingContext);

    const onSetRegion = (e) => {
        let val = [e.target.name]
        console.log(val)
        setRegions(val)
    }

    const onSetData = (e) => {
        let val = [e.target.name]
        console.log(val)
        setDatatypes(val)
    }

    return <>
        <div className="grid">
            <label>
                <Selector type="Region" val={regions} menuType={"radio"} handleChange={onSetRegion} opt={["Deutschland", "50Hertz", "Amprion", "TenneT TSO", "TransnetBW"]}/>
            </label>
            <label>
                <Selector type="Leistungsart" val={datatypes} menuType={"radio"} handleChange={onSetData} opt={["Primärregelleistung","Sekundärregelleistung","Tertiärregelleistung","Windleistung","Solarleistung"]}/>
            </label>
        </div>
    </>
};

export default OptionsHeat;