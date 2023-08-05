import React from "react";
import { Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../common/styleBurbujas.css"

const AdministrarProductos = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //peticion GET
    try {
      //codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const listaProducto = await respuesta.json();
      //console.log(respuesta)
      //console.log(listaProducto)
      setProductos(listaProducto);
    } catch (error) {
      //agregar un msj intuitivo para el usuario
      console.log(error);
    }
  };
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4">Productos disponibles</h1>
        <Link to="/administrar/crear" className="btn btn-primary">
          Agregar
        </Link>
      </div>
      <hr></hr>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de la imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/*aqui tengo que mapear*/}
          {productos.map((producto) => (
            <ItemProducto key={producto.id} producto={producto} consultarAPI={consultarAPI}></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AdministrarProductos;
