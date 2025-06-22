// src/Kontakt.js
import React from 'react';

function Kontakt() {
  return (
    <main className="container">
      <h1>Kontakt & Impressum</h1>
      <article>
        <p>
          Hier finden Sie die Verantwortlichen für dieses Projekt.
        </p>
        
        <h2>Regelenergie Inc.</h2>
        <p>
          <strong>Vertreten durch:</strong><br />
          Max Mustermann (CEO)
        </p>
        
        <p>
          <strong>Anschrift:</strong><br />
          Energiestraße 123<br />
          10117 Berlin<br />
          Deutschland
        </p>
        
        <p>
          <strong>Kontaktmöglichkeiten:</strong><br />
          Telefon: <a href="tel:+493012345678">+49 (0)30 1234 5678</a><br />
          E-Mail: <a href="mailto:kontakt@regelenergie-inc.de">kontakt@regelenergie-inc.de</a>
        </p>
      </article>
    </main>
  );
}

export default Kontakt;