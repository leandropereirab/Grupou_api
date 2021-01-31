const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.questaoDia.findAll()
    return resultado
}

//store POST questaoDia
exports.store = async (questaoDia) => {
    const resultado = await models.questaoDia.create(questaoDia);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.questaoDia.findByPk(id);
    return resultado
}


//update PUT questaoDia, ID
exports.update = async (questaoDia, id) => {
    const resultado = await models.questaoDia.update(questaoDia, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.questaoDia.destroy({
        where: {id:id}
    });
    return resultado
}
