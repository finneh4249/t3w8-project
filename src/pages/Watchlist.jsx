import { useWatchlist } from '../context/WatchlistContext'
import { Container, ListGroup, Button, Alert, Image } from 'react-bootstrap'

export default function Watchlist () {
  const { watchlist, removeFromWatchlist } = useWatchlist()

  return (
    <Container className='mt-5'>
      <h1>Watchlist</h1>
      {watchlist.length === 0
        ? (
          <Alert variant='info'>No movies in your watchlist.</Alert>
          )
        : (
          <ListGroup>
            {watchlist.map((movie) => (
              <ListGroup.Item
                key={movie.imdbID}
                className='d-flex justify-content-between align-items-center'
              >
                <div className='d-flex align-items-center'>
                  <Image
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/50'}
                    alt={movie.Title}
                    rounded
                    style={{ height: '200px', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div>
                    <strong>{movie.Title}</strong> ({movie.Year})
                  </div>
                </div>
                <Button
                  variant='danger'
                  size='sm'
                  className='mx-2'
                  onClick={() => removeFromWatchlist(movie)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          )}
    </Container>
  )
}
