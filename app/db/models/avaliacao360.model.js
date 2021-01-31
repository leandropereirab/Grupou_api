const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Avaliacao360 = sequelize.define(name, {
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

Avaliacao360.associate = (models) => {
    Avaliacao360.belongsToMany(models.softskill, {
        through: 'softskill_avaliacao360',
        timestamps: false,
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'softskills'
    })

    Avaliacao360.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'aluno'
    })

    Avaliacao360.belongsTo(models.grupo, {
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'grupo'
    })

    Avaliacao360.belongsTo(models.atividadeAvaliativa, {
        foreignKey: {
            name: 'id_avaliacao360'
        },
        as: 'atividadeAvaliativa'
    })
    
}

module.exports = Avaliacao360;

