// 3. Orquestra o carregamento dos parciais e injeta nos elementos correspondentes
export async function loadHeaderFooter() {
  // Tiramos a barra inicial para o caminho ficar relativo e o Vite encontrar o arquivo perfeitamente
  const headerTemplate = await loadTemplate("partials/header.html");
  const footerTemplate = await loadTemplate("partials/footer.html");
  
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  // Passamos o updateCartCount como callback para ele atualizar o ícone assim que o header carregar!
  renderWithTemplate(headerTemplate, headerElement, null, updateCartCount);
  renderWithTemplate(footerTemplate, footerElement);
}