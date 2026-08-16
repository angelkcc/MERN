import mongoose from "mongoose";
import User from "../models/user.model.js";

let users = [];

// GET ALL USERS
export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json({
      message: "All users fetched",
      success: true,
      status: "success",
      data: allUsers,
    });
  } catch (error) {
    next(error);
  }
};


// GET USER BY ID
export const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });

    if (!user) {
      next({
        message: `user:${id} not found`,
        statusCode: 404,
        status: "fail",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: `user:${id} fetched`,
      status: "success",
      success: true,
      data: user,
    });

  } catch (error) {
    next(error);
  }
};


// CREATE USER
export const createUser = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;

    if (!full_name) {
      next({
        message: "full_name is required",
        status: "fail",
        success: false,
        statusCode: 400,
      });
      return;
    }

    if (!email) {
      next({
        message: "email is required",
        status: "fail",
        success: false,
        statusCode: 400,
      });
      return;
    }

    if (!password) {
      next({
        message: "password is required",
        status: "fail",
        success: false,
        statusCode: 400,
      });
      return;
    }

    const user = await User.create({
      full_name,
      email,
      password,
    });

    res.status(200).json({
      message: "user created",
      success: true,
      status: "success",
      data: user,
    });

  } catch (error) {
    next(error);
  }
};


// UPDATE USER
export const updateUser = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;
    const { userId } = req.params;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        full_name,
        email,
        password,
      },
      {
        returnDocument: "after",
      }
    );

    if (!user) {
      next({
        message: `user: ${userId} not found`,
        statusCode: 404,
        status: "fail",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: `user: ${userId} updated`,
      success: true,
      status: "success",
      data: user,
    });

  } catch (error) {
    next(error);
  }
};


// DELETE USER
export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      next({
        message: `user: ${id} not found`,
        statusCode: 404,
        status: "fail",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: `user: ${id} deleted`,
      success: true,
      status: "success",
      data: null,
    });

  } catch (error) {
    next(error);
  }
};