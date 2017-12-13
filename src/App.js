import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div classList="jumbotron jumbotron-fluid">
        <div classList="container">
          <h1 classList="display-3">Fluid jumbotron</h1>
          <p classList="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    )
  }
}

export default App
