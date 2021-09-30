<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="800"
    v-model="ver"
  >
    <v-card>
      <v-card-title> Este es el titulo </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati
        nisi aperiam totam adipisci repellat quos repellendus. Omnis harum
        doloribus blanditiis vel dolores numquam, doloremque voluptatum,
        voluptas error possimus excepturi!
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NuevoDoctor",
  props: {
    mostrar: {
      default: false,
    },
  },
  data(){
      return {
          ver: false
      }
  }
};
</script>