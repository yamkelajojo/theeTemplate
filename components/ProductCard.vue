<template>
  <div>
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p>{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`"><p>View Data</p></NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
