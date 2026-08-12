import http, { get } from "http";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/category.routes.js";
//params query body id field most necessary for crud operation
const PORT = 8080;

//* creating express app instance
const app = express();

//* creating http server
// const server = http.createServer(handler);
const server = http.createServer(app);

//*connect database
//connect returns promise 
mongoose.connect("mongodb://localhost:27017",{
  dbName:"team_18",
  autoCreate:true,
}).
then(()=>{
  console.log("database connected");
})
.catch((error)=>{
  console.log("database connection failed",error);
});
 //or we can directly do /dbname in url
//? express app -> request handler
// post / -> handler

//* express routing
// get / -> handler
//app.method(route,handler)
app.use(express.json()); //raw data =>parse[js obj]=>req.body={}
/*app.get("/", (req, res) => {
  res.send("<h1>Hello form Express server</h1>");
});*/

//while routing there should not be duplicate routes, if there is duplicate route then the first route will be executed and the second route will be ignored
//express routing
app.get("/", (req, res) => {
  res.json({
    message: "server is up and running",
    success: true,
    status: "success",
    data: null,
  });
});


//* listening on port
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
  console.log("press ctrl+c to close server");
});

//*USING ROUTES
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

//! req object
//* req.path -> current req path : /users , /products
//* req.method -> current req method : GET , POST ....

//* req.params => route parameters => object
// /users/:id
// req /users/1 => req.params => {id:'1'}
// req /users/100 => req.params => {id:'100'}
// req /users/xyz => req.params => {id:'xyz'}

// /users/:x  => req.params => {x:'100'}

//? /posts/:userId/:postId
// /posts/1/2  => {userId:'1',postId:'2'}

//* req.query => query parameter => object
//- filter , pagination , sorting

//! req.body => object

// url
//- protocol://host/path?query
//- http://example.com/users?name=john&page=1&limit=10&sort=desc
// {name:'john',page:"1",limit:'10', sort:'desc'}

// SMS
// students crud
// departments crud
// teachers  crud
// class & sections crud

//REST API
//? REST-> Representational State Transfer (used to design web services)
//? API -> Application Programming Interface

//1. client and server architecture
//2. stateless communication (each request from client to server must contain all the information needed to understand and process the request)
//3. uniform interface (standardized way to communicate between client and server)
     //post/users -> create user
     //get/users -> get all users make it uniform
     //dont define it like get/getAllUsers[bad practice]--use noun not verb

//4. send meaningful status codes in response
//100-199 informational
//200-299 success
//300-399 redirection
//400-499 client error
//500-599 server error

//200-> OK
//201-> Created
//204-> No Content
//
//400-> Bad Request
//401-> Unauthorized
//403-> Forbidden
//404-> Not Found
//
//500-> Internal Server Error
//502-> Bad Gateway

//5. use meaningful http methods for different operations
//6. layered architecture (client-server architecture, server-server architecture, caching, load balancing, etc.)
//7.code on demand
//8. everything is resource (resource based architecture) => noun based architecture (produts,users,categories)
//9. endpoint/path/route
//10. uri: /users
//11. url: http://example.com/users?name=john&page=1&limit=10&sort=desc

//RESTful api-- it follows all the principles of REST architecture

//RE-> resource are represented using standard format like json, xml, html[usually json]
//S-> current state of the resources [users,products,categories]
//T->represented resource transferred between client and server

//rest api is an architectural principles that are used to design web apis that allows different to communicate over http

//MONGO DB
//sql->no sql
//database->database
//table->collection
//row->document
//column->field