<template>
  <div>
    <h4>ADMINISTRACION DE DOCTORES</h4>

    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="desserts"
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
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="success"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  AGREGAR
                </v-btn>
                <v-btn color="info" @click="nuevoDoctor = !nuevoDoctor">
                  Nuevo doctor
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.doctor"
                          label="Nombre del doctor"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.especialidad"
                          label="Especialidad"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.activo"
                          label="Activo"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Estas seguro de querer eliminar este doctor?
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
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
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
                v-model="editedItem.doctor"
                label="Nombre del doctor"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.especialidad"
                label="Especialidad"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="editedItem.activo"
                label="Activo"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Doctores",
  components: {},
  data: () => ({
    nuevoDoctor: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Doctor",
        align: "start",
        sortable: false,
        value: "doctor",
      },
      { text: "Especialidad", value: "especialidad" },
      { text: "Activo", value: "activo" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
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
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          doctor: "Juanito Perez",
          especialidad: "cardiologo",
          activo: true,
        },
        {
          doctor: "Pablo gonzales",
          especialidad: "neurologo",
          activo: true,
        },
        {
          doctor: "Fabian Mendoza",
          especialidad: "pediatra",
          activo: true,
        },
        {
          doctor: "Miguel Cervantes",
          especialidad: "dentista",
          activo: true,
        },
        {
          doctor: "Roberto carlos",
          especialidad: "cirujano",
          activo: true,
        },
        {
          doctor: "Mariana peralta",
          especialidad: "traumatologia",
          activo: true,
        },
        {
          doctor: "Julieta Villegas",
          especialidad: "dentista",
          activo: true,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
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
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
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