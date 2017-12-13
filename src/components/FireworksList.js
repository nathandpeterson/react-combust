import React from 'react'
import Firework from './FireworkItem.js'

const FireworksList = ({ fireworks }) => (
  <div className="container">
    <h1> These are called fireworks! 🎆 🎆 🎆 </h1>
    <ul className="list-group">
      {fireworks.map(firework => <Firework key={firework.id} firework = {firework} />)}
    </ul>
    <p>string version</p>
    {JSON.stringify(fireworks)}
  </div>
)

export default FireworksList
