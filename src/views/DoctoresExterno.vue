<template>
    <div>
        <h4>Estos son los doctores externos</h4>
        <div class="contenedorDoc0" v-show="verDoctor">
            <button class="botonCerrar" @click="verDoctor = false">X</button>
            <h3>Este es el doctor</h3>
            <div class="contenedorDoctor">
                <div class="contenedorImagen">
                    <img
                        width="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        alt=""
                    />
                </div>
                <div class="contenedorDescripcion">
                   <!--  <h3>Numero Licencia:{{ doctor.NroLicencia }}</h3> -->
                    <h3>Nombre completo: {{ doctor.nombreCompleto }}</h3>
                    <h3>Correo ELectronico: {{ doctor.email }}</h3>
                    <h3>Telefono: {{ doctor.telefonoFijo }}</h3>
                    <h3>Numero Celular: {{ doctor.numeroCelular }}</h3>
                    <h3>Categoria: {{ doctor.categoria }}</h3>
                    <h3>Genero: {{ doctor.genero }}</h3>
                    <h3>CI:{{ doctor.carnetDeIdentidad }}</h3>
                    <h3>Direccion Domicilio:{{ doctor.direccionDomicilio }}</h3>
                    <h3>Estado:{{ doctor.estado }}</h3>
                    <h3>Fecha de nacimiento:{{ doctor.fechaDeNacimiento }}</h3>
                    <h3>Email:{{ doctor.email }}</h3>
                    <h3>Especialidad:{{ doctor.especialidadKey }}</h3>
                </div>
            </div>
        </div>
        <div class="contenedorGrid">
            <v-card
                class="mx-auto"
                max-width="300"
                v-for="item in doctores"
                :key="item.nombreCompleto"
                @click="mostrarDoctor(item)"
            >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                    <v-card-title>{{ item.nombreCompleto }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0"
                    >{{ item.email }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>{{ item.numeroCelular }}</div>

                    <div>Categoria: {{ item.categoria }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange" text> Share </v-btn>

                    <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "DoctoresExterno",
    data() {
        return {
            paginacion: {
                filasPorPagina: 100,
                paginas: 1,
                pagina: 1,
            },
            doctores: [],
            doctor: {},
            verDoctor: false,
        };
    },
    methods: {
        listDoctores() {
            axios
                .get("https://clinicmanagementwebservice20211116223102.azurewebsites.net/api/v1/Doctor", {
                    params: {
                        version: "1",
                        PageSize: this.paginacion.filasPorPagina,
                        PageNumber: this.paginacion.pagina,
                        Search: this.search,
                    },
                })
                .then((response) => {
                    let respuesta = response.data;
                    this.doctores = respuesta.rows;
                    console.log("Esta es la respuesta del servidor", respuesta);
                    this.paginacion.paginas = respuesta.totalPages;
                    this.paginacion.pagina = respuesta.currentPage;
                    this.paginacion.filasPorPagina = respuesta.pageSize;
                })
                .catch((error) => {
                    console.log("Ocurrio un error", error);
                });
        },
        initialize() {
            /* consumir el servicio*/
            this.doctores = [
                {
                    id: 1,
                    key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
                    nombreCompleto: "Lucas Mendoza",
                    categoria: "A",
                    genero: "Masculino",
                    fechaDeNacimiento: "20/04/2000",
                    telefonoFijo: "2480724",
                    numeroCelular: "68511635",
                    email: "MendozaLucas21@hotmail.com",
                    especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
                    estado: "string",
                },
                {
                    id: 2,
                    key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
                    nombreCompleto: "Sebas Mendoza",
                    categoria: "A",
                    genero: "Masculino",
                    fechaDeNacimiento: "20/04/2000",
                    telefonoFijo: "4421226",
                    numeroCelular: "68511635",
                    email: "MendozaLucas21@hotmail.com",
                    especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
                    estado: "string",
                },
                {
                    id: 3,
                    key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
                    nombreCompleto: "Andrea Cossio",
                    categoria: "A",
                    genero: "Femenino",
                    fechaDeNacimiento: "18/04/1995",
                    telefonoFijo: "4421226",
                    numeroCelular: "68511635",
                    email: "andrea22@hotmail.com",
                    especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
                    estado: "string",
                },
                {
                    id: 4,
                    key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
                    nombreCompleto: "David Yujra",
                    categoria: "A",
                    genero: "masculino",
                    fechaDeNacimiento: "20/04/2000",
                    telefonoFijo: "4421226",
                    numeroCelular: "78777774",
                    email: "yujra21@hotmail.com",
                    especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
                    estado: "string",
                },
            ];
        },
        mostrarDoctor(doctor) {
            console.log("Este es el doctor", doctor);
            this.doctor = doctor;
            this.verDoctor = true;
        },
    },
    created() {
        this.listDoctores();
        // this.initialize();
    },
};
</script>

<style scoped>
.contenedorGrid {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(200px, auto);
}

.contenedorDoc0 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
    /* border-radius: ; */
    margin: 30px;
    position: relative;
}

.contenedorDoctor {
    display: flex;
    margin-left: 60px;
    margin-right: 60px;
}

.contenedorImagen {
    width: max(50%, 350px);
    margin: 30px;
}

.contenedorDescripcion {
    width: max(50%, 350px);
    margin: 30px;
}
.botonCerrar {
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 28px;
    border: 1px solid black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
.botonCerrar:hover {
    background-color: red;
}
</style>