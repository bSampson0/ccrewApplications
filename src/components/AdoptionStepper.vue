<template>
  <div>
    <div class="opening">
      <v-container>
        <v-row>
          <v-col>
            <h2>Online Adoption Application</h2>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="stepper">
        <v-container>
          <v-row>
            <v-col>
              <v-stepper v-model="e6" vertical>
                <v-stepper-step step="1" editable>
                  Contact Information
                  <small>Basic contact info for our records.</small>
                </v-stepper-step>

                <v-stepper-content step="1" editable>
                  <v-card class="pa-8" elevation="0" color="#f7f7f7">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-label>First Name</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantFirstName"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Last Name</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantLastName"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label>Address</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantCurrentAddress"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>City</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantCity"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>State</v-label>
                        <v-select
                          v-model="adoptionApplication.applicantState"
                          :items="states"
                          menu-props="auto"
                          hide-details
                          single-line
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>Zip Code</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantZip"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Cell Phone</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantCellPhone"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Home Phone</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantHomePhone"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Email</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantEmail"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Drivers License Number</v-label>
                        <v-text-field
                          v-model="adoptionApplication.driversLicense"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>State Vehicle is Registered</v-label>
                        <v-select
                          v-model="adoptionApplication.vehicleState"
                          :items="states"
                          menu-props="auto"
                          hide-details
                          single-line
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>How did you hear about us?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.hearAboutUs"
                          type="text"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn color="primary" @click="e6 = 2">
                        Continue
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>

                <v-stepper-step step="2" editable>
                  Employment Information
                  <small>A few questions about where you work.</small>
                </v-stepper-step>

                <v-stepper-content step="2">
                  <v-card class="pa-8" elevation="0" color="#f7f7f7">
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-label>Employment Status</v-label>
                        <v-select
                          v-model="adoptionApplication.employmentStatus"
                          :items="employmentOptions"
                          menu-props="auto"
                          hide-details
                          single-line
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-label>Employer/School Name</v-label>
                        <v-text-field
                          v-model="adoptionApplication.employerOrSchoolName"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn color="primary" @click="e6 = 3">
                        Continue
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>

                <v-stepper-step step="3" editable>
                  Housing Information
                  <small>A few questions about your household makeup.</small>
                </v-stepper-step>

                <v-stepper-content step="3">
                  <v-card class="pa-8" elevation="0" color="#f7f7f7">
                    <v-row align="start">
                      <v-col cols="12" md="6">
                        <v-label>Number of people in household.</v-label>
                        <v-text-field
                          v-model="adoptionApplication.peopleInHousehold"
                          type="number"
                          solo
                          :rules="requiredRules"
                          required
                        />
                        <!-- <v-label>Are there children?</v-label>
                    <v-checkbox
                      class="mt-0"
                      v-model="adoptionApplication.areThereChildren"
                      color="blue"
                      hide-details
                    ></v-checkbox> -->
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label
                          >Are you or a family member allergic to pets?</v-label
                        >
                        <v-select
                          v-model="adoptionApplication.familyAllergic"
                          :items="allergies"
                          single-line
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
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
                        <v-label>Type of Residence</v-label>
                        <v-select
                          v-model="adoptionApplication.typeOfResidence"
                          :items="residenceTypes"
                          single-line
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>If rental, are dogs allowed?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.dogsAllowed"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>Complex name (if applicable)?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.complexName"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>Manager/Landlord name?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.landlordName"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="5">
                        <v-label>Manager/Landlord phone number?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.landlordPhone"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-label>Type of street?</v-label>
                        <v-select
                          v-model="adoptionApplication.streetType"
                          :items="streetTypes"
                          single-line
                          required
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn color="primary" @click="e6 = 4">
                        Continue
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>

                <v-stepper-step step="4" editable>
                  Animal Care Information
                  <small>A few questions about animal care.</small>
                </v-stepper-step>
                <v-stepper-content step="4" editable>
                  <v-card class="pa-8" elevation="0" color="#f7f7f7">
                    <v-row align="end">
                      <v-col cols="12" md="6">
                        <v-label
                          >How long will the dog be left alone each
                          day?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.timeAlone"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label
                          >Where will dog sleep? (Bed, Crate, With you
                          ect.)</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.dogsSleepStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >What brand of food do you currently or plan to feed
                          to current or newly adopted animal(s)?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.animalFood"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label>Is your yard fenced?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.yardFenced"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-label
                          >How high is the fence and what type of fence is
                          it?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.fenceType"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="7">
                        <v-label
                          >Where will the dog stay when left alone? (House,
                          Room, Crate, Outside, etc)</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.aloneStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12" md="5">
                        <v-label>How do you plan to exercise your dog?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.exerciseStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >Are you able/willing to hire a trainer or attend
                          classes with your new dog/puppy?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.trainingStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >If there were emergency veterinary costs, are you
                          willing and able to pay them?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.vetCostStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >What provisions will you make for the new animal(s),
                          including budgeting for new expense such as vaccine,
                          food, and monthly care?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.provisionsStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >How much time do you have prepared for your new dog
                          to adjust?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.adjustStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >If you have a pickup truck, will the dog be left
                          alone or allowed to ride freely in the bed of the
                          truck? If yes, please explain.</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.pickupStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
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
                        solo
                        :rules="requiredRules"
                      >
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-textarea
                                v-model="adoptionApplication.currentPetsStatus"
                                label="Name, age, and breed, and how long you have owned them."
                                solo
                                :rules="requiredRules"
                              ></v-textarea>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-label
                                >Veterinary Hospital you last visited?</v-label
                              >
                              <v-text-field
                                v-model="adoptionApplication.petHospitalName"
                                type="text"
                                required
                                solo
                                :rules="requiredRules"
                              />
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-label
                                >Veterinary Hospital Phone Number?</v-label
                              >
                              <v-text-field
                                v-model="adoptionApplication.petHospitalPhone"
                                type="number"
                                required
                                solo
                                :rules="requiredRules"
                              />
                            </v-col>
                          </v-row>
                        </v-container>
                      </div>
                      <v-col cols="12">
                        <v-label
                          >What Problems or issues would make you return your
                          dog to the rescue?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.returnAnimalStatus"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-label
                          >If your dog or cat does not get along with your other
                          pets, what will you do about it?</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.petReturnIssue"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                        <v-label>Comment, Questions ect.?</v-label>
                        <v-text-field
                          v-model="adoptionApplication.comments"
                          type="text"
                          required
                          solo
                          :rules="requiredRules"
                        />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn color="success" @click="createApplicant">
                        Submit
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-stepper-content>
              </v-stepper>
            </v-col>
            <v-col cols="12" v-if="sendSuccess">
              <v-card color="green" dark>
                <v-card-title>Successfully Sent!</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-form>
  </div>
</template>

<script>
import { db } from "../plugins/firebase.js";

export default {
  data() {
    return {
      sendSuccess: false,
      requiredRules: [v => !!v || "This field is required."],
      e6: 1,
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
      valid: true,
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
      this.$refs.form.validate();
      console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        try {
          await db.collection("adoptions").add({
            createdOn: new Date(),
            adoptionApplication: this.adoptionApplication
          });
          this.$refs.form.reset();
          this.sendSuccess = true;
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
};
</script>

<style>
.col-12 {
  padding: 0px 8px;
}
.v-input {
  margin-top: 5px !important;
}
.v-select {
  margin-bottom: 2em !important;
}
</style>
