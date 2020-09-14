# NODE-EXPRESS BOILERPLATE

## STEPS TO USE BOILERPLATE
___
1. Clone the repository using the following commands:

`git clone https://github.com/mojocodeio/node_express_boiler.git super-cool-project`

`cd super-cool-project`

`yarn`

`cd client`

`yarn`


2. The app uses MongoDB using Mongo Cloud Atlas. Create a Mongo Atlas Account.

https://docs.atlas.mongodb.com/tutorial/create-atlas-account/

2. Create a cluster with a new database named `super-cool-project`

3. Once you have a database created, create a new collection called `users`. Very important its titled `users`

4. Locate the clusters tab and find the 'Connect' button. Choose the option for 'Connect your application'.. This should reveal a connection string to access your database you just created. It should look something like:

mongodb+srv://username:password@cluster0-mpvbi.mongodb.net/test?retryWrites=true&w=majority

5. Create a .env file at the root of `super-cool-project` and paste the connection string into it. Paste the following variables into the .env file, substituting your own values of course and excluding my notes in parenthesis.

`PORT=5000` (feel free to change this to any port you'd like)

`MONGODB_URL=mongodb+srv://username:password@cluster0-mpvbi.mongodb.net/test?retryWrites=true&w=majority` (connection string with you value inserted)

`ACCESS_TOKEN_SECRET=abcdefghijklmnopqrstuvwxyz` (change value to anything you'd like, just keep it a secret)

`REFRESH_TOKEN_SECRET=123456789abc123` (change value to anything you'd like, just keep it a secret)

6. In `server.js`, locate the `configOptions` object used for the mongoAtlas configs. It has a `DATABASE CONFIG` label. Change the `dbName` property to the match the name of the db you created in mongo atlas

7. With your Mongo Atlas Cloud Database configured, addition of your .env file with correct environment variables, and `dbName` adjusted in `server.js`... you should be ready to finally start the application. Run the following command:

`yarn start`


## PROJECT DETAILS

Routes

Auth
- /register
- /login
- /logout
- /api/dashboard

Includes user authentication middleware with api/* gateway to easily add more protected routes where a user must be logged in to access them. Once routes are inserted behind the api/* gateway, the user will be on the request object (`req.user`).

Mongoose/Mongodb Resources
- Declaring name of MongoDb Collection - https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
- Connecting to specific database within Mongo Atlas Cluster: https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connect
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- Establish DB connection prior to starting Node Server - https://dev.to/dwipr/example-rest-api-with-express-js-mongoose-and-babel-2483
- Model methods - https://mongoosejs.com/docs/api/model.html


NodeJS Resources

- Named Exports vs Default Exports: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- User Auth Middleware: https://scotch.io/tutorials/route-middleware-to-check-if-a-user-is-authenticated-in-node-js
- Using Express Middleware - https://expressjs.com/en/guide/using-middleware.html

Common Errors
- The 'Port 3000 is already in use [nodemon] app crashed' error...

[Resource](https://stackoverflow.com/questions/58605392/port-3000-is-already-in-use-nodemon-app-crashed-waiting-for-file-changes-bef)

```
lsof -i :5000 -t

-> 12345

kill 12345
```

Details: console.log('test') will not crash nodemon, but console.log(db_results) or console.log(error) where db_results is an array of objects and error is a multi-line string will reliably crash nodemon.

