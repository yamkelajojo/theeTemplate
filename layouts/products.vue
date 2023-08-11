<template>
  <div>
    <header>
      <nav>
        <h1><NuxtLink to="/">TheStore</NuxtLink></h1>
      </nav>
      <h4>Custom Nuxt Layout</h4>
    </header>
    <!-- output page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
