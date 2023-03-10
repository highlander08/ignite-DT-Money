<h1 align="center">
    <img alt="DT-Money" title="" src=".github/logo-dt-money.svg" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/DT-Money">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/exodogurgel/DT-Money" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/DT-Money">
  
  <a href="https://github.com/pabloxt14/DT-Money/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/DT-Money">
  </a>
    
   <img alt="License" src="https://img.shields.io/github/license/pabloxt14/DT-Money">

   <a href="https://github.com/pabloxt14/DT-Money/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/DT-Money?style=social">
  </a>
</p>

<p>
  <img src=".github/cover.png" alt="DT-Money " />
</p>

<h4 align="center"> 
	🚧  Em desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <!-- <a href="#-funcionalidades">Funcionalidades</a> | -->
 <a href="#-layout">Layout</a> | 
 <a href="#-deploy">Deploy</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <!-- <a href="#-contribuidores">Contribuidores</a> |  -->
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

O DT-Money é uma aplicação front-end web semelhante a uma carteira digital, que mostra a sua entradas(`incomes`) e saídas (`outcome`) e o total de renda que possui, além de uma lista detalhadas das suas transações realizadas.

O principal conceito treinado nesta aplicação foi a utilização de API em projetos React.

O projeto foi desenvolvido como uma das etapas de aprendizado do curso **Ignite** oferecida pela [Rocketseat](https://www.rocketseat.com.br/). O Ignite é um curso de especialização em stacks específicas amplamente utilizadas e valorizadas no mercado como React, React Native, Node.js e Elixir.

---

<!-- ## ⚙️ Funcionalidades

- [x] Empresas ou entidades podem se cadastrar na plataforma web enviando:
  - [x] uma imagem do ponto de coleta
  - [x] nome da entidade, email e whatsapp
  - [x] e o endereço para que ele possa aparecer no mapa
  - [x] além de selecionar um ou mais ítens de coleta: 
    - lâmpadas
    - pilhas e baterias
    - papéis e papelão
    - resíduos eletrônicos
    - resíduos orgânicos
    - óleo de cozinha

- [x] Os usuários tem acesso ao aplicativo móvel, onde podem:
  - [x] navegar pelo mapa para ver as instituições cadastradas
  - [x] entrar em contato com a entidade através do E-mail ou do WhatsApp

--- -->

## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1138814951106121051). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

### Web

<p align="center">
  <img alt="Web Demonstration 01" title="#Web-1" src=".github/demonstrations/web-demonstration-01.png" width="100%">
  <img alt="Web Demonstration 02" title="#Web-2" src=".github/demonstrations/web-demonstration-02.png" width="100%">
  <img alt="Web Demonstration 03" title="#Web-3" src=".github/demonstrations/web-demonstration-03.png" width="375px">
  <img alt="Web Demonstration 04" title="#Web-4" src=".github/demonstrations/web-demonstration-04.png" width="375px">
</p>

<!-- ### Mobile

<p align="center">
  <img alt="Layout Mobile Demonstration 01" title="#Mobile" src=".github/demonstrations/mobile-demonstration-01.png" width="100%">
  <img alt="Layout Mobile Demonstration 02" title="#Mobile" src=".github/demonstrations/mobile-demonstration-02.png" width="100%">
</p> -->

---

## 🔗 Deploy

Para acessar o deploy do Website da aplicação basta clicar no link a seguir: [Link](https://github-blog-nu.vercel.app/)

---

## 🚀 How it works

Este projeto contem somente a parte Frontend Web, precisando somente executar a aplicação em seu Browser(navegador).
<!-- Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar. -->

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<!-- #### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/NLW-Copa.git

# Acesse a pasta do projeto no terminal/cmd
$ cd NLW-Copa

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
``` -->

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/DT-Money.git

# Vá para a pasta da aplicação Front End
$ cd DT-Money

# Instale as dependências
$ npm install

# Subir o servidor do json server
$ npm run dev:server

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

<!-- #### 📱 Rodando a aplicação mobile (Mobile)

```bash
# Vá para a pasta da aplicação mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npx expo start
``` -->

---

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Vite](https://vitejs.dev/guide/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Styled-Components](https://tailwindcss.com/)**
-   **[Phosphor React](https://phosphoricons.com/)**
-   **[React Roter Dom](https://reactrouter.com/en/v6.3.0)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React Hook Form](https://github.com/axios/axios)**
-   **[Zod](https://github.com/colinhacks/zod)**
-   **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)**
-   **[date-fns](https://date-fns.org/)**
-   **[Radix UI](https://www.radix-ui.com/)**
-   **[use-context-selector](https://github.com/dai-shi/use-context-selector)**

> Veja o arquivo  [package.json](https://github.com/pabloxt14/DT-Money/package.json)

<!-- #### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Fastify](https://www.fastify.io/)**
-   **[Zod](https://github.com/colinhacks/zod)**
-   **[Short-Unique-Id](https://www.npmjs.com/package/short-unique-id)**
-   **[Prisma](https://www.prisma.io/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**

> Veja o arquivo  [package.json](https://github.com/pabloxt14/NLW-Copa/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))
 
-   **[Expo](https://expo.io/)**
-   **[Expo Fonts](https://docs.expo.dev/guides/using-custom-fonts/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)**
-   **[Expo Web Browser](https://docs.expo.dev/versions/latest/sdk/webbrowser/)**
-   **[Native Base](https://nativebase.io/)**
-   **[Phosphor React Native](https://github.com/duongdev/phosphor-react-native)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[React Native Country Flag](https://www.npmjs.com/package/react-native-country-flag)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Country-List](https://www.npmjs.com/package/country-list)**
-   **[DayJS](https://day.js.org/)**
-   **[dotENV](https://www.npmjs.com/package/dotenv)**

> Veja o arquivo  [package.json](https://github.com/pabloxt14/NLW-Copa/mobile/package.json) -->

---
<!-- 
## 👨‍💻 Contribuidores

💜 Um super thanks 👏 para essa galera que fez esse produto sair do campo da ideia e entrar nas lojas de aplicativos :)

<table>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" width="100px;" alt=""/><br /><sub><b>Diego Fernandes</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/4669899?s=460&u=806503605676192b5d0c363e4490e13d8127ed64&v=4" width="100px;" alt=""/><br /><sub><b>Cleiton Souza</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/861751?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Robson Marques</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/16831337?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Claudio Orlandi</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/37725197?s=460&u=446439436524c37f66e41f35b607dbb70358d5e4&v=4" width="100px;" alt=""/><br /><sub><b>Vinícios Fraga</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/26551306?s=460&u=18446655ccae6c2a29eb177a104ecf32f029aa3a&v=4" width="100px;" alt=""/><br /><sub><b>Hugo Duarte</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a>  <a href="https://blog.rocketseat.com.br/" title="Blog">🌐</a></td>
    
  </tr>
  <tr>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/39345247?s=460&u=cdff2624a327a43e2765112a54e966a06eac6d79&v=4" width="100px;" alt=""/><br /><sub><b>Joseph Oliveira</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/10366880?s=460&u=59e93e1752e9d2ece4b7d8e129d60caba9c94207&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Rodz</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4" width="100px;" alt=""/><br /><sub><b>Mayk Brito</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/7268910?s=460&u=0b5d9df4232e70fa66ea9f130fad4260378323de&v=4" width="100px;" alt=""/><br /><sub><b>João Paulo</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4" width="100px;" alt=""/><br /><sub><b>Luke Morales</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
     <td align="center"><a href="https://rocketseat.com.br"><img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/5151405?s=460&u=1dbcf0e89087c2dc902d3331b90e532db1543d2b&v=4" width="100px;" alt=""/><br /><sub><b>Luiz Batanero</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    
  </tr>
</table> -->

<!-- ## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

--- -->

## 🦸 Author


 <img alt="Highlander Santos" title="Highlander Santos" src="https://avatars.githubusercontent.com/u/38596921?v=4" width="100px;" />
 <br />
 <sub><strong>Highlander Santos</strong> 🚀</sub>

<br />
---

## 📝 License

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com 💜 por Highlander Santos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/highlandersantos/)

---
