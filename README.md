# React-Redux-Workshop
Dies ist ein Lernprojekt um
React.js (https://facebook.github.io/react/docs/hello-world.html)
und Redux (http://redux.js.org/)
zu erlernen und zu verstehen.

Es wurde mit
`create-react-app` (https://github.com/facebookincubator/create-react-app) erstellt.

## Project starten
Das Projekt lässt sich mit dem Befehl `yarn run start` starten.

Danach kann man im Browser über die URL `http://localhost:3000/` das Projekt begutachten.

## Tests
Im gesamten Projekt gibt es für jede Datei einen Test, welcher im selben Ordner
liegt umd mit `.test.js` endet.

Die React.js-Tests verwenden
* `jest` (https://facebook.github.io/jest/docs/getting-started.html),
* `redux-mock-store` (http://arnaudbenard.com/redux-mock-store/)
* `enzyme` (http://airbnb.io/enzyme/docs/api/mount.html)

### Testrunner
Um die Tests auszuführen und bei Veränderungen der Dateien die Tests neu
ausführen zu lassen, kann man den Befehl
<br />`yarn run test` ausführen.

### Testcoverage
Um eine Testcoverage zu erstellen, kann der Befehl
<br />`yarn run test -- --coverage` ausgeführt werden.
