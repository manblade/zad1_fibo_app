import React from 'react';
import { Link } from 'react-router-dom';
import architektura from './architektura.png'
import work from './work.png'

export default () => {
  return (
    <div>
      <header className = "App-fibo App-header">

      <p>Architektura projektu:</p>
        <img className="photo" src={architektura} alt="Architektura"/>

      <p>Przykład działania aplikacji:</p>
        <img className="photo" src={work} alt="Przykład działania aplikacji"/>
      
      <div className="doc_text">
      <p>Do rozwiązania zadania został wykorzystany kod z laboratorium 9. Zmiany które, zostały wykonane to: </p>
      worker:
      <ul>
        <li>W pliku <i>index.js</i> zmieniono funkcję licząca wartość "k-tej" liczby ciągu fibonacciego. Nowa funkcja jest nierekurencyjna w związku z czym działa szybciej.</li>
      </ul>
      server:
      <ul>
        <li>W pliku <i>index.js</i> zmieniono maksymalna wartość jaką serwer może obsłużyć, oraz zmodyfikowana została funkcja app.get działająca na endpointcie "/values/all" - pozwala na wyświetlenie ostatnich 10 wprowadzonych liczb.</li>
      </ul>

      client:
      <ul>
        <li>Tutaj aplikacja została podzielona na "podstrony". Główny plik startowy aplikacji <i>App.js</i> został zmodyfikowany aby służył jako routing pomiędzy podstronami aplikacji. </li>
        <li>Został stworzony plik <i>Main.js</i>, który jest określony jako strona głowna aplikacji. </li>
        <li>Został stworzony plik <i>Documentation.js</i> zaawierający opis techniczny opracowanej usługi wraz ze screenami.</li>
        <li>W pliku Fib.js: 
          <ul>
            <li>zmieniono mozliwośc wprowadzania liczb od 0 do 20</li>
            <li>zmodyfikowano funkcję <i>renderValues()</i> aby mogła wyświetlać 10  ostatnich wyników dla ostatnich wprowadzonych wartości "k",</li>
            <li>dodano przycisk pozwalający na ukazanie historii 10 ostatnich wprowadzonych wartości</li>
            <li>w funkcji handleSubmit dodano odświeżenie wprowadzonej wartości po kliknięciu przycisku "Oblicz"</li>
          </ul>
        </li>
      </ul>
      </div>
            
      <p>
      <Link to="/">Wróć na stronę główna</Link>
      </p>
      </header>
    </div>
  );
};
