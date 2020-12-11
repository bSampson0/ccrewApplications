<template>
  <v-col :cols="col" :md="md" :sm="sm">
    <v-label>{{ name }}</v-label>
    <v-text-field
      :v-model="model"
      :type="type"
      :required="required"
      :rules="rules"
      solo
    />
  </v-col>
</template>

<script>
export default {
  props: {
    col: String,
    md: String,
    sm: String,
    model: String,
    name: String,
    type: String,
    required: String,
    rules: String
  }
};
</script>

<style lang="scss" scoped></style>
