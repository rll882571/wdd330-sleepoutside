import { updateCartCount } from "./utils.mjs";

<<<<<<< HEAD
import { loadHeaderFooter, getParam } from "./utils.mjs";
loadHeaderFooter();


// 2. Captura a categoria real vinda da URL (ex: tents, backpacks, etc.)
const category = getParam("category");

// 3. Passa a categoria dinâmica para os nossos motores
const dataSource = new ProductData(); // O construtor agora é limpo, lembra?
const element = document.querySelector(".product-list");

// 4. Cria a lista passando a categoria dinâmica capturada da URL
const productList = new ProductList(category, dataSource, element);


productList.init();

=======
updateCartCount();
>>>>>>> rl--individual3
