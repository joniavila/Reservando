var Reserva = function(horario, cantPersonas, precioxper, codigoDescuento) {
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioxper = precioxper;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.calcularPrecioBase = function(){
    return this.cantPersonas * this.precioxper
}

Reserva.prototype.calcularPrecioFinal = function(){
    return this.calcularPrecioBase()-this.calcularDescuento()+this.calcularAdicional();
}

Reserva.prototype.calcularDescuento = function(){
    var descuento = 0;
    if((this.cantPersonas >= 4) && (this.cantPersonas<=6)){
        descuento = (this.calcularPrecioBase()*0.05);
    }
    if((this.cantPersonas >= 7) && (this.cantPersonas<=8)){
        descuento = (this.calcularPrecioBase()*0.10);
    }
    if(this.cantPersonas>8){
        descuento = (this.calcularPrecioBase()*0.15);;
    }
    var descuento2 = 0;
    if(this.codigoDescuento == "DES15"){
        descuento2 = (this.calcularPrecioBase()*0.15);
    }
    if(this.codigoDescuento == "DES200"){
        descuento2 = 200;
    }
    if(this.codigoDescuento == "DES1"){
        descuento2 = this.precioxper;
    }
    return descuento+descuento2;
}

Reserva.prototype.calcularAdicional = function(){
    var adicional = 0;
    var adicional2 = 0;
    if((this.horario.getHours() >= 13)&&(this.horario.getHours() <= 14)){
        adicional = this.calcularPrecioBase()*0.05;
    }
    if((this.horario.getDay() >= 5)&&(this.horario.getDay() <= 7)){
        adicional2 = this.calcularPrecioBase()*0.10;
    }
    return adicional+adicional2;
}