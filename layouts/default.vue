<template>
  <div>
    <header>
      <nav>
        <button id="hamburgerButton" @click="toggleSideNav($event)">HAM</button>
        <h1><NuxtLink to="/">TheStore</NuxtLink></h1>
        <ul id="navTabsDiv">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div id="mySidenav" class="sidenav">
      <div id="closeDiv">
        <a class="closebtn" @click="toggleSideNav($event)">&times;</a>
      </div>
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
// const sideNav = document.getElementById("mySidenav")
const toggleSideNav = (e) => {
  console.log(menuPressed.value);
  console.log(e.target);
  if (sideNav.value.style.width > 0) {
    sideNav.value.style.width = 0;
  } else {
    sideNav.value.style.width = 100;
  }
  menuPressed.value = !menuPressed.value;
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) and (min-width: 600px) {
  #navTabsDiv {
    display: none;
  }
  h1 {
    font-size: 12px;
  }
}
.router-link-exact-active {
  color: #12b488;
}
</style>
