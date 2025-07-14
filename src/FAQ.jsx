// Dateipfad: src/FAQ.js

import React from 'react';
import FAQItem from './FAQItem'; // Die neue Komponente importieren.

// Die Fragen und Antworten als Daten-Array.
const faqData = [
{
    question: "Was ist Regelenergie?",
    answer: "Regelenergie gleicht Schwankungen im Stromnetz aus, um die Netzfrequenz stabil bei 50 Hz zu halten. Sie wird benötigt, wenn Stromerzeugung und -verbrauch voneinander abweichen. Ohne Regelenergie drohen Stromausfälle oder Netz-Instabilitäten."
  },
  {
    question: "Welche Arten von Regelenergie gibt es?",
    answer: "Man unterscheidet Primärregelenergie (FCR), Sekundärregelenergie (aFRR) und Minutenreserve (mFRR). FCR wirkt sofort, aFRR nach wenigen Minuten und mFRR nach 5–15 Minuten. Jede Art hat spezifische Aufgaben im Netzausgleich."
  },
  {
    question: "Was macht dieses Tool?",
    answer: "Es visualisiert die historischen Regelenergie-Daten, jedoch nur die aFCR und mFCR Daten. Es zeigt, in welchem Umfang Regelenergie eingesetzt wurde. Nutzer können Zeiträume filtern und Trends analysieren."
  },
  {
    question: "Woher stammen die Daten?",
    answer: "Die Daten kommen von Übertragungsnetzbetreibern wie regelleistung.net und netztransperenz.de. Sie veröffentlichen Regelenergie-Daten in standardisierten Formaten. Das Tool sammelt und verwendet die bereinigten Daten, die von den Betreibern online zur Verfügung gestellt wurden."
  },
  {
    question: "Wo sind die FCR-Daten?",
    answer: "Die Daten zur FCR sind europaweit verknüpft. Die Daten Sie sind nicht auf Deutschland beschränkt, was den Vergleich von Daten schwieriger macht. Zudem werden Störungen im europäischen Verbundnetz nicht mehr einem einzelnen Land zugeordnet. Der FCR-Bedarf wird gemeinsam von mehreren Übertragungsnetzbetreibern in einem synchronisierten Netz ENTSO-E (European Network of Transmission System Operators for Electricity) festgestellt."
  },
  {
    question: "Für wen ist das Tool gedacht?",
    answer: "Es richtet sich an Energieexperten, Forscher und interessierte Laien. Netzbetreiber können es zur Analyse nutzen, Bürger zur Information. Auch Journalisten und Studierende profitieren von den Einblicken."
  },
  {
    question: "Wer steckt hinter dem Projekt?",
    answer: "Entwickelt wurde es von Studierenden aus dem Studiengang Regenerative Energien an der HTW Berlin, im Rahmen einer Vorlesung."
  },
  {
    question: "Warum gibt es Daten nur ab 2013?",
    answer: "Vor 2013 wurden Regelenergie-Daten nicht flächendeckend oder maschinenlesbar erfasst. Erst mit der Energiewende stieg die Bedeutung der Transparenz. Ältere Daten wären lückenhaft oder schwer vergleichbar."
  },
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