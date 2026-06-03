const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {}

  async getData(category) { 
    // Forçando o link direto da API com a categoria injetada
    const response = await fetch(`https://wdd330-backend.onrender.com/products/search/${category}`); 
    const data = await convertToJson(response); 
    return data.Result; 
  }

  async findProductById(id) {
    // Forçando o link direto também para quando você clicar no produto
    const response = await fetch(`https://wdd330-backend.onrender.com/product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
}