<template>
  <header id="biggerHeader">
    <header id="smallerNavHeader">
      <nav class="navbar">
        <div class="logoDiv">
          <NuxtLink id="title" to="/">
            <h1>ThaSto'</h1>
          </NuxtLink>
        </div>
        <button class="hamburgerButton" @click="toggleSideMenu">
          <Icon name="nimbus:align-left" size="1.5rem" />
        </button>
        <div id="navTabsDiv">
          <NuxtLink to="/"><p>Home</p></NuxtLink>
          <NuxtLink to="/products"><p>Products</p></NuxtLink>
          <NuxtLink to="/about"><p>About</p></NuxtLink>
        </div>
      </nav>
    </header>
  </header>
</template>

<script setup>
const emit = defineEmits(["toggleSM"]);

const toggleSideMenu = () => {
  console.log("here");
  emit("toggleSM");
};
</script>

<style scoped></style>
