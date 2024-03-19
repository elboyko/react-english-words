
import './App.css'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import { Home, Cards, ErrorPage, Item } from "./pages"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {

  return (
    <Router>
      <div className="container">
        <header> <Header /></header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item' element={<Item />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <footer> <Footer /></footer>
      </div>
    </Router>
  )
}

export default App
