import React from 'react'

const FireworkItem = ({firework}) => {
  return <li className="list-group-item">
    Name: {firework.name} Attributes: {firework.attributeIds}
  </li>
}

export default FireworkItem
