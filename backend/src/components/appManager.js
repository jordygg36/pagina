// Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Importaciones de los archivos
const conf = require('../config/configbd.json'); // Configuración de la BD
const DBManager = require('./DBManager'); // Administrador de BD
const Router = require('../routes/router.js'); // Tu clase Router personalizada
const usuarioModel = require('../models/usuarioModel.js'); // Modelo de usuario
const { usuarioControllers } = require('../controllers/usuarioControllers.js'); // Controladores de usuario
const organismoModel = require('../models/organismoModel.js'); // Modelo de organismo
const { organismoControllers } = require('../controllers/organismoControllers.js'); // Controladores de organismo


class AppManager {
    #appExpress;
    #runningConfType;

    constructor() {
        this.#init();
        Object.preventExtensions(this);
    }

    #init = async () => {
        this.#runningConfType = conf.DevConfig;
        this.#appExpress = express();
    }

    prepareService = async () => {
        this.#appExpress.use(cors());
        this.#appExpress.use(express.json());
        this.#appExpress.use(bodyParser.json());
        this.#appExpress.use(bodyParser.urlencoded({ extended: true }));
        this.#appExpress.use(morgan('dev'));
        
       // await this.#prepareDataBase(this.#runningConfType.db);
        await this.#prepareRouting();
    }
/*
    #prepareDataBase = async (dbConfig) => {
        const oDBMan = new DBManager();
        await oDBMan.prepareDataBase(dbConfig);
        await usuarioModel.defineModel(oDBMan.getConnection());
        await organismoModel.defineModel2(oDBMan.getConnection());
    }*/

    #prepareRouting = async () => {
        const oRouter = new Router();  // Instancia de tu clase Router personalizada
        const oUsuarioControllers = new usuarioControllers(); // Instancia de tus controladores
        const oOrganismoControllers = new organismoControllers();
        oRouter.attachControllers(oUsuarioControllers); // Adjunta los controladores
        oRouter.attachControllers2(oOrganismoControllers); // Adjunta los controladores
        await oRouter.prepareRouting();  // Prepara las rutas
        this.#appExpress.use('/api', oRouter.getRouter());  // Usa el enrutador preparado
    }

    runService = async () => {
        const thisServicePort = this.#runningConfType.service.port;
        await this.#appExpress.listen(thisServicePort, () => {
            console.log(`AppManager is ready on ${thisServicePort}`);
        });
    }
}

module.exports = AppManager;  
