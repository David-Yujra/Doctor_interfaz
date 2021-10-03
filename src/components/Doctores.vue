<template>
  <div>
    <h4>ADMINISTRACION DE DOCTORES</h4>

    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="doctores"
        sort-by="especialidad"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <!-- <v-toolbar-title>BUSCADOR</v-toolbar-title> -->
            <v-text-field
              v-model="search"
              label="Buscar"
              class="mx-4 my-4"
            ></v-text-field>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="nuevoDoctor = !nuevoDoctor">
              Nuevo doctor
            </v-btn>
            
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Estas seguro de eliminar este doctor?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <p @click="verItem(item.id)">
            Ver
          </p>
          <v-icon small class="mr-2" @click="editItem(item.id)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <!-- <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template> -->
      </v-data-table>
    </v-app>

    <v-dialog
      transition="dialog-bottom-transition"
      max-width="1000"
      v-model="nuevoDoctor"
    >
      <v-card>
        <v-card-title> Agregar nuevo doctor </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.nombreCompleto"
                label="Nombre completo"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.categoria"
                label="Categoria"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.genero"
                label="Genero"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.telefonoFijo"
                label="Telefono"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.fechaDeNacimiento"
                label="Fecha de nacimeinto"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.numeroCelular"
                label="Numero de Celular"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.email"
                label="Email"
              ></v-text-field>
            </v-col>
     
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.especialidadKey"
                label="Especialidad"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.estado"
                label="Estado"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <v-btn color="purple darken-1" text @click="save"> `Lunes ` </v-btn>
            </v-col>
             <v-col cols="3">
              <v-btn color="purple darken-1" text @click="save"> `Domingo ` </v-btn>
            </v-col>
      
            <v-col cols="6">
              <v-btn color="red darken-1" text @click="save"> Editar </v-btn>
            </v-col>
          </v-row>

