// Dateipfad: src/FAQ.js

import React from 'react';
import FAQItem from './FAQItem'; // Die neue Komponente importieren.

// Die Fragen und Antworten als Daten-Array.
const faqData = [
  {
    question: "Frage 1: Wie funktioniert das?",
    answer: "Dies ist eine Beispielantwort auf eine häufig gestellte Frage. Jede Antwort wird nur angezeigt, wenn auf die dazugehörige Frage geklickt wird."
  },
  {
    question: "Frage 2: Woher kommen die Daten?",
    answer: "Die Daten werden von XYZ bezogen und in Echtzeit verarbeitet, um die genauesten Analysen zu ermöglichen."
  },
  {
    question: "Frage 3: Kann ich die Daten exportieren?",
    answer: "Ja, im Datentool finden Sie oben rechts ein Toolbox-Icon, mit dem Sie die aktuelle Ansicht als Bild speichern können."
  }
];

function FAQ() {
  return (
    <article>
      <h1>Häufig gestellte Fragen (FAQ)</h1>
      
      <div className="faq-list" style={{ marginTop: '2rem' }}>
        {/* Erstellt für jeden Eintrag im Array eine FAQItem-Komponente. */}
        {faqData.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </article>
  );
}

export default FAQ;