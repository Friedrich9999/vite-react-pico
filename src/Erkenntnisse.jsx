// Dateipfad: src/Erkenntnisse.js

import React from 'react';
import meinBild from './Bilder/Abbildung1.jpg';
import Abbildung3 from './Bilder/Abbildung3.jpg';
import Abbildung4 from './Bilder/Abbildung4.jpg';
import Abbildung5 from './Bilder/Abbildung5.jpg';
import Abbildung6 from './Bilder/Abbildung6.jpg';
import Abbildung7 from './Bilder/Abbildung7.jpg';
import Abbildung7_1 from './Bilder/Abbildung7_1.jpg';

function Erkenntnisse() {
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
        <li>Primärregelleistung (PRL, engl. FCR– Frequency Containment Reserve)</li>
        <li>Sekundärregelleistung (SRL, engl. aFRR– automatic Frequency Restoration Reserve)</li>
        <li>Tertiärregelleistung (TRL, engl. mFRR– manual Frequency Restoration Reserve)</li>
      </ul>
      <figure><img src={meinBild} alt= "Zeitliche Aktivierungsabfolge der Regelenergiearten (Quelle: www.nextkraftwerke.de)" />
        <figcaption>Abbildung 1: Zeitliche Aktivierungsabfolge der Regelenergiearten (Quelle: www.nextkraftwerke.de)</figcaption>
      </figure>
      
      <p>
        Alle drei Arten dienen der Frequenzstabilisierung, unterscheiden sich jedoch grundlegend in ihrer Reaktionsgeschwindigkeit, Aktivierungsart und den zugrundeliegenden Marktmechanismen. Mit dem wachsenden Anteil erneuerbarer Energien verändert sich die Rolle dieser Instrumente fundamental.
      </p>
      <h2>Die drei Stufen der Frequenzstabilisierung</h2>
      <h3> Primärregelleistung (FCR) und Momentanreserve</h3>
      <p>
        Die Primärregelleistung (FCR) ist die erste und schnellste Reaktion auf eine Frequenzabweichung. Sie wird europaweit koordiniert, vollautomatisch und dezentral bereitgestellt, wobei die ersten Erzeuger bereits nach 5 Sekunden aktiv werden und die vollständige Aktivierung innerhalb von 30 Sekunden erfolgen muss. Ihr alleiniges Ziel ist es, das weitere Absinken oder Ansteigen der Frequenz zu stoppen und sie zu stabilisieren.
      </p>
      <p>
         Eng damit verbunden ist die Momentanreserve. Diese wird nicht aktiv bereitgestellt, sondern ist eine physikalische Eigenschaft von Systemen. Traditionell wurde sie durch die Trägheit der rotierenden Generatoren (,,Schwungmasse“) in Kohle- und Kernkraftwerken geliefert [1]. Diese Massen wirken im ersten Augenblick einer Störung dämpfend. Da konventionelle Kraftwerke zunehmend vom Netz gehen, wird die Sicherstellung der Momentanreserve durch alternative Technologien, wie netzbildende Wechselrichter in Batteriespeichern, zu einer der zentralen Herausforderungen der Energiewende [2].
      </p>
      <h3>Sekundärregelleistung (aFRR)</h3>
      <p>
         Die Sekundärregelleistung (SRL) löst die Primärregelleistung (FCR) nach 30 Sekunden ab. Sie wird zentral vom jeweiligen Übertragungsnetzbetreiber (ÜNB) automatisch abgerufen, um die Netzfrequenz aktiv auf den Sollwert von 50 Hz zurückzuführen. Ihre vollständige Aktivierung muss innerhalb von 5 Minuten erfolgen. Die Sekundärregelleistung ist das zentrale Instrument, um kurzfristige Prognoseabweichungen bei Erzeugung und Verbrauch auszugleichen. Sie wird benötigt, wenn in den Bilanzkreisen der Bedarf und das Angebot nicht vollständig übereinstimmen, also wenn die Prognosen nicht zu 100 Prozent mit der Realität übereinstimmen. In diesen Fällen wird automatisch positive oder negative Sekundärregelleistung zugeschaltet. Die dadurch entstehenden Kosten tragen die Bilanzkreisverantwortlichen bzw. die Stromanbieter. Dieser Vorgang ist Teil des normalen Netzbetriebs und kommt täglich mehrmals vor.
      </p>
      <p>
         Sekundärregelleistung wird im Rahmen eines europaweit harmonisierten Ausschreibungsprozesses am Regelenergiemarkt beschafft. Die vier deutschen Übertragungsnetzbetreiber (50Hertz, Amprion, TenneT, TransnetBW) schreiben den Bedarf täglich und für unterschiedliche Zeitscheiben aus. Unternehmen, die Sekundärregelleistung anbieten wollen, müssen präqualifiziert sein, das heißt, sie müssen nachweisen, dass sie die geforderte Leistung, Zuverlässigkeit und Aktivierungszeiten einhalten können. Die Aktivierung erfolgt durch eine automatische Abrufung (AGC– Automatic Generation Control) entsprechend dem Bedarf im Netz. Anbieter erhalten sowohl eine Vergütung für die Vorhaltung (Leistungspreis) als auch für die tatsächliche Aktivierung (Arbeitspreis).
      </p>
      <p>
        Traditionell wurde Sekundärregelleistung (SRL) hauptsächlich von Großkraftwerken wie konventionellen Gas-, Kohle- und Pumpspeicherkraftwerken bereitgestellt. Inzwischen können jedoch auch dezentrale Anlagen, Batteriespeicher, Industrieprozesse oder Pooling-Anbieter teilnehmen, sofern sie die technischen Anforderungen erfüllen und eine Mindestleistung von 5 MW (seit 2017, davor 10 MW) bündeln können. Das Marktumfeld hat sich durch Digitalisierung und Aggregation zunehmend geöffnet, sodass mittlerweile auch kleinere Anlagen über virtuelle Kraftwerke und Aggregatoren Zugang zum Markt erhalten. Eine immer wichtigere Rolle spielt zudem die Lastverschiebung (Demand-Side-Management): Große industrielle Verbraucher können ihre Prozesse flexibel steuern, um auf Preissignale oder Netzengpässe zu reagieren. Indem sie ihren Verbrauch gezielt in Zeiten hoher Erneuerbaren-Einspeisung legen oder in Knappheitssituationen reduzieren, tragen sie aktiv zur Netzstabilisierung bei und verringern den Bedarf an Regelleistung [5].
      </p>
      <h3>Tertiärregelleistung (mFRR)</h3>
      <p>
        Die Tertiärregelleistung (TRL), auch Minutenreserve genannt, ist die langsamste Stufe und wird manuell aktiviert, um die SRL bei länger andauernden Störungen abzulösen. Wie die späteren Analysen zeigen werden, hat ihre Bedeutung drastisch abgenommen (Abbildung 8). Der Hauptgrund ist die gestiegene Liquidität am Intraday-Strommarkt, der es Marktteilnehmern oft günstiger erlaubt, ihre Bilanzen kurzfristig auszugleichen, anstatt hohe Ausgleichsenergiekosten zu riskieren [3].
      </p>

      "BILD EINFÜGEN"

      <h3>Auswahl der betrachteten Regelleistung</h3>
      <p>
        Diese Untersuchung konzentriert sich bewusst auf die Sekundärregelleistung und die Tertiärregelleistung, während die Primärregelleistung aus methodischen Gründen nicht im Detail betrachtet wird.
      </p>
      <p>
         Die Primärregelleistung fungiert als kollektives, übernationales Sicherheitsnetz für das gesamte europäische Verbundnetz. Ihre Dimensionierung richtet sich nach dem größten denkbaren Störfall, wie dem gleichzeitigen Ausfall der beiden größten Kraftwerksblöcke im Netz. Daher werden europaweit konstant ±3 GW an Leistung vorgehalten. Die Verteilung dieser Verpflichtung auf die beteiligten Netzbetreiber wird jährlich neu berechnet und richtet sich anteilig nach der nationalen Stromerzeugung des Vorjahres. Die Aktivierung der FCR erfolgt automatisch und dezentral als Reaktion auf jede Frequenzabweichung mit dem primären Ziel, die Störung aufzufangen und die Frequenz zu stabilisieren. Anschließend übernimmt die zentral gesteuerte Sekundärregelleistung, um die Frequenz wiederpräzise auf den Sollwert von 50 Hz zurückzuführen und die Primärregelleistung für den nächsten Störfall freizugeben.
      </p>
      <p>
        Da die Primärregelleistung Störungen unabhängig von deren Ursprungsort ausgleicht, kann ein Kraftwerksausfall in Spanien eine PRL-Aktivierung durch einen Anbieter in Deutschland auslösen. Dies macht es unmöglich, eine direkte und aussagekräftige Korrelation zwischen dem PRL-Abruf und spezifischen nationalen Ereignissen, wie etwa der volatilen Einspeisung von Wind- und Solarstrom in Deutschland, herzustellen.
      </p>
      <p>
        Im Gegensatz dazu werden Sekundär- und Tertiärregelleistung eingesetzt, um konkrete Bilanzkreisungleichgewichte in der eigenen Regelzone bzw. im europäischen Nahbereich auszugleichen. Ihre Abrufmengen sind daher dynamische Variablen, die direkt die Herausforderungen widerspiegeln, die durch Prognosefehler bei der erneuerbaren Erzeugung entstehen. Sie sind somit die geeigneten Indikatoren, um die Auswirkungen der Energiewende auf den Bedarf an Netzstabilisierungsmaßnahmen zu analysieren.
      </p>
      <h2>Analyse der Sekundärregelleistung in Deutschland</h2>

      <figure><img src={Abbildung3} alt= "Abbildung3" />
        <figcaption>Abbildung 3: Jährlich abgerufene SRL-Arbeit in GWh (Quelle: regelleistung.net).</figcaption>
      </figure>

      <p>
        Die jährlich abgerufene Sekundärregelenergie ist seit Jahren rückläufig. Ausschlaggebend dafür sind vier Mechanismen. Einer dieser Mechanismen ist das Imbalance Netting auf EU Ebene. Erste regionale Umsetzung gab es bereits im Rahmen der Grid Control Cooperation (GCC)zwischen deutschen ÜNBs im Zeitraum Juni–Dezember 2008. EU-weit verpflichtend ist es seit dem 24. Juni 2021. Die EU-weite Verpflichtung ging mit der Einführung von PICASSO einher. PICASSO ist eine Plattform zur Koordinierung und Handel von SRL. Ein wesentlicher Vorteil dieses Systems ist die Reduktion des gesamten aktivierten Regelbedarfs. Wenn beispielsweise die deutsche Regelzone einen Überschuss von 500 MWaufweist und die französische Zone zeitgleich ein Defizit von 500 MW, können sich diese entgegengesetzten Bedarfe gegenseitig aufheben. Anstatt in beiden Ländern Regelleistung zu aktivieren, wird der Austausch über die Plattform optimiert, was den Gesamtbedarf an physisch aktivierter Leistung senkt und die Effizienz des Gesamtsystems steigert [4]. Großen Einfluss auf die Abnahme der jährlich abgerufenen Sekundärregelleistung haben auch die immer besser werdenden Wetter- und Lastprognosen. Schon im Jahr 2015 präsentierten Forschungsarbeiten robuste statistische Prognosemodelle wie EMOS, die prognostizierte Windgeschwindigkeit auf lokaler Ebene deutlich verbessern konnten. Ab rund 2019–2021 wurden Maschinelearning-basierte Methoden in Einspeiseforecast Systemen des Deutschen Wetter Dienstes und der Übertragungsnetzbetreiber integriert, was zu Genauigkeitsgewinnen führte. Ein weiter Erkenntnis aus einer Studie von 2010 ist, dass Prognosen deutlich genauer werden, je näher der Prognosezeitpunkt an der tatsächlichen Lieferung liegt. So lag die Fehlerquote von Windprognosen am Tag davor bei 5,7% und 2 Stunden davor nur noch bei 2,6%. Damit die aktuelleren Prognosen überhaupt dafür sorgen können, dass die abgerufene Sekundärregelenergie weniger wird benötigt es auch eine schnellere Reaktionszeit der Strommärkte. So hat sich am 14. september 2011 die Zeit in der man Strom kaufen oder verkaufen kann von 60 auf 15 Minuten verkürzt. Seit 2020 ist auch grenzüberschreitender Handel mit 15-Minuten-Produkten möglich. Das sogenannte Gate-Closure bezeichnet, wie viele Minuten vor der physischen Lieferung noch Strom gekauft oder verkauft werden kann. Diese Zeit wurde ab dem Juli 2015 von 45-60 Minuten auf 30 reduziert. In den Jahren 2018-2019 wurde diese Zeit in einigen Ländern, unter anderem in Deutschland, auf 5 Minuten reduziert. Diese erhöhte Flexibilität der Strommärkte ist sehr wichtig um nicht bei jeder Wetteränderung Sekundärregelleistung abrufen zu müssen.
      </p>
      <h2>SRL im Kontext des Erneuerbaren-Ausbaus</h2>
      <p>
        Der Ausbau der erneuerbaren Energien in Deutschland schreitet rasant voran, mit dem Ziel, bis 2030 einen Anteil von 80% an der Bruttostromerzeugung zu erreichen. Die Hauptenergiequellen sind dabei Solar- und Windenergie.
      </p>

        <figure><img src={Abbildung4} alt= "Abbildung3" />
        <figcaption>Abbildung 4: Entwicklung der Bruttostromerzeugung aus erneuerbaren Energien in Deutschland (Quelle: Umweltbundesamt).</figcaption>
      </figure>

      <p>
        Da diese beiden Technologien stark von dem Wetter abhängig sind, ist eine Aufrechterhaltung des Stromnetzes mit ihnen allein nicht immer gewährleistet. Die Sekundärregelleistung ist mit ihrer Einschaltzeit von 30 Sekunden bestens dafür geeignet, unerwartete wetterbedingte Schwankungen im Stromnetz auszugleichen. Daraus würde man vermuten, dass die Menge an Sekundärregelenergie, die jährlich abgerufen wird, mit dem Ausbau der Erneuerbaren zunimmt. Tatsächlich ist es so, dass die Sekundärregelenergie seit Jahren immer weiter abnimmt. [6].
      </p>
      <p>
        Das liegt zu einem großen Teil an den Last- und Erzeugungsprognosen, welche in den letzten zehn Jahren deutlich besser geworden sind. In diese Prognosen spielen vor allem Wettervorhersagen mit herein. Diese haben mit dem Ausbau der regenerativen Energien eine immer wichtigere Funktion am Stromnetz. Sie ermöglichen es den Bilanzkreisverantwortlichen, den benötigten Strom schon rechtzeitig am Intraday-Markt einzukaufen, um nicht auf Sekundärregelenergie zurückgreifen zu müssen.
      </p>
      <h3>Analyse der Einsatzzeiten: Die Heatmaps</h3>
      <p>
        Trotz der guten Prognosen häuft sich der Einsatz von Regelleistung um die Zeiten herum an denen Erzeugung von dem Netz und Last an das Netz geht. Das kommt vor allem in den Morgen- und Abendstunden vor. Diese verschieben sich über das Jahr. Um diese Ereignisse darzustellen, wird eine Heatmap verwendet. Auf der X-Achse befindet sich das jeweilige Datum und auf der Y-Achse die Uhrzeit. Die Intensität der Farbe gibt die abgerufene Regelleistung an. Blau steht für negative Regelleistung und Rot für positive. Negative Regelleistung kommt dann vor, wenn der aktuelle Bedarf an Strom geringer ist als die Erzeugung. Bei positiver ist es genau andersherum, dann müssen die Kraftwerke zusätzlichen Strom erzeugen. 
      </p>
      <p>
        Diese sogennate abendramp folgt deutlich den sonnenuntergang wenn der productionsabfall von solar steil abfällt und die leute noch viel verbrauchen und auch gerade nach hause kommen.
      </p>
      <p>
        Die morgen rampe ist vieler leichter auszugleichen da der zunehmender verbrauch zu den morgensstunden wenn leute gerade aufwachen mit der die erzeugung von solar überlagern.
      </p>

      <figure><img src={Abbildung5} alt= "Abbildung5" />
        <figcaption>Abbildung 5: Heatmap der abgerufenen SRL im Jahr 2015 (eigene Darstellung, Quelle: regelleistung.net).</figcaption>
      </figure>

      <p>
        Wenn man die Grafiken von 2015 und 2024 vergleicht, fallen einige Unterschiede auf. Das Volumen der Sekundärregelleistung hat deutlich abgenommen, das deckt sich auch mit Abbildung 3, welche gezeigt hat, dass die Regelenergie seit 2015 ebenfalls abgenommen hat. Die Häufung in der Nähe der Abend- und Morgenstunden tritt in beiden Grafiken auf, wenn auch in der von 2024 deutlich geringer. Den Unterschied, welcher auf die deutlich verbesserten Prognosen zurückzuführen ist, sieht man in den grün markierten Bereichen. In diesem Bereich besteht der Strommix oft zu einem großen Anteil aus Solarstrom. In dem Lila Bereich sieht man einen sehr windreichen Frühling. Es gab auch Extremwetterereignisse.
      </p>
      <p>
        Im Jahr 2015 waren in Deutschland ≈ 40 GW 1 Photovoltaik-Leistung am Netz. 2024 waren es &gt;100GW.Trotzdieses Anstiegs ist das Volumen an abgerufener Sekundärregelleistung zur Mittagszeit stark zurückgegangen.
      </p>
      <p>
        Auch die Häufung zu den Abend- und Morgenstunden befinden sich nicht mehr auf diesen klaren Linien. Der Bereich in denen sich die SRL anhäuft verteilt sich immer mehr über einen größeren Zeitbereich. Das liegt an den verbesserten Last- und Wetterprognosen. Die Häufungen werden vermutlich nie ganz weggehen, da in der Übergangsphase, in der PV vom oder an das Netz geht, die Erzeugung und Last nie perfekt ausgeglichen sein können.
      </p>

      <figure><img src={Abbildung6} alt= "Zeitliche Aktivierungsabfolge der Regelenergiearten (Quelle: www.nextkraftwerke.de)" />
        <figcaption>Abbildung 6: Heatmap der abgerufenen SRL im Jahr 2024 (eigene Darstellung, Quelle: regelleistung.net).</figcaption>
      </figure>

      <p>
         Auch die Häufigkeit von extremen Ereignissen mit sehr hohem Leistungsabruf nimmt ab. Dies liegt zum einen am geografischen Ausgleichseffekt der dezentralen Erneuerbaren.
      </p>
      <p>
        Dieser Effekt ist die Grundlage des vom Fraunhofer-Institut propagierten zellulären Ansatzes [2]. Die Idee ist, das Stromnetz in regionale Zellen zu gliedern, die primär versuchen, Erzeugung und Verbrauch lokal auszugleichen. Wenn der Strom einer Solaranlage direkt im selben Ort verbraucht wird, stabilisiert dies das System von unten nach oben. Je besser sich diese Zellen selbst ausbalancieren, desto seltener muss der ÜNB zentral mit teurer Regelleistung eingreifen.
      </p>

        <figure style={{ width: '100%', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <figure style={{ flex: 1, margin: 0 }}>
            <img 
              src={Abbildung7} 
              alt="Abbildung7" 
              style={{ width: '100%' }} 
            />
            <figcaption style={{ fontSize: '0.9rem', color: '#555' }}>
              (a) Anzahl der Viertelstunden mit einem SRL Abruf ¿ 500 MW.
            </figcaption>
          </figure>
          <figure style={{ flex: 1, margin: 0 }}>
            <img 
              src={Abbildung7_1} 
              alt="Abbildung7" 
              style={{ width: '100%' }} 
            />
            <figcaption style={{ fontSize: '0.9rem', color: '#555' }}>
               (b) Anzahl der Viertelstunden mit einem SRL Abruf ¿ 1500 MW.
            </figcaption>
          </figure>
        </div>
        <figcaption style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
          Abbildung 7: Vergleich der H¨ aufigkeit von Großereignissen (Quelle: regelleistung.net).
        </figcaption>
      </figure>

      <h3>Korrelation von Sekundär- und Tertiärregelleistung</h3>
      <p>
        Der Vergleich der Daten bestätigt die Hypothese, dass Jahre mit vielen SRL-Großereignissen auch einen hohen TRL-Abruf zur Folge haben.
      </p>

      "BILD EInfügen"

      <p>
         Die deutliche Korrelation und der gemeinsame Rückgang nach 2020 zeigen, wie Marktund Prognoseverbesserungen das Gesamtsystem stabilisiert haben.
      </p>

      <h2>Fazit</h2>
      <p>
         Die Analyse zeichnet ein klares Bild: Entgegen oft geäußerter Befürchtungen hat der massive Ausbau volatiler erneuerbarer Energien in Deutschland nicht zu einem erhöhten Bedarf an Sekundär- und Tertiärregelleistung geführt. Dieser Erfolg ist auf technologischen und marktlichen Fortschritt zurückzuführen: Hochpräzise Prognosen, liquide Intraday Märkte, die europäische Marktintegration und der dezentrale Charakter der Energiewende stabilisieren das System proaktiv.
      </p>
      <p>
        Die zukünftigen Herausforderungen verlagern sich, wie von Fraunhofer-Experten betont, von der reinen Kompensation von Volatilität hin zur Sicherstellung von physikalischen Systemdienstleistungen wie der Momentanreserve in einem dekarbonisierten Netz, das nicht mehr auf die Trägheit großer konventioneller Kraftwerke zurückgreifen kann.
      </p>

      
    </article>
  );
}

export default Erkenntnisse;