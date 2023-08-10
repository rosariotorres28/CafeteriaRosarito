import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdministrarProductos from "./components/views/producto/AdministrarProductos";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DetalleProducto from "./components/views/producto/DetalleProducto";
import Home from "./components/views/producto/Home"

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>

      <Routes>
      <Route
          exact
          path="/"
          element={<Home></Home>}
        ></Route>
        <Route
          exact
          path="/administrar"
          element={<AdministrarProductos></AdministrarProductos>}
        ></Route>
        <Route
          exact
          path="/administrar/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/producto/detalle/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
