import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Placeholder } from 'react-bootstrap'
import { useWatchlist } from '../context/WatchlistContext'

const MovieCard = ({ movie, details }) => {
  const { addToWatchlist } = useWatchlist()
  const movieDetails = details.find((detail) => detail.imdbID === movie.imdbID)

  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true) // To stop showing the placeholder
  }

  return (
    <Card className='mb-4'>
      {!imageLoaded && (
        <Placeholder
          as={Card.Img}
          variant='top'
          animation='glow'
          style={{ height: '300px', backgroundColor: '#e0e0e0' }}
        />
      )}
      {!imageError && (
        <Card.Img
          variant='top'
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
          alt={movie.Title}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={imageLoaded ? {} : { display: 'none' }}
        />
      )}
      {imageError && (
        <Card.Img
          variant='top'
          src='https://via.placeholder.com/150'
          alt='Placeholder'
          style={{ height: '300px', objectFit: 'cover' }}
        />
      )}
      <Card.Body>
        <Card.Title>
          {movie.Title} ({movie.Year})
        </Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Details</Card.Subtitle>
        {movieDetails
          ? (
            <>
              <Card.Text>
                <strong>Actors:</strong> {movieDetails.Actors}
              </Card.Text>
              <Card.Text>
                <strong>Awards:</strong> {movieDetails.Awards}
              </Card.Text>
              <Card.Text>
                <strong>Director:</strong> {movieDetails.Director}
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> {movieDetails.Rated}
              </Card.Text>
              <Card.Text>
                <strong>Runtime:</strong> {movieDetails.Runtime}
              </Card.Text>
            </>
            )
          : (
            <>
              <Card.Text>
                <strong>Actors:</strong>{' '}
                <Placeholder as='span' animation='glow'>
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
                </Placeholder>
              </Card.Text>
              <Card.Text>
                <strong>Awards:</strong>{' '}
                <Placeholder as='span' animation='glow'>
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Card.Text>
              <Card.Text>
                <strong>Director:</strong>{' '}
                <Placeholder as='span' animation='glow'>
                  <Placeholder xs={5} /> <Placeholder xs={7} />
                </Placeholder>
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong>{' '}
                <Placeholder as='span' animation='glow'>
                  <Placeholder xs={3} />
                </Placeholder>
              </Card.Text>
              <Card.Text>
                <strong>Runtime:</strong>{' '}
                <Placeholder as='span' animation='glow'>
                  <Placeholder xs={4} />
                </Placeholder>
              </Card.Text>
            </>
            )}
        <Button
          type='button'
          variant='primary'
          onClick={() => addToWatchlist(movie)}
          className='mt-3'
        >
          Add to Watchlist
        </Button>
      </Card.Body>
    </Card>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired
  }).isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Actors: PropTypes.string,
      Awards: PropTypes.string,
      Director: PropTypes.string,
      Rated: PropTypes.string,
      Runtime: PropTypes.string
    })
  ).isRequired
}

export default MovieCard
