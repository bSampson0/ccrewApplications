<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="end">
          <v-btn color="orange" small text to="/applicants"
            >Back to Applicants</v-btn
          >
        </v-col>
        <v-card>
          <v-card-text>
            <h1>Adoption Application: {{ lname }}, {{ fname }}</h1>
          </v-card-text>
          <v-card-text>
            <v-col cols="12">
              <h2 class="pb-6">Contact Information</h2>
              <p>
                <strong>First Name:</strong><br />
                {{ fname }}
              </p>
              <p>
                <strong>Last Name:</strong><br />
                {{ lname }}
              </p>
              <p>
                <strong>Address:</strong><br />
                {{ address }}
              </p>
              <p>
                <strong>City:</strong><br />
                {{ city }}
              </p>
              <p>
                <strong>State:</strong><br />
                {{ state }}
              </p>
              <p>
                <strong>Zip:</strong><br />
                {{ zip }}
              </p>
              <p>
                <strong>Phone:</strong><br />
                {{ phone }}
              </p>
              <p>
                <strong>Email:</strong><br />
                {{ email }}
              </p>
              <p>
                <strong>License:</strong><br />
                {{ license }}
              </p>
              <p>
                <strong>State Registered:</strong><br />
                {{ stateRegistered }}
              </p>
              <p>
                <strong>How did you hear about us?</strong> <br />
                {{ hearAboutUs }}
              </p>
            </v-col>
          </v-card-text>
          <v-card-text>
            <v-col cols="12">
              <h2 class="pb-6">Employment Information</h2>
              <p>
                <strong>Employment Status:</strong> <br />
                {{ employmentStatus }}
              </p>
              <p>
                <strong>Employer or School Name:</strong> <br />
                {{ employerOrSchoolName }}
              </p>
              <p>
                <strong>Number of People in Household:</strong> <br />
                {{ peopleInHousehold }}
              </p>
              <p>
                <strong>Family Allergic?:</strong> <br />
                {{ familyAllergic }}
              </p>
              <p>
                <strong>How Active is Household:</strong> <br />
                {{ homeActiveRating }}
              </p>
              <p>
                <strong>Type of Residence:</strong> <br />
                {{ typeOfResidence }}
              </p>
              <p>
                <strong>Are Pets Allowed:</strong> <br />
                {{ petsAllowed }}
              </p>
              <p>
                <strong>Manager or Landlord Name:</strong> <br />
                {{ landlordName }}
              </p>
              <p>
                <strong>Manager or Landlord Phone:</strong> <br />
                {{ landlordPhone }}
              </p>
              <p>
                <strong>Complex Name:</strong> <br />
                {{ complexName }}
              </p>
              <p>
                <strong>Type of Street:</strong> <br />
                {{ streetType }}
              </p>
            </v-col>
          </v-card-text>
          <v-card-text>
            <v-col cols="12">
              <h2 class="pb-6">Animal Care Information</h2>
              <p>
                <strong>Are you interested in a Cat or Dog:</strong> <br />
                {{ catOrDog }}
              </p>
              <p>
                <strong>Name of animal you are interested in:</strong> <br />
                {{ petInterested }}
              </p>
              <p>
                <strong>How long will your pet be left alone each day:</strong>
                <br />
                {{ timeAlone }}
              </p>
              <p>
                <strong>Where will your pet sleep:</strong> <br />
                {{ petssSleepStatus }}
              </p>
              <p>
                <strong
                  >What brand of food do you currently or plan to feed to
                  current or newly adopted animal(s):</strong
                >
                <br />
                {{ animalFood }}
              </p>
              <p>
                <strong>Is your yard fenced:</strong> <br />
                {{ yardFenced }}
              </p>
              <p>
                <strong>Fence Height and Type:</strong> <br />
                {{ fenceType }}
              </p>
              <p>
                <strong>Where will the pet stay when left alone:</strong> <br />
                {{ aloneStatus }}
              </p>
              <p>
                <strong>How do you plan to exercise your pet:</strong> <br />
                {{ exerciseStatus }}
              </p>
              <p>
                <strong
                  >Are you able/willing to hire a trainer or attend classes with
                  your new dog/puppy:</strong
                >
                <br />
                {{ trainingStatus }}
              </p>
              <p>
                <strong
                  >If there were emergency veterinary costs, are you willing and
                  able to pay them:</strong
                >
                <br />
                {{ vetCostStatus }}
              </p>
              <p>
                <strong
                  >What provisions will you make for the new animal(s),
                  including budgeting for new expense such as vaccine, food, and
                  monthly care:</strong
                >
                <br />
                {{ provisionsStatus }}
              </p>
              <p>
                <strong
                  >How much time do you have prepared for your new pet to
                  adjust:</strong
                >
                <br />
                {{ adjustStatus }}
              </p>
              <p>
                <strong>Currently have pets:</strong> <br />
                {{ hadPetsStatus }}
              </p>
              <p>
                <strong>Name, age, and breed:</strong> <br />
                {{ currentPetsStatus }}
              </p>
              <p>
                <strong>Veterinary Hospital you last visited:</strong> <br />
                {{ petHospitalName }}
              </p>
              <p>
                <strong>Veterinary Hospital Phone Number:</strong> <br />
                {{ petHostpitalPhone }}
              </p>
              <p>
                <strong
                  >What Problems or issues would make you return your pet to the
                  rescue:</strong
                >
                <br />
                {{ returnAnimalStatus }}
              </p>
              <p>
                <strong
                  >If your dog or cat does not get along with your other pets,
                  what will you do about it:</strong
                >
                <br />
                {{ petReturnIssue }}
              </p>
              <p>
                <strong>Comment, Questions ect.:</strong> <br />
                {{ comments }}
              </p>
            </v-col>
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
    "typeOfResidence",
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

<style lang="scss" scoped></style>
