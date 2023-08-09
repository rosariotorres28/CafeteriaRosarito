import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styleCard.css";

const CardProducto = ({ producto }) => {
  const { nombreProducto, precio, imagen, id } = producto;
  return (
    <Card className="my-4 w-100 rounded-3 shadow img cardB" style={{ height: "300px" }}>
      <Card.Img variant="top" src={imagen} style={{ height: "70%" }} />
      <Card.Body className="cardB d-flex justify-content-center align-items-center flex-column">
        <Card.Title className="text-center text-white">{nombreProducto}</Card.Title>
        <Card.Text className="text-center text">
          Precio: ${precio}
        </Card.Text>
        <div className="data-container">
          <Link to={`/administrar/producto/detalle/${id}`}>
            <Button variant="outline-light" style={{ background: "#fa5656" }}>
              Ver
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;






