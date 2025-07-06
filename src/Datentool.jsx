// src/Datentool.js

import { createContext, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import Spacer from './Spacer';
import Selector from './Selector';
import OptionsLine from './optionsLine';
import Fetcher from './Fetcher';
import { config } from './config';
import OptionsHeat from './optionsHeat';

export const FetchingContext = createContext();

function Datentool() {
  const [startDate, setStartDate] = useState(config.startDate);
  const [endDate, setEndDate] = useState(config.endDate);
  const [regions, setRegions] = useState(config.regions);
  const [datatypes, setDatatypes] = useState(config.dataTypes);
  const [graphType, setGraphType] = useState("line");

  const handleSwitch = (e) => {
    if (e.target.value == "heatmap"){
      setRegions([regions[0]])
      setDatatypes([datatypes[0]])
    }
    setGraphType(e.target.value)
    console.log(regions)
    console.log(datatypes)
  };

  const handleDateSelection = (e) => {
    let val = e.target.value; 
    if (e.target.name == "startDate"){
      setStartDate(val)
    } else if (e.target.name == "endDate") {
      setEndDate(val)
    }
    console.log('%s selection triggered: %s', e.target.name, val);
  };

  function GetOptions(){
    switch(graphType){
      case "line":
        return <OptionsLine regions={["Deutschland", "50Hertz", "Amprion", "TenneT TSO", "TransnetBW"]}/>
      default:
        return <OptionsHeat regions={["Deutschland", "50Hertz", "Amprion", "TenneT TSO", "TransnetBW"]}/>
    }

  }

  // Beachte: IDs müssen eindeutig sein. Ich habe die zweite ID geändert.
  return (
    <>
      <FetchingContext.Provider value={{graphType, setGraphType, startDate, setStartDate, endDate, setEndDate, regions, setRegions, datatypes, setDatatypes}}>
      <h1>Datentool</h1>
      <article>
        <h3>Einstellungen</h3>
        <div className="grid">
          <div>
            <h4>Graphart</h4>
            <label>
              
              <select name="select" aria-label="Select" required onChange={handleSwitch} defaultValue={graphType}>
                <option value={"line"}>Linegraph</option>
                <option value={"heatmap"}>Heatmap</option>
                <option value={"line-compare"}>Vergleiche 2 Leistungsarten</option>
              </select>
            </label>
          </div>
          <div>
            <h4>Zeitraum</h4>
            <div className="grid">
              <label htmlFor="start-date">
                Anfangsdatum
                <input id="start-date" type="date" name="startDate" onChange={handleDateSelection} defaultValue={config.startDate} />
              </label>
              <label htmlFor="end-date">
                Enddatum
                <input id="end-date" type="date" name="endDate" onChange={handleDateSelection} defaultValue={config.endDate} />
              </label>
            </div>
          </div>
        </div>
         <Spacer size="1rem"/> 
          <h4>Daten</h4>
          {GetOptions()}
        </article>
        <article >
          <h3>Ausgabe</h3>
            <Fetcher />
        </article>
      </FetchingContext.Provider>
    </>
  );
}

export default Datentool;