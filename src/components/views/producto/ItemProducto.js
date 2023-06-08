import React from 'react';
import { Button } from 'react-bootstrap';

const ItemProducto = () => {
    return (
        <tr>
        <td>1</td>
        <td>Café</td>
        <td>700</td>
        <td>
          https://www.pexels.com/es-es/foto/capuchino-en-taza-de-ceramica-3879495/
        </td>
        <td>Bebida-caliente</td>
        <td>
          <Button variant="warning">Editar</Button>
          <Button variant="danger">Borrar</Button>
        </td>
      </tr>
    );
};

export default ItemProducto;