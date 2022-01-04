### Zad1-Fibo-App

## Dokumentacja
Architektura aplikacji:
<img src="/client/src/architektura.png">
Przykład działania aplikacji:
<img src="/client/src/work.png">
Do rozwiązania zadania został wykorzystany kod z laboratorium 10. Zmiany które, zostały wykonane to:<br/>
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

## Uruchomienie aplikacji
1. Sklonowanie repo
2. W głownym katalogu pobranego repo wywołać polecenie `COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.dev.yml up  --build`
3. W przeglądarce wejść na adres localhost (Aplikacja pracuje na porcie 80)
