const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Turma = sequelize.define(name, {
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

Turma.associate = (models) => {
    Turma.belongsToMany(models.professor, {
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professores'
    })
    
    Turma.belongsToMany(models.curso, {
        through: 'curso_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'cursos'
    })

    Turma.belongsToMany(models.aluno, {
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'alunos'
    })

    Turma.belongsToMany(models.hardskill, {
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskills'
    })

    Turma.belongsTo(models.disciplina, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'disciplina'
    })

    Turma.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'grupos'
    })

    Turma.hasMany(models.atividadeAvaliativa,{
        foreignKey: {
            name: 'id_turma'
        },
        as: 'atividadesAvaliativas'
    })

}

module.exports = Turma;

