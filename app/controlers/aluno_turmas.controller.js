const models = require('../db/models');


let new_aluno_turma = [];
exports.store = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.turmas){
        let turma = obj.turmas[h];
        console.log(turma);

        const [resultado] = await models.turma.findOrCreate({
            where: turma
        })

        new_aluno_turma.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.addTurma(new_aluno_turma)

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

    aluno.removeTurma(new_aluno_turma)

    return true
}