// Dateipfad: src/Erkenntnisse.js

import React from 'react';
import meinBild from './Bilder/Abbildung1.jpg';
import Abbildung2 from './Bilder/Abbildung2.jpg';
import Abbildung3 from './Bilder/Abbildung3.jpg';
import Abbildung4 from './Bilder/Abbildung4.jpg';
import Abbildung5 from './Bilder/Abbildung5.jpg';
import Abbildung6 from './Bilder/Abbildung6.jpg';
import Abbildung7 from './Bilder/Abbildung7.jpg';
import Abbildung7_1 from './Bilder/Abbildung7_1.jpg';


function Erkenntnisse() {

  
   const citationStyle = {
    verticalAlign: 'super',
    fontSize: '0.8rem',
    textDecoration: 'none',
    color: 'blue' // Optional: Farbe für den Link
  };
  return (
    <article>
      <h1 style={{ textAlign: 'center', fontFamily: 'serif', marginBottom: '2rem' }}>
        Die Entwicklung der Regelleleistung in Deutschland im
        <br />
        Zeichen der Energiewende
      </h1>

      <h2>Was ist Regelleistung?</h2>
      <p>
        In einem Stromnetz muss zu jedem Zeitpunkt ein exaktes Gleichgewicht zwischen Stromerzeugung und Stromverbrauch herrschen. Bereits geringfügige Abweichungen führen dazu, dass die Netzfrequenz vom europäischen Sollwert von 50 Hz abweicht. Größere Störungen können die Stabilität des gesamten Netzes gefährden. Um diesem Risiko vorzubeugen, halten die Übertragungsnetzbetreiber (ÜNB) Regelleistung vor, die bei Bedarf in klar definierten Stufen und Zeiträumen aktiviert wird.
      </p>
      <p>
        Diese sogenannten Regelleistungsarten sind:
      </p>
      <ul>
        <li>Primärregelleistung (PRL, engl. FCR – Frequency Containment Reserve)</li>
        <li>Sekundärregelleistung (SRL, engl. aFRR – automatic Frequency Restoration Reserve)</li>
        <li>Tertiärregelleistung (TRL, engl. mFRR – manual Frequency Restoration Reserve)</li>
      </ul>

      <figure style={{ margin: '2rem 0' }}>
        {<img src={meinBild} alt="Zeitliche Aktivierungsabfolge der Regelenergiearten" style={{ width: '100%' }} />}
        <figcaption>Zeitliche Aktivierungsabfolge der Regelenergiearten (Quelle: www.next-kraftwerke.de)</figcaption>
      </figure>

      <p>
        Alle drei Arten dienen der Frequenzstabilisierung, unterscheiden sich jedoch grundlegend in ihrer Reaktionsgeschwindigkeit, Aktivierungsart und den zugrundeliegenden Marktmechanismen. Mit dem wachsenden Anteil erneuerbarer Energien verändert sich die Rolle dieser Instrumente fundamental.
      </p>

      <h2>Die drei Stufen der Frequenzstabilisierung</h2>

      <h3>Primärregelleistung und Momentanreserve</h3>
      <p>
        Die Primärregelleistung ist die erste und schnellste Reaktion auf eine Frequenzabweichung. Sie wird europaweit koordiniert, vollautomatisch und dezentral bereitgestellt, wobei die ersten Erzeuger bereits nach 5 Sekunden aktiv werden und die vollständige Aktivierung innerhalb von 30 Sekunden erfolgen muss. Ihr alleiniges Ziel ist es, das weitere Absinken oder Ansteigen der Frequenz zu stoppen und sie zu stabilisieren.
      </p>
      <p>
        Eng damit verbunden ist die Momentanreserve. Diese wird nicht aktiv bereitgestellt, sondern ist eine physikalische Eigenschaft von Systemen. Traditionell wurde sie durch die Trägheit der rotierenden Generatoren („Schwungmasse“) in Kohle- und Kernkraftwerken geliefert. Diese Massen wirken im ersten Augenblick einer Störung dämpfend und stabilisieren die Frequenz. Da diese konventionellen Kraftwerke zunehmend vom Netz gehen, geht diese natürliche Trägheit verloren. Die Sicherstellung der Momentanreserve wird daher zu einer zentralen Herausforderung der Energiewende, die durch neue Technologien wie netzbildende Wechselrichter gelöst wird. Diese können das stabilisierende Verhalten der alten Großkraftwerke elektronisch nachbilden und so für eine sichere Stromversorgung in einem erneuerbaren System sorgen <a href="#ref1" style={citationStyle}>[1]</a>.
      </p>

      <h3>Sekundärregelleistung</h3>
      <p>
        Die Sekundärregelleistung löst die Primärregelleistung nach 30 Sekunden ab. Sie wird zentral vom jeweiligen Übertragungsnetzbetreiber automatisch abgerufen, um die Netzfrequenz aktiv auf den Sollwert von 50 Hz zurückzuführen. Ihre vollständige Aktivierung muss innerhalb von 5 Minuten erfolgen. Die Sekundärregelleistung ist das zentrale Instrument, um kurzfristige Prognoseabweichungen bei Erzeugung und Verbrauch auszugleichen. Sie wird benötigt, wenn in den Bilanzkreisen der Bedarf und das Angebot nicht vollständig übereinstimmen, also wenn die Prognosen nicht zu 100 Prozent mit der Realität übereinstimmen. In diesen Fällen wird automatisch positive oder negative Sekundärregelleistung zugeschaltet. Die dadurch entstehenden Kosten tragen die Bilanzkreisverantwortlichen bzw. die Stromanbieter. Dieser Vorgang ist Teil des normalen Netzbetriebs und kommt täglich mehrmals vor.
      </p>
      <p>
        Sekundärregelleistung wird im Rahmen eines europaweit harmonisierten Ausschreibungsprozesses am Regelenergiemarkt beschafft. Die vier deutschen Übertragungsnetzbetreiber (50Hertz, Amprion, TenneT, TransnetBW) schreiben den Bedarf täglich und für unterschiedliche Zeitscheiben aus. Unternehmen, die Sekundärregelleistung anbieten wollen, müssen präqualifiziert sein, das heißt, sie müssen nachweisen, dass sie die geforderte Leistung, Zuverlässigkeit und Aktivierungszeiten einhalten können. Die Aktivierung erfolgt durch eine automatische Abrufung (AGC – Automatic Generation Control) entsprechend dem Bedarf im Netz. Anbieter erhalten sowohl eine Vergütung für die Vorhaltung (Leistungspreis) als auch für die tatsächliche Aktivierung (Arbeitspreis).
      </p>
      <p>
        Traditionell wurde Sekundärregelleistung hauptsächlich von Großkraftwerken wie konventionellen Gas-, Kohle- und Pumpspeicherkraftwerken bereitgestellt. Inzwischen können jedoch auch dezentrale Anlagen, Batteriespeicher, Industrieprozesse oder Pooling-Anbieter teilnehmen, sofern sie die technischen Anforderungen erfüllen und eine Mindestleistung von 5 MW (seit 2017, davor 10 MW) bündeln können. Das Marktumfeld hat sich durch Digitalisierung und Aggregation zunehmend geöffnet, sodass mittlerweile auch kleinere Anlagen über virtuelle Kraftwerke und Aggregatoren Zugang zum Markt erhalten. Eine immer wichtigere Rolle spielt zudem die Lastverschiebung (Demand-Side-Management): Große industrielle Verbraucher können ihre Prozesse flexibel steuern, um auf Preissignale oder Netzengpässe zu reagieren. Indem sie ihren Verbrauch gezielt in Zeiten hoher Erneuerbaren-Einspeisung legen oder in Knappheitssituationen reduzieren, tragen sie aktiv zur Netzstabilisierung bei und verringern den Bedarf an Regelleistung <a href="#ref2" style={citationStyle}>[2]</a>.
      </p>

      <h3>Tertiärregelleistung</h3>
      <p>
        Die Tertiärregelleistung, auch Minutenreserve genannt, ist die langsamste Stufe und wird manuell aktiviert, um die SRL bei länger andauernden Störungen abzulösen. Wie die späteren Analysen zeigen werden, hat ihre Bedeutung drastisch abgenommen. Der Hauptgrund ist die gestiegene Liquidität am Intraday-Strommarkt, der es Marktteilnehmern oft günstiger erlaubt, ihre Bilanzen kurzfristig auszugleichen, anstatt hohe Ausgleichsenergiekosten zu riskieren <a href="#ref3" style={citationStyle}>[3]</a>.
      </p>
      
      <figure style={{ margin: '2rem 0' }}>
        {<img src={Abbildung2} alt="Jährlich abgerufene TRL in GWh" style={{ width: '70%', display: 'block', margin: 'auto' }} />}
        <figcaption style={{textAlign: 'center'}}>Jährlich abgerufene TRL in GWh</figcaption>
      </figure>
      <h3>Auswahl der betrachteten Regelleistung</h3>
      <p>
        Diese Untersuchung konzentriert sich bewusst auf die Sekundärregelleistung und die Tertiärregelleistung, während die Primärregelleistung aus methodischen Gründen nicht im Detail betrachtet wird.
      </p>
      <p>
        Die Primärregelleistung fungiert als kollektives, übernationales Sicherheitsnetz für das gesamte europäische Verbundnetz. Ihre Dimensionierung richtet sich nach dem größten denkbaren Störfall, wie dem gleichzeitigen Ausfall der beiden größten Kraftwerksblöcke im Netz. Daher werden europaweit konstant ±3 GW an Leistung vorgehalten. Die Verteilung dieser Verpflichtung auf die beteiligten Netzbetreiber wird jährlich neu berechnet und richtet sich anteilig nach der nationalen Stromerzeugung des Vorjahres <a href="#ref4" style={citationStyle}>[4]</a>. Die Aktivierung der FCR erfolgt automatisch und dezentral als Reaktion auf jede Frequenzabweichung mit dem primären Ziel, die Störung aufzufangen und die Frequenz zu stabilisieren. Anschließend übernimmt die zentral gesteuerte Sekundärregelleistung, um die Frequenz wieder präzise auf den Sollwert von 50 Hz zurückzuführen und die Primärregelleistung für den nächsten Störfall freizugeben.
      </p>
      <p>
        Da die Primärregelleistung Störungen unabhängig von deren Ursprungsort ausgleicht, kann ein Kraftwerksausfall in Spanien eine PRL-Aktivierung durch einen Anbieter in Deutschland auslösen. Dies macht es unmöglich, eine direkte und aussagekräftige Korrelation zwischen dem PRL-Abruf und spezifischen nationalen Ereignissen, wie etwa der volatilen Einspeisung von Wind- und Solarstrom in Deutschland, herzustellen.
      </p>
      <p>
        Im Gegensatz dazu werden Sekundär- und Tertiärregelleistung eingesetzt, um konkrete Bilanzkreisungleichgewichte in der eigenen Regelzone bzw. im europäischen Nahbereich auszugleichen. Ihre Abrufmengen sind daher dynamische Variablen, die direkt die Herausforderungen widerspiegeln, die durch Prognosefehler bei der erneuerbaren Erzeugung entstehen. Sie sind somit die geeigneten Indikatoren, um die Auswirkungen der Energiewende auf den Bedarf an Netzstabilisierungsmaßnahmen zu analysieren.
      </p>
      <h2>Analyse der Sekundärregelleistung in Deutschland</h2>
      <figure style={{ margin: '2rem 0' }}>
        {<img src={Abbildung3} alt="Jährlich abgerufene SRL-Arbeit in GWh" style={{ width: '100%' }} />}
        <figcaption>Jährlich abgerufene SRL-Arbeit in GWh (Quelle: regelleistung.net).</figcaption>
      </figure>
      <h2>Auswahl der betrachteten Regelleistung</h2>
      <p>
        Die jährlich abgerufene Sekundärregelenergie ist seit Jahren rückläufig. Ausschlaggebend dafür sind vier Mechanismen.
      </p>
      <p>
        Einer dieser Mechanismen ist das Imbalance Netting auf EU-Ebene. Erste regionale Umsetzung gab es bereits im Rahmen der Grid Control Cooperation (GCC) zwischen deutschen ÜNBs im Zeitraum Juni–Dezember 2008. EU-weit verpflichtend ist es seit dem 24. Juni 2021 <a href="#ref5" style={citationStyle}>[5]</a>. Die EU-weite Verpflichtung ging mit der Einführung von PICASSO einher. PICASSO ist eine Plattform zur Koordinierung und Handel von SRL. Ein wesentlicher Vorteil dieses Systems ist die Reduktion des gesamten aktivierten Regelbedarfs. Wenn beispielsweise die deutsche Regelzone einen Überschuss von 500 MW aufweist und die französische Zone zeitgleich ein Defizit von 500 MW, können sich diese entgegengesetzten Bedarfe gegenseitig aufheben. Anstatt in beiden Ländern Regelleistung zu aktivieren, wird der Austausch über die Plattform optimiert, was den Gesamtbedarf an physisch aktivierter Leistung senkt und die Effizienz des Gesamtsystems steigert <a href="#ref6" style={citationStyle}>[6]</a>.
      </p>
      <p>
        Großen Einfluss auf die Abnahme der jährlich abgerufenen Sekundärregelleistung haben auch die immer besser werdenden Wetter- und Lastprognosen <a href="#ref7" style={citationStyle}>[7]</a>. Schon im Jahr 2015 präsentierten Forschungsarbeiten robuste statistische Prognosemodelle wie EMOS, die prognostizierte Windgeschwindigkeit auf lokaler Ebene deutlich verbessern konnten. Ab rund 2019–2021 wurden Maschinelearning-basierte Methoden in Einspeiseforecast-Systemen des Deutschen Wetter Dienstes und der Übertragungsnetzbetreiber integriert <a href="#ref8" style={citationStyle}>[8]</a>, was zu Genauigkeitsgewinnen führte. Ein weiter Erkenntnis aus einer Studie von 2010 ist, dass Prognosen deutlich genauer werden, je näher der Prognosezeitpunkt an der tatsächlichen Lieferung liegt. So lag die Fehlerquote von Windprognosen am Tag davor bei 5,7\% und 2 Stunden davor nur noch bei 2,6\% <a href="#ref9" style={citationStyle}>[9]</a>. 
      </p>
      <p>
        Damit die aktuelleren Prognosen überhaupt dafür sorgen können, dass die abgerufene Sekundärregelenergie weniger wird benötigt es auch eine schnellere Reaktionszeit der Strommärkte. So hat sich am 14. september 2011 die Zeit in der man Strom kaufen oder verkaufen kann von 60 auf 15 Minuten verkürzt. Seit 2020 ist auch grenzüberschreitender Handel mit 15-Minuten-Produkten möglich <a href="#ref10" style={citationStyle}>[10]</a>. Das sogenannte Gate-Closure bezeichnet, wie viele Minuten vor der physischen Lieferung noch Strom gekauft oder verkauft werden kann. Diese Zeit wurde ab dem Juli 2015 von 45-60 Minuten auf 30 reduziert <a href="#ref11" style={citationStyle}>[11]</a>. In den Jahren 2018-2019 wurde diese Zeit in einigen Ländern, unter anderem in Deutschland, auf 5 Minuten reduziert <a href="#ref12" style={citationStyle}>[12]</a>. Diese erhöhte Flexibilität der Strommärkte ist sehr wichtig um nicht bei jeder Wetteränderung Sekundärregelleistung abrufen zu müssen. 
      </p>

      <h2>SRL im Kontext des Erneuerbaren-Ausbaus</h2>
      <p>
        Der Ausbau der erneuerbaren Energien in Deutschland schreitet rasant voran, mit dem Ziel, bis 2030 einen Anteil von 80 % an der Bruttostromerzeugung zu erreichen. Die Hauptenergiequellen sind dabei Solar- und Windenergie.
      </p>
      <figure style={{ margin: '2rem 0' }}>
        {<img src={Abbildung4} alt="Entwicklung der Bruttostromerzeugung aus erneuerbaren Energien" style={{ width: '100%' }} />}
        <figcaption>Entwicklung der Bruttostromerzeugung aus erneuerbaren Energien in Deutschland (Quelle: Umweltbundesamt).</figcaption>
      </figure>
      <p>
        Da diese beiden Technologien stark von dem Wetter abhängig sind, ist eine Aufrechterhaltung des Stromnetzes mit ihnen allein nicht immer gewährleistet. Die Sekundärregelleistung ist mit ihrer Einschaltzeit von 30 Sekunden bestens dafür geeignet, unerwartete wetterbedingte Schwankungen im Stromnetz auszugleichen. Daraus würde man vermuten, dass die Menge an Sekundärregelenergie, die jährlich abgerufen wird, mit dem Ausbau der Erneuerbaren zunimmt. Tatsächlich ist es so, dass die Sekundärregelenergie seit Jahren immer weiter abnimmt <a href="#ref13" style={citationStyle}>[13]</a>.
      </p>
      <p>
        Das liegt zu einem großen Teil an den Last- und Erzeugungsprognosen, welche in den letzten zehn Jahren deutlich besser geworden sind <a href="#ref14" style={citationStyle}>[14]</a>. In diese Prognosen spielen vor allem Wettervorhersagen mit herein. Diese haben mit dem Ausbau der regenerativen Energien eine immer wichtigere Funktion am Stromnetz. Sie ermöglichen es den Bilanzkreisverantwortlichen, den benötigten Strom schon rechtzeitig am Intraday-Markt einzukaufen, um nicht auf Sekundärregelenergie zurückgreifen zu müssen.
      </p>
      <p>
        Daraus würde man vermuten, dass die Menge an Sekundärregelenergie, die jährlich abgerufen wird, mit dem Ausbau der Erneuerbaren zunimmt. Tatsächlich ist es so, dass die Sekundärregelenergie seit Jahren immer weiter abnimmt.
      </p>

      <h3>Analyse der Einsatzzeiten: Die Heatmaps</h3>
      <p>
        Der Bedarf an Regelleistung häuft sich an den sogenannten Rampenzeiten in den Morgen-und Abendstunden, wenn sich die Erzeugungs- und Lastverhältnisse schnell ändern. Um diese Ereignisse zu visualisieren, werden Heatmaps verwendet, in denen die Intensität der Farbe den abgerufenen Leistungsbedarf darstellt. Dabei bildet die horizontale X-Achse den Jahresverlauf ab, während die vertikale Y-Achse die Tageszeit von 0 bis 24 Uhr darstellt. Negative Regelleistung (blau) wird bei einer Überproduktion abgerufen, während positive Regelleistung (rot) bei einem Strommangel benötigt wird.     
     </p>

      <figure style={{ margin: '2rem 0' }}>
        {<img src={Abbildung5} alt="Heatmap der abgerufenen SRL im Jahr 2015" style={{ width: '100%' }} />}
        <figcaption>Heatmap der abgerufenen SRL im Jahr 2015 (eigene Darstellung, Quelle: regelleistung.net).</figcaption>
      </figure>

      <p>
        Die sogenannte ”Abendrampe“ beschreibt den Zeitraum nach Sonnenuntergang, in dem die Solarstromproduktion zurückgeht, während der Stromverbrauch in den frühen Abend-stunden ansteigt, weil viele Menschen nach Hause kommen und Energie verbrauchen. In dieser Übergangsphase würde ohne den Einsatz von Sekundärregelleistung (SRL) eine Differenz zwischen Erzeugung und Verbrauch entstehen. Weiterhin ist zu erkennen, dass die Abendrampe im Sommer stärker ausgeprägt ist als im Winter. Das liegt daran, dass die PV-Erzeugung im Winter deutlich niedriger ist und Windenergie nicht das gleiche Verhalten aufweist.      
      </p>
      <p>
        Die ”Morgenrampe“ ist in der Regel weniger kritisch, da der steigende Stromverbrauch am Morgen oft mit dem gleichzeitigen Anstieg der Solarstromproduktion einhergeht. Die wachsende Nachfrage kann so bereits zu einem großen Teil durch die zunehmende PV-Erzeugung gedeckt werden, was die Herausforderung für das Stromsystem im Vergleich zur Abendrampe reduziert.      
      </p>

      <p>
        Im Jahr 2015 war die Bereitstellung von Regelleistung hauptsächlich auf den deutschen Regelenergiemarkt beschränkt, wodurch Flexibilität und Reaktionsmöglichkeiten limitiert waren. Im Jahr 2024 hingegen kann durch die europäische Marktintegration auf eine Vielzahl zusätzlicher, flexibler Anbieter zurückgegriffen werden, sodass die Abendrampe effizienter und mit einem geringeren Bedarf an SRL ausgeglichen werden kann. Eine weitere Unterstützung hierbei liefern auch die verbesserten Lastprognosen. Die ”Abendrampe“ im Jahr 2024 ist breiter und es ist ein Rückgang der Häufungen zur Sonnenuntergangszeit zu sehen.
      </p>

      <figure style={{ margin: '2rem 0' }}>
        {<img src={Abbildung6} alt="Heatmap der abgerufenen SRL im Jahr 2024" style={{ width: '100%' }} />}
        <figcaption>Heatmap der abgerufenen SRL im Jahr 2024 (eigene Darstellung, Quelle: regelleistung.net).</figcaption>
      </figure>

      <p>
        Der Vergleich der beiden Grafiken zeigt ebenfalls, dass das gesamte Volumen der Sekundärregelleistung deutlich abgenommen hat, was die Beobachtung aus Abbildung 3 bestätigt. Im grünen Bereich der Grafik ist zu erkennen, dass im Sommer 2015, bei einer installierten PV-Leistung von rund 40 GW <a href="#ref15" style={citationStyle}>[15]</a>, sehr häufig SRL abgerufen werden musste.    
      </p>

      <p>
        Auffällig ist, dass im Vergleich dazu im Jahr 2024 trotz deutlich höherer installierter PV-Leistung (über 100 GW) und sogar überdurchschnittlicher Sonneneinstrahlung im Sommer wesentlich weniger SRL zur Mittagszeit abgerufen wurde. Dies verdeutlicht, dass die Integration von Solarenergie in das Stromsystem deutlich verbessert werden konnte und das System heute weniger empfindlich auf die stark schwankende Solarstromerzeugung reagiert.      
      </p>
      <p>
        Im lila Bereich der 2015er-Grafik ist zudem ein sehr windreicher Frühling zu erkennen, der durch hohe negative Regelleistungsabrufe gekennzeichnet war. Dies zeigt die starke Wetterabhängigkeit des damaligen Systems. Im Gegensatz dazu fällt auf, dass im Jahr 2024 die Abhängigkeit des SRL-Abrufs von dem Wetter deutlich geringer ist. Trotz extremerer Wetterlagen mussten wesentlich weniger kurzfristige Eingriffe vorgenommen werden, was die Fortschritte bei der Flexibilisierung des Stromsystems unterstreicht und vorallem auf die deutlich besseren Wetterprognosen zurückzuführen ist.    
      </p>

      <h3>Rückgang von Großereignissen</h3>
      <p>
        Eine weitere zentrale Beobachtung ist der signifikante Rückgang von Großereignissen, also Regelenergieabrufen mit sehr hohem Leistungsbedarf, wie in Abbildung 7 dargestellt.
      </p>
      <p>
        Insbesondere die Anzahl der extremen Einsätze mit einem Abruf von über 1.500 MW (rechte Grafik) ist seit dem Spitzenwert im Jahr 2019 stark rückläufig. Solche Großeinsätze entsprechen typischerweise Situationen, in denen früher die Tertiärregelleistung zur Ablösung der SRL aktiviert worden wäre. Wie bereits erläutert, werden solche länger andauernden Ungleichgewichte heute zunehmend von den Marktteilnehmern selbst am Intraday-Spotmarkt ausgeglichen. Dies ist wirtschaftlich attraktiver, da hier im Gegensatz zur Regelenergie kein kapazitätsbezogener Leistungspreis für die Vorhaltung anfällt. Der drastische Rückgang dieser Ereignisse auf nur noch wenige Fälle pro Jahr korreliert daher stark mit dem generellen Bedeutungsverlust der TRL, wie in Abbildung 2 dargestellt.
      </p>
      <figure style={{ margin: '2rem 0' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            { <img src={Abbildung7} alt="Anzahl der Viertelstunden mit einem SRL-Abruf > 500 MW" style={{ width: '100%' }} /> }
            <figcaption style={{textAlign: 'center'}}>Anzahl der Viertelstunden mit einem SRL-Abruf &gt; 500 MW.</figcaption>
          </div>
          <div style={{ flex: 1 }}>
            {<img src={Abbildung7_1} alt="Anzahl der Viertelstunden mit einem SRL-Abruf > 1500 MW" style={{ width: '100%' }} />}
            <figcaption style={{textAlign: 'center'}}>Anzahl der Viertelstunden mit einem SRL-Abruf &gt; 1500 MW.</figcaption>
          </div>
        </div>
        <figcaption style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          Vergleich der Häufigkeit von Großereignissen (eigene Darstellung, Quelle: regelleistung.net).
        </figcaption>
      </figure>
      <p>
        Auch die Häufigkeit mittelgroßer Einsätze (&gt; 500 MW), abgebildet in der linken Grafik, zeigt einen deutlichen Abwärtstrend. Dieser Rückgang ist auf ein synergetisches Zusammenspiel mehrerer marktlicher und technologischer Entwicklungen zurückzuführen:
      </p>
      <p>
        Die Grundlage bilden die seit etwa 2019 etablierten, KI-gestützten Einspeiseprognosen, die es ermöglichen, Abweichungen sehr präzise vorherzusagen <a href="#ref14" style={citationStyle}>[14]</a>. Diese genauen, kurzfristigen Informationen können jedoch nur dann effektiv genutzt werden, wenn der Markt eine entsprechende Reaktionsgeschwindigkeit aufweist. Die entscheidenden Anpassungen hierfür waren die Reduzierung der Gate-Closure-Zeit auf fünf Minuten in Deutschland (2018/2019) und die europaweite Etablierung des 15-Minuten-Handels (seit 2020) <a href="#ref12" style={citationStyle}>[12]</a> <a href="#ref10" style={citationStyle}>[10]</a>.
      </p>
      <p>
        Der weitere Rückgang nach 2021 ist maßgeblich auf die Einführung der PICASSO-Plattform zurückzuführen. Das dort etablierte Imbalance Netting sorgt dafür, dass verbleibende Ungleichgewichte europaweit priorisiert saldiert werden, bevor es überhaupt zu einem physischen Abruf von Regelenergie kommt <a href="#ref5" style={citationStyle}>[5]</a>.
      </p>

      <section>
          <h2>Literaturverzeichnis</h2>
        <ol>
          <li id="ref1">
            Fraunhofer-Gesellschaft. <i>Stabile Stromversorgung durch netzbildende Wechselrichter</i>. 
          <br /> Verfügbar unter:&nbsp;
          <a href="https://www.fraunhofer.de/de/presse/presseinformationen/2021/dezember-2021/stabile-stromversorgung-durch-netzbildende-wechselrichter.html" target="_blank" rel="noopener noreferrer">
            https://www.fraunhofer.de/de/presse/presseinformationen/2021/dezember-2021/stabile-stromversorgung-durch-netzbildende-wechselrichter.html
           </a>
          </li>
    
          <li id="ref2">
            Deutsche Energie-Agentur (dena). <i>dena-Leitstudie Aufbruch Klimaneutralität</i>. 
            
            <br />Verfügbar unter:&nbsp;
            <a href="https://www.dena.de/fileadmin/dena/Publikationen/PDFs/2021/Abschlussbericht_dena-Leitstudie_Aufbruch_Klimaneutralitaet.pdf" target="_blank" rel="noopener noreferrer">
              https://www.dena.de/fileadmin/dena/Publikationen/PDFs/2021/Abschlussbericht_dena-Leitstudie_Aufbruch_Klimaneutralitaet.pdf
            </a>
          </li>

          <li id="ref3">
              Bundesnetzagentur & Bundeskartellamt. <i>Monitoringbericht Energie</i>. Jährliche Publikation. 
              <br />
              Verfügbar unter:&nbsp;            <a href="https://data.bundesnetzagentur.de/Bundesnetzagentur/SharedDocs/Mediathek/Monitoringberichte/MonitoringberichtEnergie2023.pdf" target="_blank" rel="noopener noreferrer">
              https://data.bundesnetzagentur.de/Bundesnetzagentur/SharedDocs/Mediathek/Monitoringberichte/MonitoringberichtEnergie2023.pdf
            </a>
          </li>
          <li id="ref4">
            Next Kraftwerke. <i>Was ist Primärregelleistung (PRL)?</i>
             
              <br />Verfügbar unter:&nbsp;
            <a href="https://www.next-kraftwerke.de/wissen/primaerreserve-primaerregelleistung" target="_blank" rel="noopener noreferrer">
              https://www.next-kraftwerke.de/wissen/primaerreserve-primaerregelleistung
            </a>
          </li>
          <li id="ref5">
            Entsoe. <i>Imbalance Netting</i>
            
            <br />Verfügbar unter:&nbsp;
            <a href="https://www.entsoe.eu/network_codes/eb/imbalance-netting/" target='_blank' rel='noopener noreferer'>
              https://www.entsoe.eu/network_codes/eb/imbalance-netting/
            </a>
          </li>
          <li id="ref6">
            Entsoe. <i>European Balancing Market Report</i> Jährliche Publikation.
            
            <br />Verfügbar unter:&nbsp;
            <a href='https://eepublicdownloads.blob.core.windows.net/strapi-test-assets/strapi-assets/entso-e_Market_report_2025.pdf' target='_blank' rel='noopener nonreferer'>
              https://eepublicdownloads.blob.core.windows.net/strapi-test-assets/strapi-assets/entso-e_Market_report_2025.pdf
            </a>
          </li>
          <li id="ref7">
            MDPI. <i>Probabilistic Forecasting of German Electricity Imbalance Prices</i>
            
            <br />Verfügbar unter:&nbsp;
            <a href='https://www.mdpi.com/1996-1073/15/14/4976' target='_blank' rel='noopener nonreferer'>
              https://www.mdpi.com/1996-1073/15/14/4976
            </a>
          </li>
          <li id="ref8">
            CESOC. <i>Large‑Scale Deep Learning for the Earth System – Abstracts</i>
            
            <br />Verfügbar unter:&nbsp;
            <a href='https://cesoc.net/lsdles-workshop-abstracts/' target='_blank' rel='noopener nonreferer'>
              https://cesoc.net/lsdles-workshop-abstracts/
            </a>
          </li>
          <li id="ref9">
            North American Electric Reliability Corporation. <i>Variable Generation Power Forecasting for Operations</i>
            <br /> 
            Verfügbar unter:&nbsp;             <a href='https://www.nerc.com/pa/RAPA/ra/Reliability%20Assessments%20DL/Varialbe%20Generationn%20Power%20Forecasting%20for%20Operations.pdf' target='_blank' rel='noopener nonreferer'>
              https://www.nerc.com/pa/RAPA/ra/Reliability%20Assessments%20DL/Varialbe%20Generationn%20Power%20Forecasting%20for%20Operations.pdf
            </a>
          </li>
          <li id="ref10">
            EPEX SPOT. <i>SIDC: Expansion of 30 and 15‑minute products and Revised Local Implementation Project 14 Go‑Live</i>
            <br />Verfügbar unter:&nbsp;
            <a href='https://www.epexspot.com/en/news/sidc-expansion-30-and-15-minute-products-and-revised-local-implementation-project-14-go-live' target='_blank' rel='noopener nonreferer'>
              https://www.epexspot.com/en/news/sidc-expansion-30-and-15-minute-products-and-revised-local-implementation-project-14-go-live
            </a>
          </li>
          <li id="ref11">
            Next Kraftwerke. <i>Intraday Trading: Definition, theory and practice</i>
            <br />Verfügbar unter:&nbsp;
            <a href='https://www.next-kraftwerke.com/knowledge/intraday-trading' target='_blank' rel='noopener nonreferer'>
              https://www.next-kraftwerke.com/knowledge/intraday-trading
            </a>
          </li>
           <li id="ref12">
            International Renewable Energy Agency (IRENA). <i>Innovation landscape brief: Increasing time granularity in electricity markets</i>
            <br />
            Verfügbar unter:&nbsp;            <a href='https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2019/Feb/IRENA_Increasing_time_granularity_2019.pdf' target='_blank' rel='noopener nonreferer'>
              https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2019/Feb/IRENA_Increasing_time_granularity_2019.pdf
            </a>
          </li>
          <li id="ref13">
            Frauenhofer IEE (2020). <i>Bedarf an Regelenergie sinkt trotz mehr Erneuerbaren Energien</i>
            <br />Verfügbar unter:&nbsp;
            <a href='https://www.iee.fraunhofer.de/de/presse/presseinformationen/2020/bedarf-an-regelenergie-sinkt-trotz-mehr-erneuerbaren-energien.html' target='_blank' rel='noopener nonreferer'>
              https://www.iee.fraunhofer.de/de/presse/presseinformationen/2020/bedarf-an-regelenergie-sinkt-trotz-mehr-erneuerbaren-energien.html
            </a>
          </li>
         
          <li id="ref14">
            SienceDirect. <i>How good are TSO load and renewable generation forecasts: Learning curves, challenges, and the road ahead</i>
            <br />Verfügbar unter:&nbsp;
            <a href='https://www.sciencedirect.com/science/article/pii/S0306261922008753' target='_blank' rel='noopener nonreferer'>
              https://www.sciencedirect.com/science/article/pii/S0306261922008753
            </a>
          </li>
          <li id="ref15">
            Wikipedia. <i>Photovoltaik in Deutschland</i>
            <br />Verfügbar unter:&nbsp;
            <a href='https://de.wikipedia.org/wiki/Photovoltaik_in_Deutschland' target='__blank' rel='noopener nonreferer'>
              https://de.wikipedia.org/wiki/Photovoltaik_in_Deutschland
            </a>
          </li>
          <li id="ref16">
            Frauenhofer ISE. <i>Fakten zur Photovoltaik</i>
            <br />Verfügbar unter:&nbsp;
            <a href='https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html' target='_blank' rel='noopener nonreferer'>
              https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html
            </a>
          </li>
        </ol>
      </section>

    </article>
    
  );
}

export default Erkenntnisse;