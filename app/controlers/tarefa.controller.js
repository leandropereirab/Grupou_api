const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.tarefa.findAll()
    return resultado
}

//store POST tarefa
exports.store = async (tarefa) => {
    const resultado = await models.tarefa.create(tarefa);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.tarefa.findByPk(id);
    return resultado
}


//update PUT tarefa, ID
exports.update = async (tarefa, id) => {
    const resultado = await models.tarefa.update(tarefa, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.tarefa.destroy({
        where: {id:id}
    });
    return resultado
}
