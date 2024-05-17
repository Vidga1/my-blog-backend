<div align="center">
  <h1><code>Web Blog App</code></h1>

<strong>This is the backend of a fullstack Web Blog App</strong>
<br/>
<strong>**[Frontend app is here](https://github.com/Vidga1/my-blog-frontend)**</strong>

  <p>
  <a href=""><img src="https://img.shields.io/azure-devops/build/rustwasm/gloo/6.svg?style=flat-square" alt="Build Status" /></a>
  </p>

_**[Deployed here](http://158.160.140.130/)**_

## </div>

## Table of Contents

- [](#)
- [Table of Contents](#table-of-contents)
- [About ](#about-)
  - [Built with ](#built-with-)
- [Getting started ](#getting-started-)
  - [Prerequisites ](#prerequisites-)
  - [Installing ](#installing-)
- [License ](#license-)

## About <a name="about"></a>

This is a API created using node.js and express. [Backend app is here](https://github.com/Vidga1/my-blog-backend).

- Prisma ORM with MongoDB.
- Routes: user, posts, comments, likes, follow.
- Controllers for this routes.
- JWT authentication.
- Generating an avatar when creating a new account using the jdenticon library.
- Dockerfile configuration.
- Docker-compose configuration: express-app, database and client-app containers.

### Built with <a name="built-with"></a>

<p align="center"><a href="https://nodejs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="node.js" width="60" height="60"/> </a> <a href="https://expressjs.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" width="60" height="60"/> </a> <a href="https://www.prisma.io/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" alt="prisma" width="60" height="60"/> </a> <a href="https://www.mongodb.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="60" height="60"/> </a> <a href="https://www.docker.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="docker" width="60" height="60"/> </a> <a href="https://www.docker.com/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/docker/compose/main/logo.png" alt="docker-compose" width="60" height="60"/> </a>
</p>

## Getting started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

:warning: Before installing the project latest version of **npm** should be installed.

```
npm install -g npm@latest
```

:warning: You will also need Docker. It can be installed from the [official Docker website](https://www.docker.com/products/docker-desktop/).

### Installing <a name="installing"></a>

1. Clone the repo backend:

```
git clone https://github.com/Vidga1/my-blog-backend.git
```

2. Clone the repo frontend:

```
git clone https://github.com/Vidga1/my-blog-frontend.git
```

3. Open a terminal (or command line) and go to the root directory backend:

```
cd my-blog-backend
```

4. Rename the .env.local file to .env:

```
mv .env.sample .env
```

5. Set your secret key in the env file. it can be any string:

```
SECRET_KEY='YOUR_SECRET_KEY'
```

6. Run the docker build command. The blog-platform-API and blog-platform-client folders must be in the same directory:

```
docker compose up
```

7. Open your browser and go to http://localhost:80 to see the running project.

## License <a name="license"></a>

[![MIT License][license-shield]][license-url]

[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
