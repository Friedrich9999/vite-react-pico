// src/Datentool.js

import { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import Spacer from './Spacer';

function Datentool() {
  const option = {
    title: { text: 'Stacked Line' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'] },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    toolbox: { feature: { saveAsImage: {} } },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
        { name: 'Email', type: 'line', stack: 'Total', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: 'Union Ads', type: 'line', stack: 'Total', data: [220, 182, 191, 234, 290, 330, 310] },
        { name: 'Video Ads', type: 'line', stack: 'Total', data: [150, 232, 201, 154, 190, 330, 410] },
        { name: 'Direct', type: 'line', stack: 'Total', data: [320, 332, 301, 334, 390, 330, 320] },
        { name: 'Search Engine', type: 'line', stack: 'Total', data: [820, 932, 901, 934, 1290, 1330, 1320] }
    ]
  };

  const [graphtype, setGraphType] = useState(false);

  const handleSwitch = (e) => {
    let isChecked = e.target.checked;
    setGraphType(isChecked);
    console.log('Graph type switch triggered: %s', isChecked);
  };

  const handleDateSelection = (e) => {
    let val = e.target.value;
    console.log('Date selection triggered: %s', val);
  };

  // Beachte: IDs müssen eindeutig sein. Ich habe die zweite ID geändert.
  return (
    <>
      <h1>Datentool</h1>
      <article>
        <h3>Einstellungen</h3>
        <div className="grid">
          <div>
            <h4>Graphart</h4>
            <label>
              <input name="graphtype" type="checkbox" role="switch" onChange={handleSwitch} />
              {graphtype ? <>Heatmap</> : <>Linegraph</>}
            </label>
          </div>
          <div>
            <h4>Zeitraum</h4>
            <div className="grid">
              <label htmlFor="start-date">
                Anfangsdatum
                <input id="start-date" type="date" name="date" onChange={handleDateSelection} defaultValue="2022-01-01" />
              </label>
              <label htmlFor="end-date">
                Enddatum
                <input id="end-date" type="date" name="date" onChange={handleDateSelection} defaultValue="2025-01-01" />
              </label>
            </div>
          </div>
        </div>
        <Spacer size="1rem" />
        <h4>Daten</h4>
        <div className="grid">
          <label>
            Region
            <select name="select" aria-label="Select" required>
              <option>Deutschland</option>
              <option>50Hertz</option>
              <option>Amprion</option>
              <option>TenneT TSO</option>
              <option>TransnetBW</option>
            </select>
          </label>
          <label>
            Datentyp
            <select name="select" aria-label="Select" required multiple size="6">
              <option>Primärregelleistung</option>
              <option>Sekundärregelleistung</option>
              <option>Tertiärregelleistung</option>
              <option>Solarleistung</option>
              <option>Windleistung</option>
            </select>
          </label>
        </div>
      </article>
      <article>
        <h3>Ausgabe</h3>
        <ReactECharts option={option} style={{ height: '800px' }}/>
      </article>
    </>
  );
}

export default Datentool;