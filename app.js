let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;
    
    if (nomeAmigo === "") {
        exibirTextoTela('h2', 'Por favor digite um nome');
        alert('Erro! Por favor insira um nome');
    } else {
        exibirTextoTela('h2', 'Digite o nome dos seus amigos');
        amigos.push(nomeAmigo);
        inputAmigo.value = "";
        mostrarAmigos();
    }
}

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mostrarAmigos() {
    // Obter o elemento da lista onde os amigos serão exibidos
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpar a lista existente
    listaAmigos.innerHTML = "";

    // Percorrer o array amigos e adicionar cada nome como um <li>
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li>
        let li = document.createElement('li');
        
        // Definir o texto do <li> com o nome do amigo
        li.textContent = amigos[i];

        // Adicionar o <li> à lista
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Pegar o elemento onde vamos mostrar o resultado
    let resultado = document.getElementById('resultado');

    // Verificar se o array amigos está vazio
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Por favor, adicione amigos antes de sortear.</li>";
        return;
    }

    // Gerar um número aleatório entre 0 e o tamanho do array
    let indiceAleatorio = parseInt(Math.random() * amigos.length);

    // Pegar o nome do amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o nome sorteado no resultado
    resultado.innerHTML = `O amigo sorteado é <strong>${amigoSorteado}</strong>`;
}



