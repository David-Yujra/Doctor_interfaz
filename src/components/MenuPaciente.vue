<template>
    <div class="contenedor">
        <div class="contenedorLogo">
            <!-- <h3>Sebasss</h3> -->
            <img src="../assets/logo.jpg" alt="">
        </div>
        <div class="contenedorBotones">
            <a >Inicio</a>
            <a >Institucion</a>
            <a >Informacion</a>
            <a >Contacto</a>
            <a >Ubicacion</a>
            <a >Login</a>
            <a >Registrarse</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuPaciente"
}
</script>

<style scoped>
.contenedor{
    /* background-color: brown; */
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.contenedorLogo{
    /* background-color: cadetblue; */
}
.contenedorLogo img{
    height: 100%;
    width: auto;
}

.contenedorBotones{
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: darkblue; */
}

.contenedorBotones a{
    margin: 0px 15px 0px 15px;
}
</style>