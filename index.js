var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}