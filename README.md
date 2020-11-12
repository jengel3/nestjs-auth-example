# Access and Refresh Token Authentication in NestJS

This repository is based on my article [here](https://medium.com/@jengel3/nestjs-implementing-access-refresh-token-jwt-authentication-97a39e448007), creating a sample implementation of access and refresh tokens in NestJS. 

The repository by no means covers every single topic or feature that you might desire in an application, but provides the most essential pieces of the implementation. This repository varies slightly from the article, using more directories and adding some additional configuration, but the idea is all the same. 


## Setup

Clone the repository and install the dependencies.

```bash
$ npm install
```

After doing so, you'll need to configure the database settings in `src/application.module.ts`, as well as the JWT settings in both `src/application.module.ts` and `src/modules/authentication/strategies/jwt.strategy.ts`. In a production app, you should use Nest's config module to prevent exposing your secret variables, but this is merely an example of authentication - not necessarily configuration.

```bash
$ npm run start
```

Refer to the article for examples of using the API via `curl`. 
