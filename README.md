[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/magidmroueh/nestjs-postgres-starter) 

<h1 align="center">
  <a href="https://github.com/magidmroueh/nestjs-postgres-starter"><img src="https://thepracticaldev.s3.amazonaws.com/i/whtmfhi1tmpsq1vgblhc.jpg" alt="NestJS Starter" width=500"></a>
</h1>

## Description

Simple starter for NestJs, postgres, GraphQl, Prisma application

## Installation

```bash
$ npm install
$ docker-compose up -d
$ prisma deploy
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Sample Queries

## Prisma Admin
```bash
  http://localhost:4466/_admin
```

## graphql
```bash
  http://localhost:3000/graphql
```

```bash
# Sign-up

mutation {
  signup(signUpInput: { email: "user@email.com", password: "pasword" }) {
    id
    email
  }
}
```

```bash
# Log-in

mutation {
  login(loginInput: { email: "user@email.com", password: "pasword" }) {
    id
    email
  }
}
```

```bash
# Create a Post

mutation {
  createPost(postInput: { title: "Post Title", body: "Post Body" }) {
    id
    title
    author {
      id
      email
    }
  }
}
```

```bash
# Retrieve all Posts

query {
  posts {
    title
    author {
      email
    }
  }
}
```
## License

Nest is [MIT licensed](LICENSE).
