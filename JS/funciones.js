function DirigirseALaSección (Presentación) {
    location.hash = "#" + Presentación
};


function DirigirseALaSección (Información_básica) {
    location.hash = "#" + Información_básica
};


function DirigirseALaSección (Formación) {
    location.hash = "#" + Formación
};


function DirigirseALaSección (Experiencia_laboral) {
    location.hash = "#" + Experiencia_laboral
};


function DirigirseALaSección (Tecnología) {
    location.hash = "#" + Tecnología
};


function DirigirseALaSección (Habilidades_blandas) {
    location.hash = "#" + Habilidades_blandas
};


function cambiar() {
    document.getElementById('Fondo').style.backgroundColor= '#000000';
    document.getElementById('NombreYApellido').style.color= '#F6F2EF';
};


function retornarcolor() {
    document.getElementById('Fondo').style.backgroundColor= '#d1c4b9';
    document.getElementById('NombreYApellido').style.color= '#424242';
};