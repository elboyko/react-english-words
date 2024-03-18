
import './App.css'
import Main from "./components/Main/Main"
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import { Home, Cards, ErrorPage, Item } from "./Pages"
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
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
