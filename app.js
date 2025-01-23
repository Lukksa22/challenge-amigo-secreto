// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function crearElementoLi(padre, texto) {
    padre.value = '';
    let node = document.createElement("li");
    let textnode = document.createTextNode(texto);
    node.appendChild(textnode);
    padre.appendChild(node);
}


function agregarAmigo() {
    let nombre = document.querySelector('input').value;

    if (nombre === '') {
        alert("Por favor ingrese un nombre válido");
    } else {

    let listaAmigos = document.getElementById("listaAmigos");
    amigos.push(nombre);
    crearElementoLi(listaAmigos, nombre);
    document.querySelector('input').value = '';
    }    
}



function sortearAmigo() {
    if (amigos.length<1) {
        alert("No hay amigos que sortear");
        return;
    }
    let ind = parseInt(Math.floor(Math.random() * amigos.length));
    let nombreElegido = amigos[ind];
    let texto = `El amigo secreto sorteado es: ${nombreElegido}`;
    
    let resultado = document.getElementById("resultado");
    resultado.textContent = '';
    crearElementoLi(resultado, texto);
}

let amigos = [];

