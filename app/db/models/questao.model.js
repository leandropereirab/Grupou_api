const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''), '.js');

const Questao = sequelize.define(name, {
    descricao: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type:DataTypes.DATE,
        field:'criado_em'
    },
    updatedAt: {
        type:DataTypes.DATE,
        field:'atualizado_em'
    }
}, {
    sequelize,
    tableName: name
});

Questao.associate = (models) => {
    Questao.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_questao'
        },
        as: 'usuario'
    })

    Questao.belongsTo(models.hardskill, {
        foreignKey: {
            name: 'id_questao'
        },
        as: 'hardskill'
    })

    Questao.hasMany(models.questaoDia, {
        foreignKey: {
            name: 'id_questao'
        },
        as: 'questoesDia'
    })

}

module.exports = Questao;

