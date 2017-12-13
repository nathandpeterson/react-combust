import React, { Component } from 'react'
import FireworksList from './components/FireworksList.js'

const fireworksData = [
  { id: 1, name: 'Red & Blue Peony', attributeIds: [ 1, 3, 4, 8 ] },
  { id: 2, name: 'Mini-Flying Fish', attributeIds: [ 2, 6, 7 ] }
]

const attributeData = [
  { id: 1, kind: 'color', value: 'red' },
  { id: 2, kind: 'color', value: 'white' },
  { id: 3, kind: 'color', value: 'blue' },
  { id: 4, kind: 'shape', value: 'circular' },
  { id: 5, kind: 'shape', value: 'fan' },
  { id: 6, kind: 'shape', value: 'random' },
  { id: 7, kind: 'size', value: 'small' },
  { id: 8, kind: 'size', value: 'medium' },
  { id: 9, kind: 'size', value: 'large' },
]

class App extends Component {
  render() {
    return ( <main>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Combustible Whatever</h1>
        </div>
      </div>
      <FireworksList fireworks={ fireworksData } attributes={ attributeData } />
    </main>
    )
  }
}

export default App
