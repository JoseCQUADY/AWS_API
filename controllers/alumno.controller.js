import Alumno from "../models/alumno.model.js";


let alumnos = [];

export const createAlumno = (req, res) => {
    try {
        const { nombre, apellidos, matricula } = req.body;

        const alumno = new Alumno(nombre, apellidos, matricula);
        alumnos.push(alumno);
        res.status(201).json(alumno);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAlumnos = (req, res) => {
    res.status(200).json(alumnos);
};

export const getAlumnosById = (req, res) => {
    const { id } = req.params;
    const alumno = alumnos.find((alumno) => alumno.id === id);

    if (!alumno) {
        return res.status(404).json({ error: 'Alumno not found' });
    }

    res.status(200).json(alumno);
}

export const deleteAlumno = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const alumno = alumnos.find((alumno) => alumno.id === id);

    if (!alumno) {
        return res.status(404).json({ error: 'Alumno not found' });
    }

    alumnos = alumnos.filter((alumno) => alumno.id !== id);
    res.status(200).json({ message: 'Alumno deleted successfully' });
};

export const updateAlumno = (req, res) => {
    try {
        const { id } = req.params;
        
        const { nombre, apellidos, matricula } = req.body;

        const alumno = alumnos.find((alumno) => alumno.id === id);

        if (!alumno) {
            return res.status(404).json({ error: 'Alumno not found' });
        }
        Object.assign(alumno, { nombre, apellidos, matricula });

        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};
