<template>
  <div class="products-list">
    <v-text-field
      clearable
      label="Search a product"
      prepend-icon=""
    ></v-text-field>
    <div class="banner-container">
      <img :src="banner" alt="" class="banner-image" />
    </div>
    <v-row no-gutters>
      <v-col
        v-for="product in store.products.products"
        :key="product.id"
        cols="16"
        sm="4"
        @click="goToProductPage(product.id)"
      >
        <product-item :product-data="product" @item-clicked="goToProductPage" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import banner from "../assets/Shop till you drop with our e-commerce site.png";
import ProductItem from "@/components/ProductItem.vue";
export default defineComponent({
  name: "CatalogView",
  components: {
    ProductItem,
  },
});
</script>

<script setup>
import { onMounted, ref } from "vue";
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const store = productsStore();
const router = useRouter();

const search = ref("");

const goToProductPage = (id) => {
  router.push({ name: "ProductView", params: { id } });
};

onMounted(async () => {
  await store.fetchProductsFromDB();
});
</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
}

.banner-image {
  max-width: 100%;
  height: auto;
}
</style>
