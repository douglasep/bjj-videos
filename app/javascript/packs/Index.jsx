import React from "react";
import $ from 'jquery';
import { render } from "react-dom";
import Popper from 'popper.js';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});