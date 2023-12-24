# NEST JS - REST API

REST API para criação de contas, login , update , e deleção

## Sumário

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Iniciar o Projeto](#como-iniciar-o-projeto)
- [Exemplo de utilização do Projeto](#exemplo-de-utilizacao-do-projeto)
- [Licença](#licença)


## Descrição

Este Projeto visa a criação de uma simples api rest utilizando nest js para aprendizado. Foi escolhido este framework para que a api pudesse ser escalonada de maneira fácil e prática. Além disso, o uso do Prisma + MongoDB configura-se uma escolha muito comum atualmente, já quer a escolha de utilizar um banco de dados NON SQL configura-se à propósta dessa API de um projeto flexível.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Escolhido por ser um framework focado na criação de aplicações flexíveis e escalonáveis .

- [Prisma](https://www.prisma.io/) - Prisma DB é um Tipo de ORM (Object-Relational Mapping) "Mapeamento objeto-relacional", que nós ajuda à aproximar o paradigma de aplicações orientadas a objetos ao paradigma do banco de dados relacional .

- [JWT (JSON Web Tokens)](https://jwt.io/) - JWT foi utilizado para a autenticação, já que ele consegue de forma rápida e segura fazer criar tokens de autenticação referentes à uma palavra chave  .

## Pré-requisitos

Liste todos os requisitos que os colaboradores ou usuários precisarão ter instalados para executar seu projeto.

- Node.js
- npm (ou yarn)
- mongo DB

## Configuração do Ambiente

Para a configuração, antes de mais nada, precisa-se mudar as configurações referente ao banco de dados em .env:

```bash
# DATABASE_URL é a url para conexão do banco de dados MONGO_DB
DATABASE_URL = " "

# JWT_SECRET é uma STRING que pode ser escolhida,recomenda-se o uso de STRINGS com mais de 32 caracteres,contendo letras maiúsculas, minúsculas, números e caracteres espciais

JWT_SECRET = " "
 
 ```
 Após configuração do .env, é preciso fazer a instação das dependências e seguir com o iniciamento do aplicativo:

```bash
# Comando para a instalação das dependências
npm install
 
# Comando para iniciar o aplicativo com watchdog habilitado
npm run start:dev

# Comando para build do projeto, esta build acontecerá na pastas ./dist

npm run prod
 ```

## Exemplo de Utilizacao do Projeto

Neste exemplo, será utilizado comandos via bash, porém qualquer tipo de http client conseguirá ser feito

- [Register](#register)

- [Login](#login)

- [Me](#me)

### Register
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "example","email":"yourBestEmail@gmail.com", "password": "password123"}' http://localhost:3000/auth/register
```
### Login
```bash
curl -X POST -H "Content-Type: application/json" -d '{"email":"yourBestEmail@gmail.com", "password": "password123"}' http://localhost:3000/auth/login
```

### Me
```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer SEU_TOKEN_JWT" http://localhost:3000/auth/me
```
 
# Licença
Este é o projeto [MIT licensed.](LICENSE)