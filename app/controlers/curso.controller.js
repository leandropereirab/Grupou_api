const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.curso.findAll()
    return resultado
}

//store POST curso
exports.store = async (curso) => {
    const resultado = await models.curso.create(curso);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.curso.findByPk(id);
    return resultado
}


//update PUT curso, ID
exports.update = async (curso, id) => {
    const resultado = await models.curso.update(curso, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.curso.destroy({
        where: {id:id}
    });
    return resultado
}
