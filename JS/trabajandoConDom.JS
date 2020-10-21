function aa(){

    // se crea variable para recuperar el div entero de donde quieres y guardar ese elemento que vas a crear
    let aa = document.getElementById("seccionTercera");

    // se guarda el elemento que deseemos crear
    let nuevaH = document.createElement('h2');
    
    // se guarda en variable el texto qeu vamos a introducir
    let text = document.createTextNode('Lorem Ipsum de nuevo');

    /*Añado nodo con appendChild, donde meto entre parentesis el h2 creado dentro del hueco creado de la secciontercera llamada 'aa'. Posteriormente en el elemento nuevah(h2) le añadimos el texto*/ 
    nuevaH.appendChild(text);
    
    let recuperar = aa.firstElementChild; // recuperas el hueco del primer elemento hijo de 2
    aa.insertBefore(nuevaH,recuperar);
}

function aa2(){
        //creación mia
        let hueco = document.getElementById("seccionPrimera");
        let creacionH2 = document.createElement("h2");
        let texto = document.createTextNode("me encanta alba");
    
        hueco.appendChild(creacionH2);
        creacionH2.appendChild(texto);
}