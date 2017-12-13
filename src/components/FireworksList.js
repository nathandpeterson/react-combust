import React from 'react'
import Firework from './FireworkItem.js'

const FireworksList = ({ fireworks, attributes }) => (
  <div className="container">
    <h1> These are called fireworks! 🎆 🎆 🎆 </h1>
    <ul className="list-group">
      {fireworks.map(firework => <Firework key={firework.id} firework = {firework} attributes = { attributes }/>)}
    </ul>

  </div>
)

export default FireworksList
