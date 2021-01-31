const models = require('../db/models');


let new_hardskill_atividadeAvaliativa = [];
exports.store = async (obj, id_hardskill) => {
    const hardskill = await models.hardskill.findOne({
        where: { id: id_hardskill}
    })

    for(let h in obj.atividadesAvaliativas){
        let atividadeAvaliativa = obj.atividadesAvaliativas[h];
        console.log(atividadeAvaliativa);

        const [resultado] = await models.atividadeAvaliativa.findOrCreate({
            where: atividadeAvaliativa
        })

        new_hardskill_atividadeAvaliativa.push(resultado.id)
        // console.log(resultado.id);

    }

    hardskill.addAtividadeAvaliativa(new_hardskill_atividadeAvaliativa)

    return true
}

exports.destroy = async (obj, id_hardskill) => {
    const hardskill = await models.hardskill.findOne({
        where: { id: id_hardskill}
    })

    for(let h in obj.atividadesAvaliativas){
        let atividadeAvaliativa = obj.atividadesAvaliativas[h];
        console.log(atividadeAvaliativa);

        const [resultado] = await models.atividadeAvaliativa.find({
            where: atividadeAvaliativa
        })

        new_hardskill_atividadeAvaliativa.push(resultado.id)
        // console.log(resultado.id);

    }

    hardskill.removeAtividadeAvaliativa(new_hardskill_atividadeAvaliativa)

    return true
}