let peso = document.getElementById(peso).value
let altura = document.getElementById(altura).value

let indice = (peso / (altura ** 2))

function calcular(){
    alert("Datos enviados");
    document.getElementById('form').submit()
}