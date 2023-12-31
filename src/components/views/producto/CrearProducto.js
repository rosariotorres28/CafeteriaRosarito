import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { cantidadCaracteres, validarPrecio } from "./helpers.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CrearProducto = () => {

  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState ("");
  const [msjError, setMsjError] = useState (false);

  
  const URL = process.env.REACT_APP_API_CAFETERIA
  
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(cantidadCaracteres (nombreProducto) && validarPrecio(precio)){
      setMsjError(false)
    const nuevoProducto = {
      nombreProducto: nombreProducto,
      precio: precio,
      imagen: imagen,
      categoria: categoria
    }

    try{
      const respuesta = await fetch(URL, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"},
          body: JSON.stringify(nuevoProducto)
      });
      if(respuesta.status === 201){
        Swal.fire(
          'Producto creado!',
          'El producto fue creado con éxito',
          'ok'
        )

        navegacion("/administrar");
      }

    }catch(error){
      console.log(error)
    }

    }else{
      setMsjError(true)
    }
    
  };

  return (
    <section className="px-5 pb-5 bg">
      <h1 className="display-4 pt-5 text-center">Nuevo producto</h1>
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
        <Button variant="outline-light"style={{ background: "#f29191" }} type="submit">
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
