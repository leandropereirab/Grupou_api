const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.atividadeAvaliativa.findAll()
    return resultado
}

//store POST atividadeAvaliativa
exports.store = async (atividadeAvaliativa) => {
    const resultado = await models.atividadeAvaliativa.create(atividadeAvaliativa);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.atividadeAvaliativa.findByPk(id);
    return resultado
}


//update PUT atividadeAvaliativa, ID
exports.update = async (atividadeAvaliativa, id) => {
    const resultado = await models.atividadeAvaliativa.update(atividadeAvaliativa, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.atividadeAvaliativa.destroy({
        where: {id:id}
    });
    return resultado
}
