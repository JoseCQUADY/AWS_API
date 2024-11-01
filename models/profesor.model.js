class Profesor{
    constructor(numeroEmpleado,nombre, apellido, horasClase){
        this.id = crypto.randomUUID();
        this.numeroEmpleado = numeroEmpleado;
        this.nombre = nombre;
        this.apellido = apellido;
        this.horasClase = horasClase;
    }
}

export default Profesor;