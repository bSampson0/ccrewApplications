<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="end">
          <v-btn color="orange" small text to="/applicants"
            >Back to Applicants</v-btn
          >
        </v-col>
        <v-card class="pa-3 my-card">
          <v-card-text>
            <h1>
              <span class="main-name">{{ lname }}, {{ fname }}</span>
            </h1>
          </v-card-text>
          <v-card-text>
            <h2 class="pb-6">Contact Information</h2>
            <v-row class="d-flex oarea">
              <v-col cols="12" sm="6" md="4">
                <strong>First Name:</strong><br />
                {{ fname }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Last Name:</strong><br />
                {{ lname }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Address:</strong><br />
                {{ address }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>City:</strong><br />
                {{ city }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>State:</strong><br />
                {{ state }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Zip:</strong><br />
                {{ zip }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Phone:</strong><br />
                {{ phone }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Email:</strong><br />
                {{ email }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>License:</strong><br />
                {{ license }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>State Registered:</strong><br />
                {{ stateRegistered }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>How did you hear about us?</strong> <br />
                {{ hearAboutUs }}
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <h2 class="pb-6">Employment Information</h2>
            <v-row class="d-flex oarea">
              <v-col cols="12" sm="6" md="4">
                <strong>Employment Status:</strong> <br />
                {{ employmentStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Employer or School Name:</strong> <br />
                {{ employerOrSchoolName }}
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <h2 class="pb-6">Household Information</h2>
            <v-row class="d-flex oarea">
              <v-col cols="12" sm="6" md="4">
                <strong>Number of People in Household:</strong> <br />
                {{ peopleInHousehold }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Family Allergic?:</strong> <br />
                {{ familyAllergic }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>How Active is Household:</strong> <br />
                {{ homeActiveRating }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Lives in appartment:</strong> <br />
                {{ livesAppartment }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Are Pets Allowed:</strong> <br />
                {{ petsAllowed }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Manager or Landlord Name:</strong> <br />
                {{ landlordName }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Manager or Landlord Phone:</strong> <br />
                {{ landlordPhone }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Complex Name:</strong> <br />
                {{ complexName }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Type of Street:</strong> <br />
                {{ streetType }}
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <h2 class="pb-6">Animal Care Information</h2>
            <v-row class="d-flex oarea">
              <v-col cols="12" sm="6" md="4">
                <strong>Are you interested in a Cat or Dog:</strong> <br />
                {{ catOrDog }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Age of animal you would like to adopt:</strong> <br />
                {{ ageInterested }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Name of animal you are interested in:</strong> <br />
                {{ petInterested }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Why do you want to adopt?</strong> <br />
                {{ whyAdopt }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>How long will your pet be left alone each day:</strong>
                <br />
                {{ timeAlone }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Where will your pet sleep:</strong> <br />
                {{ petssSleepStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >What brand of food do you currently or plan to feed to
                  current or newly adopted animal(s):</strong
                >
                <br />
                {{ animalFood }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Is your yard fenced:</strong> <br />
                {{ yardFenced }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Fence Height and Type:</strong> <br />
                {{ fenceType }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Where will the pet stay when left alone:</strong> <br />
                {{ aloneStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>How do you plan to exercise your pet:</strong> <br />
                {{ exerciseStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >Are you able/willing to hire a trainer or attend classes with
                  your new dog/puppy:</strong
                >
                <br />
                {{ trainingStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >If there were emergency veterinary costs, are you willing and
                  able to pay them:</strong
                >
                <br />
                {{ vetCostStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >What provisions will you make for the new animal(s),
                  including budgeting for new expense such as vaccine, food, and
                  monthly care:</strong
                >
                <br />
                {{ provisionsStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >How much time do you have prepared for your new pet to
                  adjust:</strong
                >
                <br />
                {{ adjustStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Currently have pets:</strong> <br />
                {{ hadPetsStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Name, age, and breed:</strong> <br />
                {{ currentPetsStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Veterinary Hospital you last visited:</strong> <br />
                {{ petHospitalName }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Veterinary Hospital Phone Number:</strong> <br />
                {{ petHostpitalPhone }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >What Problems or issues would make you return your pet to the
                  rescue:</strong
                >
                <br />
                {{ returnAnimalStatus }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong
                  >If your dog or cat does not get along with your other pets,
                  what will you do about it:</strong
                >
                <br />
                {{ petReturnIssue }}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <strong>Comment, Questions ect.:</strong> <br />
                {{ comments }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: [
    "fname",
    "lname",
    "address",
    "city",
    "state",
    "zip",
    "phone",
    "email",
    "license",
    "stateRegistered",
    "hearAboutUs",
    "employmentStatus",
    "employerOrSchoolName",
    "peopleInHousehold",
    "areThereChildren",
    "ageOfChildren",
    "familyAllergic",
    "homeActiveRating",
    "livesAppartment",
    "petsAllowed",
    "complexName",
    "landlordName",
    "landlordPhone",
    "streetType",
    "catOrDog",
    "catDeclaw",
    "petInterested",
    "petssSleepStatus",
    "timeAlone",
    "animalFood",
    "yardFenced",
    "fenceType",
    "aloneStatus",
    "exerciseStatus",
    "trainingStatus",
    "vetCostStatus",
    "provisionsStatus",
    "adjustStatus",
    "pickupStatus",
    "hadPetsStatus",
    "currentPetsStatus",
    "petHospitalName",
    "petHospitalPhone",
    "returnAnimalStatus",
    "petReturnIssue",
    "comments"
  ]
};
</script>

<style lang="scss" scoped>
.oarea .col-12 {
  margin-bottom: 2em;
}
.my-card .col-12 {
  border-left: 1px solid #333;
}
.main-name {
  color: #fff;
  background: #125fa8;
  padding: 3px 8px;
}
</style>
