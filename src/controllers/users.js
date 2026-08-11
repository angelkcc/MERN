let users=[
  {
    _id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    password: "123456",
  },
  {
    _id: 2,
    name: "Alice Doe",
    email: "alice@gmail.com",
    password: "123456",
  },
];
export const getAllUsers = (req, res) => {
  // console.log(req.path);
  // console.log(req.url);
  const { name, limit, page, sort } = req.query;
  // console.log(req.method);
  console.log(req.query);
  // find all users form db
  // res.send("<h1>All users list</h1>");
  res.status(200).json({
    message: "All users fetched",
    success: true,
    status: "success",
    data: users,
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  // find user by id  form db
  // res.send(`<h1>Single User by id ${id}</h1>`);
  const user=users.find((user)=>user._id===Number(id));
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
  res.json({
    message: `user:${id} fetched`,
    status: "success",
    success: true,
    data: user,
  });
};

export const createUser = (req, res) => {
  // name , email , password  => req.body
  console.log(req.body);
  // validate input
  // insert new user to db
  const user = {
    _id: users.length + 1,
    ...req.body,
  };

  users.push(user);

  res.status(201).json({
    data: user,
    message: "user created",
    status: "success",
    success: true,
  });
};

export const updateUser = (req, res) => {
  // const id  = req.params.userId;
  const data = req.body;
  const { userId } = req.params;

  // res.send(`<h1>User: ${userId} updated</h1>`);
  res.status(201).json({
    message: `user: ${userId} updated`,
    success: true,
    status: "success",
    data: {
      _id: userId,
      ...data,
    },
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // res.send(`<h1>User:${id} deleted</h1>`);
  res.status(201).json({
    message: `user: ${id} deleted`,
    success: true,
    status: "success",
    data: null,
  });
};