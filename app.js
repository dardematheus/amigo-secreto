//Fazer usuario conseguir inputar o nome de amigos
let listaAmigos = [];
const list = document.getElementById('listaAmigos');
const sorteado = document.getElementById('resultado');
const buttonSortear = document.getElementById('button-sortear');
const buttonReiniciar = document.getElementById('button-restart');

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    listaAmigos.push(amigo);
    document.getElementById('amigo').value = '';
    
    buttonSortear.removeAttribute('disabled');
    buttonReiniciar.removeAttribute('disabled');

    list.innerHTML += `<li>${amigo}</li>`;
}

function sortearAmigo(){
    let numero = parseInt(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numero];
    
    list.innerHTML = '';
    sorteado.innerHTML = `Amigo sorteado : ${amigoSorteado}`;

    buttonSortear.setAttribute('disabled', '');
    console.log(`amigo sorteado : ${amigoSorteado} ${numero}`);
}

function restartGame(){
    listaAmigos.splice(0, listaAmigos.length);
    list.innerHTML = '';
    sorteado.innerHTML = '';
    
    buttonSortear.setAttribute('disabled', '');
    buttonReiniciar.setAttribute('disabled', '');
}