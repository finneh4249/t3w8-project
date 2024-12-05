import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

const apiKey = 'bc1fcf6c'

const Home = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [details, setDetails] = useState([])

  const fetchMovies = async () => {
    if (!query) return
    const response = await axios.get('http://www.omdbapi.com', {
      params: {
        apikey: apiKey,
        s: query
      }
    })
    const data = await response.data

    await data.Search.forEach(async (movie) => {
      const response = await axios.get('http://www.omdbapi.com', {
        params: {
          apikey: apiKey,
          i: movie.imdbID
        }
      })
      const data = await response.data
      setDetails(prev => [...prev, data])
    })
    setMovies(data.Search)
  }
  return (
    <div className='home'>
      <div className='header'>
        <h1>Movie Search</h1>
        <Card.Body>
          <input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button variant='primary' type='submit' className='mx-2' onClick={fetchMovies}>
            Search
          </Button>
        </Card.Body>
      </div>
      {movies && (
        <div className='movies'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} details={details} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
