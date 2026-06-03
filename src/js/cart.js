import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];

  // Check for empty state
  if (cartItems && cartItems.length > 0) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".cart-card__empty").classList.add("is-not-empty");
    
    // Seleciona a lista e insere os produtos
    const productList = document.querySelector(".product-list");
    productList.innerHTML = htmlItems.join("");

    // O QUE ESTAVA FALTANDO: Escutador de clique para remover o item
    productList.addEventListener("click", (event) => {
      // Captura o clique no botão correto, mesmo se clicar em cima do emoji
      const removeButton = event.target.closest(".cart-card__remove");
      if (removeButton) {
        const idToRemove = removeButton.getAttribute("data-id");
        removeCartItem(idToRemove);
      }
    });

    // Calcula o total
    let total = 0;
    cartItems.forEach((item) => {
      total += item.FinalPrice;
    });
    document.querySelector(".cart-total-value").textContent = total.toFixed(2);
    
  } else {
    // Se o carrinho estiver vazio, limpa a tela e zera o total
    document.querySelector(".cart-card__empty").classList.remove("is-not-empty");
    document.querySelector(".product-list").innerHTML = "";
    document.querySelector(".cart-total-value").textContent = "0.00";
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="cart-card__remove" data-id="${item.Id}"><span>❌</span></button>
</li>`;

  return newItem;
}

function removeCartItem(id) {
  let cartItems = getLocalStorage("so-cart") || [];
  // Filtra a lista mantendo apenas os itens que têm ID diferente do clicado
  cartItems = cartItems.filter((item) => item.Id !== id);
  // Atualiza o LocalStorage
  localStorage.setItem("so-cart", JSON.stringify(cartItems));
  // Renderiza novamente para atualizar a tela e o valor total
  renderCartContents();
}

// Execução inicial ao abrir a página
renderCartContents();