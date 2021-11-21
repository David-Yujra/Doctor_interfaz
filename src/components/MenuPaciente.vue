<template>
    <div class="contenedor">
        <div class="contenedorLogo">
            <!-- <h3>Sebasss</h3> -->
            <img src="../assets/logo.jpg" alt="" />
        </div>
        <div class="contenedorBotones">
            <router-link :to="{ name: 'Inicio' }">Inicio</router-link>

            <router-link :to="{ name: 'Institucion' }">Institucion</router-link>
            <a>Informacion</a>
            <a>Contacto</a>
            <a>Ubicacion</a>
            <router-link :to="{ name: 'Login' }" v-show="!logueado"
                >Login</router-link
            >
            <a v-show="!logueado" @click="abrirRegistro()">Registrarse</a>
            <v-menu offset-y v-if="logueado">
                <template v-slot:activator="{ attrs, on }">
                    <v-btn
                        color="primary"
                        class="white--text ma-5"
                        v-bind="attrs"
                        v-on="on"
                    >
                        {{ usuario.usuario }}
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item link>
                        <router-link
                            :to="{ name: 'Home' }"
                            v-show="usuario.rol == 1"
                        >
                            <v-list-item-title>Administrador</v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title @click="cerrarSesion()"
                            >cerrar sesion</v-list-item-title
                        >
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <!-- Modal registrar paciente -->
        <v-dialog
            transition="dialog-bottom-transition"
            max-width="1000"
            v-model="nuevoPaciente"
        >
            <v-card>
                <v-card-title> Registre sus Datos Para su Login</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.Nombre"
                                label="Nombre"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.ApellidoPaterno"
                                label="Apellido paterno"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.ApellidoPaterno"
                            >
                                {{ errores.ApellidoPaterno }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.ApellidoMaterno"
                                label="Apellido Materno"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.ApellidoMaterno"
                            >
                                {{ errores.ApellidoMaterno }}
                            </v-alert>
                        </v-col>
                        <!--  <v-col cols="6">
                        <v-text-field
                            v-model="paciente.genero"
                            label="Genero"
                        ></v-text-field>
                    </v-col> -->
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.CI"
                                label="CI"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.CI"
                            >
                                {{ errores.CI }}
                            </v-alert>
                        </v-col>
                       <!--  <v-col cols="6">
                            <v-text-field
                                v-model="paciente.FechaNacimiento"
                                label="Fecha de Nacimiento"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.FechaNacimiento"
                            >
                                {{ errores.FechaNacimiento }}
                            </v-alert>
                        </v-col> -->
                        FECHA DE NACIMIENTO
                        <v-col cols="6">
                            <v-date-picker
                                v-model="paciente.fechaNacimiento"
                                label="Fecha de nacimiento"
                            ></v-date-picker>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.Edad"
                                label="Edad"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.Edad"
                            >
                                {{ errores.Edad }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.Sexo"
                                label="Sexo"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.Sexo"
                            >
                                {{ errores.Sexo }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.TipoSangre"
                                label="Tipo de Sangre"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.TipoSangre"
                            >
                                {{ errores.TipoSangre }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.NumTelf"
                                label="Numero de Telefono"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.NumTelf"
                            >
                                {{ errores.NumTelf }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.NumCell"
                                label="Numero de celular"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.NumCell"
                            >
                                {{ errores.NumCell }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.Ocupacion"
                                label="Ocupacion"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.Ocupacion"
                            >
                                {{ errores.Ocupacion }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.DireccionDomicilio"
                                label="Direccion de Domicilio"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.DireccionDomicilio"
                            >
                                {{ errores.DireccionDomicilio }}
                            </v-alert>
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.NombreContactoEmergencia"
                                label="Nombre de Contacto de Emergencia"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.NombreContactoEmergencia"
                            >
                                {{ errores.NombreContactoEmergencia }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.TelfContactoEmergencia"
                                label="Telefono de Emergencia"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.TelfContactoEmergencia"
                            >
                                {{ errores.TelfContactoEmergencia }}
                            </v-alert>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="paciente.Email"
                                label="Correo Electronico"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.Email"
                            >
                                {{ errores.Email }}
                            </v-alert>
                        </v-col>
                         <v-col cols="6">
                            <v-text-field
                            :type="'password'"
                                v-model="paciente.Contraseña"
                                label="Contraseña"
                            ></v-text-field>
                            <v-alert
                                dense
                                outlined
                                type="error"
                                v-show="errores.Contraseña"
                            >
                                {{ errores.Constraseña }}
                            </v-alert>
                        </v-col>
                        


                        <!-- <v-col cols="6">
                        
                        <v-select
                            :items="especialidades"
                            filled
                            label="Especialidades"
                            v-model="paciente.especialidadKey"
                            item-value='key'
                            item-text='nombreEspecialidad'
                        ></v-select>
                    </v-col> -->
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="nuevoPaciente = false"
                        >
                            Cancelar
                        </v-btn>

                        <v-btn
                            v-show="!editar"
                            color="blue darken-1"
                            text
                            @click="guardarPaciente"
                        >
                            Guardar
                        </v-btn>
                    </v-card-actions>

                    <v-row>
                        <v-col cols="12">
                            <v-btn color="blue darken-1" text @click="save">
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "MenuPaciente",
    methods: {
        cerrarSesion() {
            console.log("se cerro sesion");
            localStorage.clear();
            this.usuario = {};
            this.logueado = false;
            this.$router.push({ name: "Inicio" });
        },
        abrirRegistro() {
            this.$emit("toggleRegistro", "valorr");
            this.nuevoPaciente = !this.nuevoPaciente;
        },
        guardarPaciente() {
            this.paciente.version = "1";
            axios
                .post("https://clinicmanagementwebservice20211116223102.azurewebsites.net/api/v1/Paciente", this.paciente)
                .then((response) => {
                    let respuesta = response.data;
                    console.log(
                        "Esta es la respuesta del servidor en el store",
                        respuesta
                    );

                    this.paciente = {};
                })
                .catch((error) => {
                    this.errores = {};
                    console.log("Ocurrio un error", error.response);
                    let errores = error.response.data;
                    errores.forEach((element) => {
                        this.errores[element.propertyName] =
                            element.errorMessage;
                    });

                    // this.errores = {};
                });
            this.nuevoDoctor = false;
        },
    },
    data() {
        return {
            usuario: {},
            logueado: false,
            nuevoPaciente: false,
            paciente: {},
            errores: {},
        };
    },
    mounted() {
        this.usuario = JSON.parse(localStorage.getItem("Usuario"));
        if (this.usuario == null) {
            this.usuario = {};
            this.logueado = false;
        } else {
            this.logueado = true;
        }
    },
};
</script>

<style scoped>
.contenedor {
    /* background-color: brown; */
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.contenedorLogo {
    /* background-color: cadetblue; */
}
.contenedorLogo img {
    height: 100%;
    width: auto;
}

.contenedorBotones {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: darkblue; */
}

.contenedorBotones a {
    margin: 0px 15px 0px 15px;
}
</style>