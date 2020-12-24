<template>
  <div class="applicantData pt-6">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Previously Submitted Applications</h2>
          <p>Click on the View Application button to see full details.</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="dataDump"
            :items-per-page="5"
            class="elevation-1"
            sort-by="createdOn"
            sort-desc
          >
            <template v-slot:item.createdOn="{ item }">
              {{ item.createdOn.toDate().toDateString() }}
            </template>
            <template v-slot:item.actions="{ item }">
              <router-link
                :to="{
                  name: 'ApplicantData',
                  params: { date: item.createdOn.seconds }
                }"
              >
                <v-icon small class="mr-2" @click="displayApplicant(item)">
                  mdi-folder-account
                </v-icon>
              </router-link>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "../plugins/firebase.js";

export default {
  components: {},
  data() {
    return {
      expanded: false,
      currentUser: {},
      dataDump: [],
      headers: [
        {
          text: "Date Submitted",
          align: "start",
          value: "createdOn"
        },
        {
          text: "First Name",
          align: "start",
          value: "adoptionApplication.applicantFirstName"
        },
        {
          text: "Last Name",
          align: "start",
          value: "adoptionApplication.applicantLastName"
        },
        {
          text: "Interested In",
          align: "start",
          value: "adoptionApplication.catOrDog"
        },
        {
          text: "View Application",
          value: "actions",
          sortable: false
        }
      ],
      applicants: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const dataRef = db.collection("adoptions");
      dataRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.dataDump.push(doc.data());
        });
        this.$store.commit("fetchData", this.dataDump);
      });
    },
    displayApplicant(applicant) {
      this.$store.commit("setId", applicant.createdOn.seconds);
      const result = this.$store.state.dataDump.find(
        data => data.createdOn.seconds === applicant.createdOn.seconds
      );
      this.currentUser = result;
      this.expanded = true;
      console.log(this.currentUser);
    }
  }
};
</script>

<style lang="scss" scoped></style>
