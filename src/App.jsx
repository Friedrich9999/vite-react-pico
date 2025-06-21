// Dateipfad: src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Datentool from './Datentool';
import FAQ from './FAQ';

function App() {
  return (
    // 1. Der Router umschließt die gesamte Anwendung
    <Router>
        <header className='container'>
          <nav>
            <ul>
              <li><strong>Regelenergie Inc.</strong></li>
            </ul>
            <ul>
              {/* 2. Hier sind die Links, die die URL ändern */}
              <li><Link to="/">Datentool</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </header>

        <main className='container'>
          {/* 3. Hier entscheidet der Router, welche Komponente geladen wird */}
          <Routes>
            <Route path="/" element={<Datentool />} />
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/kontakt" element={<Kontakt />} /> */}
          </Routes>
        </main>

        <footer className='container'>
          <p>footer here</p>
        </footer>
    </Router>
  );
}

export default App;