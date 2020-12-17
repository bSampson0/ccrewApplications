<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>CCREW</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!loggedin" @click="login">Login</v-btn>
      <v-btn v-else @click="logout">Logout</v-btn>
      <v-btn text small href="https://ccrewdog.org">Back to site</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--darken-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Appplication Form</v-list-item-title>
          </v-list-item>

          <v-list-item to="/applicants">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Submitted Appplications</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    loggedin: true
  }),
  methods: {
    login() {
      this.loggedin = true;
    },
    logout() {
      this.loggedin = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
