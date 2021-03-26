#

## Express, sequelize Postgress DB Simple CMS API with Firebase Auth

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Features

- Create users from one endpoint with firbase-admin
- Login User endpoin with Firebase auth
- Midleware function to decode user token
- CRUD Feature with sequelize Postgress DB
- Protectected routing

## API Endpoints

- https://sequelcms.herokuapp.com/api/landing : GET all landing pages
- https://sequelcms.herokuapp.com/api/landing : POST CREATE A LP
- https://sequelcms.herokuapp.com/api/landing/id : PUT UPDATE LP Data (Protected)

## Authentication (firebase auth with email & Pw)

-# Register

- https://sequelcms.herokuapp.com/api/auth/ : POST

```js
//user data
{
    "name": "Bode",
    "email": "English@gmail.com",
   "password": "helloworld"

}
```

-#Login

- https://sequelcms.herokuapp.com/api/auth/login : POST

```js
//request body (returns a token you will use to hit protected routs if credential is correct)
{
        "email": "English@gmail.com",
   "password": "helloworld"

}
```

## Protected routes

- https://sequelcms.herokuapp.com/api/landing/ID : PUT
  -# Updates Landing Page Data

```js
//
 headers: {
        authtoken: `YOUR_AUTH_TOKEN`,
    },
```
