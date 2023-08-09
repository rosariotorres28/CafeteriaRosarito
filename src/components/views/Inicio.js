import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import "./styleInicio.css";

const Home = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaAPI();
  }, []);

  const consultaAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaProductos = await respuesta.json();

      setProductos(listaProductos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-5 bg py-5">
      <h1 className="display-4 py-5 text-center">ROSARITO GATO CAFE</h1>
      <hr />
      <h3 className="texto">
        {" "}
        ¡Bienvenidos a nuestra acogedora cafetería, donde el aroma del café
        recién hecho y la calidez del ambiente gatuno te da la bienvenida a cada paso!
        En nuestro espacio, nos esforzamos por crear una experiencia única para
        los amantes del buen café y la buena compañía de 4 patas. Desde la selección de
        granos hasta la cuidadosa preparación de cada bebida, cada detalle está
        diseñado para brindarte momentos de satisfacción y relajación. Ya sea
        que estés buscando un lugar tranquilo para trabajar, una reunión con
        amigos o simplemente un rincón para disfrutar de un momento para ti!
      </h3>
      <hr/>
      <div>
        <h2 className="text-center py-3"> ALGUNAS DE NUESTRAS DELICIAS EN STOCK</h2>
      </div>
      <Row xs={1} md={4} className="g-4">
        {productos.map((producto) => (
          <Col key={producto._id}>
            <CardProducto producto={producto}></CardProducto>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
