import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import AdministrarProductos from "./components/views/producto/AdministrarProductos";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className="bg-animate">
        <div className="burbujas">
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
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
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        </div>
        <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
