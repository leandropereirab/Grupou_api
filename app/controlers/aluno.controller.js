const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.aluno.findAll()
    return resultado
}

//store POST aluno
exports.store = async (aluno) => {
    const resultado = await models.aluno.create(aluno);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.aluno.findByPk(id);
    return resultado
}


//update PUT aluno, ID
exports.update = async (aluno, id) => {
    const resultado = await models.aluno.update(aluno, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.aluno.destroy({
        where: {id:id}
    });
    return resultado
}
