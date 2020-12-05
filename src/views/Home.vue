<template>
  <div class="home">
    <AdoptionApplication />
  </div>
</template>

<script>
// @ is an alias to /src
import AdoptionApplication from "@/components/AdoptionApplication.vue";

export default {
  name: "Home",
  components: {
    AdoptionApplication
  }
};
</script>
