<template>
  <div>
    <h4>Estos son los doctores externos</h4>
    <div class="contenedorGrid">
        <v-card class="mx-auto" max-width="300" v-for="item in doctores" :key="item.nombreCompleto">
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
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
        filasPorPagina: 5,
        paginas: 1,
        pagina: 1,
      },
      doctores: [],
    };
  },
  methods: {
    listDoctores() {
      axios
        .get("https://localhost:5001/api/v1/Doctor", {
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
          key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
          nombreCompleto: "Lucas Mendoza",
          categoria: "A",
          genero: "masculino",
          fechaDeNacimiento: "20/04/2000",
          telefonoFijo: "4421226",
          numeroCelular: "68511635",
          email: "MendozaLucas21@hotmail.com",
          especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
          estado: "string",
        },
        {
          key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
          nombreCompleto: "sebas Mendoza",
          categoria: "A",
          genero: "masculino",
          fechaDeNacimiento: "20/04/2000",
          telefonoFijo: "4421226",
          numeroCelular: "68511635",
          email: "MendozaLucas21@hotmail.com",
          especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
          estado: "string",
        },
        {
          key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
          nombreCompleto: "andres Mendoza",
          categoria: "A",
          genero: "masculino",
          fechaDeNacimiento: "20/04/2000",
          telefonoFijo: "4421226",
          numeroCelular: "68511635",
          email: "MendozaLucas21@hotmail.com",
          especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
          estado: "string",
        },
        {
          key: "ecdf2726-091f-ec11-8190-f43909ccbc80",
          nombreCompleto: "David Yujra",
          categoria: "A",
          genero: "masculino",
          fechaDeNacimiento: "20/04/2000",
          telefonoFijo: "4421226",
          numeroCelular: "68511635",
          email: "MendozaLucas21@hotmail.com",
          especialidadKey: "9372D873-E916-EC11-8189-F43909CCBC80",
          estado: "string",
        },
      ];
    },
  },
  created() {
    // this.listDoctores();
    this.initialize();
  },
};
</script>

<style scoped>
.contenedorGrid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-auto-rows: minmax(200px, auto);
}
</style>