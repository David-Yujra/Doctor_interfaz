<template>
    <div>
        <center><h2>BIENVENIDOS A LA CLINICA ALEMANA</h2></center>
        <div class="imagen_institucion">
            <img width="500px" src="../assets/alemania.png" />
        </div>
        <div class="objetivo">
            <div class="hola">
                <center>
                    <br /><b><h2>¿CUÁL ES NUESTRA VISIÓN?</h2></b>Ser líderes
                    regionales en servicios médico asistenciales contando con
                    los mejores profesionales y tecnología de última generación,
                    fortaleciendo el reconocimiento y confianza de la sociedad.
                </center>
            </div>
            <div class="mision">
                <center>
                    <br /><b><h2>¿CUÁL ES NUESTRA MISIÓN?</h2> </b>Satisfacer
                    las necesidades médico asistenciales en el cuidado de las
                    personas, con una atención humanizada e integral en
                    beneficio de la comunidad.
                </center>
            </div>
        </div>
        <div class="valores">
            <br /><b> <h2>NUESTROS VALORES</h2> </b>
        </div>
        <div class="tres">
            <div>
                <div>Vocacion De Servicio</div>
                <div>Honestidad</div>
                <div>Profesionalismo</div>
            </div>
            <div>
                <div>Responsabilidad</div>
                <div>Confidencialidad</div>
                <div>Trabajo en Equipo</div>
            </div>
        </div>
        <div class="directivos">
            <center><h2><br>NUESTROS DIRECTIVOS</h2></center>
            <div class="directores">
                <div class="directores_tres">
                    <div>
                        
                    </div>
                    <img src="../assets/director_ejecutivo.png" alt="" />
                    <h3>DR. LUIS KUSHNER DÁVALOS</h3>
                    <h4>Director Ejecutivo</h4>
                </div>
                <div class="directores_tres">
                    <img src="../assets/Director_medico.png" alt="" />
                    <h3>DR. ALBERTO CASANOVAS VARGAS</h3>
                    <h4>Director Médico</h4>
                </div>
                <div class="directores_tres">
                    <img src="../assets/sub_director.png" alt="" />
                    <h3>DR. FEDERICO BUTIKOFER CASTILLO</h3>
                    <h4>Sub Director Médico</h4>
                </div>
            </div>
        </div>
        <div>
            <center><br><h2>NUESTRO PLANTEL ADMINISTRATIVO</h2></center>
            <div>
                <img src="../assets/PLANTEL_ADMINISTRATIVO.png" alt="" />
            </div>
        </div>
        <div>
            <center><h2><br>NUESTRA HISTORIA</h2></center>
            El 20 de abril se conformó un comité de colonias alemanas,
            austriacas y suizas en presencia del emisario Konig, con el fin de
            asesorar la construcción y el establecimiento de una Clínica Alemana
            en La Paz, idea que ya había sido discutida hace años. <br>Ya el 24 de
            abril de 1933 se funda la “Sociedad Socorro Mutuo Aleman- Clínica
            Alemana” donde fue nombrado presidente del Comité al señor Hans
            Gwinner (Cónsul Imperial Alemán desde 1911 hasta 1914), como segundo
            Presidente fue elegido el cuidadano suizo señor Oscar Obrist. <br>Un
            factor esencial para la creación de la Caja de Salud Alemana- con la
            intención de construír la Clínica Alemana fue que las hermanas de
            las escuelas cristianas ya hace mucho tiempo no sólo se dedicaban al
            internado de los colegios alemanes sin también a la atención
            sanitaria. <br>Puesto que el año 1924 la casa alquilada para ellas ya no
            se ajustaba a los requerimientos del interando el 1 de abril del
            1925 ellas se establecieron en la cada ubicada en la avenida 6 de
            Agosto esquina Fernando Guachalla, donde es ese tiempo estaba
            instalada la Clínica Alemana de La Paz. <br> En el año 1989 la
            congregación alemana se traslada a la ciudad de Cochabamba, y es
            entonces que se conforma la Sociedad Médica Alemana SRL. El plantel
            ejecutivo de dicha sociedad estaba compuesto por un grupo de médicos
            selectos y de gran prestigio profesional: Dr. Federico Butikofer
            Rocha, Dr. Jorge Muñoz, Dr. Rolando Lara Stohmann, Dr. Luis Kushner
            López y el Dr. José Villareal. <br>El año 1990 se termina la
            construcción de la actual ubicación (av. 6 de agosto No. 2821) del
            edificio de la Clínica Alemana, infraestructura pionera en Bolivia
            por ser reconocida como la primera construcción específica diseñada
            para “Clínica”, marcando un hito en la medicina privada en nuestro
            país. <br>El año 1993, se suma al Directorio el Dr. Alberto Casanovas,
            tras la venta de sus acciones el Dr. Muñoz, posteriormente el año
            2010 los Dres. Federico Butikofer Castillo y Luis Kushner Dávalos,
            por concesión hereditaria. <br>- Actualmente la Clínica Alemana ha
            atendido más de 200.000 casos de diversa complejidad y se asistieron
            más de 20.000 partos, cuenta con más de 18 unidades médicas, cerca
            de 100 médicos especializados en prestigiosos centros extranjeros y
            equipos de alta tecnología. <br>- El 2015 se logra la acreditación para la
            realización de trasplantes renales en conjunto con el Programa
            Nacional de Trasplantes y a la fecha se realizaron más de 40
            trasplantes de riñón. <br>- Entre los logros de la clínica alemana desde
            su fundación están: <br> - Primera cirugía laparoscópica en Bolivia <br>- Primer
            Trasplante renal <br>Primera fecundación in vitro en la ciudad de La Paz
            <br>- Primer colocación de protesis de cadera bilateral <br>- Primera cirugía
            artroscópica de cadera en Bolivia <br>Primera protesis de rodilla en
            Bolivia <br>- Primera cirugía artroscópica de hombro <br>- Primera cirugía de
            histeroscopía en Bolivia
        </div>
    </div>
</template>

<script>
export default {
    name: "Institucion",
};
</script>

<style scoped>
.objetivo {
    display: flex;
    border-collapse: separate;
}
.hola {
    background: #f85032;
    color: white;
    font-family: "Bahnschrift SemiBold";
    width: 1000px;
}
.mision {
    background: #05031c;
    color: white;
    font-family: "Bahnschrift SemiBold";
    width: 1000px;
}
.imagen_institucion {
    display: flex;
    justify-content: center;
}
.valores {
    text-align: center;
}
.tres {
    display: flex;
}
.directores {
    display: flex;
    width: 700px;
    height: 500px;
    justify-content: space-between;
}
.directores_tres {
    display: flex;
}
</style>