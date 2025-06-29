import { useState } from 'react'
import ReactECharts from 'echarts-for-react';
import Spacer from './Spacer';
import Query from './fetcher';
import Fetcher from './fetcher';
import Selector from './Selector';
import OptionsLine from './optionsLine';

function App() {


  const [graphtype, setGraphType] = useState(false)

  const handleSwitch = (e) => {
    let isChecked = e.target.checked;
    setGraphType(isChecked)
    console.log('I was triggered during render %s', isChecked)
  }

  const handleDateSelection = (e) => {
    let val = e.target.value;
    console.log('I was triggered during render %s', val)
  }

  return (
    <>
      <header className='container'>
        <nav>
          <ul>
            <li><strong>Regelenergie Inc.</strong></li>
          </ul>
          <ul>
            <li><a href="#test">Unsere Erkenntnisse</a></li>
            <li><a href="#">Datentool</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>
      </header>
      <main className='container'>
        <h1>Datentool</h1>
        <article>
          <h3>Einstellungen</h3>
          <div className="grid ">
            <div>
              <h4>Graphart</h4>
              <label>
                <input name="graphtype" type="checkbox" role="switch" onClick={handleSwitch}/>
                {graphtype ? <>Heatmap</> : <>Linegraph</>}
              </label>
            </div>
            <div>
              <h4>Zeitraum</h4>
              <div className="grid">
                <label htmlFor="date">
                  Anfangsdatum
                  <input id="date" type="date" name="date" onChange={handleDateSelection} value="2022-01-01"/>
                </label>
                <label htmlFor="date">
                  Enddatum
                  <input id="date" type="date" name="date" onChange={handleDateSelection} value="2025-01-01"/>
                </label>
              </div>
            </div>
          </div>
          <Spacer size="1rem"/> 
          <h4>Daten</h4>
          <OptionsLine regions={["Deutschland", "50Hertz", "Amprion", "TenneT TSO", "TransnetBW"]}/>
        </article>
        <article height='200%'>
          <h3>Ausgabe</h3>
          <Fetcher height="8000"></Fetcher>
        </article>
      </main>
      <footer className='container'>
        <p>footer here</p>
      </footer>
    </>
  )
}

export default App
