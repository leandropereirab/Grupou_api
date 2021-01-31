const models = require('../db/models');


let new_aluno_softskill = [];
exports.store = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.softskills){
        let softskill = obj.softskills[h];
        console.log(softskill);

        const [resultado] = await models.softskill.findOrCreate({
            where: softskill
        })

        new_aluno_softskill.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.addSoftskill(new_aluno_softskill)

    return true
}

exports.destroy = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.softskills){
        let softskill = obj.softskills[h];
        console.log(softskill);

        const [resultado] = await models.softskill.find({
            where: softskill
        })

        new_aluno_softskill.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.removeSoftskill(new_aluno_softskill)

    return true
}