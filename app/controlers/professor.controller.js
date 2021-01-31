const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.professor.findAll()
    return resultado
}

//store POST professor
exports.store = async (professor) => {
    const resultado = await models.professor.create(professor);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.professor.findByPk(id);
    return resultado
}


//update PUT professor, ID
exports.update = async (professor, id) => {
    const resultado = await models.professor.update(professor, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.professor.destroy({
        where: {id:id}
    });
    return resultado
}
