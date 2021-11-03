import express from 'express';
import { usuarioRouter } from './usuario.router';

export const router = express.Router();


router.use(usuarioRouter);

console.log(`Variavel router: `, router)