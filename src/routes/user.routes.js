import express from "express";
import{
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/users.js";

const router = express.Router();

//get all users
router.get("/", getAllUsers);
//static route should be defined before dynamic route, here all is a static route that gives all users
router.get("/all", getUserById);
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
