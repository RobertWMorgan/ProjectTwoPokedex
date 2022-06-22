//TODO 1) imports
//React & Axios
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// JSX components
import IndexComponent from './IndexComponent'

//TODO 2) Arrow function
const PokemonIndex = () => {
  // Pokemon State
  const [ pokemons, setPokemons ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')

  useEffect(() => {
    const getPokemon = async () => {
      try {
        // we can change limit of Pokemon returned by using '?limit=1126' on end of API - from PokeAPI documentation under 'Resource Lists/Pagination'
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1126')
        setPokemons(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon()
  }, [])


  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleFilter = () => {
    return pokemons.filter(pokemon => {
      const names = pokemon.name.toLowerCase()
      const searchLower = searchInput.toLowerCase()
      return (names.includes(searchLower))
    })
  }


  return (
    <>
      <form>
        <input type='text' placeholder='Search...' value={searchInput} onChange={handleSearch}></input>
      </form>
      <Container className='pokemon-list'>
        <Row>
          {handleFilter().map((pokemon, index) => {
            // const { name } = pokemon
            return (
              <IndexComponent key={index} {
                ...pokemon
              }/>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

//TODO 3) export PokemonIndex.js and import to App.js
export default PokemonIndex