// Dateipfad: src/FAQItem.js

import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  // Eigener Zustand für jede Frage; standardmäßig geschlossen.
  const [isOpen, setIsOpen] = useState(false);

  // Funktion, um den Zustand umzuschalten.
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item" style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
      
      {/* Der klickbare Bereich für die Frage. */}
      <div 
        onClick={toggleOpen} 
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}
      >
        <span>{question}</span>
        {/* Zeigt '+' oder '−' je nach Zustand. */}
        <span>{isOpen ? '−' : '+'}</span>
      </div>

      {/* Die Antwort wird nur angezeigt, wenn isOpen true ist. */}
      {isOpen && (
        <div className="faq-answer" style={{ marginTop: '1rem', color: '#555' }}>
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;