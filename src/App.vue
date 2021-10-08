<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
      v-if="!['Inicio'].includes($route.name)"
    >
      <Navbar />
    </v-navigation-drawer>

    <v-app-bar app>
      <MenuPaciente/>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
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
import Navbar from "./components/Navbar.vue";
import MenuPaciente from "./components/MenuPaciente.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MenuPaciente,
  },

  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    mini: true,
    //
  }),
};
</script>
