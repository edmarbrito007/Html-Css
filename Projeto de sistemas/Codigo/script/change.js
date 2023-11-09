
function clickapp(){
    var tabelaapp = document.getElementById("tapp")
    var tabelasbl = document.getElementById('tsbl')
    tabelaapp.style.display = "block"
    tabelasbl.style.display  = "none"
}

function clicksbl(){
    var tabelaapp = document.getElementById("tapp")
    var tabelasbl = document.getElementById('tsbl')
    tabelaapp.style.display = "none"
    tabelasbl.style.display  = "block"
}

function clickreport(){
    var repotf = document.getElementById("filas")
    repotf.style.display = 'block'
    if (display == 'block'){
        repotf.style.display = 'none'
    }

}