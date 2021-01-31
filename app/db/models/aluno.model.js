const { DataTypes } = require('sequelize');
const models = require('.');
const Usuario = require('./usuario.model');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Aluno = sequelize.define(name, {
    matricula: {
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

Aluno.associate = (models) => {
    Aluno.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Aluno.belongsToMany(models.hardskill, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'hardskills'
    })

    Aluno.belongsToMany(models.turma, {
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'turmas'
    })
    
    Aluno.belongsToMany(models.softskill, {
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'softskills'
    })

    Aluno.belongsToMany(models.grupo, {
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'grupos'
    })

    Aluno.belongsTo(models.curso, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'curso'
    })

    Aluno.hasMany(models.tarefa, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'tarefas'
    })

    Aluno.hasMany(models.questaoDia, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'questoesDia'
    })

    Aluno.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'avaliacoes360'
    })

}


module.exports = Aluno;

