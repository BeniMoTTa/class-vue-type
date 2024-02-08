<template>
  <v-sheet class="ma-1 pa-1">
    <v-card class="product" @click="goToProductPage">
      <v-img :src="props.productData.images[0]" height="250px" cover />

      <v-card-title>
        {{ props.productData.brand }}
      </v-card-title>

      <v-card-subtitle> $ {{ props.productData.price }} </v-card-subtitle>

      <v-card-text>
        {{ props.productData.description }}
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="goToProductPage(props.productData.id)"
          elevation="4"
          class="bg-teal-lighten-2"
        >
          + to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "ProductItem",
});
</script>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const emit = defineEmits(["item-clicked"]);

const goToProductPage = (productId) => {
  router.push({ name: "ProductDetails", params: { id: productId } });
};
</script>
<style>
.product {
  min-height: 500px;
  cursor: pointer;
}
.product:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.add-to-cart {
  border: 2px solid black;
}
</style>
