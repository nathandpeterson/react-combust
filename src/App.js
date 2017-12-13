import React, { Component } from 'react'
import FireworksList from './components/FireworksList.js'

const fireworksData = [
  { id: 1, name: 'Red & Blue Peony', attributeIds: [ 1, 3, 4, 8 ] },
  { id: 2, name: 'Mini-Flying Fish', attributeIds: [ 2, 6, 7 ] }
]

class App extends Component {
  render() {
    return ( <main>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Combustible Whatever</h1>
        </div>
      </div>
      <FireworksList fireworks={ fireworksData } />
    </main>
    )
  }
}

export default App
