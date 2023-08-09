import React, { useState, useEffect } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../views/producto/styleDetalle.css";

const DetalleProducto = () => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_CAFETERIA;
  const [producto, setProducto] = useState({});

  useEffect(() => {
    consultaAPI();
  }, []);

  const consultaAPI = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const dato = await respuesta.json();
      setProducto(dato);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg py-5">
      <Container className="my-5">
        <Card className="bg-card text-light">
          <Row>
            <Col md={6}>
              <img
                src={producto.imagen}
                alt={producto.nombreProducto}
                className="w-100 cardi"
              />
            </Col>
            <Col md={6} className="py-3">
              <h3 className="text-center">{producto.nombreProducto}</h3>
              <hr />
              <p className="mt-3 text-center">
                <b>Precio: ${producto.precio}</b>
              </p>
              <Badge bg="success" className="bad">
                {producto.categoria}
              </Badge>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default DetalleProducto;

