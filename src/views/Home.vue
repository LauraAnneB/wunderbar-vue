<template>
  <Navbar :backgroundColor="green" />
  <div class="w-full min-h-96 flex flex-col justify-center items-center">
    <h1
      class="w-40 text-white bg-slate-500 p-4 rounded-full shadow-lg animate-bounce"
    >
      HALLO
    </h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>