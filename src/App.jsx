
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Compra from "./pages/Compra.jsx"
import Productos from "./pages/Productos.jsx"
//import Montaje from './components/Montaje/Montaje'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Compra" element={<Compra />} />
          <Route path="/Productos/:id" element={<Productos />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
