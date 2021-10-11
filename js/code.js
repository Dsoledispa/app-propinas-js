function calculo() {
    //alert("hello");
    let totalCuenta = document.getElementById('total').value;
    //alert(totalCuenta);
    //let servicio = document.getElementsByName('servicio')[0].value;
    //alert(servicio);
    //let personas = document.getElementsByClassName('personas')[0].value;
    //alert(personas);
    let servicio = document.getElementById('servicio').value;
    let personas = document.getElementById('personas').value;
    let resultado = (totalCuenta * servicio) / personas;
    console.log('resultado: ' + resultado);
    if (isNaN(resultado)) {
        alert('Introduce datos validos');
    } else if (personas == 0 || personas == null) {
        alert('Introduce un valor para la cantidad de personas');
    } else {
        document.getElementById("res").innerHTML = "<p>total a pagar</p><br><h3>" + resultado + " por persona</h3>";
    }
    //console.log('total: ' + totalCuenta + ' servicio: ' + servicio + ' personas: ' + personas);
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById('personas').value = "";
    document.getElementById('total').value = "";
}