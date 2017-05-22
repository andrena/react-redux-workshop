# Stage 2
Dies ist der Branch für die erste Aufgabe (stage-2)

## Aufgabe
Das Ziel der ersten Aufgabe ist es, die in stage-1 erstellte Oberfläche mit Logik
zu versehen. Hierzu soll `Redux` verwendet werden.

Die in stage-1 geschriebenen Komponenten sind in den Ordner `/src/components`
verschoben worden.

Weiterhin wurde ein neuer Ordner `/src/redux/` erstellt, welcher die notwendigen
`Redux` Teile beinhaltet.

### Hinzufügen-Feld

<span style="color: red;">**_Ist auf diesem Branch bereits implementiert_**</span>

Es soll ein Feld hinzgefügt werden, mit welchem man neue Elemente
in das Register einfügen kann. Die eingefügten Elemente sollen dann in der
Liste angezeigt werden.

### Liste
Es soll eine neue React-Komponente erstellt werden,
welche die Elemente des zu implementierenden Registers enthält.

Diese Liste soll ihre Daten aus dem Redux-Store erhalten.

### Suchfeld
Es soll ein Feld hinzugefügt werden, mit welchem man in der Liste
suchen kann. Hierbei soll der Nutzer bei jedem Tastaturanschlag das Ergebnis
des momentanen Suchbegriffs erhalten. Es ist also kein "Suchen"-Button
oder ähnliches nötig.

## Links
Folgende Links können für den Einstieg hilfreich sein:
* Todo App Beispiel: http://redux.js.org/docs/basics/ExampleTodoList.html
* redux-connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
* Code-Cartoon: https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6

## Hinweise
Wie binde ich eine React Komponente an den Redux-Store?

**foo.js**
```
// UI stuff
import React from 'react'
import {Input} from 'reactstrap'

// bindet Komponente an Redux-Store
import {connect} from 'react-redux'

// action-creator: http://redux.js.org/docs/basics/Actions.html#action-creators
import {actions} from '../redux/actions'

// React-Komponente - hat kein Wissen über den Redux-Store
const Foo = ({doStuff, stuff}) => (
    <div>Ich bin eine React Komponente mit {stuff}</div>
)

// Bindet den Redux-State an die Komponente
const mapStateToProps = (state) => (
    {stuff: state.stateStuff}
)

// Bindet die actions an die Komponente
const mapActionsToProps = {
    doStuff: actions.doStuffAction
}

export default connect(mapStateToProps, mapActionsToProps)(Foo)
```
