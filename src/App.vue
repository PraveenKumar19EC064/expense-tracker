<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      v-if="isBarDisabled()"
      clipped
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="item.action"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app v-if="isBarDisabled()" clipped-left>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid :class="isBarDisabled() ? '' : 'fill-height'">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import * as API from "@/api/api.js";
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Home",
          icon: "mdi-home-city",
          action: () => this.$router.push("dashboard"),
        },
        {
          title: "My Account",
          icon: "mdi-account",
          action: () => this.$router.push("accounts"),
        },
        {
          title: "Organization",
          icon: "mdi-account-group-outline",
          action: () => this.$router.push("organization"),
        },
      ],
      mini: true,
    };
  },
  mounted() {
    API.auth();
  },
  methods: {
    isBarDisabled() {
      return (
        this.$router.history.current.fullPath != "/" &&
        this.$router.history.current.fullPath != "/register"
      );
    },
  },
};
</script>

<style></style>
