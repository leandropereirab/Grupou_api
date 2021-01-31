const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.usuario.findAll({
        include: ['aluno','professor']
    })
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.usuario.findByPk(id, {
        include: ['aluno','professor']
    });
    return resultado
}

//store POST usuario
exports.store = async (usuario) => {
    const resultado = await models.usuario.create(usuario, {
        include: ['aluno','questoes','professor']
    });
    return resultado
}

//update PUT usuario, ID
exports.update = async (usuario, id) => {
    const resultado = await models.usuario.update(usuario, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.usuario.destroy({
        where: {id:id}
    });
    return resultado
}
