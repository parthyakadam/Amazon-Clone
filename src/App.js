import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, NavBar, Checkout, SearchResults, ProductPage } from './components'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App