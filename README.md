# Url-shortner

Building a custom URL shortening service like goo.gl using ExpressJs and Mongodb

## Technologies

- ### Back end
    - [Express](https://expressjs.com/)- Nodejs framwork for building the REST Apis.
    - [Mongodb](http://mongodb.com/)-  Document oriented NoSQL database
    - [Mongoose](https://http://mongoosejs.com)- MongoDB object modeling tool.
    - [Short-id](https://github.com/dylang/shortid)- Short id generator.
    - [Valid-url](https://github.com/ogt/valid-url)- URI validation functions.
    - [Nginx](https://www.nginx.com)- Nginx is event-based and asynchronous web server.

- ### Front end
    - [Angular 5](https://angular.io/) - JavaScript library for building user interfaces.

## Getting Started
#### Clone the project
```sh
# clone it
git clone https://github.com/Amil-Gaoul/url-shortner.git
cd URL-Shortner
# Make it your own
rm -rf .git && git init
```
#### Run back end

```
# Move to server folder
cd server/
# Install dependencies
npm install

# Start  server
npm start
```
#### Run front end
```
# Move to client folder
cd client/
# Install dependencies
npm install
# Start  client
npm start
```