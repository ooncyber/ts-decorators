import express from 'express';
import { UsuarioController } from '../controller/usuario.controller';

export const usuarioRouter = express.Router();

// usuarioRouter.get("/usuarios", UsuarioController.findAll);