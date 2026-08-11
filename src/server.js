import http, { get } from "http";
import express from "express";
import { getAllUsers } from "./controllers/users.js";
import { getUserById } from "./controllers/users.js";
import { createUser } from "./controllers/users.js";
import { updateUser } from "./controllers/users.js";;
import { deleteUser } from "./controllers/users.js";
import { createProduct} from "./controllers/products.js";
import { updateProduct } from "./controllers/products.js";
import { deleteProduct } from "./controllers/products.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import { getAllProducts, getProductById } from "./controllers/products.js";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "./controllers/category.js";
//params query body id field most necessary for crud operation
const PORT = 8080;

//* creating express app instance
const app = express();

//* creating http server
// const server = http.createServer(handler);
const server = http.createServer(app);
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