function aa(){

    // se crea variable para guardar el hueco de donde quieres
    // guardar ese elemento que vas a crear
    let aa = document.getElementById("seccionTercera");

    // se guarda el elemento que deseemos crear
    var nuevaH = document.createElement('h2');
    
    // se guarda en variable el texto qeu vamos a introducir
    var text = document.createTextNode('Lorem Ipsum de nuevo');
    
    aa.childNodes(nuevaH).createTextNode('Pruebaaaaaa');
}