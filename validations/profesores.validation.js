import { body, param, validationResult } from "express-validator";

export const profesorDataValidatebyBody = [
    body("nombre")
        .exists({ checkFalsy: true })
        .withMessage("Nombre is required")
        .isString()
        .withMessage("Nombre should be string"),
    body("apellidos")
        .exists({ checkFalsy: true })
        .withMessage("Apellidos is required")
        .isString()
        .withMessage("Apellidos should be string"),
    body("horasClase")
        .exists({ checkFalsy: true })
        .withMessage("Horas de clase is required")
        .isNumeric()
        .withMessage("Horas de clase should be a number"),
    body("numeroEmpleado")
        .exists({ checkFalsy: true })
        .withMessage("Numero de empleado is required")
        .isString()
        .withMessage("Numero de empleado should be a string"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())

            return res.status(422).json({ error: errors.array().map((error) => error.msg) });
        next();
    },
];

export const profesorDataValidatebyParams = [
    param("id")
        .exists({ checkFalsy: true })
        .isString()
        .withMessage("Id is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ error: errors.array().map((error) => error.msg) });
        next();
    },
];