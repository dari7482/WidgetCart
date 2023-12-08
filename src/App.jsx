
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Compra from "./pages/Compra.jsx"
import Data from "./pages/Data.jsx"
import Productos from "./pages/Productos.jsx"
import DatosCompra from "./pages/DatosCompra.jsx"
//import Montaje from './components/Montaje/Montaje'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Compra/:id/:orderid" element={<Compra />} />
          <Route path="/DatosPersonales/:id" element={<Data />} />
          <Route path="/Productos/:id" element={<Productos />} />
          <Route path="/DatosCompra/:idcar/:iduser" element={<DatosCompra />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
