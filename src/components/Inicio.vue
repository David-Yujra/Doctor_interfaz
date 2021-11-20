<template>
    <div>
        <div class="contenedorInicio" style="height: 100%">
            <v-carousel v-model="model" height="100%">
                <v-carousel-item v-for="(item, i) in items" :key="i">
                    <div class="contenedorImg">
                        <img :src="item.src" alt="" />
                    </div>
                </v-carousel-item>
            </v-carousel>
            <div class="contenedorBotones">
                <a class="botonPrincipal naranja">RESERVE SU CITA MEDICA</a>
                <router-link
                    class="botonPrincipal negro"
                    :to="{ name: 'DoctoresExterno' }"
                    >VEA SUS DOCTORES</router-link
                >
                <a class="botonPrincipal naranja"
                    >VEA LAS ESPECIALIDADES QUE OFRECEMOS</a
                >
                <a class="botonPrincipal negro">EMERGENCIAS</a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Inicio",
    data() {
        return {
            colors: [
                "primary",
                "secondary",
                "yellow darken-2",
                "red",
                "orange",
            ],
            model: 0,
            items: [
                {
                    src: "https://cdn.glitch.me/e1161f06-28cc-42ae-9712-1574fd461a13%2Ftecnologia.jpg?v=1634431982559",
                },
                {
                    src: "https://cdn.glitch.me/e1161f06-28cc-42ae-9712-1574fd461a13%2FCONFIA.jpg?v=1634433225263",
                },
                {
                    src: "https://cdn.glitch.me/e1161f06-28cc-42ae-9712-1574fd461a13%2FCLIENTES.jpg?v=1634434240665",
                },
               /*  {
                    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                }, */
               /*  {
                    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                }, */
            ],
            usuario: {},
            nuevoPaciente: false,
        };
    },
    mounted() {
        this.usuario = JSON.parse(localStorage.getItem("Usuario"));
    },
};
</script>

<style scoped>
.contenedorInicio {
    position: relative;
}

.contenedorBotones {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 10%;
}

.botonPrincipal {
    padding: 20px 35px 20px 35px;
    background-color: darkkhaki;
    border-radius: 10px;
    border: 1px solid black;
    margin: 0px 30px 0px 30px;
}
.contenedorImg {
    width: 100%;
    height: 100%;
}

.contenedorImg img {
    height: 100%;
    object-fit: contain;
}
.naranja {
    background: #f85032;
    background: -webkit-linear-gradient(to right, #e73827, #f85032);
    background: linear-gradient(to right, #e73827, #f85032);
    width: 200px;
    height: 80px;
    color: white;
    margin: 20px;
    padding: 20px 20px;
    text-align: justify;
    display: flex;
    text-align: center;
    align-items: center;
}
.negro {
    background-color: black;
    width: 200px;
    height: 80px;
    display: flex;
    text-align: justify;
    margin: 20px;
    padding: 20px 30px;
    color: white;
    text-align: center;
    align-items: center;
}
</style>