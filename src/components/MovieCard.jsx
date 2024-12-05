import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

const MovieCard = ({ movie, details }) => {
  const movieDetails = details.find((detail) => detail.imdbID === movie.imdbID)

  return (
    <Card className='mb-4' key={movie.imdbID}>
      <Card.Img variant='top' src={movie.Poster} alt={movie.Title} />
      <Card.Body>
        <Card.Title>
          {movie.Title} ({movie.Year})
        </Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Details</Card.Subtitle>
        <Card.Text>
          <strong>Actors:</strong> {movieDetails?.Actors}
        </Card.Text>
        <Card.Text>
          <strong>Awards:</strong> {movieDetails?.Awards}
        </Card.Text>
        <Card.Text>
          <strong>Director:</strong> {movieDetails?.Director}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {movieDetails?.Rated}
        </Card.Text>
        <Card.Text>
          <strong>Runtime:</strong> {movieDetails?.Runtime}
        </Card.Text>
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
