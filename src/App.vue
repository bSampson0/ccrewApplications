<template>
  <v-app>
    <v-main>
      <Navigation />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>

<style>
h1,
h2,
h3,
h4,
h5 {
  font-family: "Montserrat", sans-serif;
}
#app {
  font-family: "Open Sans", sans-serif;
}
</style>
