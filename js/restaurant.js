var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

// Restaurant.prototype.reservarHorario = function(horarioReservado) {

// return this.horarios.filter( e => e !== horarioReservado); 
// }
Restaurant.prototype.reservarHorario = function(horarioReservado) {
     
    this.horarios=this.horarios.filter(horario => horario !== horarioReservado);
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    return Math.round(this.promedio(this.calificaciones) * 10) / 10;
}
//  sumatoria(numeros), que reciba un arreglo de numeros y devuelva su sumatoria.

function sumatoria(numeros){
    var sumatoria = 0;
    numeros.forEach(element => {sumatoria += element});
    return sumatoria;
}
// promedio(numeros), que sume los elementos de un arreglo y luego calcule su promedio. Esta función debe utilizar la función sumatoria(numeros)

Restaurant.prototype.promedio =  numeros => sumatoria(numeros) / numeros.length
  
