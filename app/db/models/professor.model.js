const { DataTypes } = require('sequelize');
const models = require('.');
const Usuario = require('./usuario.model');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Professor = sequelize.define(name, {
    cpf: {
        type : DataTypes.STRING(10)
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

Professor.associate = (models) => {
    Professor.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Professor.belongsToMany(models.disciplina, {
        through: 'professor_disciplina',
        timestamps: false,
        foreignKey: {
            name: 'id_professor'
        },
        as: 'disciplinas'
    })

    Professor.belongsToMany(models.turma, {
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_professor'
        },
        as: 'turmas'
    })
}


module.exports = Professor;

