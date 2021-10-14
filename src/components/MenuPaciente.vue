<template>
  <div class="contenedor">
    <div class="contenedorLogo">
      <!-- <h3>Sebasss</h3> -->
      <img src="../assets/logo.jpg" alt="" />
    </div>
    <div class="contenedorBotones">
      <router-link :to="{ name: 'Inicio' }"
        >Inicio</router-link >

      <router-link :to="{ name: 'Institucion' }" >Institucion</router-link >
      <a>Informacion</a>
      <a>Contacto</a>
      <a>Ubicacion</a>
      <router-link :to="{ name: 'Login' }" v-show="!logueado">Login</router-link >
      <a v-show="!logueado">Registrarse</a>
      <v-menu
        
        offset-y
        v-if="logueado"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            color="primary"
            class="white--text ma-5"
            v-bind="attrs"
            v-on="on"
          >
            {{ usuario.usuario }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item  link>
            <router-link :to="{ name: 'Home' }" v-show="usuario.rol == 1" >
              <v-list-item-title>Administrador</v-list-item-title>
            </router-link >
            
          </v-list-item>
          <v-list-item  link>
            <v-list-item-title @click="cerrarSesion()" >cerrar sesion</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuPaciente",
  methods: {
      cerrarSesion(){
          console.log("se cerro sesion");
          localStorage.clear();
          this.usuario = {}
          this.logueado = false;
          this.$router.push({ name: 'Inicio' });
      }
  },
  data() {
    return {
      usuario: {},
      logueado: false,
    };
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("Usuario"));
    if(this.usuario == null){
        this.usuario = {}
        this.logueado = false;

    }else{
        this.logueado = true;
    }
  },
};
</script>

<style scoped>
.contenedor {
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.contenedorLogo {
  /* background-color: cadetblue; */
}
.contenedorLogo img {
  height: 100%;
  width: auto;
}

.contenedorBotones {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: darkblue; */
}

.contenedorBotones a {
  margin: 0px 15px 0px 15px;
}
</style>