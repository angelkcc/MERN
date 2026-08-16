import express from "express";
import{
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/users.js";

const router = express.Router();
//here we use middleware in routelevel, same syntax
const mid1=(req,res,next)=>{
    console.log("mid1 is working");
    next();
};
//or we can do 
router.use(mid1) ;
const mid2=(req,res,next)=>{
    console.log("mid2 is working");
    next();
};


//get all users
router.get("/",mid1,mid2, getAllUsers);
//static route should be defined before dynamic route, here all is a static route that gives all users
//router.get("/all", getUserById);
//* get one user
// get user by id 1 , 2 ,3 , 40 and this is a dynamic route
router.get("/:id", getUserById);

//* create
// post /users
router.post("/", createUser);

//* update
// put /users
router.put("/:userId", updateUser);

//* delete
// delete /users
router.delete("/:id",deleteUser);

export default router;
