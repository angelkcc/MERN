import mongoose from "mongoose";

let users=[];


export const getAllUsers = async (req, res) => {
  try{
    //find all users from db
    const allUsers= await User.find({});
    res.status(200).json({
    message: "All users fetched",
    success: true,
    status: "success",
    data: allUsers,
  });
  }catch(error){
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
  //find all users from db
  
};

export const getUserById = async (req, res) => {
  try{
    const id = req.params.id;
  // find user by id  form db

  //const user=users.find((user)=>user._id===Number(id));
  //const user= await User.findById(id);
  const user= await User.findOne({_id:id});
  if(!user)
  {
    res.status(404).json({
       message: `user:${id} not found`,
       status: "fail",
       success: false,
       data: null,
    });
    return;
  }
  res.status(200).json({
    message: `user:${id} fetched`,
    status: "success",
    success: true,
    data: user,
  });
}catch(error){
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
  
};

export const createUser =async (req, res) => {
  try{
   const{full_name, email, password}= req.body;
  //const user = {
    //_id: users.length + 1,
    //...req.body,
  //};
  // users.push(user);
  const user= await User.create({full_name,email,password});
  res.status(200).json({
    message: "user created",
    success: true,
    status: "success",
    data: user,
  });
  } catch(error)
  {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
};


export const updateUser = async(req, res) => {
  try{
    //User.findByIdAndUpdate(id<{full_name,email,password}>)
  // const id  = req.params.userId;
  const userId= req.params.userId;
  const data = req.body;

  const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true });

  res.status(200).json({
    message: `user: ${userId} updated`,
    success: true,
    status: "success",
    data: updatedUser,
  });
  } catch(error)
  {
    res.status(500).json({
      message: "Duplicate email found",
      success: false,
      status: "error",
      data: null,
    });
  }

};

export const deleteUser = async (req, res) => {
  try{
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if(!user)
    {
      res.status(404).json({
        message: `user: ${id} not found`,
        success: false,
        status: "fail",
        data: null,
      });
      return;
    }
  res.status(200).json({
    message: `user: ${id} deleted`,
    success: true,
    status: "success",
    data: null,
  });
  } catch(error)
  {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: "error",
      data: null,
    });
  }
};