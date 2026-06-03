import { loadHeaderFooter } from "../js/utils.mjs";
import CheckoutProcess from "../js/CheckoutProcess.mjs";

loadHeaderFooter();

const checkout = new CheckoutProcess("so-cart", ".order-summary");
checkout.init();

document.querySelector("#zip").addEventListener("blur", () => {
  checkout.calculateOrderTotal();
});

document.querySelector("#checkout-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await checkout.checkout(e.target);
    console.log("Order response:", response);
    alert("Order placed successfully!");
  } catch (err) {
    console.error("Checkout error:", err);
    alert("There was an error placing your order.");
  }
});