<v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
                </v-card-actions>





          <v-row>
            <v-col cols="12">
              <v-btn color="blue darken-1" text @click="save">  </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      transition="dialog-bottom-transition"
      max-width="1000"
      v-model="modalBorrar"
    >
      <v-card>
        <v-card-title> Esta seguro de borrar al Doctor? </v-card-title>
        <v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="modalBorrar = false">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm"> Confirmar </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      transition="dialog-bottom-transition"
      max-width="1000"
      v-model="verDoctor"
    >
      <v-card>
        <v-card-title> Agregar nuevo doctor </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <p>Nombre completo</p>
              <h4>{{editedItem.nombreCompleto}}</h4>
            </v-col>
            <v-col cols="6">
              <p>Categoria</p>
              <h4>{{editedItem.categoria}}</h4>
            </v-col>
            <v-col cols="6">
              <p>Genero</p>
              <h4>{{editedItem.genero}}</h4>
            </v-col>
            <v-col cols="6">
              <p>telefonoFijo</p>
              <h4>{{editedItem.telefonoFijo}}</h4>
            </v-col>
            <v-col cols="6">
              <p>fechaDeNacimiento</p>
              <h4>{{editedItem.fechaDeNacimiento}}</h4>
            </v-col>
            <v-col cols="6">
              <p>numeroCelular</p>
              <h4>{{editedItem.numeroCelular}}</h4>
            </v-col>
            <v-col cols="6">
              <p>email</p>
              <h4>{{editedItem.email}}</h4>
            </v-col>
            <v-col cols="6">
              <p>especialidadKey</p>
              <h4>{{editedItem.especialidadKey}}</h4>
            </v-col>
            <v-col cols="6">
              <p>estado</p>
              <h4>{{editedItem.estado}}</h4>
            </v-col>

          </v-row>
          <v-row>
            <v-col cols="3">
              <v-btn color="purple darken-1" text @click="save"> `Lunes ` </v-btn>
            </v-col>
             <v-col cols="3">
              <v-btn color="purple darken-1" text @click="save"> `Domingo ` </v-btn>
            </v-col>

          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="verDoctor = false">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Doctores",
  components: {},
  data: () => ({
    nuevoDoctor: false,
    modalBorrar: false,
    verDoctor: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Doctor",
        align: "start",
        sortable: true,
        value: "nombreCompleto",
      },
      { text: "Categoria", value: "categoria" },
      { text: "Genero", value: "genero" },
      { text: "Fecha De Nacimiento", value: "fechaDeNacimiento" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    doctores: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      especialidad: "",
      activo: true,
    },
    defaultItem: {
      name: "",
      especialidad: "",
      activo: true,
    },
    search: "",
    attrs: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Editar Doctor";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    //this.initialize();
    this.listDoctores();
  },

  methods: {
    initialize() {
      /* consumir el servicio*/
      this.doctores = [
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Lucas Mendoza",
          "categoria": "A",
          "genero": "masculino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Juanito Perez",
          "categoria": "A",
          "genero": "masculino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Miguel Cervantez",
          "categoria": "A",
          "genero": "masculino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Robin hood",
          "categoria": "B",
          "genero": "masculino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Daniel Lopez",
          "categoria": "C",
          "genero": "masculino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Maria Magdalena",
          "categoria": "B",
          "genero": "femenino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Rosario Tijeras",
          "categoria": "D",
          "genero": "femenino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        },
        {
          "key" :"ecdf2726-091f-ec11-8190-f43909ccbc80",
          "nombreCompleto": "Carla lozano",
          "categoria": "C",
          "genero": "femenino",
          "fechaDeNacimiento": "20/04/2000",
          "telefonoFijo": "4421226",
          "numeroCelular": "68511635",
          "email": "MendozaLucas21@hotmail.com",
          "especialidadKey": "9372D873-E916-EC11-8189-F43909CCBC80",
          "estado": "string",
        }
        
      ];
    },

    listDoctores(){
      axios
        .get( 'http://localhost:8000/api/Doctor/list' )
        .then(response => {
          let respuesta = response.data;
          this.doctores = respuesta.data;
          console.log("Esta es la respuesta del servidor", response);
        })
        .catch(error => {
          console.log("Ocurrio un error", error);
        });
    },

    editItem(idItem) {
      axios
        .get( 'http://localhost:8000/api/Doctor/show', {params: {id: idItem}} )
        .then(response => {
          let respuesta = response.data;
          //this.doctores = respuesta.data;
          console.log("Esta es la respuesta del servidor show", respuesta);
          this.editedItem = respuesta.data;
          this.nuevoDoctor = true;
        })
        .catch(error => {
          console.log("Ocurrio un error", error);
        });
      // this.nuevoDoctor = true;
      // this.editedIndex = this.doctores.indexOf(item);
      // console.log(this.editedIndex, "este es el index");
      // this.editedItem = Object.assign({}, item);
      
    },

    verItem(idItem) {
      axios
        .get( 'http://localhost:8000/api/Doctor/show', {params: {id: idItem}} )
        .then(response => {
          let respuesta = response.data;
          //this.doctores = respuesta.data;
          console.log("Esta es la respuesta del servidor show", respuesta);
          this.editedItem = respuesta.data;
          this.verDoctor = true;
        })
        .catch(error => {
          console.log("Ocurrio un error", error);
        });
    },

    deleteItem(item) {
      this.editedItem = Object.assign({}, item);
      this.modalBorrar = true;
    },

    deleteItemConfirm() {
      axios
      .post( 'http://localhost:8000/api/Doctor/destroy', {id: this.editedItem.id} )
        .then(response => {
          let respuesta = response.data;
          console.log("Esta es la respuesta del servidor en el store", respuesta);
          this.listDoctores();
          this.editedItem = {};
          this.modalBorrar = false;
        })
        .catch(error => {
          console.log("Ocurrio un error", error);
        });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {

      axios
      .post( 'http://localhost:8000/api/Doctor/store', this.editedItem )
        .then(response => {
          let respuesta = response.data;
          console.log("Esta es la respuesta del servidor en el store", respuesta);
          this.listDoctores();
          this.editedItem = {};
        })
        .catch(error => {
          console.log("Ocurrio un error", error);
        });
      // if (this.editedIndex > -1) {
      //   Object.assign(this.doctores[this.editedIndex], this.editedItem);
      // } else {
      //   this.doctores.push(this.editedItem);
      // }
      // this.close();
      this.nuevoDoctor = false;
    },
  },
};
</script>
<style scoped>
.table {
  border: solid 1px;
}
.azul {
  background-color: yellow;
}
</style>