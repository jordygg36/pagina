const organismoModel = require('../models/organismoModel')


class organismoControllers {

    constructor() {
        Object.preventExtensions(this);
    }


    fetchUsers2 = async (req, resp) => {
        //let data = await organismoModel.fetchUsersAll2();
        let data = "fetch funcionando"
         resp.status(200).json(data);
    }


    createUsers2 = async (req, resp) => {
        // Lógica para crear organismos
        //let record = await organismoModel.createUsers2(req.body);
        let record = "createUsers2 funcionando"
        console.log(record);
        resp.status(200).json(record);

    }

    updateUsers2 = async (req, resp) => {
        /*try {
            // Lógica para actualizar organismos
            let record = await organismoModel.updateUsers2(req.params.id_organismo, req.body);
            if (record) {
                resp.status(200).json({ message: 'organismo actualizado', record });
            } else {
                resp.status(404).json({ message: 'organismo no encontrado' });
            }
        } catch (error) {
            resp.status(500).json({ message: 'Error actualizando organismo', error: error.message });
        }*/
            
    };



    deleteUsers2 = async (req, resp) => {
      
        /*
        let deletedCount = await organismoModel.deleteUser2(req.params.id_organismo);
    
        resp.status(200).json({
            message: `User with ID ${req.params.id_organismo} deleted successfully`,deletedCount});
        }*/
            
    }

}

module.exports = {
    organismoControllers,
    organismoModel
};
