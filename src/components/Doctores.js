import axios from "axios";

export default {
    name: "Doctores",
    components: {},
    data: () => ({
        nuevoDoctor: false,
        modalBorrar: false,
        verDoctor: false,
        dialog: false,
        dialogDelete: false,
        headers: [{
                text: "Doctor",
                align: "start",
                sortable: true,
                value: "nombreCompleto",
            },
            { text: "Estado", value: "estado" },
            { text: "Categoria", value: "categoria" },
            { text: "Genero", value: "genero" },
            { text: "Carnet De Identidad", value: "carnetDeIdentidad" },
            { text: "Especialidad", value: "nombreEspecialidad" },
            { text: "Direccion de Domicilio", value: "direccionDomicilio" },
            { text: "Numero De Licencia", value: "nroLicencia" },
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
        errores: {},
        editar: false,
        paginacion: {
            filasPorPagina: 5,
            paginas: 1,
            pagina: 1
        },
        dias: [],

        modalDias: false,
        modalHoras: false,
        diaElegido: "",
        horaInicio: null,
        horaFin: null,
        crearIntervalo: false,
        horariosDia: [],
        especialidades: []
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
        this.listEspecialidades();
    },

    methods: {
        initialize() {
            /* consumir el servicio*/
            this.doctores = [{
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
            }]
        },

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

        nuevoDoc() {
            this.nuevoDoctor = !this.nuevoDoctor;

        },

        editItem(idItem) {
            axios
                .get("https://localhost:5001/api/v1/Doctor/" + idItem, {
                    params: { key: idItem },
                })
                .then((response) => {
                    let respuesta = response.data;
                    //this.doctores = respuesta.data;
                    console.log(
                        "Esta es la respuesta del servidor show",
                        respuesta
                    );
                    this.editedItem = respuesta;
                    this.nuevoDoctor = true;
                    this.editar = true;
                })
                .catch((error) => {
                    console.log("Ocurrio un error", error);
                });

        },

        verItem(idItem) {
            axios
                .get("https://localhost:5001/api/v1/Doctor/" + idItem, {
                    params: { key: idItem },
                })
                .then((response) => {
                    let respuesta = response.data;
                    //this.doctores = respuesta.data;
                    console.log(
                        "Esta es la respuesta del servidor show",
                        respuesta
                    );
                    this.editedItem = respuesta;
                    this.verDoctor = true;
                })
                .catch((error) => {
                    console.log("Ocurrio un error", error);
                });

        },

        deleteItem(item) {
            this.editedItem = Object.assign({}, item);
            this.modalBorrar = true;
        },

        deleteItemConfirm() {
            axios
                .delete("https://localhost:5001/api/v1/Doctor/" + this.editedItem.key)
                .then((response) => {
                    let respuesta = response.data;
                    console.log(
                        "Esta es la respuesta del servidor en el store",
                        respuesta
                    );
                    this.listDoctores();
                    this.editedItem = {};
                    this.modalBorrar = false;
                })
                .catch((message) => {
                    console.log("Ocurrio un error", message);
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
            this.editItem.version = "1";
            axios
                .post("https://localhost:5001/api/v1/Doctor", this.editedItem)
                .then((response) => {
                    let respuesta = response.data;
                    console.log(
                        "Esta es la respuesta del servidor en el store",
                        respuesta
                    );
                    this.listDoctores();
                    this.editedItem = {};
                })
                .catch((error) => {
                    console.log("Ocurrio un error", error.response);
                    //let arrayErrores = error.response.data;
                    this.errores = {};
                    // arrayErrores.forEach(elemento => {
                    //     console.log(elemento.propertyName, "sebas");
                    //     if(this.errores.hasOwnProperty(elemento.propertyName)){
                    //         this.errores[elemento.propertyName].push(elemento.errorMessage);
                    //     }else{
                    //         this.errores[elemento.propertyName] = [];
                    //     }
                    // })

                });
            // if (this.editedIndex > -1) {
            //   Object.assign(this.doctores[this.editedIndex], this.editedItem);
            // } else {
            //   this.doctores.push(this.editedItem);
            // }
            // this.close();
            this.nuevoDoctor = false;
        },
        actualizar() {
            this.editItem.version = "1";
            console.log(this.editedItem.key)
            axios
                .put("https://localhost:5001/api/v1/Doctor/" + this.editedItem.key, this.editedItem)
                .then((response) => {
                    let respuesta = response.data;
                    console.log(
                        "Esta es la respuesta del servidor en el store",
                        respuesta
                    );
                    this.listDoctores();
                    this.editedItem = {};
                })
                .catch((error) => {
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
        filasPorPaginaHandler() {
            console.log("filas");
            this.paginacion.pagina = 1;
            this.listDoctores();
        },
        cambioDePaginaHandler(numPag) {
            console.log("pagina", numPag);
            this.paginacion.pagina = numPag;
            this.listDoctores();
        },
        aplicarBusqueda() {
            console.log("busqueda..", this.search);
            this.listDoctores();
        },
        confirmarDias() {
            this.modalDias = false;
        },
        abrirModalHoras(nombreDia) {
            this.modalHoras = true;
            this.diaElegido = nombreDia;
        },
        guardarIntervalo() {
            this.crearIntervalo = false;
            let intervalo = {
                inicio: this.horaInicio,
                fin: this.horaFin
            }
            this.horariosDia.push(intervalo);
            this.horaInicio = null;
            this.horaFin = null;
        }
    },
};