const models = require('../db/models');


let new_turma_hardskill = [];
exports.store = async (obj, id_turma) => {
    const turma = await models.turma.findOne({
        where: { id: id_turma}
    })

    for(let h in obj.hardskills){
        let hardskill = obj.hardskills[h];
        console.log(hardskill);

        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        new_turma_hardskill.push(resultado.id)
        // console.log(resultado.id);

    }

    turma.addHardskill(new_turma_hardskill)

    return true
}

exports.destroy = async (obj, id_turma) => {
    const turma = await models.turma.findOne({
        where: { id: id_turma}
    })

    for(let h in obj.turmas){
        let turma = obj.turmas[h];
        console.log(turma);

        const [resultado] = await models.turma.find({
            where: turma
        })

        new_turma_turma.push(resultado.id)
        // console.log(resultado.id);

    }

    turma.removeturma(new_turma_turma)

    return true
}