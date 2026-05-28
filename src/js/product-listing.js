
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";
loadHeaderFooter();

const textoDaUrl = window.location.search;
const construtorParametros = new URLSearchParams(textoDaUrl);
const category = construtorParametros.get('category');
const dataSource = new ProductData(category);
const element = document.querySelector('.product-list');
const productList = new ProductList(category, dataSource, element);


productList.init(); 
