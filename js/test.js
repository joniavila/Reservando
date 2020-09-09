var expect = chai.expect; 

// Testeá la función reservarHorario(horario).
describe('Testeo de la funcion de reservar horario', function(){

    var resto = new Restaurant(25, "Jonas", "Pizza", "Cordoba", ["21:00", "22:30", "15:00"], "../img/pizza3.jpg", [8, 4, 5, 5, 5, 5]);
    var cantidadDeHorarios = [...resto.horarios];
	it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.',function(){
        resto.reservarHorario(cantidadDeHorarios[0]);
	    expect(resto.horarios.length).to.be.equal(cantidadDeHorarios.length-1);
    })

    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.',function(){
        //var cantidadDeHorarios = resto.horarios.length;
        var horario = "2"; 
        resto.reservarHorario(horario);
        expect(resto.horarios.length).to.be.equal(cantidadDeHorarios.length-1);
    })

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.',function(){
        var cantidadDeHorarios = resto.horarios.length;
        var horario = " ";
        resto.reservarHorario(horario);
        expect(resto.horarios.length).to.equal(cantidadDeHorarios);
    })

})
 
// Testeá la función obtenerPuntuacion().
describe(' Testeá la función obtenerPuntuacion ', function(){
    var resto = new Restaurant(25, "Jonas", "Pizza", "Cordoba", ["21:00", "22:30", "15:00"], "../img/pizza3.jpg", [8, 9, 10 ]);
	it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente',function(){
        expect(resto.obtenerPuntuacion()).to.equal(9);
    })

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.',function(){
        resto.calificaciones = [""];
        var promedio = resto.obtenerPuntuacion();
        expect(promedio).to.equal(0);
    })
})

// Testeá la función calificar().
describe('Testeá la función calificar()', function(){
    var resto = new Restaurant(25, "Jonas", "Pizza", "Cordoba", ["21:00", "22:30", "15:00"], "../img/pizza3.jpg", [8, 9, 10 ]);
	it('Dado una calificacion nula , no la agrega al arreglo de calificaciones',function(){
        var cantidadCalificaciones = resto.calificaciones.length;
        var calificacion = " ";
        resto.calificar(calificacion);
        expect(resto.calificaciones.length).to.equal(cantidadCalificaciones);
    })
    it('Dado una calificacion menor a 1 y mayor a 10 , no la agrega al arreglo de calificaciones',function(){
        var cantidadCalificaciones = resto.calificaciones.length;
        var calificacion = 11;
        resto.calificar(calificacion);
        expect(resto.calificaciones.length).to.equal(cantidadCalificaciones);
    })
    it('Dado una calificacion que no sea un numero, no la agrega al arreglo de calificaciones',function(){
        var cantidadCalificaciones = resto.calificaciones.length;
        var calificacion = "a";
        resto.calificar(calificacion);
        expect(resto.calificaciones.length).to.equal(cantidadCalificaciones);
    })

})
// Testeá la función buscarRestaurante(id).

describe('Testeá la función buscarRestaurante()', function(){
    
	it('Dado el ID de un restaurante nulo, devuelve el mensaje de error',function(){
        var IDresto = " ";
        expect(listado.buscarRestaurante(IDresto)).to.equal("No se ha encontrado ningún restaurant");
    })
    it('Dado el ID de un restaurante con numeros, devuelve el mensaje de error',function(){
        var IDresto = 1234;
        expect(listado.buscarRestaurante(IDresto)).to.equal("No se ha encontrado ningún restaurant");
    })

})
//Testeá la función obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario): 
describe('Testeá la función obtenerRestaurantes', function(){
	it(' Pasado los parametros nulos a la funcion, no muestra ningun restaurant ',function(){
        var filtroCiudad = " ";
        var filtroRubro = " ";
        var filtroHorario = " ";

        var resto = listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario);
        expect(resto.length).to.equal(0);
    })
})

// Testeo de funciones de Reserva
describe('Testeá la función calcularPrecioBase', function(){
    
	it('Dado una reserva de 8 personas de $350, calcula la reserva de $2800',function(){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        expect(reserva1.calcularPrecioBase()).to.equal(2800);
    })

    it('Dado una reserva de 2 personas de $150, calcula la reserva de $300',function(){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        expect(reserva2.calcularPrecioBase()).to.equal(300);
    })
})

describe('Testeá la función calcularPrecioFinal', function(){
    
	it('Dado una reserva de 8 personas de $350 con codigo de descuento DES1 , calcula una reserva de $2310',function(){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        expect(reserva1.calcularPrecioFinal()).to.equal(2450);
    })

    it('Dado una reserva de 2 personas de $150 con codigo de descuento DES200 , calcula una reserva de $100',function(){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        expect(reserva2.calcularPrecioFinal()).to.equal(100);
    })
})




