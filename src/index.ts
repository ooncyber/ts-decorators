import express from 'express';
import './controller/usuario.controller';
import { router } from './controller/usuario.controller';

const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.send('true')
})

/* */
app.use(router)
/*  */

app.listen(81, () => {
    console.log('http://localhost');

})