import './App.css'
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout'
import DetallePersonaje from './components/collections/DetallePersonaje'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/detalle/:id" element={<DetallePersonaje />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
