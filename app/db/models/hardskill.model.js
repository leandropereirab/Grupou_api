const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const HardSkill = sequelize.define(name, {
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

HardSkill.associate = (models) => {
    HardSkill.belongsToMany(models.aluno, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'alunos'
    })

    HardSkill.belongsToMany(models.disciplina, {
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'disciplinas'
    })

    HardSkill.belongsToMany(models.turma, {
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'turmas'
    })

    HardSkill.belongsToMany(models.atividadeAvaliativa, {
        through: 'hardskill_atividadeAvaliativa',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'atividadesAvaliativas'
    })

    HardSkill.hasMany(models.questao, {
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'questoes'
    })
    
}

module.exports = HardSkill;

