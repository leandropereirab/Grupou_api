const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.turma.findAll()
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.turma.findByPk(id);
    return resultado
}

//store POST turma
exports.store = async (turma) => {
    const resultado = await models.turma.create(turma);
    return resultado
}

//update PUT turma, ID
exports.update = async (turma, id) => {
    const resultado = await models.turma.update(turma, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.turma.destroy({
        where: {id:id}
    });
    return resultado
}
