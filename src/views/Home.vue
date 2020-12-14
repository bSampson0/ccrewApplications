<template>
  <div class="home">
    <v-container>
      <v-btn to="/applicants">View Applications</v-btn>
    </v-container>
    <AdoptionStepper />
  </div>
</template>

<script>
// @ is an alias to /src
// import AdoptionApplication from "@/components/AdoptionApplication.vue";
import AdoptionStepper from "@/components/AdoptionStepper.vue";

export default {
  name: "Home",
  components: {
    AdoptionStepper
  }
};
</script>
