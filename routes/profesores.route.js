import express from 'express';
import { createProfesor,getProfesor,getProfesorById,updateProfesor ,deleteProfesor} from '../controllers/profesor.controller.js';
import { profesorDataValidatebyBody,profesorDataValidatebyParams } from '../validations/profesores.validation.js';

const router = express.Router();

router.get('/profesores', getProfesor);

router.get('/profesores/:id', profesorDataValidatebyParams,getProfesorById);

router.post('/profesores', profesorDataValidatebyBody,createProfesor);

router.put('/profesores/:id', profesorDataValidatebyBody,profesorDataValidatebyParams,updateProfesor);

router.delete('/profesores/:id', profesorDataValidatebyParams,deleteProfesor);

export default router;
