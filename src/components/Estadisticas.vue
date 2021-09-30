<template>
  <div>
    <h4>Estadisticas</h4>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-header
      hide-default-footer
      class="elevation-1 margen-top"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "Estadisticas",
  data() {
    return {
      headers: [
        { text: "Doctor", align: "start", sortable: false, value: "doctor"},
        { text: "Especialidad", value: "especialidad" },
        { text: "Activo", value: "activo" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      items: [],
    };
  },
};
</script>

<style scoped>
.margen-top {
  margin-top: 20px;
}
</style>