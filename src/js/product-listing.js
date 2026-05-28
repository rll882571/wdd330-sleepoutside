import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

// Carrega o cabeçalho e rodapé nesta página também
loadHeaderFooter();

// Captura a categoria da URL (ex: tents)
const category = getParam("category");

const dataSource = new ProductData();
const element = document.querySelector(".product-list");

// Inicializa a lista dinâmica com a categoria capturada
const productList = new ProductList(category, dataSource, element);
productList.init();