import React, { useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { cantidadCaracteres, validarPrecio } from "./helpers";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const { id } = useParams();
  console.log(useParams);
  console.log(id);

  const [producto, setProducto] = useState({});

  const URL = process.env.REACT_APP_API_CAFETERIA;

  //referencias
  const nombreProductoRef = useRef("");
  const precioRef = useRef(0);
  const imagenRef = useRef("");
 // navigate
 const navegacion = useNavigate();

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const dato = await respuesta.json();
      setProducto(dato);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar que todos los campos son correctos
    console.log(nombreProductoRef);
    console.log(nombreProductoRef.current);
    console.log(nombreProductoRef.current.value);
    if (
      cantidadCaracteres(nombreProductoRef.current.value) &&
      validarPrecio(precioRef.current.value)
    ) {
      //crear un objeto con los datos modificados
      const productoEditar = {
        nombreProducto: nombreProductoRef.current.value,
        precio: precioRef.current.value,
        imagen: imagenRef.current.value,
        categoria: producto.categoria
      };
      console.log(productoEditar);
      //pedir a la api la actualizacion
      try {
        const respuesta = await fetch(`${URL}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoEditar)
        });
        if (respuesta.status === 200) {
          Swal.fire(
            "Producto editado!",
            "El producto fue editado con éxito",
            "success"
          );
          //redirecciono a la pagina de administrar
          navegacion("/administrar")
        }
      } catch (error) {
        console.log(error);
      }
      //redireccionar a la pagina de productos
    } else {
      //mostrar un msj de error al usuario
    }
  };
  return (
    <section className="container pb-5">
      <h1 className="display-4 pt-5">Editar producto</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Café"
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 100"
            defaultValue={producto.precio}
            ref={precioRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="http://..."
            defaultValue={producto.imagen}
            ref={imagenRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={producto.categoria}
            onChange={(e) =>
              setProducto({ ...producto, categoria: e.target.value })
            }
          >
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
