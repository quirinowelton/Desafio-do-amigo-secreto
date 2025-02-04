# Amigo Secreto 

Este projeto é uma aplicação simples de sorteio de amigo secreto que foi uma atividade do curso da ONE - Oracle Next Education em conjunto com a Alura, desenvolvida em HTML, CSS e JavaScript. Ele permite que os usuários adicionem nomes de amigos, exibam uma lista e realizem um sorteio para determinar quem será o amigo secreto.

## Funcionalidades

### 1. **Adicionar Amigos**
- Permite ao usuário adicionar nomes de amigos através de um campo de entrada.
- Valida se o campo não está vazio antes de adicionar o nome.
- Exibe uma mensagem de erro caso o nome não seja inserido.

### 2. **Exibição da Lista de Amigos**
- Os nomes adicionados são exibidos dinamicamente em uma lista HTML.
- Antes de adicionar novos nomes à lista, o conteúdo existente é limpo para evitar duplicatas.

### 3. **Sorteio Aleatório**
- Realiza o sorteio de um amigo aleatório a partir da lista de nomes.
- Valida se há amigos na lista antes de realizar o sorteio.
- Exibe o nome do amigo sorteado em destaque.

## Estrutura do Código

### Arquivos Principais
- **`index.html`**: Estrutura HTML da página.
- **`style.css`**: Estilo visual da aplicação (não incluído neste exemplo, mas pode ser implementado para personalizar o design).
- **`app.js`**: Lógica principal do aplicativo.

### Lógica do Código

#### **1. Função `adicionarAmigo()`**
- Captura o nome inserido pelo usuário no campo de entrada.
- Valida se o nome não está vazio:
  - Se estiver vazio, exibe uma mensagem de erro.
  - Se for válido, adiciona o nome ao array `amigos` e exibe a lista atualizada.
- Limpa o campo de entrada após a inserção.

#### **2. Função `mostrarAmigos()`**
- Exibe dinamicamente os amigos armazenados no array `amigos` como elementos `<li>` de uma lista HTML.
- Limpa a lista existente antes de renderizar os nomes atualizados.

#### **3. Função `sortearAmigo()`**
- Gera um índice aleatório dentro do intervalo do array `amigos` usando `Math.random()`.
- Valida se há amigos no array antes de realizar o sorteio:
  - Se o array estiver vazio, exibe uma mensagem pedindo para adicionar amigos.
  - Caso contrário, exibe o nome do amigo sorteado.

#### **4. Função `exibirTextoTela(tag, texto)`**
- Atualiza o conteúdo de um elemento HTML especificado por sua tag (ex.: `<h2>`) com o texto fornecido.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git

