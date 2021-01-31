const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.disciplina.findAll()
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.disciplina.findByPk(id);
    return resultado
}

//store POST disciplina
exports.store = async (disciplina) => {
    const resultado = await models.disciplina.create(disciplina);
    return resultado
}

//update PUT disciplina, ID
exports.update = async (disciplina, id) => {
    const resultado = await models.disciplina.update(disciplina, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.disciplina.destroy({
        where: {id:id}
    });
    return resultado
}
