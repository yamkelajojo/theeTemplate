<template>
  <div>
    <header>
      <nav>
        <h1><NuxtLink to="/">TheStore</NuxtLink></h1>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
      <h4 @click="closeNav($event)">Default Nuxt Layout</h4>
    </header>

    <div v-if="menuPressed" id="mySidenav" class="sidenav">
      <a class="closebtn" @click="closeNav($event)">&times;</a>
      <a href="#">About</a>
      <a href="#">Products</a>
    </div>


    <!-- output page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const menuPressed = ref(true)
const closeNav = (e) => {
  console.log(menuPressed.value)
  console.log(e.target)
  menuPressed.value = !menuPressed.value
}
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
