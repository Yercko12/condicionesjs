function Verificar1(){
    const numero1= document.getElementById('numero1').value;
    const numero2= document.getElementById('numero2').value;
    const numero3= document.getElementById('numero3').value;

const contra =numero1 + numero2 + numero3;

const texto = document.getElementById('texto')

if(contra === "911"){
        texto.innerText ="password 1 correcta"
} else if(contra === "714" ){
    texto.innerText ="password 2 correcta"
} else {
    texto.innerText ="password incorrecta"
}

}

