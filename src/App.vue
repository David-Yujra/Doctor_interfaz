<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
      v-if="!['Inicio', 'Login', 'Institucion', 'DoctoresExterno', 'Especialidades'].includes($route.name)"
    >
      <Navbar />
    </v-navigation-drawer>

    <v-app-bar max-height=80 height=80 v-if="!['Login'].includes($route.name)">
      <MenuPaciente @toggleRegistro="abrirModalRegistro"/>
    </v-app-bar >

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      
        <router-view></router-view>
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
    usuario: {}
    //
  }),
  methods:{
    abrirModalRegistro(parametro){
      console.log("Se abre el modal", parametro);
    }
  },
  mounted(){
    this.usuario = JSON.parse(localStorage.getItem("Usuario"));
  }
};
</script>
