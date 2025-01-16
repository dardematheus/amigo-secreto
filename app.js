//Fazer usuario conseguir inputar o nome de amigos
let listaAmigos = [];
const list = document.getElementById('listaAmigos');
const sorteado = document.getElementById('resultado');

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    listaAmigos.push(amigo);
    document.getElementById('amigo').value = '';
    
    list.innerHTML += `<li>${amigo}</li>`;
}

function sortearAmigo(){
    let numero = parseInt(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numero];
    
    list.innerHTML = '';
    sorteado.innerHTML = `Amigo sorteado : ${amigoSorteado}`;

    console.log(`amigo sorteado : ${amigoSorteado} ${numero}`);
    
}
