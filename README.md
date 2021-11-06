<div align="center">
  
![Logo](https://i.imgur.com/iIirVRr.png)

</div>

# MyFeedRSS
![next](https://img.shields.io/badge/Next.js-V%2010.2.3-black?style=for-the-badge&logo=Next.js)
![](https://img.shields.io/badge/Reactjs-V%2017.0.2-61DAFB?style=for-the-badge&logo=React)
![](https://img.shields.io/badge/Styled%20Components-V%205.3.0-DB7093?style=for-the-badge&logo=styled-components)
![](https://img.shields.io/badge/GraphQL-V%2015.5.1-E10098?style=for-the-badge&logo=GraphQL)
![](https://img.shields.io/badge/Apollo%20CLIENT-V%203.3.20-311C87?style=for-the-badge&logo=Apollo%20GraphQL)
![](https://img.shields.io/badge/FRAMER-V%201.3.1-0055FF?style=for-the-badge&logo=Framer)
![](https://img.shields.io/badge/nestjs-V%207.6.15-E0234E?style=for-the-badge&logo=NestJS)
![](https://img.shields.io/badge/Postgresql-V%2012.8-4169E1?style=for-the-badge&logo=PostgreSQL)
![](https://img.shields.io/badge/Node.js-V%2012.19.0-339933?style=for-the-badge&logo=Node.js)

Trabalho para a disciplina banco de dados 1 (CSI602).

## Tecnologias utilizadas

- SGBD: PostgreSQL
- Back-end: NodeJS e NestJS
- Front-end: ReactJS e NextJS
- Comunicação: GraphQL e Apollo Server
- Linguagens: Javascript e Typescript

## Requisitos

- PostgreSQL >= 12.8
- Node >= 12.19.0

## Para executar

Crie um arquivo `.env` na raiz da pasta `backend-my-feed-rss/`
com uma chave para o token JWT, como no exemplo a seguir, esta pode ser qualquer texto sem espaços.

```env
JWT_SECRET=sua_chave_aqui
```

Após faça no terminal:

```
cd backend-my-feed-rss/
yarn start:dev
```

para executar o back-end e

```
cd frontend-my-feed-rss/
yarn dev
```

para executar o front-end.
As configurações de conexão com banco de dados se encontram no arquivo `backend-my-feed-rss/db-connection.ts`
