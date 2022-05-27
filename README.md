# My Favorite Scholarships

### "My Favorite Scholarships" é uma página do site Querobolsas.com, desenvolvido por mim como um exame prático para a Quero Educação.

### Especificações de funcionalidades:
* O projeto possui uma única página, com a lista de favoritos e um modal para a busca de cursos;
* A clicar em Adicionar curso, deve abrir o modal de busca;
* A busca deve conter os seguintes filtros:
  * Cidade;
  * Curso;
  * Modalidade (Presencial/EaD);
  * Preço;
* A lista de cursos deve ter ordenação por nome da faculdade;
* Múltiplos cursos podem ser selecionados e adicionados à lista de favoritos;
* O botão Adicionar bolsa(s) deve ficar desabilitado enquanto não houver cursos selecionados;
* Os cursos podem ser removidos da lista de favoritos, através do botão Excluir;
* O botão Ver oferta não leva a lugar algum;
* Bolsas com { enabled: false }, devem aparecer com o botão Indisponível;
* A lista de favoritos deve respeitar o semestre selecionado.

### Como executar
* Clone o repositório
* Instale as dependências com `npm install` ou `yarn`
* Inicie a aplicação com Docker executando o comando `npm run serve` ou `yarn serve`
* Ou então inicie a aplicação sem o Docker executando o comando `npm run dev` ou `yarn dev`

### Demonstração

* Layout para desktop: 
<p align="center">
    <img align="center" src="./demonstration/desktop.gif" alt="GIF de demonstração da aplicação">
</p>

* Layout mobile:
<p align="center">
    <img align="center" src="./demonstration/mobile.gif" alt="GIF de demonstração da aplicação">
</p>

### Deploy:
* A aplicação pode ser conferida através desse link: [my-favorite-scholarships.vercel.app/](https://my-favorite-scholarships.vercel.app/)

### Tecnologias utilizadas:
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Vue_Router](https://img.shields.io/badge/Vue_Router-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Vuex](https://img.shields.io/badge/Vuex-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
