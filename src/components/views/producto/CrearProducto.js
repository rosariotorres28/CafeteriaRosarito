import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CrearProducto = () => {
    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Nuevo producto</h1>
            <hr></hr>
            <Form>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre producto</Form.Label>
        <Form.Control type="email" placeholder="Ej: Café" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="email" placeholder="Ej: 100" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="email" placeholder="http://..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Seleccione una opción</option>
      <option value="1">Bebida-fria</option>
      <option value="2">Bebida-caliente</option>
      <option value="3">Dulce</option>
      <option value="4">Salado</option>
    </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </section>
    );
};

export default CrearProducto;