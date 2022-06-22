//TODO 1) imports
//React
import React, { useState, useEffect } from 'react'

//react-router-dom
import { Link } from 'react-router-dom'

// Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//TODO 2) Arrow function
const IndexComponent = ({ name, url }) => {

  const getIndex = () => {
    const urlSplit = url.split('/')
    return urlSplit[urlSplit.length - 2]
  }

  return (
    <Col className='pokemon-card' md='3' lg='2'>
      <Link to={`/pokemons/${name}`}>
        <Card>
          <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIndex()}.png`} />
          <div>
            {name}
          </div>
        </Card>
      </Link>
    </Col>
  )
}

//TODO 3) export IndexComponent.js and import to App.js
export default IndexComponent