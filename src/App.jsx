import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import WatchlistProvider from './context/WatchlistContext'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <WatchlistProvider>
    <Router>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            MovieApp
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/watchlist'>
                Watchlist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </Router>
    <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
  </WatchlistProvider>
)

export default App
