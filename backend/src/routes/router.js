const express = require('express')


class Router {
    #router;
    #usuarioControllers;
    #organismoControllers;
    constructor() {
        this.#router = express.Router();

    }

    attachControllers=async(ousuarioControllers)=>{
        this.#usuarioControllers=ousuarioControllers;
    }

    attachControllers2=async(oorganismoControllers)=>{
        this.#organismoControllers=oorganismoControllers;
    }

    prepareRouting=async()=>{
        this.#router.get('/usuarios', this.#usuarioControllers.fetchUsers);
        this.#router.post('/usuarios', this.#usuarioControllers.createUsers);
        this.#router.put('/usuarios/:id_usuario', this.#usuarioControllers.updateUsers);
        this.#router.delete('/usuarios/:id_usuario', this.#usuarioControllers.deleteUsers);

        this.#router.get('/organismo', this.#organismoControllers.fetchUsers2);
        this.#router.post('/organismo', this.#organismoControllers.createUsers2);
        this.#router.put('/organismo/:id_organimso', this.#organismoControllers.updateUsers2);
        this.#router.delete('/organismo/:id_organismo', this.#organismoControllers.deleteUsers2);


    }

    

    getRouter = ()=>{
        return this.#router;
    }




}
//Module.exports = Router
module.exports = Router;
