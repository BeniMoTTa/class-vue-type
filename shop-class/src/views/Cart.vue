<template>
  <v-btn
    @click="router.push({ name: 'Catalog' })"
    color="teal-lighten-4"
    variant="elevated"
  >
    Back to catalog
  </v-btn>
  <div v-if="!store.cart.length" style="text-align: center">
    <button @click="router.push({ name: 'Catalog' })" class="shopping">
      Click here to back!
    </button>
  </div>
  <div class="cart-items" v-else>
    <div class="cart-item" v-for="item in store.cart" :key="item.id">
      <div class="item-details">
        <img :src="item.images[0]" alt="" />
        <span>Brand: {{ item.brand }}</span>
        <span>Category: {{ item.category }}</span>
        <span>Price: ${{ item.price }}</span>
        <button @click="removeFromCart(item.id)" class="remove-cart">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CartView",
});
</script>

<script setup>
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const router = useRouter();

const store = productsStore();

const removeFromCart = (id) => {
  store.removeFromCart(id);
};
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}

.remove-cart {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 10px;
  background-color: cadetblue;
  color: white;
  font-weight: bold;
}

.shopping {
  width: 100%;
  height: 120px;
  background-color: primary;
  margin-top: 50px;
  border-radius: 20px;
  font-size: xx-large;
  color: rgb(64, 163, 250);
  font-weight: bold;
}
</style>
