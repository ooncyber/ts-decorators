import express, { Request, RequestHandler, Response } from "express";
import { Router } from 'express';


let rotaN = '';
let func: RequestHandler = null;

export const router = Router();

function route(rota: string) {
    return (target) => {
        rotaN = rota;
        console.log('rota definida');

    }
}

function get(rota: string) {
    return (target, key: string, f) => {
        setTimeout(() => {
            router.get('/' + rotaN + rota, f.value)
        }, 100);
    }
}

function post(rota: string) {
    return (target, key: string, f) => {
        setTimeout(() => {
            if (func)
                router.post('/' + rotaN + rota, func, f.value)
            else
                router.post('/' + rotaN + rota, f.value)
        }, 100);
    }
}
function put(rota: string) {
    return (target, key: string, f) => {
        setTimeout(() => {
            router.put('/' + rotaN + rota, f.value)
        }, 100);
    }
}
function remove(rota: string) {
    return (target, key: string, f) => {
        setTimeout(() => {
            router.delete('/' + rotaN + rota, f.value)
        }, 100);
    }
}

function middleware(funcao: RequestHandler) {
    return (target, key: string, f) => {
        setTimeout(() => {
            func = funcao;
        }, 100);
    }
}

@route('usuarios')
export class UsuarioController {

    @get('')
    static async findAll(req: Request, res: Response) {
        let usuarios = [
            { id: 1, nome: "Gabriel", idade: 18 }
        ]
        res.send(usuarios);
    }

    @get('/:id')
    static async findOne(req: Request, res: Response) {
        let usuarios = [
            { id: 1, nome: "Gabriel", idade: 18 },
            { id: 2, nome: "Gabriel", idade: 18 },
        ]
        res.send(usuarios.find(i => i['id'].toString() == req.params.id));
    }

    @post('')
    @middleware(UsuarioController.validacao)
    static async create(req: Request, res: Response) {

        res.send({ ...req.body });
    }

    static async validacao(req: Request, res: Response, next: Function) {
        console.log('aq first');
        if (req.body.nome)
            next();
        else
            res.status(400).send("Erro, falta campo nome")
    }

    @put('/:id')
    static async update(req: Request, res: Response) {

        res.send({ msg: "UPDATE" });
    }

    @remove('/:id')
    static async delete(req: Request, res: Response) {

        res.send({ msg: "Remover" });
    }
}

