<template>
<div>


    <v-data-table
        :headers="headers"
        :items="dias"
        :hide-default-footer="true"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <!-- <v-toolbar-title>BUSCADOR</v-toolbar-title> -->
               <!--  <v-text-field
                    v-model="search"
                    label="Buscar"
                    class="mx-4 my-4"
                ></v-text-field> -->
 <!--                <v-btn color="primary" @click="aplicarBusqueda"
                    >Buscar</v-btn
                > -->

                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="nuevoHorario">
                    Agregar Horario
                </v-btn>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <p @click="verItem(item.key)">Ver</p>
            <v-icon small class="mr-2" @click="editItem(item.key)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
    <!---  PAGINACION --->
    <div class="text-xs-center pt-2 md4 lg4">
        <!-- I removed v-model and added @input and :value -->
        <div class="form-group col-4">
            <label> Resultados por pagina</label>
            <select
                class="form-control"
                style="width: 50px; border: 1px solid black"
                v-model="paginacion.filasPorPagina"
                @change="filasPorPaginaHandler()"
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
        </div>

        <v-pagination
            @input="cambioDePaginaHandler"
            :value="paginacion.pagina"
            :length="paginacion.paginas"
        ></v-pagination>
    </div>
</div>
</template>

<script>

import axios from "axios";
export default{
    name:'Horario',
    data: () => ({
        headers: [
            {
                text: "Dia",
                align: "start",
                sortable: true,
                value: "dia",
            },
            { text: "Hora inicio", value: "horaInicio" },
            { text: "Hora fin", value: "horaFin" },

            { text: "Actions", value: "actions", sortable: false },
        ],
        dias: [],
        paginacion: {},
        url: "https://clinicmanagementwebservice20211116223102.azurewebsites.net",
    }),
    methods: {
        aplicarBusqueda() {
            console.log("busqueda..", this.search);
            this.listDia();
        },
        listDia() {
            axios
                .get(this.url + "/api/v1/Dia", {
                    params: {
                        version: "1",
                        PageSize: this.paginacion.filasPorPagina,
                        PageNumber: this.paginacion.pagina,
                        Search: this.search,
                    },
                })
                .then((response) => {
                    let respuesta = response.data;
                    this.dias = respuesta.rows;
                    console.log("Esta es la respuesta del servidor", respuesta);
                    this.paginacion.paginas = respuesta.totalPages;
                    this.paginacion.pagina = respuesta.currentPage;
                    this.paginacion.filasPorPagina = respuesta.pageSize;
                })
                .catch((error) => {
                    console.log("Ocurrio un error", error);
                });
        },
        nuevoHorario(){

        }
    },
    created() {
        //this.initialize();
        this.listDia();
    }
}
</script>