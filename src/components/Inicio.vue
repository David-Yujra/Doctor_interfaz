<template>
  <div class="contenedorInicio" style="height: 100%">
    <v-carousel v-model="model" height="100%">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <div class="contenedorImg">
          <img :src="item.src" alt="">

        </div>
        
      </v-carousel-item>
    </v-carousel>
    <div class="contenedorBotones">
      <a class="botonPrincipal">ejfwefqw</a>
      <a class="botonPrincipal">ejfwefqw</a>
      <a class="botonPrincipal">ejfwefqw</a>
      <a class="botonPrincipal">ejfwefqw</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inicio",
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      usuario: {},
      
    };
  },
  mounted(){
    this.usuario = JSON.parse(localStorage.getItem("Usuario"));
  }
};
</script>

<style scoped>
.contenedorInicio {
  position: relative;
}

.contenedorBotones {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 10%;
}

.botonPrincipal {
  padding: 20px 35px 20px 35px;
  background-color: darkkhaki;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0px 30px 0px 30px;
}
.contenedorImg{
  width: 100%;
  height: 100%;
}

.contenedorImg img{
  height: 100%; 
  object-fit: contain;
}
</style>