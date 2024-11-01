
import express from 'express';
import alumnoRoute from './routes/alumnos.route.js';
import profesorRoute from './routes/profesores.route.js';

const app = express();

//settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/', alumnoRoute);

app.use('/', profesorRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


