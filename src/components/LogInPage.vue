<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md3>
      <div style="text-align: center"><img :src="logo" width="80" /></div>
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field label="Email"></v-text-field>
          <v-text-field type="password" label="Passwod"></v-text-field>
        </v-card-text>
        <v-card-actions justify="right">
          <v-spacer></v-spacer>
          <register-dialog></register-dialog>
          <v-btn color="primary" tile @click="navigateTo('dashboard')"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- https://www.youtube.com/watch?v=1PzsQEcrP28 -->
</template>

<script>
import RegisterDialog from "./RegisterDialog.vue";
export default {
  components: { RegisterDialog },
  data() {
    return {
      logo: require("../assets/logo.png"),
      dialog: false,
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
