// WatchlistContext.jsx
import { createContext, useContext } from 'react'
import { useLocalStorage } from 'react-use'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const WatchlistContext = createContext()

export default function WatchlistProvider ({ children }) {
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', [])

  const addToWatchlist = (movie) => {
    if (!watchlist.find((item) => item.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie])
      toast.success(`${movie.Title} has been added to your watchlist!`)
    } else {
      toast.info(`${movie.Title} is already in your watchlist.`)
    }
  }

  const removeFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((item) => item.imdbID !== movie.imdbID))
    toast.warn(`${movie.Title} has been removed from your watchlist.`)
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  )
}

WatchlistProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useWatchlist () {
  return useContext(WatchlistContext)
}
