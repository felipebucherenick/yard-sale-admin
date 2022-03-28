const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getAllProducts: `${API}/api/${VERSION}/products`,
    createProduct: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    createUser: `${API}/api/${VERSION}/users`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    createCategory: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
  },
};

module.exports = endPoints;
