<template>
  <div>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <!-- <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <router-link v-for="item in items" :key="item.title" link :to="{ name: item.componente }">
        <v-list-item >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Clientes a la espera", icon: "mdi-home-city", componente: 'ClientesEspera' },
        { title: "Doctores", icon: "mdi-account-group-outline", componente: 'Doctores' },
        { title: "Estadisticas", icon: "mdi-account", componente: 'Estadisticas' },
      ],
      //
    };
  },
};
</script>