// Dateipfad: src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Datentool from './Datentool';
import FAQ from './FAQ';
import Kontakt from './Kontakte';
import Erkenntnisse from './Erkenntnisse';


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
              <li><Link to="/">Unsere Erkenntnisse</Link></li>
              <li><Link to="/datentool">Datentool</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/kontakte">Kontakt</Link></li>
            </ul>
          </nav>
        </header>

        <main className='container'>
          {/* 3. Hier entscheidet der Router, welche Komponente geladen wird */}
          <Routes>
            <Route path="/datentool" element={<Datentool />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/" element={<Erkenntnisse />} />
            <Route path="/kontakte" element={<Kontakt />} />
          </Routes>
        </main>

        <footer className='container'>
          <p>Stand 15.07.2025</p>
        </footer>
    </Router>
  );
}

export default App;
