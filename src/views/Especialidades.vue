<template>
    <div>
        <v-card class="mx-auto" max-width="300" tile>
            <v-list flat>
                <v-subheader>Especialidades</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in especialidades" :key="i">
                        <v-list-item-icon>
                            <v-icon>mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.nombreEspecialidad"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Especialidades",
    data() {
        return {
            especialidades: [],
        };
    },
    methods: {
        initialize() {
            this.especialidades = [
                {
                    key: "69dd7248-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Anestesiologia",
                },
                {
                    key: "8311f451-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Cardiologia",
                },
                {
                    key: "ccf26359-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Cirugia General",
                },
                {
                    key: "4c89d060-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Cirugia Pediátrica",
                },
                {
                    key: "4e39fd6b-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Cirugia Plastica",
                },
                {
                    key: "9372d873-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Dermatologia",
                },
                {
                    key: "f715cc7b-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Fisioterapia",
                },
                {
                    key: "fa348a82-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Gastroenterologia",
                },
                {
                    key: "14866493-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Infectologia",
                },
                {
                    key: "7bc7768b-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Medicina General",
                },
                {
                    key: "15866493-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Nefrologia",
                },
                {
                    key: "ef2997a0-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Neurocirugia",
                },
                {
                    key: "b4eb79a7-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Nutricion",
                },
                {
                    key: "e106dbba-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Oftalmologia",
                },
                {
                    key: "0a7ffcc1-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Pediatria",
                },
                {
                    key: "02efd8ca-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Psiquiatria",
                },
                {
                    key: "659103d1-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Traumatologia",
                },
                {
                    key: "b623aed9-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Urologia",
                },
                {
                    key: "ba9c66e1-e916-ec11-8189-f43909ccbc80",
                    nombreEspecialidad: "Urologia Pediatrica",
                },
            ];
        },
        listEspecialidades() {
            axios
                .get("https://localhost:5001/api/v1/Especialidad/")
                .then((response) => {
                    let respuesta = response.data;
                    //this.doctores = respuesta.data;
                    console.log(
                        "Esta es la respuesta del servidor show",
                        respuesta
                    );
                    this.especialidades = respuesta;
                })
                .catch((error) => {
                    console.log("Ocurrio un error", error);
                });
        },
    },
    created() {
        // this.initialize();
        this.listEspecialidades();
    },
};
</script>

<style scoped>
</style>