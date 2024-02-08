import { defineStore } from "pinia";
import axios from "axios";

export const productsStore = defineStore("products", {
  state: () => ({
    products: [],
    cart: [],
  }),

  actions: {
    async fetchProductsFromDB() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    addToCart(product) {
      this.cart.push(product);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
});
