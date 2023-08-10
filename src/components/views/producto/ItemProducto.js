import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../estilos/styleItem.css";

const ItemProducto = ({ producto, consultarAPI }) => {
  const { nombreProducto, precio, imagen, categoria, id } = producto;
  const URL = process.env.REACT_APP_API_CAFETERIA;

  function truncarTexto(texto, longitudMaxima) {
    if (texto.length > longitudMaxima) {
      var textoTruncado = texto.slice(0, longitudMaxima);
      return textoTruncado + "...";
    } else {
      return texto;
    }
  }

  const handleDelete = () => {
    Swal.fire({
      title: "Estás seguro de borrar?",
      text: "No puedes volver atrás.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const parametros = {
            method: "DELETE",
          };

          const respuesta = await fetch(URL + "/" + id, parametros);
          if (respuesta.status === 200) {
            Swal.fire("Borrado", "El producto fue eliminado", "success");
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
      <Link to={`/administrar/producto/detalle/${id}`}>
      <td>{truncarTexto(imagen, 45)}</td>
      </Link>
      <td>{categoria}</td>
      <td className="d-flex">
        <Link to={`/administrar/editar/${id}`}>
          <Button
            variant="outline-light"
            style={{ background: "#f29191" }}
            className="btn"
          >
            Editar
          </Button>
        </Link>
        <Button
          onClick={handleDelete}
          variant="outline-light"
          style={{ background: "#f29191" }}
          className="btn"
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;


