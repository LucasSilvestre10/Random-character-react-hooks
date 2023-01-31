# Boas vindas ao exercício Random Character

Você precisa dar manutenção em uma aplicação que gera um personagem aleatório vindo da api [The Rick and Morty API](https://rickandmortyapi.com/http:// "The Rick and Morty API"). Nessa aplicação você é responsável por refatorar essa aplicação para deixar o código mais limpo e legível. Use hooks customizados para isso! 

---

## Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

- Vá para a branch `main` do seu projeto e execute o comando `git branch` ou `git branch -a`.

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
Nesse repositório, você encontra uma aplicação React funcionando que gera um personagem aleatório de `Rick and Morty` de forma muito simplificada.

O objetivo desse exercício é que você faça a refatoração dessa aplicação, para isso você precisará criar hooks customizáveis para refatorar o código já implementado, deixando-o mais limpo e organizado.

</details>

<br />

# Exercícios

A lógica que você vai usar já está implementada no arquivo `src/App.js`, você deverá se basear nesse código para criar os hooks customizados

### 1. Para consumir nossa API vamos utilizar o hook customizado `useFetch`

<details>
<summary>Siga os passos para criar o Hook Customizado:</summary><br />

> Dica: Lembre-se de olhar a lógica que já está implementada no arquivo `src/App.js` para criar o hook customizado

1. Crie dentro da pasta hooks um arquivo `useFetch.js`. Vamos precisar dos hooks `useEffect` e `useState` para fazer a chamada a API e salvar o seu retorno.

2. O Hook deverá receber como parâmetro a url para onde iremos fazer a requisição.

3. Crie três estados:

   - um estado de carregando, para aguardar enquanto a requisição está sendo feita
   - um estado para salvar o retorno da API
   - e outro estado para caso haja algum error na requisição

4. Crie uma função para fazer o `fetch` da url recebida como parâmetro, utilize o `useEffect` para chamar essa função e faça o tratamento de erro.

5. Retorne um objeto contento os três estados criados e a função que chama o `fetch()`.

Pronto o seu Hook Customizado está feito, agora utilize ele no `App.js` para gerar o personagem aleatório sempre que a pagina iniciar e clicar no botão `Novo Personagem`!.

> Atenção: lembre-se de refatorar o código implementado em `App.js` para que sua aplicação continue funcionando corretamente.

</details>
