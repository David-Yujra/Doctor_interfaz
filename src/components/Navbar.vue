<template>
    <div class="altura100 fondo">
        <v-list-item class="px-2 fondo_menu">
            <v-list-item-avatar>
                <v-img src="../assets/mio.jpeg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>DAVID YUJRA</v-list-item-title>

            <!-- <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->
        </v-list-item>

        <v-divider></v-divider>
        <div class="imagen_menu">
            <!-- <div class="foto_menu">
                <img src="../assets/hospital.jpg" alt="" />
            </div> -->
            <v-list dense>
                <router-link
                    v-for="item in items"
                    :key="item.title"
                    link
                    :to="{ name: item.componente }"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            drawer: true,
            items: [
                {
                    title: "CLIENTES A LA ESPERA",
                    icon: "mdi-account-group-outline",
                    componente: "ClientesEspera",
                },
                {
                    title: "DOCTORES",
                    icon: "mdi-account",
                    componente: "Doctores",
                },
                {
                    title: "ESTADISTICAS",
                    icon: "mdi-home-city",
                    componente: "Estadisticas",
                },
            ],
            //
        };
    },
};
</script>
<style scoped>
.altura100{
    height: 100%;
}
.fondo_menu {
    background-image: radial-gradient(
        circle farthest-corner at 7.2% 13.6%,
        rgba(37, 249, 245, 1) 0%,
        rgba(8, 70, 218, 1) 90%
    );
}
.fondo {
    /* height: 100px; */
    background-image: url('../assets/hospital.jpg');

}
.foto_menu{
    height: 60px;

}

</style>