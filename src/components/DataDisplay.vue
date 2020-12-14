<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-btn to="/applicants">Back to Applicants</v-btn>
          <h2>Contact Information</h2>
          <p>First Name: {{ fname }}</p>
          <p>Last Name: {{ lname }}</p>
          <p>Address: {{ address }}</p>
          <p>City: {{ city }}</p>
          <p>State: {{ state }}</p>
          <p>Zip: {{ zip }}</p>
          <p>Phone: {{ phone }}</p>
          <p>Email: {{ email }}</p>
          <p>License: {{ license }}</p>
          <p>State Registered: {{ stateRegistered }}</p>
          <p>
            How did you hear about us? <br />
            {{ hearAboutUs }}
          </p>
        </v-col>
        <v-col cols="12">
          <h2>Employment Information</h2>
          <p>Employment Status: {{ employmentStatus }}</p>
          <p>Employer or School Name: {{ employerOrSchoolName }}</p>
          <p>Number of People in Household: {{ peopleInHousehold }}</p>
          <p>Family Allergic?: {{ familyAllergic }}</p>
          <p>How Active is Household: {{ homeActiveRating }}</p>
          <p>Type of Residence: {{ typeOfResidence }}</p>
          <p>Are Pets Allowed: {{ petsAllowed }}</p>
          <p>Manager or Landlord Name: {{ landlordName }}</p>
          <p>Manager or Landlord Phone: {{ landlordPhone }}</p>
          <p>Complex Name: {{ complexName }}</p>
          <p>Type of Street: {{ streetType }}</p>
        </v-col>
        <v-col cols="12">
          <h2>Animal Care Information</h2>
          <p>Are you interested in a Cat or Dog: {{ catOrDog }}</p>
          <p>Name of animal you are interested in: {{ petInterested }}</p>
          <p>
            How long will your pet be left alone each day:
            {{ timeAlone }}
          </p>
          <p>Where will your pet sleep: {{ petssSleepStatus }}</p>
          <p>
            What brand of food do you currently or plan to feed to current or
            newly adopted animal(s): {{ animalFood }}
          </p>
          <p>Is your yard fenced: {{ yardFenced }}</p>
          <p>Fence Height and Type: {{ fenceType }}</p>
          <p>Where will the pet stay when left alone: {{ aloneStatus }}</p>
          <p>How do you plan to exercise your pet: {{ exerciseStatus }}</p>
          <p>
            Are you able/willing to hire a trainer or attend classes with your
            new dog/puppy: {{ trainingStatus }}
          </p>
          <p>
            If there were emergency veterinary costs, are you willing and able
            to pay them: {{ vetCostStatus }}
          </p>
          <p>
            What provisions will you make for the new animal(s), including
            budgeting for new expense such as vaccine, food, and monthly care:
            {{ provisionsStatus }}
          </p>
          <p>
            How much time do you have prepared for your new pet to adjust:
            {{ adjustStatus }}
          </p>
          <p>Currently have pets: {{ hadPetsStatus }}</p>
          <p>Name, age, and breed: {{ currentPetsStatus }}</p>
          <p>Veterinary Hospital you last visited: {{ petHospitalName }}</p>
          <p>Veterinary Hospital Phone Number: {{ petHostpitalPhone }}</p>
          <p>
            What Problems or issues would make you return your pet to the
            rescue: {{ returnAnimalStatus }}
          </p>
          <p>
            If your dog or cat does not get along with your other pets, what
            will you do about it: {{ petReturnIssue }}
          </p>
          <p>Comment, Questions ect.: {{ comments }}</p>
        </v-col>
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
