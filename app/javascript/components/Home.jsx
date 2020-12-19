import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Descubra qual posição treinar hoje</h1>
        <p className="lead">
            Nós encontraremos uma posição para você treinar hoje. 
        </p>
        <hr className="my-4" />
          <Link
            to="/videos"
            className="btn btn-lg principal-button"
            role="button"
          >
            Descobrir Posição do Dia
          </Link>
        {/* </button> */}

      </div>
    </div>
  </div>
);