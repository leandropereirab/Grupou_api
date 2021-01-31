const models = require('../db/models');


let new_disciplina_hardskill = [];
exports.store = async (obj, id_disciplina) => {
    const disciplina = await models.disciplina.findOne({
        where: { id: id_disciplina}
    })

    for(let h in obj.hardskills){
        let hardskill = obj.hardskills[h];
        console.log(hardskill);

        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        new_disciplina_hardskill.push(resultado.id)
        // console.log(resultado.id);

    }

    disciplina.addHardskill(new_disciplina_hardskill)

    return true
}

exports.destroy = async (obj, id_disciplina) => {
    const disciplina = await models.disciplina.findOne({
        where: { id: id_disciplina}
    })

    for(let h in obj.turmas){
        let turma = obj.turmas[h];
        console.log(turma);

        const [resultado] = await models.turma.find({
            where: turma
        })

        new_disciplina_turma.push(resultado.id)
        // console.log(resultado.id);

    }

    disciplina.removeturma(new_disciplina_turma)

    return true
}