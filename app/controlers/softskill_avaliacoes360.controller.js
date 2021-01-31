const models = require('../db/models');


let new_softskill_avaliacao360 = [];
exports.store = async (obj, id_softskill) => {
    const softskill = await models.softskill.findOne({
        where: { id: id_softskill}
    })

    for(let h in obj.avaliacoes360){
        let avaliacao360 = obj.avaliacoes360[h];
        console.log(avaliacao360);

        const [resultado] = await models.avaliacao360.findOrCreate({
            where: avaliacao360
        })

        new_softskill_avaliacao360.push(resultado.id)
        // console.log(resultado.id);

    }

    softskill.addAvaliacao360(new_softskill_avaliacao360)

    return true
}

exports.destroy = async (obj, id_softskill) => {
    const softskill = await models.softskill.findOne({
        where: { id: id_softskill}
    })

    for(let h in obj.avaliacoes360){
        let avaliacao360 = obj.avaliacoes360[h];
        console.log(avaliacao360);

        const [resultado] = await models.avaliacao360.find({
            where: avaliacao360
        })

        new_softskill_avaliacao360.push(resultado.id)
        // console.log(resultado.id);

    }

    softskill.removeAvaliacao360(new_softskill_avaliacao360)

    return true
}