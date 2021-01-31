const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Grupo = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(50)
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

Grupo.associate = (models) => {
    Grupo.belongsToMany(models.aluno, {
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'alunos'
    })

    Grupo.belongsTo(models.atividadeAvaliativa,{
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'atividadeAvaliativa'
    })

    Grupo.belongsTo(models.turma,{
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'turma'
    })

    Grupo.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'avaliacoes360'
    })
    
    Grupo.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'tarefas'
    })

}

module.exports = Grupo;

