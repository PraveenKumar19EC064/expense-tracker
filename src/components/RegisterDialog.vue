<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" hide-overlay>
      <template v-slot:activator="{ on, attrs }">
        <span color="primary" dark v-bind="attrs" v-on="on"> Register </span>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Register</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <template>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Organization Details
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 2" step="2">
                Employee Details
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3"> Confirm </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card>
                  <v-card-title>Organization Details</v-card-title>
                  <v-card-text></v-card-text>
                  <v-card-actions justify="right">
                    <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
                    <v-btn text @click="dialog = false"> Cancel </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card>
                  <v-card-title>Organization Details</v-card-title>
                  <v-card-text></v-card-text>
                  <v-card-actions justify="right">
                    <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
                    <v-btn text @click="e1 = 1"> Back </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card>
                  <v-card-title>Organization Details</v-card-title>
                  <v-card-text></v-card-text>
                  <v-card-actions justify="right">
                    <v-btn color="primary" @click="e1 = 1"> Sumbit </v-btn>
                    <v-btn text @click="e1 = 2"> Back </v-btn>
                    <v-btn text @click="dialog = false"> Cancel </v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </template>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      e1: 1,
    };
  },
};
</script>
