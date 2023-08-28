<template>
  <div id="layerBody">
    <Header :toggleSM="toggleSideMenu"></Header>
    <transition name="overlay">
      <div class="overlay" v-if="sideNavShown" @click="toggleSideMenu"></div>
    </transition>

    <transition name="leftSlide">
      <div class="sidenav" ref="sidenav" v-if="sideNavShown">
        <div id="sidenavTitleDiv">
          <button class="hamburgerButton" @click="toggleSideMenu">
            <Icon name="nimbus:close" size="1.1rem" />
          </button>
          <NuxtLink id="sidenavTitle" to="/" @click="toggleSideMenu">
            <h1>ThaSto'</h1>
          </NuxtLink>
        </div>
        <div id="sidenavLinksDiv">
          <div class="sidenavLink">
            <NuxtLink to="/" @click="toggleSideMenu"><p>Home</p></NuxtLink>
            <Icon name="ic:outline-house" size="1.1rem" />
          </div>
          <div class="sidenavLink">
            <NuxtLink to="/products" @click="toggleSideMenu"
              ><p>Products</p></NuxtLink
            >
            <Icon name="ic:round-shopping-basket" size="1.1rem" />
          </div>
          <div class="sidenavLink">
            <NuxtLink to="/about" @click="toggleSideMenu"
              ><p>About</p></NuxtLink
            >
            <Icon name="ic:outline-info" size="1.1rem" />
          </div>
        </div>
      </div>
    </transition>

    <!-- output page content -->
    <div id="theSlotArea">
      <slot />
    </div>
    <footer class="navbar">
      <p id="footerTitle">&copy; 2023 Dojo. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sideNavShown = ref(false);

const toggleSideMenu = () => {
  sideNavShown.value = !sideNavShown.value;
  console.log(sideNavShown.value);
};
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
