
console.log("passou pelo BODY")
// alert("ola")

var a =3
var b =8
var soma = 3 +8
console.log(" a soma é " + soma)

var paragrafo = document.querySelector("p")
paragrafo.textContent = "oi, programadores"

var x = 0

function salvar (){
    // alert(" dados salvos com sucesso")
    paragrafo.textContent = "valor: " + x
    paragrafo.style.color = getCor(x%3)
    paragrafo.style.fontWeight = "bold"
    x = x +10 // x++
}

function getCor(n){
    cores = ["red", "blue", "green"]
    return cores [n]
}

//var botao = document.querySelector("#botaoSalvar")
//botao.onclick = salvar()