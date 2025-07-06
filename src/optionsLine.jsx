import React, { useContext } from 'react';
import Selector from './Selector';

import {FetchingContext} from './Datentool'

function OptionsLine(props) {

    const {regions, setRegions, datatypes, setDatatypes} = useContext(FetchingContext);

    const handleChange = (e, prev) => {
        let option = e.target.name
        if (prev.includes(option)) {
            return prev.filter((item) => item !== option)
        } else {
            // If the option is not checked, add it to the array
            return [...prev, option]
        }
    };

    const onSetRegion = (e) => {
        let data = handleChange(e, regions)
        console.log(data)
        setRegions(data)
    }

    const onSetData = (e) => {
        let data = handleChange(e, datatypes)
        console.log(data)
        setDatatypes(data)
    }

    return <>
        <div className="grid">
            <label>
                <Selector type="Region" val={regions} menuType={"checkbox"} handleChange={onSetRegion} opt={["Deutschland", "50Hertz", "Amprion", "TenneT TSO", "TransnetBW"]}/>
            </label>
            <label>
                <Selector type="Leistungsart" val={datatypes} menuType={"checkbox"} handleChange={onSetData} opt={["Primärregelleistung","Sekundärregelleistung","Tertiärregelleistung","Windleistung","Solarleistung"]}/>
            </label>
        </div>
    </>
};

export default OptionsLine;