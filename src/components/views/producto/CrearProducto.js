import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { cantidadCaracteres, validarPrecio } from "./helpers.js";
import Swal from "sweetalert2";

const CrearProducto = () => {
  //crear states
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState ("");
  const [msjError, setMsjError] = useState (false);

  //variable de entorno con la direccion de mi api
  const URL = process.env.REACT_APP_API_CAFETERIA

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los datos
    if(cantidadCaracteres (nombreProducto) && validarPrecio(precio)){
      setMsjError(false)
      //crear un objeto
    const nuevoProducto = {
      nombreProducto: nombreProducto,
      precio: precio,
      imagen: imagen,
      categoria: categoria
    }
    console.log(nuevoProducto)
    //enviar peticion a json server (api) create
    try{
      const respuesta = await fetch(URL, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"},
          body: JSON.stringify(nuevoProducto)
      });
      if(respuesta.status === 201){
        //mostrar un msj que todo salió bien
        Swal.fire(
          'Producto creado!',
          'El producto fue creado con éxito',
          'success'
        )
      }

    }catch(error){
      console.log(error)
    }

    }else{
      setMsjError(true)
    }
    
  };

  return (
    <section className="container">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Café"
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 100"
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="http://..."
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setCategoria(e.target.value)}>
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
      {
        (msjError === true)? (<Alert variant= "danger" className= "mt-4 text-center">
        Debe corregir los datos
      </Alert>): null
      }
      
    </section>
  );
};

export default CrearProducto;
