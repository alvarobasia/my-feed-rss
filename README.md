<div align="center">
  
![Logo](https://i.imgur.com/iIirVRr.png)

</div>

# MyFeedRSS

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
