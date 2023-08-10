import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";
import "../estilos/styleAdministrar.css"

const AdministrarProductos = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaProducto = await respuesta.json();
      setProductos(listaProducto);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-5 bg">
      <div className="container text-center">
        <h1 className="display-4 titulo">Productos disponibles</h1>
        <Link to={`/administrar/crear`}>
          <Button
            variant="outline-light"
            style={{ background: "#f29191" }}
            className="btn"
          >
            Agregar
          </Button>
          </Link>
      </div>
      <hr className="container"></hr>
      <div className="container">
        <Table responsive striped bordered hover className="mx-auto th">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th className="truncar">URL de la imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ItemProducto
                key={producto.id}
                producto={producto}
                consultarAPI={consultarAPI}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default AdministrarProductos;

