/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateExcuse();
};

function generateExcuse() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["se comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "mi teléfono", "el coche"];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras estaba haciendo ejercicio",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];

  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];

  document.getElementById("excuse").innerHTML = excuse;
}
