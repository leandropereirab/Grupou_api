const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.grupo.findAll()
    return resultado
}

//store POST grupo
exports.store = async (grupo) => {
    const resultado = await models.grupo.create(grupo);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.grupo.findByPk(id);
    return resultado
}


//update PUT grupo, ID
exports.update = async (grupo, id) => {
    const resultado = await models.grupo.update(grupo, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.grupo.destroy({
        where: {id:id}
    });
    return resultado
}
