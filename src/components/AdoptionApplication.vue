<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>CCREW Adoption Application</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h3 class="pb-4 pt-6">Contact Information</h3>
      <!-- Contact Information Section -->
      <v-card class="pa-8" color="rgba(0,0,0,0)" dark>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.applicantFirstName"
              label="First Name"
              type="text"
              required
              solo-inverted
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.applicantLastName"
              label="Last Name"
              type="text"
              required
              solo-inverted
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.applicantCurrentAddress"
              label="Address"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="adoptionApplication.applicantCity"
              label="City"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="adoptionApplication.applicantState"
              :items="states"
              menu-props="auto"
              label="State"
              hide-details
              single-line
              solo-inverted
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="adoptionApplication.applicantZip"
              label="Zip"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.applicantCellPhone"
              label="Cell Phone"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.applicantHomePhone"
              label="Home Phone"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.applicantEmail"
              label="Email"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.driversLicense"
              label="Drivers License Number"
              type="text"
              solo-inverted
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="adoptionApplication.vehicleState"
              :items="states"
              menu-props="auto"
              label="State Vehicle is Registered"
              hide-details
              single-line
              solo-inverted
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.hearAboutUs"
              label="How did you hear about us?"
              type="text"
              solo-inverted
              required
            />
          </v-col>
        </v-row>
      </v-card>
      <h3 class="pb-4 pt-6">Employment</h3>
      <v-card class="pa-8" color="rgba(0,0,0,0)" dark>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="adoptionApplication.employmentStatus"
              :items="employmentOptions"
              menu-props="auto"
              label="Employment Status"
              hide-details
              single-line
              solo-inverted
            ></v-select>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="adoptionApplication.employerOrSchoolName"
              label="Employer/School Name"
              type="text"
              required
              solo-inverted
            />
          </v-col>
        </v-row>
      </v-card>
      <h3 class="pb-4 pt-6">Housing Situation</h3>
      <v-card class="pa-8" color="rgba(0,0,0,0)" dark>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.peopleInHousehold"
              label="# of people in household?"
              type="number"
              solo-inverted
              required
            />
            <v-checkbox
              class="mt-0"
              v-model="adoptionApplication.areThereChildren"
              label="Are there children?"
              color="blue"
              value="yes"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" md="6">
            <v-label dark>Are you or a family member allergic to pets?</v-label>
            <v-select
              class="mt-4"
              v-model="adoptionApplication.familyAllergic"
              :items="allergies"
              single-line
              solo-inverted
            ></v-select>
          </v-col>
          <v-col cols="12" class="pt-12">
            <v-slider
              color="#333"
              v-model="adoptionApplication.homeActiveRating"
              max="10"
              step="1"
              label="How active is your home? (1-10)"
              thumb-label="always"
              ticks
            ></v-slider>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="adoptionApplication.typeOfResidence"
              :items="residenceTypes"
              label="Type of Residence"
              single-line
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="adoptionApplication.dogsAllowed"
              label="If rental, are dogs allowed?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="adoptionApplication.complexName"
              label="Complex name (if applicable)?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="adoptionApplication.landlordName"
              label="Manager/Landlord name?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="adoptionApplication.landlordPhone"
              label="Manager/Landlord phone number?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="adoptionApplication.streetType"
              :items="streetTypes"
              label="Type of street?"
              single-line
              required
            ></v-select>
          </v-col>
        </v-row>
      </v-card>

      <h3 class="pt-6 pb-6">Animal Care Questions</h3>

      <v-card class="pa-8" color="rgba(0,0,0,0)" dark>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.timeAlone"
              label="How long will the dog be left alone each day?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="adoptionApplication.dogsSleepStatus"
              label="Where will dog sleep? (Bed, Crate, With you ect.)"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.animalFood"
              label="What brand of food do you currently or plan to feed to current or newly adopted animal(s)?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="adoptionApplication.yardFenced"
              label="Is your yard fenced?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="adoptionApplication.fenceType"
              label="How high is the fence and what type of fence is it?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="7">
            <v-text-field
              v-model="adoptionApplication.aloneStatus"
              label="Where will the dog stay when left alone? (House, Room, Crate, Outside, etc)"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="adoptionApplication.exerciseStatus"
              label="How do you plan to exercise your dog?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.trainingStatus"
              label="Are you able/willing to hire a trainer or attend classes with your new dog/puppy?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.vetCostStatus"
              label="If there were emergency veterinary costs, are you willing and able to pay them?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.provisionsStatus"
              label="What provisions will you make for the new animal(s), including budgeting for new expense such as vaccine, food, and monthly care?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.adjustStatus"
              label="How much time do you have prepared for your new dog to adjust?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.pickupStatus"
              label="If you have a pickup truck, will the dog be left alone or allowed to ride freely in the bed of the truck? If yes, please explain."
              type="text"
              required
            />
          </v-col>

          <!-- switch for has pets question -->
          <v-col cols="12">
            <v-switch
              color="green"
              v-model="adoptionApplication.hadPetsStatus"
              flat
              label="Currently Have Pets?"
            ></v-switch>
          </v-col>

          <div
            class="hasPetsQuestions"
            v-if="adoptionApplication.hadPetsStatus"
          >
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="adoptionApplication.currentPetsStatus"
                    label="Name, age, and breed, and how long you have owned them."
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="adoptionApplication.petHospitalName"
                    label="Veterinary Hospital you last visited?"
                    type="text"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="adoptionApplication.petHospitalPhone"
                    label="Veterinary Hospital Phone Number?"
                    type="number"
                    required
                  />
                </v-col>
              </v-row>
            </v-container>
          </div>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="adoptionApplication.returnAnimalStatus"
              label="What Problems or issues would make you return your dog to the rescue?"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="adoptionApplication.petReturnIssue"
              label="If your dog or cat does not get along with your other pets, what will you do about it?"
              type="text"
              required
            />
            <v-text-field
              v-model="adoptionApplication.comments"
              label="Comment, Questions ect.?"
              type="text"
              required
            />
            <v-btn @click="createApplicant">
              add data
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

      <!-- General Information Section -->
      <v-card class="pa-8">
        <v-row justify="center">
          <v-col cols="12" justify="center">
            <h3 class="pb-4 pt-6">General Information</h3>
            <v-text-field
              v-model="adoptionApplication.animalAgeDesired"
              label="Age of animal desired?"
              type="text"
              required
            />
            <v-text-field
              v-model="adoptionApplication.whyAdopt"
              label="Why do you want to adopt?"
              type="text"
              required
            />
            <v-select
              v-model="adoptionApplication.applicantAgeGroup"
              :items="ageGroups"
              menu-props="auto"
              hide-details
              label="What is your age group?"
              required
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <div id="output">
      <p>{{ adoptionApplication.applicantName }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../plugins/firebase.js";

export default {
  data() {
    return {
      allergies: ["yes", "no"],
      dogIssueTypes: [
        "Biting",
        "Shyness/Fear",
        "Scratching/Climbing on Furniture",
        "Jumping",
        "Too Much Energy",
        "Marking",
        "Chewing on Things",
        "Not Getting Along with Other Animals",
        "Other"
      ],
      streetTypes: [
        "Very Busy Road",
        "Light Traffic",
        "Residential Area",
        "Country Road"
      ],
      residenceTypes: [
        "House",
        "Apartment",
        "Condo",
        "Mobile Home",
        "Farm/Barn"
      ],
      employmentOptions: ["Employed", "Unemployed", "Student", "Retired"],
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      valid: false,
      ageGroups: ["21-34", "35-49", "50+"],
      adoptionApplication: {
        animalAgeDesired: "",
        whyAdopt: "",
        applicantFirstName: "",
        applicantLastName: "",
        applicantAgeGroup: "",
        applicantCurrentAddress: "",
        applicantCity: "",
        applicantState: "",
        applicantZip: "",
        appplicantTimeAtResidence: "",
        applicantCellPhone: "",
        applicantHomePhone: "",
        applicantEmail: "",
        bestWayToContact: "",
        driversLicense: "",
        vehicleState: "",
        employmentStatus: "",
        employerOrSchoolName: "",
        peopleInHousehold: "",
        areThereChildren: "",
        ageOfChildren: "",
        familyAllergic: "no",
        hearAboutUs: "",
        homeActiveRating: "",
        typeOfResidence: "",
        dogsAllowed: "",
        complexName: "",
        landlordName: "",
        landlordPhone: "",
        streetType: "",
        dogsSleepStatus: "",
        timeAlone: "",
        animalFood: "",
        yardFenced: "",
        fenceType: "",
        aloneStatus: "",
        exerciseStatus: "",
        trainingStatus: "",
        vetCostStatus: "",
        provisionsStatus: "",
        adjustStatus: "",
        pickupStatus: "",
        hadPetsStatus: false,
        currentPetsStatus: "",
        petHospitalName: "",
        returnAnimalStatus: "",
        petReturnIssue: "",
        comments: ""
      }
    };
  },
  methods: {
    async createApplicant() {
      try {
        await db.collection("adoptions").add({
          createdOn: new Date(),
          adoptionApplication: this.adoptionApplication
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hasPetsQuestions {
  width: 100%;
}
</style>
