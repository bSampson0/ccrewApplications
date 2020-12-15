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
#app {
}
</style>
