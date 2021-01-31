const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.hardskill.findAll()
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.hardskill.findByPk(id);
    return resultado
}

//store POST hardskill
exports.store = async (hardskill) => {
    const resultado = await models.hardskill.create(hardskill);
    return resultado
}

//update PUT hardskill, ID
exports.update = async (hardskill, id) => {
    const resultado = await models.hardskill.update(hardskill, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.hardskill.destroy({
        where: {id:id}
    });
    return resultado
}
