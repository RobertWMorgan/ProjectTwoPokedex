//TODO 1) imports
//React & Axios
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//react-router-dom
import { useParams } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'



//TODO 2) Arrow function
const PokemonShow = () => {

  // states
  const [ pokemon, setPokemon ] = useState(null)
  const [ pokemonChain, setPokemonChain] = useState(null)
  
  const [ previousEvolutionName, setPreviousEvolutionName ] = useState(null)
  const [ previousEvolutionImage, setPreviousEvolutionImage ] = useState(null)
  const [ nextEvolutionImage, setNextEvolutionImage ] = useState(null)
  const [ nextEvolutionName, setNextEvolutionName ] = useState(null)
  
  const { name } = useParams()

  // update pokemon state
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemon(data)
      } catch (error) {
        console.log(error)
      }
    }

    //TODO functions for evoultion names and pictures
    // 1) retrieves 3rd API info; 2) updates previousEvolutionName state (if it exists)
    const getEvolution = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        setPokemonChain(data)
        if (data.evolves_from_species){
          setPreviousEvolutionName(data.evolves_from_species.name)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getPokemon()
    getEvolution()
  }, [])

  // compares with current name to check if nextEvolutionName exists, if true updates nextEvolutionName state
  useEffect(() => {
    if (pokemonChain){
      const evoData = async () => {
        try {
          const { data } = await axios.get(pokemonChain.evolution_chain.url)
          if (data.chain.evolves_to[0].evolves_to[0] && data.chain.evolves_to[0].evolves_to[0].species.name === name){
            setNextEvolutionName(null)
          } else if (data.chain.evolves_to[0].species.name === name) {
            setNextEvolutionName(data.chain.evolves_to[0].evolves_to[0].species.name)
          } else {
            setNextEvolutionName(data.chain.evolves_to[0].species.name)
          }
        } catch (error) {
          console.log(error)
        }
      }
      evoData()
    } else if (!pokemonChain){
      console.log('notyet')
    }

  }, [pokemonChain])

  // updating previousEvolutionImage state if previousEvolutionName is truthy
  const getPreviousPokemonImage = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${previousEvolutionName}`)
      setPreviousEvolutionImage(data.sprites.front_default)
    } catch (error) {
      console.log(error)
    }
  }
  getPreviousPokemonImage()

  // updating nextEvolutionImage state if nextEvolutionName is truthy
  const getNextPokemonImage = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nextEvolutionName}`)
      setNextEvolutionImage(data.sprites.front_default)
    } catch (error) {
      console.log(error)
    }
  }
  getNextPokemonImage()


  return (
    <div>
      {pokemon ?
        <Container>
          <Row>
            <Col>
              <h1>{pokemon.name}</h1>
              <div id='show_types'>
                {pokemon.types.map(pokemonType => {
                  const { slot, type } = pokemonType
                  return <div className={type.name} key={slot}><h2>{type.name}</h2></div>
                })}
              </div>
              <div className='pokemon-stats'>
                {pokemon.stats.map((stat, index) => {
                  return (
                    <Container className='stats' key={index}>
                      <Row>
                        <Col>
                          <div>
                            {stat.stat.name}
                          </div>
                          <div>
                            {stat.base_stat}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  )
                })} 
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Moves</Accordion.Header>
                  <Accordion.Body>
                    {pokemon.moves.map((pokemon, index) => {
                      return (
                        <div key={index}>
                          {pokemon.move.name}
                        </div>
                      )
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <div className='pokemon-image'>
                <h2>#{pokemon.id}</h2>
                <img src={pokemon.sprites.other['official-artwork'].front_default} />
              </div>
              <div className='evos'>
                {previousEvolutionName && 
                <div className='previous_evolution'>
                  <img src={previousEvolutionImage} />
                  <p>Previous Evolution: {previousEvolutionName}</p>
                </div>
                }
                {nextEvolutionName && 
                <div className='next_evolution'>
                  <img src={nextEvolutionImage} />
                  <p>Next Evolution: {nextEvolutionName}</p>
                </div>
                }
              </div>
            </Col>
          </Row>
        </Container>
        :
        <h1>Loading...</h1>
      } 

    </div>
  )

}

//TODO 3) export PokemonShow.js and import to App.js
export default PokemonShow