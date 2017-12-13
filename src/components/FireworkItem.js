import React from 'react'
import FireworkAttributes from './FireworkAttributes.js'

const FireworkItem = ({firework, attributes}) => {
  return <li className="list-group-item">
    Name: {firework.name} Attributes: <FireworkAttributes fireworkAttributes ={firework.attributeIds} attributes={attributes} />
  </li>
}

export default FireworkItem
