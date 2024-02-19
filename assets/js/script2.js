var boton1 = document.getElementById("btn-1");
boton1.addEventListener('click',function(){
    cambiarColor("#e53e3e");
});

var boton2 = document.getElementById("btn-2");
boton2.addEventListener('click',function(){
    cambiarColor("#dd6b20");
});

var boton3 = document.getElementById("btn-3");
boton3.addEventListener('click',function(){
    cambiarColor("#faf089");
});

var boton4 = document.getElementById("btn-4");
boton4.addEventListener('click',function(){
    cambiarColor("#48bb78");
});

var boton5 = document.getElementById("btn-5");
boton5.addEventListener('click',function(){
    cambiarColor("#81e6d9");
});

var boton6 = document.getElementById("btn-6");
boton6.addEventListener('click',function(){
    cambiarColor("#d53f8c");
});

function cambiarColor(color){
    document.getElementById("caja").setAttribute('style', `background-color: ${color}; border:1px solid black;width: 100%;height: 100%`);
}