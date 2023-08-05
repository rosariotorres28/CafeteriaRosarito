import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, consultarAPI }) => {
  const { nombreProducto, precio, imagen, categoria, id } = { ...producto };
  const URL = process.env.REACT_APP_API_CAFETERIA;

  const handleDelete = () => {
    Swal.fire({
      title: "Estas seguro de borrar?",
      text: "No puede volver atrás!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //realizar la peticion para eliminar un producto DELETE
        try {
          const parametros = {
            method: "DELETE",
          };

          const respuesta = await fetch(URL + "/" + id, parametros);
          if (respuesta.status === 200) {
            Swal.fire("Borrado!", "El producto fue eliminado", "success");
            //recargar o actualizar la tabla de productos
            consultarAPI();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td className="d-flex">
        <Link to={`/administrar/editar/${id}`} className="btn btn-warning mx-2">
          Editar
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
