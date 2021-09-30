<template>
    <div>
        <h4>Clientes a la espera</h4>
        <v-card>
            <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="palabraBuscada"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="items"
                
                hide-default-footer
                class="elevation-1 margen-top"
            ></v-data-table>
        </v-card>
        
    </div>
</template>

<script>
export default {
    name: 'ClientesEspera',
    data() {
        return {
            headers: [
                { text: "Nombre", align: "start", sortable: false, value: "nombre"},
                { text: "Carnet", value: "carnet" },
                { text: "Especialidad", value: "especialidad" },
                { text: "Actions", value: "actions", sortable: false },
                ],
            items: [
                {
                    nombre: "Miguelito",
                    carnet: "1535353",
                    especialidad: "cardiologia"
                }
            ],
            palabraBuscada: ''
        };
    },
}
</script>

<style scoped>
.margen-top {
  margin-top: 20px;
}
</style>