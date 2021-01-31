const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Disciplina = sequelize.define(name, {
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

Disciplina.associate = (models) => {
    Disciplina.belongsToMany(models.professor, {
        through: 'professor_disciplina',
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'professores'
    })

    Disciplina.belongsToMany(models.hardskill, {
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'hardskills'
    })

    Disciplina.hasMany(models.turma, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'turmas'
    })
    
}

module.exports = Disciplina;

