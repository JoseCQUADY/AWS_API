import { body, param, validationResult} from "express-validator";

export const alumnoDataValidatebyBody = [
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
    body("matricula")
        .exists({ checkFalsy: true })
        .withMessage("Matricula is required")
        .isNumeric()
        .withMessage("Matricula should be a number"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())

            return res.status(422).json({ error : errors.array().map((error) => error.msg) });
        next();
    },
];

export const alumnoDataValidatebyParams = [
    param("id")
        .exists({ checkFalsy: true })
        .isString()
        .withMessage("Id is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ error : errors.array().map((error) => error.msg) });
        next();
    },
];