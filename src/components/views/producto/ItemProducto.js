import React from 'react';
import { Button } from 'react-bootstrap';

const ItemProducto = (props) => {
    return (
        <tr>
        <td>{props.producto.id}</td>
        <td>{props.producto.nombreProducto}</td>
        <td>{props.producto.precio}</td>
        <td>{props.producto.imagen}</td>
        <td>{props.producto.categoria}</td>
        <td>
          <Button variant="warning">Editar</Button>
          <Button variant="danger">Borrar</Button>
        </td>
      </tr>
    );
};

export default ItemProducto;