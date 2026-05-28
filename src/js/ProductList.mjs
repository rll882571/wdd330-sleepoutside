import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="../product_pages/index.html?product=${product.Id}">
      <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.Name}">
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // 1. Pega a lista original de produtos da API
    const list = await this.dataSource.getData(this.category);
    
    // 2. Renderiza a lista inicial na tela
    this.renderList(list);

    // 3. Modifica o título da página dinamicamente
    const categoryName = this.category.charAt(0).toUpperCase() + this.category.slice(1);
    document.querySelector(".title").innerHTML = `Top Products: ${categoryName}`;

    // 4. Escuta o menu de ordenação do HTML que você acabou de criar
    document.querySelector("#sort-select").addEventListener("change", (e) => {
      const sortBy = e.target.value;

      if (sortBy === "name") {
        // Ordena por Nome de A a Z
        list.sort((a, b) => a.NameWithoutBrand.localeCompare(b.NameWithoutBrand));
      } else if (sortBy === "price") {
        // Ordena por Preço (Menor para o Maior)
        list.sort((a, b) => a.FinalPrice - b.FinalPrice);
      }

      // 5. Limpa a tela e desenha os cartões na nova ordem!
      this.listElement.innerHTML = "";
      this.renderList(list);
    });
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
