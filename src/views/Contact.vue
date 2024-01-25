<template>
  <Head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Rubik:wght@400..700&display=swap"
    />
    <title>Wunderbar Website</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main
    className="relative h-screen w-screen snap-y snap-mandatory overflow-x-hidden"
  >
    <Navbar :backgroundColor="green" />
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Contact",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>