const models = require('../db/models');


let new_professor_disciplina = [];
exports.store = async (obj, id_professor) => {
    const professor = await models.professor.findOne({
        where: { id: id_professor}
    })

    for(let h in obj.disciplinas){
        let disciplina = obj.disciplinas[h];
        console.log(disciplina);

        const [resultado] = await models.disciplina.findOrCreate({
            where: disciplina
        })

        new_professor_disciplina.push(resultado.id)
        // console.log(resultado.id);

    }

    professor.addDisciplina(new_professor_disciplina)

    return true
}

exports.destroy = async (obj, id_professor) => {
    const professor = await models.professor.findOne({
        where: { id: id_professor}
    })

    for(let h in obj.disciplinas){
        let disciplina = obj.disciplinas[h];
        console.log(disciplina);

        const [resultado] = await models.disciplina.find({
            where: disciplina
        })

        new_professor_disciplina.push(resultado.id)
        // console.log(resultado.id);

    }

    professor.removeDisciplina(new_professor_disciplina)

    return true
}