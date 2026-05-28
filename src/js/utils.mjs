// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false,
) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}
<<<<<<< HEAD

// 1. Renderiza um único template direto no elemento pai [cite: 89, 90, 91]
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template; // [cite: 89]
  if (callback) { // [cite: 90]
    callback(data); // [cite: 91]
  }
}

// 2. Faz o fetch assíncrono do arquivo HTML parcial e o transforma em texto string [cite: 107, 108, 109, 110]
export async function loadTemplate(path) {
  const res = await fetch(path); // [cite: 108]
  const template = await res.text(); // [cite: 109]
  return template; // [cite: 110]
}

// 3. Orquestra o carregamento dos parciais e injeta nos elementos correspondentes [cite: 112, 114, 115, 116]
export async function loadHeaderFooter() {
  // Carrega os templates de dentro da sua pasta partials [cite: 114]
  const headerTemplate = await loadTemplate("/partials/header.html");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  
  // Seleciona as cascas vazias que preparamos no seu HTML [cite: 115]
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  // Renderiza ambos na tela [cite: 116]
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}
=======
 export function updateCartCount() {
  const cart = getLocalStorage("so-cart");
  const count = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  const cartCountElement = qs("#cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
 }
>>>>>>> rl--individual3
