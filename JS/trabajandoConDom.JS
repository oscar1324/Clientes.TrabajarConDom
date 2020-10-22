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

function ab(){
    // recuperamos la seccion primera
    let huecoSeccionPrimera = document.getElementById("seccionPrimera");
    //recuperamos la seccion tercera
    let recuperarDiv = document.getElementById("seccionTercera");
    //Tenemos que sacar el ultimo hijo del tercer parrafo del div
    let sacarbb3 = recuperarDiv.lastElementChild;
    // recupero el hueco del primer elemento para introducirlo
    let a = recuperarDiv.firstElementChild;
    //utilizo el metodo insertBefore para meter en la seccion Tercera sacarbb3 antes de a
    recuperarDiv.insertBefore(sacarbb3,a);

}

function creacionDiv(){
    // creacion de div
    let nuevoDiv = document.createElement("div");
    // recuperamos seecionLista además de completar el clonado con cloneNode
    let recuperarLista = document.getElementById("seccionLista").cloneNode(true);
    // añadir
    nuevoDiv.appendChild(recuperarLista);
    document.body.appendChild(nuevoDiv);
}

function aa2(){
        //creación mia
        let hueco = document.getElementById("seccionPrimera");
        let creacionH2 = document.createElement("h2");
        let texto = document.createTextNode("me encanta alba");
    
        hueco.appendChild(creacionH2);
        creacionH2.appendChild(texto);
}