const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const AtividadeAvaliativa = sequelize.define(name, {
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

AtividadeAvaliativa.associate = (models) => {
    AtividadeAvaliativa.belongsToMany(models.hardskill, {
        through: 'hardskill_atividadeAvaliativa',
        timestamps: false,
        foreignKey: {
            name: 'id_atividadeAvaliativa'
        },
        as: 'hardskills'
    })

    AtividadeAvaliativa.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_atividadeAvaliativa'
        },
        as: 'turma'
    })

    AtividadeAvaliativa.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_atividadeAvaliativa'
        },
        as: 'avaliacoes360'
    })

    AtividadeAvaliativa.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_atividadeAvaliativa'
        },
        as: 'grupos'
    })

}

module.exports = AtividadeAvaliativa;

