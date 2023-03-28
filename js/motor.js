var funcionLicuadora = "apagada"
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");



function perillaLicuadora() { 
    if (funcionLicuadora == "apagada") {
        funcionLicuadora = "encendido";
        hacerRuido();
        licuadora.classList.add("active");
    } else { 
        funcionLicuadora ="apagada"
        hacerRuido();
        licuadora.classList.remove("active");
    }
}

function hacerRuido(){
    if(sonidoLicuadora.pause) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
    }
}

