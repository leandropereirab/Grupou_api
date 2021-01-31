const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.questao.findAll({
        include: ['usuario']
    })
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.questao.findByPk(id);
    return resultado
}

//store POST questao
exports.store = async (questao) => {
    const resultado = await models.questao.create(questao);
    return resultado
}

//update PUT questao, ID
exports.update = async (questao, id) => {
    const resultado = await models.questao.update(questao, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.questao.destroy({
        where: {id:id}
    });
    return resultado
}
