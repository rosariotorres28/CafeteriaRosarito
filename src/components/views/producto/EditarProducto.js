import React from "react";
import { Form, Button } from "react-bootstrap";

const EditarProducto = () => {
  return (
    <section className="container">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr></hr>
      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control type="text" placeholder="Ej: Café" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ej: 100" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="http://..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="">Seleccione una opción</option>
            <option value="bebida fria">Bebida-fria</option>
            <option value="bebida caliente">Bebida-caliente</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      {/*} {msjError === true ? (
        <Alert variant="danger" className="mt-4 text-center">
          Debe corregir los datos
        </Alert>
     ) : null} */}
    </section>
  );
};

export default EditarProducto;
