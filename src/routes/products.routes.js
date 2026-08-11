import express from "express";
import{
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/products.js";

const router = express.Router();
//getall products
router.get("/",getAllProducts);

//* get by id
router.get("/:id", getProductById);

//* create
router.post("/", createProduct);

//* update
router.put("/:id", updateProduct);

//delete
router.delete("/:id", deleteProduct);

export default router;