import { RandomPassword } from "./RandomPassword.js";

const d = document,
$botones = d.querySelector(".botones"),
$clavePanel = d.querySelector(".clave"),
$claveR = d.querySelector("#clave"),
$atras = d.querySelector(".atras");



d.addEventListener("click",e =>{

    let claveR = "";

    if (!e.target.matches(".boton-8") && !e.target.matches(".boton-12") && !e.target.matches(".boton-24")) return false;
    
    claveR = RandomPassword(e.target.id);

    $botones.classList.add("none");
    $clavePanel.classList.remove("none");

    $claveR.innerHTML =`${claveR}`;

});

$atras.addEventListener("click",e =>{
    $clavePanel.classList.add("none");
    $botones.classList.remove("none");
});


