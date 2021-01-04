<template>
  <div>
    <div class="opening pt-6">
      <v-container>
        <v-row>
          <v-col>
            <h2>Adoption Application</h2>
            <p>
              Please use the form below to submit an adoption application to
              Cascade Canine Rescue East & West. <br />
              You may also download the application
              <a
                href="https://www.ccrewdog.org/wp-content/uploads/2020/03/CCREWAdoptionApplication.pdf"
                >HERE</a
              >.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="stepper mb-6">
        <v-container>
          <v-row>
            <v-col>
              <v-stepper v-model="e6" vertical>
                <v-stepper-step step="1" editable>
                  Contact Information
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
                          type="number"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Phone</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantCellPhone"
                          type="number"
                          solo
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-label>Home Phone</v-label>
                        <v-text-field
                          v-model="adoptionApplication.applicantHomePhone"
                          type="number"
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
                          :rules="emailRules"
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
                          :items="yesNo"
                          single-line
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" class="mt-4">
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
                      <v-col cols="12">
                        <v-switch
                          color="green"
                          :value="adoptionApplication.livesAppartment"
                          v-model="adoptionApplication.livesAppartment"
                          label="Do you rent your home or apartment?"
                        ></v-switch>
                      </v-col>
                      <div
                        class="livesAppartment"
                        v-if="adoptionApplication.livesAppartment"
                        style="width:100%;"
                      >
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-label>Are pets allowed?</v-label>
                            <v-select
                              v-model="adoptionApplication.petsAllowed"
                              :items="yesNo"
                              single-line
                              solo
                              :rules="requiredRules"
                            ></v-select>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-label>Complex name (if applicable)?</v-label>
                            <v-text-field
                              v-model="adoptionApplication.complexName"
                              type="text"
                              solo
                            />
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-label>Manager/Landlord name?</v-label>
                            <v-text-field
                              v-model="adoptionApplication.landlordName"
                              type="text"
                              solo
                            />
                          </v-col>
                          <v-col cols="12" md="5">
                            <v-label>Manager/Landlord phone number?</v-label>
                            <v-text-field
                              v-model="adoptionApplication.landlordPhone"
                              type="Number"
                              solo
                            />
                          </v-col>
                        </v-row>
                      </div>
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
                </v-stepper-step>
                <v-stepper-content step="4" editable>
                  <v-card class="pa-8" elevation="0" color="#f7f7f7">
                    <v-row align="end">
                      <v-col cols="12" md="4">
                        <v-label>Are you interested in a Cat or Dog?</v-label>
                        <v-select
                          v-model="adoptionApplication.catOrDog"
                          :items="catdog"
                          single-line
                          required
                          solo
                          :rules="requiredRules"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label
                          >Desired age of animal you want to adopt.</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.ageInterested"
                          type="text"
                          solo
                        />
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-label
                          >Name of animal you are interested in (if you have one
                          you like already).</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.petInterested"
                          type="text"
                          solo
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="adoptionApplication.whyAdopt"
                          label="Why do you want to adopt?"
                          solo
                        ></v-textarea>
                      </v-col>
                      <div
                        class="catDeclawed"
                        v-if="adoptionApplication.catOrDog === 'cat'"
                        style="width:100%"
                      >
                        <v-col cols="12">
                          <v-label>Have you ever declawed a cat?</v-label>
                          <v-text-field
                            v-model="adoptionApplication.catDeclaw"
                            type="text"
                            solo
                          />
                        </v-col>
                      </div>
                      <v-col cols="12" md="6">
                        <v-label
                          >How long will your pet be left alone each
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
                          >Where will your pet sleep? (Bed, Crate, With you
                          ect.)</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.petssSleepStatus"
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
                      <v-col cols="12">
                        <v-switch
                          color="green"
                          v-model="adoptionApplication.yardFenced"
                          label="Is your yard fenced?"
                        ></v-switch>
                      </v-col>
                      <div class="ifFenced" style="width:100%">
                        <v-col cols="12" v-if="adoptionApplication.yardFenced">
                          <v-label
                            >How high is the fence and what type of fence is
                            it?</v-label
                          >
                          <v-text-field
                            v-model="adoptionApplication.fenceType"
                            type="text"
                            solo
                          />
                        </v-col>
                      </div>
                      <v-col cols="12" md="7">
                        <v-label
                          >Where will the pet stay when left alone? (House,
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
                        <v-label>How do you plan to exercise your pet?</v-label>
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
                          >How much time do you have prepared for your new pet
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
                          >If you have a pickup truck, will the pet be left
                          alone or allowed to ride freely in the bed of the
                          truck? If yes, please explain.</v-label
                        >
                        <v-text-field
                          v-model="adoptionApplication.pickupStatus"
                          type="text"
                          solo
                        />
                      </v-col>

                      <!-- switch for has pets question -->
                      <v-col cols="12">
                        <v-switch
                          color="green"
                          v-model="adoptionApplication.hadPetsStatus"
                          label="Currently Have Pets?"
                        ></v-switch>
                      </v-col>

                      <div
                        class="hasPetsQuestions"
                        v-if="adoptionApplication.hadPetsStatus"
                        style="width:100%;"
                      >
                        <v-row>
                          <v-col cols="12">
                            <v-textarea
                              v-model="adoptionApplication.currentPetsStatus"
                              label="Name, age, and breed, and how long you have owned them."
                              solo
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-label
                              >Veterinary Hospital you last visited?</v-label
                            >
                            <v-text-field
                              v-model="adoptionApplication.petHospitalName"
                              type="text"
                              solo
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-label>Veterinary Hospital Phone Number?</v-label>
                            <v-text-field
                              v-model="adoptionApplication.petHospitalPhone"
                              type="number"
                              solo
                            />
                          </v-col>
                        </v-row>
                      </div>
                      <v-col cols="12">
                        <v-label
                          >What Problems or issues would make you return your
                          pet to the rescue?</v-label
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
                          solo
                        />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-btn
                        color="success"
                        :disabled="!valid"
                        @click="createApplicant"
                      >
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
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Adoption Application Process</h2>
          <p>
            Rescue will review each adoption application and will interview each
            applicant, by phone or in person. If the prospective adopter is a
            likely fit for a particular dog, we will arrange for a meeting with
            the dog. Our goal is to place each dog with the adopter who is the
            best fit. At times, we have more than one qualified applicant
            interested in adopting a particular dog. To determine the best
            placement, we consider a number of factors, including, but not
            limited to the following: (i) the amount of time the dog will be
            alone each day; (ii) whether a dog will be adopted with another dog
            or alone; (iii) other pets in the household; (iv) whether the dog
            will be “indoor only;” (v) special needs of the particular dog; and
            (vi) experience of the adopter. If, after meeting the dog, the
            prospective adopter wants to proceed, our foster coordinator and the
            foster parents will consult to determine next steps.
          </p>
          <h2>Adoption Fees</h2>
          <p>
            Our adoption fees range from $250 to $600 per dog and are based on
            several factors: (i) characteristics of the dog (age, breed, breed
            mix, etc.); (ii) input costs (e.g. special medical treatments);
            (iii) special circumstances of the adopter; (iv) special
            circumstances of the dog (special needs, length of time in foster
            care, etc.); and (v) if a dog is being adopted along with another
            dog. Under special circumstances, we may subsidize or waive a fee.
            All fees are applied to the charitable purposes of rescuing, caring
            for and placing dogs.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from '../plugins/firebase.js'

export default {
  data() {
    return {
      catdog: ['cat', 'dog'],
      sendSuccess: false,
      emailRules: [(v) => !!v || 'E-mail is required'],
      zipRules: [
        (v) => !!v || 'Zip is required',
        (v) => v < 100000 || 'Zip must be valid'
      ],
      requiredRules: [(v) => !!v || 'This field is required.'],
      e6: 1,
      yesNo: ['yes', 'no'],
      dogIssueTypes: [
        'Biting',
        'Shyness/Fear',
        'Scratching/Climbing on Furniture',
        'Jumping',
        'Too Much Energy',
        'Marking',
        'Chewing on Things',
        'Not Getting Along with Other Animals',
        'Other'
      ],
      streetTypes: [
        'Very Busy Road',
        'Light Traffic',
        'Residential Area',
        'Country Road'
      ],
      residenceTypes: [
        'House',
        'Apartment',
        'Condo',
        'Mobile Home',
        'Farm/Barn'
      ],
      employmentOptions: ['Employed', 'Unemployed', 'Student', 'Retired'],
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ],
      valid: true,
      ageGroups: ['21-34', '35-49', '50+'],
      adoptionApplication: {
        animalAgeDesired: '',
        whyAdopt: '',
        applicantFirstName: '',
        applicantLastName: '',
        applicantAgeGroup: '',
        applicantCurrentAddress: '',
        applicantCity: '',
        applicantState: '',
        applicantZip: '',
        appplicantTimeAtResidence: '',
        applicantCellPhone: '',
        applicantHomePhone: '',
        applicantEmail: '',
        bestWayToContact: '',
        driversLicense: '',
        vehicleState: '',
        employmentStatus: '',
        employerOrSchoolName: '',
        peopleInHousehold: '',
        areThereChildren: '',
        ageOfChildren: '',
        familyAllergic: 'no',
        hearAboutUs: '',
        homeActiveRating: '',
        livesAppartment: false,
        petsAllowed: 'yes',
        complexName: '',
        landlordName: '',
        landlordPhone: '',
        streetType: '',
        catOrDog: '',
        catDeclaw: '',
        petInterested: '',
        ageInterested: '',
        petssSleepStatus: '',
        timeAlone: '',
        animalFood: '',
        yardFenced: false,
        fenceType: '',
        aloneStatus: '',
        exerciseStatus: '',
        trainingStatus: '',
        vetCostStatus: '',
        provisionsStatus: '',
        adjustStatus: '',
        pickupStatus: '',
        hadPetsStatus: false,
        currentPetsStatus: '',
        petHospitalName: '',
        petHostpitalPhone: '',
        returnAnimalStatus: '',
        petReturnIssue: '',
        comments: ''
      }
    }
  },
  methods: {
    async createApplicant() {
      if (this.$refs.form.validate()) {
        try {
          await db.collection('adoptions').add({
            createdOn: new Date(),
            adoptionApplication: this.adoptionApplication
          })
          this.$refs.form.reset()
          this.sendSuccess = true
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
</script>

<style>
.col-12 {
  padding: 0px 8px;
}
.v-input {
  margin-top: 8px !important;
}
</style>
