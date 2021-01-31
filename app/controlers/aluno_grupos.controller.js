const models = require('../db/models');


let new_aluno_grupo = [];
exports.store = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.grupos){
        let grupo = obj.grupos[h];
        console.log(grupo);

        const [resultado] = await models.grupo.findOrCreate({
            where: grupo
        })

        new_aluno_grupo.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.addGrupo(new_aluno_grupo)

    return true
}

exports.destroy = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno}
    })

    for(let h in obj.grupos){
        let grupo = obj.grupos[h];
        console.log(grupo);

        const [resultado] = await models.grupo.find({
            where: grupo
        })

        new_aluno_grupo.push(resultado.id)
        // console.log(resultado.id);

    }

    aluno.removeGrupo(new_aluno_grupo)

    return true
}