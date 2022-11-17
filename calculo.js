function somar(){
    var c1 = parseFloat(document.getElementById("c1").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var c3 = parseFloat(document.getElementById("c3").value);
    var resultado = c1 + c2 + c3;

    document.getElementById("resultado").value =  resultado;
}