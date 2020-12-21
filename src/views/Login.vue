<template>
  <div>
    <div class="login">
      <v-container>
        <v-row align="center" justify="center" class="height:100vh">
          <v-col>
            <v-card class="pa-4">
              <v-card-title>
                Login
              </v-card-title>
              <v-card-subtitle>
                Admins Only
              </v-card-subtitle>
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-label>Password</v-label>
                    <v-text-field color="primary" v-model="userpw"></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <p v-if="errors.length">
                <ul>
                  <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
                </ul>
              </p>
              <v-card-actions>
                <v-btn color="primary darken--4" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userpw: "",
      errors: []
    };
  },
  methods: {
    login() {
      if (this.userpw === process.env.VUE_APP_PASSWORD) {
        this.errors.length = 0;
        this.$store.dispatch("login");
        this.$router.push({path:"/applicants"});
      } else {
        this.errors.length = 0;
        this.errors.push('Invalid Password. Please try again.');
      }
      
    }
  }
};
</script>

<style lang="scss" scoped></style>
