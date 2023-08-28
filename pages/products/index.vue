<template>
  <div id="productsGrid">
    <div id="product" v-for="product in products">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
// import {definePageMeta} from "nuxt/dist/pages/runtime";
definePageMeta({
  layout: "products",
});

//fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
#product {
  border: red solid 1px;
}
</style>
