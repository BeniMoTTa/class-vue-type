<template>
  <header>
    <v-toolbar
      title="Class Vue and Vuetify"
      color="teal darken-3"
      class="header-basic"
      dark
    >
      <v-btn
        @click="router.push({ name: 'CartView' })"
        variant="elevated"
        color="amber lighten-2"
        >Cart: {{ store.cart.length }}
      </v-btn>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import { productsStore } from "@/stores/products";

const router = useRouter();
const store = productsStore();
</script>

<style scoped>
.cart-button {
  color: white !important;
}
.cart-button:hover {
  background-color: #0288d1; /* Altera a cor de fundo ao passar o mouse */
}
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}

.header-basic {
  height: 75px;
  display: flex;

  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
