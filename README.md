<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# TESLO API

1. copiar el archivo .env.example y renombrarlo a .env
2. configurar las variables de entorno en el archivo .env
3. ejecutar el comando `npm install`
4. ejecutar el comando de docker compose ejecutar ``

```
docker-compose up -d
```

5. ejecutar el comando

```
npm run start:dev
```

6. ejecutar el seed para llenar la base de datos con datos de prueba

```
http://localhost:3000/api/seed
```
