const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Tarefa = sequelize.define(name, {
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

Tarefa.associate = (models) => {
    Tarefa.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'aluno'
    })

    Tarefa.belongsTo(models.grupo, {
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'grupo'
    })
}




module.exports = Tarefa;

