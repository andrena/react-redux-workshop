
# Navigatorentreffen Workshop

Dies ist ein Lernprojekt um 
React.js (https://facebook.github.io/react/docs/hello-world.html) 
und Redux (http://redux.js.org/)
zu erlernen und zu verstehen. 
<br />Es wurde mit 
`create-react-app` (https://github.com/facebookincubator/create-react-app) erstellt.

## Project starten
Das Projekt lässt sich mit dem Befehl
<br />`yarn run start` starten.

Danach kann man im Browser über die URL 
<br />`http://localhost:3000/` das Projekt begutachten.

## Tests
Im gesamten Projekt gibt es für jede Datei einen Test, welcher im selben Ordner
liegt umd mit `.test.js` endet.

Die React.js-Tests verwenden neben
<br />`jest` (https://facebook.github.io/jest/docs/getting-started.html),
<br />`redux-mock-store` (http://arnaudbenard.com/redux-mock-store/) auch 
<br />`enzyme` (http://airbnb.io/enzyme/docs/api/mount.html) 

### Testrunner

Um die Tests auszuführen und bei Veränderungen der Dateien die Tests neu
ausführen zu lassen, kann man den Befehl
<br />`yarn run test` ausführen.

### Testcoverage

Möchte man eine Testcoverage haben, kann man den Befehl
<br />`yarn run test -- --coverage` ausführen.

## Stages
Das Projekt ist in mehere Stages unterteilt, welche alle einen git Tag haben:

`stage-2-with-SearchInput-selector`<br/>
`stage-2-with-SearchInput`<br/>
`stage-2-with-RegisterList`<br/>
`stage-2-with-AddInput-reducer`<br/>
`stage-2-with-AddInput`<br/>
`stage-2-with-redux`<br/>
`stage-2-start`<br/>
`stage-1-end`<br/>
`stage-1-start`<br/>

um mit den Stages zu arbeiten, kann man diese mit
<br />`git checkout <stage>` auschecken.

Um **diese** `README.md` wieder zu erhalten, führt man, nachdem man die
stage ausgecheckt hat den Befehl
<br />`git checkout master README.md` aus.

oder als Einzeiler:
<br />`git checkout <stage> && git checkout master README.md`

Die Stages sind chronologisch geordnet, wobei
`stage-1-start` den Beginn und 
`stage-2-with-SearchInput-selector` das Ende darstellt.

Um mit der ersten Stage zu starten reicht folgender Befehl:
<br />`git clone https://github.com/beac0n/navigatorentreffen-workshop && cd ./navigatorentreffen-workshop && git checkout stage-1-start && git checkout master README.md && yarn && yarn run start`

### Stage 1
In dieser Stage geht es darum, die Grundlagen von React.js zu verstehen.
Da es nicht darum geht CSS zu lernen, wird für das gesamte Projekt
`reactstrap` verwendet (https://reactstrap.github.io/)

#### Aufgabe

Die Aufgabe von Stage 1 ist es die in `App.js` vorhandenen Zeilen
auszuformulieren.

`Search Box`: Hier soll ein Feld erstellt werden, 
mit dem man das Register durchsuchen kann

`Add new Index Item`: Hier soll ein Feld erstellt werden,
mit dem man dem Register einen neuen Eintrag hinzufügen kann

`Index List`: Hier soll ein Feld erstellt werden,
welches alle eingetragenen Elemente anzeigt 
und über die Suche gefiltert werden kann.

In Stage 1 geht es ausschließlich darum mit React.js und `reactstrap`
eine Oberfläche zu erstellen und diese in Komponenten zu Kapseln.
Die Logik wird später über Redux hinzugefügt.

### Stage 2
In dieser Stage get es darum, die Grundlagen von Redux zu verstehen.
Hier wird die Oberfläche die in Stage 1 erstellt wurde mit Logik versorgt.

#### Aufgabe
Die Aufgaben ergeben sich nach und nach über die Substages:

1. `stage-2-with-redux`: Das Projekt aus Stage 1 an Redux anbinden
2. `stage-2-with-AddInput` `stage-2-with-AddInput-reducer`: 
Das Feld, welches für das Hinzufügen eines
neuen Eintrags verantwortlich ist, soll über Redux implementiert werden
3. `stage-2-with-RegisterList`: Die Liste, welche alle Einträge anzeigt, soll
über Redux ihre Einträge erhalten und anzeigen
4. `stage-2-with-SearchInput` `stage-2-with-SearchInput-selector`: 
Die Eingaben, die im Suchen-Feld getätigt werden, soll über Redux 
dafür sorgen, dass die Inhalte der Liste entsprechend gefiltert werden.
