const { DataTypes } = require('sequelize');
const models = require('.');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Softskill = sequelize.define(name, {
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

Softskill.associate = (models) => {
    Softskill.belongsToMany(models.aluno, {
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_softskill'
        },
        as: 'alunos'
    })
    Softskill.belongsToMany(models.avaliacao360, {
        through: 'softskill_avaliacao360',
        timestamps: false,
        foreignKey: {
            name: 'id_softskill'
        },
        as: 'avaliacoes360'
    })
    
}

module.exports = Softskill;

