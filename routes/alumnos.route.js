import express from 'express';
import { createAlumno, getAlumnos, deleteAlumno, getAlumnosById, updateAlumno } from '../controllers/alumno.controller.js';
import { alumnoDataValidatebyBody,alumnoDataValidatebyParams } from '../validations/alumnos.validation.js';

const router = express.Router();

router.get('/alumnos', getAlumnos);

router.get('/alumnos/:id', alumnoDataValidatebyParams,getAlumnosById);

router.post('/alumnos', alumnoDataValidatebyBody,createAlumno);

router.put('/alumnos/:id', alumnoDataValidatebyBody,alumnoDataValidatebyParams,updateAlumno);

router.delete('/alumnos/:id', alumnoDataValidatebyParams,deleteAlumno);

export default router;
