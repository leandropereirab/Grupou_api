const models = require('../db/models');


let new_aluno_hardskill = [];
exports.store = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.hardskills){
        let hardskill = obj.hardskills[h];
        console.log(hardskill);

        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        new_aluno_hardskill.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.addHardskill(new_aluno_hardskill)

    return true
}

exports.destroy = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.turmas){
        let turma = obj.turmas[h];
        console.log(turma);

        const [resultado] = await models.turma.find({
            where: turma
        })

        new_aluno_turma.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.removeturma(new_aluno_turma)

    return true
}