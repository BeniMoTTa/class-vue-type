<template>
  <v-btn
    @click="router.push({ name: 'Catalog' })"
    color="teal-lighten-4"
    variant="elevated"
  >
    Back to catalog
  </v-btn>

  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.images[0]" alt="" />
      {{ console.log(selectedProduct) }}
    </div>

    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
      <v-btn variant="elevated" color="indigo-lighten-3" @click="addToCart"
        >Add to cart</v-btn
      >
    </div>
  </div>

  <ProductItem
    v-if="selectedProduct"
    :productData="selectedProduct"
    @item-clicked="handleProductClicked"
  />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductDetails",
});
</script>

<script setup>
import { computed, onMounted } from "vue";
import { productsStore } from "@/stores/products";
import { useRoute, useRouter } from "vue-router";
import ProductItem from "@/components/ProductItem.vue";

const store = productsStore();
const router = useRouter();
const route = useRoute();

const selectedProduct = computed(() => {
  const productId = Number(route.params.id);

  return store.products.products.find((product) => product.id === productId);
});

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProductsFromDB();
  }
});

const addToCart = () => {
  store.addToCart(selectedProduct.value);
  router.push({ name: "CartView" });
};
</script>

<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}
</style>
