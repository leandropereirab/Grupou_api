const models = require('../db/models');


let new_professor_turma = [];
exports.store = async (obj, id_professor) => {
    const professor = await models.professor.findOne({
        where: { id: id_professor}
    })

    for(let h in obj.turmas){
        let turma = obj.turmas[h];
        console.log(turma);

        const [resultado] = await models.turma.findOrCreate({
            where: turma
        })

        new_professor_turma.push(resultado.id)
        // console.log(resultado.id);

    }

    professor.addTurma(new_professor_turma)

    return true
}

exports.destroy = async (obj, id_professor) => {
    const professor = await models.professor.findOne({
        where: { id: id_professor}
    })

    for(let h in obj.turmas){
        let turma = obj.turmas[h];
        console.log(turma);

        const [resultado] = await models.turma.find({
            where: turma
        })

        new_professor_turma.push(resultado.id)
        // console.log(resultado.id);

    }

    professor.removeTurma(new_professor_turma)

    return true
}