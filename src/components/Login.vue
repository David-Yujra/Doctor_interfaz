<template>
    <div class="fondo altura100">
        <div class="control">
            <div class="form">
                <img class="logo" src="../assets/LOGO_CLINICA.png" alt="">
                <p> BIENVENID@ <br> PACIENTE </p>
                <input class="separar user" type="text" placeholder="Usuario" v-model="usuario">
                <input class="separar password" type="password" placeholder="Contraseña" v-model="contrasena">
                <button class="separar-mas" @click="login"> INICIAR SESION</button>
                <a class="extras" href="">Olvide Mi Contraseña</a>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    name: "Login",
    data(){
        return {
            usuario: "",
            contrasena: "",
            usuarios: [
                {
                    usuario: "sebas",
                    password: "sebas"
                },
                {
                    usuario: "david",
                    password: "david"
                },
                {
                    usuario: "andres",
                    password: "andres"
                },
            ]

        }
    },
    methods: {
        // iniciar(){
        //     this.usuarios = {
                
        //     }
        // }
        login(){
            for(let i =0; i<this.usuarios.length; i++){
                console.log(i)
                if(this.usuarios[i].usuario == this.usuario){
                    console.log("Se encontro el usuario");
                    if(this.usuarios[i].password == this.contrasena){
                        console.log("clave correcta");
                        this.$router.push({name: "inicio"})
                    }else{
                        console.log("clave incorrecta")
                    }
                    return;
                }
            }
            console.log("No se encontro el usuario")
            // this.usuarios.forEach(element => {
            //     if(element.usuario == this.usuario){
            //         console.log("Se encontro el usuario");
            //         if(element.password == this.contrasena){
            //             console.log("clave correcta");
            //         }else{
            //             console.log("clave incorrecta")
            //         }
            //         return;
            //     }
            // })
            // console.log("No se encontro el usuario")
        }
    },
    // created() {
    //     //this.initialize();
    //     this.iniciar();
    // },
}
</script>

<style scoped>
    .altura100{
        height: 100%;
    }
    
    .fondo {
        background: url(../assets/doctor_2.jpg);
        background-size: cover;
        display: grid;
        place-items: center;
        /* height: 100vh; */
        /* margin: auto;
        border: auto;
        padding: auto; */
    }
    
    .control {
        display: flex;
        justify-content: center;
    }
    
    .form {
        background-image: linear-gradient( 114.9deg, rgba(34, 34, 34, 1) 8.3%, rgba(0, 40, 60, 1) 41.6%, rgba(0, 143, 213, 1) 93.4%);
        font-family: DArial Rounded MT Bold;
        font-size: 40px;
        width: 350px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border: 2px solid white;
        border-radius: 40px;
    }
    
    .separar {
        background-color: transparent;
        border-left: 0px;
        border-top: 0px;
        border-right: 0px;
        border-bottom: 2px solid white;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 20px;
        padding: 0px 20px;
        height: 50px;
        color: white;
        width: 250px;
        font-size: 0.5em;
    }
    
    .user::placeholder {
        background-image: url('../assets/user.png');
        background-repeat: no-repeat;
        background-size: 40px;
        /* con este centree el usuario*/
        padding-left: 50px;
        padding-top: 10px;
    }
    
    .password::placeholder {
        background-image: url('../assets/password.png');
        background-repeat: no-repeat;
        background-size: 35px;
        /* con este centree el usuario*/
        padding-left: 50px;
        padding-top: 10px;
    }
    
    .separar-mas {
        border-radius: 40px;
        cursor: pointer;
        font-weight: bold;
        padding: 15px;
        background-color: #81B214;
        font-size: 25px;
        padding: 10px;
        cursor: pointer;
    }
    
    .logo {
        width: 140px;
        height: 130px;
        margin-top: -80px;
    }
    
    .extras {
        font-size: 20px;
        color: yellow;
        padding-top: 20px;
    }
</style>