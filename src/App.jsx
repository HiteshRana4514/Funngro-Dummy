import './assets/css/App.css'
import './assets/css/responsive.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Teen from './components/Teen'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <Routes>
          <Route path="/Funngro-Dummy/" element={<Home />} />
          <Route path="/Funngro-Dummy/teen" element={<Teen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
