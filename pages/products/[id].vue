<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
      repudiandae obcaecati sequi praesentium autem modi!
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: 'products'
})
</script>

<style scoped></style>
