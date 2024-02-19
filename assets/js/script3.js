var botonSumar = document.getElementById("btn-sumar");
botonSumar.addEventListener('click',function(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    let resultado = num1 + num2;
    document.querySelector(".resultado").innerHTML = resultado;
});

var botonRestar = document.getElementById("btn-restar");
botonRestar.addEventListener('click',function(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    let resultado = num1 - num2;
    if(resultado < 0 ){
        resultado = 0;
    }
    document.querySelector(".resultado").innerHTML = resultado;
});