const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.avaliacao360.findAll()
    return resultado
}

//store POST avaliacao360
exports.store = async (avaliacao360) => {
    const resultado = await models.avaliacao360.create(avaliacao360);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.avaliacao360.findByPk(id);
    return resultado
}


//update PUT avaliacao360, ID
exports.update = async (avaliacao360, id) => {
    const resultado = await models.avaliacao360.update(avaliacao360, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.avaliacao360.destroy({
        where: {id:id}
    });
    return resultado
}
