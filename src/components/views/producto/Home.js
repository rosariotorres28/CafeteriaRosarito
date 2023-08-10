import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardProducto from "./CardProducto";
import "../estilos/styleHome.css";

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
      <h2 className="texto">
        Bienvenidos a mi acogedor CRUD de cafetería llamado "Rosarito gato
        café", en donde podrás observar que en el navbar hay tres páginas que te
        direccionan a diferentes secciones, entre ellas podés encontrar la
        página INICIO, en la cual se presentan la mayoría de los productos y
        delicias presentes en mi cafetería, detallando su respectiva imagen, su
        nombre y su precio. Luego tenemos la página para ADMINISTRAR, la cual
        presenta una tabla con el código del producto, el producto en sí, su
        precio, el link de la imagen, su categoría y las opciones tanto para
        editar el producto o borrarlo. Y por último y no menos importante
        llegamos a la página de CREAR, en donde se muestra un formulario para
        cargar los productos ingresados y así pasar a formar parte de nuestro
        stock. Espero que haya sido de tu agrado la visita a mi CRUD, ante
        cualquier duda o consulta podes comunicarte por mail:
        mariadelrosariotorres21@gmail.com. Muchas gracias por dedicarle parte de
        tu tiempo a mirar mi trabajo, saludos cordiales.
      </h2>
      <hr />
      <div>
        <h2 className="text-center py-3">
          {" "}
          ALGUNAS DE NUESTRAS DELICIAS EN STOCK
        </h2>
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
