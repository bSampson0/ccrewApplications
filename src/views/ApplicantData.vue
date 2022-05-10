<template>
  <div>
    <DataDisplay
      :fname="data.adoptionApplication.applicantFirstName"
      :lname="data.adoptionApplication.applicantLastName"
      :address="data.adoptionApplication.applicantCurrentAddress"
      :city="data.adoptionApplication.applicantCity"
      :state="data.adoptionApplication.applicantState"
      :zip="data.adoptionApplication.applicantZip"
      :phone="data.adoptionApplication.applicantCellPhone"
      :email="data.adoptionApplication.applicantEmail"
      :license="data.adoptionApplication.driversLicense"
      :stateRegistered="data.adoptionApplication.vehicleState"
      :hearAboutUs="data.adoptionApplication.hearAboutUs"
      :employmentStatus="data.adoptionApplication.employmentStatus"
      :employerOrSchoolName="data.adoptionApplication.employerOrSchoolName"
      :peopleInHousehold="data.adoptionApplication.peopleInHousehold"
      :areThereChildren="data.adoptionApplication.areThereChildren"
      :ageOfChildren="data.adoptionApplication.ageOfChildren"
      :familyAllergic="data.adoptionApplication.familyAllergic"
      :homeActiveRating="data.adoptionApplication.homeActiveRating"
      :typeOfResidence="data.adoptionApplication.typeOfResidence"
      :petsAllowed="data.adoptionApplication.petsAllowed"
      :complexName="data.adoptionApplication.complexName"
      :landlordName="data.adoptionApplication.landlordName"
      :landlordPhone="data.adoptionApplication.landlordPhone"
      :streetType="data.adoptionApplication.streetType"
      :catOrDog="data.adoptionApplication.catOrDog"
      :catDeclaw="data.adoptionApplication.catDeclaw"
      :petInterested="data.adoptionApplication.petInterested"
      :petssSleepStatus="data.adoptionApplication.petssSleepStatus"
      :timeAlone="data.adoptionApplication.timeAlone"
      :animalFood="data.adoptionApplication.animalFood"
      :yardFenced="data.adoptionApplication.yardFenced"
      :fenceType="data.adoptionApplication.fenceType"
      :aloneStatus="data.adoptionApplication.aloneStatus"
      :exerciseStatus="data.adoptionApplication.exerciseStatus"
      :trainingStatus="data.adoptionApplication.trainingStatus"
      :vetCostStatus="data.adoptionApplication.vetCostStatus"
      :provisionsStatus="data.adoptionApplication.provisionsStatus"
      :adjustStatus="data.adoptionApplication.adjustStatus"
      :pickupStatus="data.adoptionApplication.pickupStatus"
      :hadPetsStatus="data.adoptionApplication.hadPetsStatus"
      :currentPetsStatus="data.adoptionApplication.currentPetsStatus"
      :petHospitalName="data.adoptionApplication.petHospitalName"
      :petHospitablePhone="data.adoptionApplication.petHostpitalPhone"
      :returnAnimalStatus="data.adoptionApplication.returnAnimalStatus"
      :petReturnIssue="data.adoptionApplication.petReturnIssue"
      :comments="data.adoptionApplication.comments"
      :livesAppartment="data.adoptionApplication.livesAppartment"
      :whyAdopt="data.adoptionApplication.whyAdopt"
    />
  </div>
</template>

<script>
import DataDisplay from "@/components/DataDisplay.vue";

export default {
  components: {
    DataDisplay
  },
  data() {
    return {
      data: null
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const result = this.$store.state.dataDump.find(
        data => data.createdOn.seconds === this.$store.state.currentId
      );
      this.data = result;
    }
  }
};
</script>

<style lang="scss" scoped></style>
