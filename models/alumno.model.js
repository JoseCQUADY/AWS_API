class Alumno {

    constructor(nombre, apellidos, matricula) {
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.matricula = matricula;
    }
}

export default Alumno;