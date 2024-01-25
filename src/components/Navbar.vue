<template>
  <header
    :class="`bg-[${
      backgroundColor ?? ''
    }] sticky top-0 z-20 flex flex-row items-center justify-between text-black`"
  >
    <div
      class="ml-[40px] mt-4 font-title text-mobile_title lg:ml-[40px] lg:text-3xl lg:font-bold"
    >
      <router-link to="/">WUNDERBAR</router-link>
      <!-- <a href="/">WUNDERBAR</a> -->
    </div>
    <div class="relative flex w-[45%] flex-row items-center justify-end">
      <button class="mr-6 mt-4" @click="setMenuOpen(!menuOpen)">
        <!-- <HamburgerIcon class="h-[40px] w-[40px] stroke-black lg:hidden" /> -->
      </button>
      <ul class="hidden w-full items-center justify-between pr-10 lg:flex">
        <li class="my-5 font-body text-lg font-medium">
          <!-- <a href="/store">STORE</a> -->
          <router-link to="/store">STORE</router-link>
        </li>
        <li class="my-5 font-body text-lg font-medium">
          <!-- <a href="#about_page">ABOUT</a> -->
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li class="my-5 font-body text-lg font-medium">
          <!-- <a href="#gallery_page">GALLERY</a> -->
          <router-link to="/gallery">GALLERY</router-link>
        </li>
        <li class="my-5 font-body text-lg font-medium">
          <!-- <a href="#contact_page">CONTACT</a> -->
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </header>
  <div
    :class="`fixed z-30 h-60 w-36 bg-gray-100 bg-opacity-95
          ${
            menuOpen
              ? ' right-0 animate-open_hamburgermenu'
              : ' right-[-144px] animate-closed_hamburgermenu'
          }
        `"
  >
    <ul
      class="flex h-full flex-col justify-evenly pl-5 font-body text-lg font-medium tracking-wide"
    >
      <li>
        <!-- <a href="/store">STORE</a> -->
        <router-link to="/store">STORE</router-link>
        <div class="w-[80px] border-t-2 border-gray-200"></div>
      </li>
      <li>
        <!-- <a href="#about_page">ABOUT</a> -->
        <router-link to="/about">ABOUT</router-link>
        <div class="w-[80px] border-t-2 border-gray-200"></div>
      </li>
      <li>
        <!-- <a href="#gallery_page">GALLERY</a> -->
        <router-link to="/gallery">GALLERY</router-link>
        <div class="w-[80px] border-t-2 border-gray-200"></div>
      </li>
      <li>
        <!-- <a href="#contact_page">CONTACT</a> -->
        <router-link to="/contact">CONTACT</router-link>
        <div class="w-[80px] border-t-2 border-gray-200"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "../router/index.js";

export default {
  name: "Navbar",
  props: ["backgroundColor"],
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    setMenuOpen(menuOpen) {
      this.menuOpen = menuOpen;
    },
  },
};
</script>

<style>
</style>