import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Aula from './pages/Aula'
import Pratica from './pages/Pratica'
import IA from './pages/IA'
import Avaliacao from './pages/Avaliacao'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="/pratica" element={<Pratica />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App