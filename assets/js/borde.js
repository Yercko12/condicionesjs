let tieneBorde = false;
function cambiarBorde() {
    const imagen = document.getElementById("gatoimagen");
    if (tieneBorde === false) {
        imagen.style.border ="5px solid red";
        tieneBorde= true;
    } else{
        imagen.style.border ="none"
        tieneBorde = false
    }        
}

