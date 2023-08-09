import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import gatocafe from "../views/img/gatocafe2.png";
import "./styleFooter.css";

const Footer = () => {
  return (
    <div className="foot container-fluid">
      <div className="row mx-2 justify-content-between">
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start px-md-0">
          <Link to="/">
            <Image src={gatocafe} alt="logo" className="imagen" />
          </Link>
        </div>
        <div className="col-12 col-md-4 py-5">
          <h6 className="text-light"> © TODOS LOS DERECHOS RESERVADOS</h6>
        </div>
        <div className="col-12 col-md-4 py-5">
          <h6 className="text-light">PROGRAMADORA: MARIA DEL ROSARIO TORRES</h6>
          <h6 className="text-light">
            E-MAIL: MARIADELROSARIOTORRES21@GMAIL.COM
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
