const models = require('../db/models');

//GET, POST, PUT, DELETE
// (SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
exports.index = async () => {
    const resultado = await models.softskill.findAll()
    return resultado
}

//store POST softskill
exports.store = async (softskill) => {
    const resultado = await models.softskill.create(softskill);
    return resultado
}

//show GET ID
exports.show = async (id) => {
    const resultado = await models.softskill.findByPk(id);
    return resultado
}


//update PUT softskill, ID
exports.update = async (softskill, id) => {
    const resultado = await models.softskill.update(softskill, {
        where: {id:id}
    });
    return resultado
}

//destroy DELETE ID
exports.destroy = async (id) => {
    const resultado = await models.softskill.destroy({
        where: {id:id}
    });
    return resultado
}
