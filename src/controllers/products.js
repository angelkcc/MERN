import mongoose from "mongoose";
import { Product } from "../models/products.models.js";
export const getAllProducts = async (req, res,next) => {
  try {
    const products = await Product.find({});
    if (!products) {
      next({
        message: "No products found",
      });
      return;
    }
    res.status(200).json({
      message: "All products fetched",
      success: true,
      status: "success",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({
        message: `Product:${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }
    res.status(200).json({
      message: `Product:${id} fetched`,
      success: true,
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.create({ name, price, description });
    res.status(201).json({
      message: "Product created",
      success: true,
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, price, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, description },
      { returnDocument: "after" }
    );
    if (!product) {
      res.status(404).json({
        message: `Product:${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }
    res.status(200).json({
      message: `Product:${id} updated`,
      success: true,
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({
        message: `Product:${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }
    res.status(200).json({
      message: `Product:${id} deleted`,
      success: true,
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
}