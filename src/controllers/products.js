
export const getAllProducts = (req, res) => {
  // find all products form db
  res.send("<h1>All Products list</h1>");
}
export const getProductById = (req, res) => {
  const { id } = req.params;
  // find product by form db
  res.send(`<h1>Products by ${id} fetched</h1>`);
}
export const createProduct = (req, res) => {
  // insert new product on db
  res.send(`<h1>Products created</h1>`);
}
export const updateProduct = (req, res) => {
  const { id } = req.params;
  // update product
  res.send(`<h1>Products:${id} updated</h1>`);
}
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  // delete product form db
  res.send(`<h1>Products:${id} deleted</h1>`);
}