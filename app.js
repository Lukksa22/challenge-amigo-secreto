// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    let nombre = document.querySelector('input').value;

    if (nombre === '') {
        alert("Por favor ingrese un nombre válido")
    } else {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.value = '';
    amigos.push(nombre);
    let node = document.createElement("li");
    let textnode = document.createTextNode(nombre);
    node.appendChild(textnode);
    listaAmigos.appendChild(node);
    document.querySelector('input').value = '';
    }

    
}

function sortearAmigo() {
    let ind = parseInt(Math.random() * amigos.length + 1);
    let nombreElegido = amigos[ind];
    let texto = `El amigo secreto sorteado es: ${nombreElegido}`;
    document.getElementById("listaAmigos").innerHTML = texto;
}

let amigos = []

