export const getAllCategories = (req, res) => {
  // find all categories form db
  res.send("<h1>All categories list</h1>");
}

export const getCategoryById = (req, res) => {
  const { id } = req.params;
  // find Category by form db
  res.send(`<h1>category by ${id} fetched</h1>`);
}

export const createCategory = (req, res) => {
  // insert new category on db
  res.send(`<h1>category created</h1>`);
}

export const updateCategory = (req, res) => {
  const { id } = req.params;
  // update category
  res.send(`<h1>category:${id} updated</h1>`);
}

export const deleteCategory =(req, res) => {
  const { id } = req.params;
  // delete category form db
  res.send(`<h1>category:${id} deleted</h1>`);
}