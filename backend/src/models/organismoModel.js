class organismoModel {

    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }
    defineModel2 = async (orientDB) => {
        this.#orientDB = await orientDB;

    }


    fetchUsersAll2 = async () => {
        // let session = await this.#orientDB.pool.acquire();
        // let data;
        // //if(rid)
        // data = await session.select().from('organismo').all();
      
        // session.close();
        // return data;


    }


    createUsers2 = async (object) => {
        // let session = await this.#orientDB.pool.acquire();
        // let idRecord = await session.create('Vertex', 'organismo').set(object).one();
        // return idRecord;


    }

    updateUsers2 = async (id_organismo, object) => {
        // let session = await this.#orientDB.pool.acquire();
        // try {
        //     // Realizamos la actualización del organismo con el campo id_organismo
        //     let result = await session.update('organismo')
        //         .set(object)
        //         .where({ 'id_organismo': id_organismo }) // Usamos id_organismo en lugar de @rid
        //         .return('AFTER')
        //         .one();

        //     return result;
        // } catch (error) {
        //     throw new Error('Error actualizando el organismo');
        // } finally {
        //     session.close(); // Cierra la sesión de OrientDB
        // }
    };

    deleteUser2 = async(id_organismo)=>{
        
        // let session = await this.#orientDB.pool.acquire();
        // let deletedCount = await session.delete('Vertex', 'organismo').where({ 'id_organismo': id_organismo }).one();
        //  return deletedCount; 
    
    };
    
    
    
    




}

module.exports = organismoModel = new organismoModel();
