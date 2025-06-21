// src/FAQ.js
import React from 'react';

function FAQ() {
  return (
    <main className="container">
      <h1>Häufig gestellte Fragen (FAQ)</h1>

      <article>
        {/* Sprungmarke für die erste Frage */}
        <div id="frage1">
          <h3>Frage 1: Woher stammen die Daten?</h3>
          <p>
            Die Daten werden von der offiziellen Schnittstelle der Übertragungsnetzbetreiber bezogen und in Echtzeit aktualisiert.
          </p>
        </div>
        <hr />
        {/* Sprungmarke für die zweite Frage */}
        <div id="frage2">
          <h3>Frage 2: Wie aktuell sind die angezeigten Informationen?</h3>
          <p>
            Die Visualisierungen basieren auf den aktuellsten verfügbaren Datenpunkten, die in der Regel nur wenige Minuten alt sind.
          </p>
        </div>
        <hr />
        {/* Sprungmarke für die dritte Frage */}
        <div id="frage3">
          <h3>Frage 3: Kann ich die Rohdaten herunterladen?</h3>
          <p>
            Ja, im Datentool können Sie über die "Speichern"-Funktion des Graphen eine Bilddatei exportieren. Ein direkter CSV-Export der Rohdaten ist in Planung.
          </p>
        </div>
      </article>
    </main>
  );
}

export default FAQ;