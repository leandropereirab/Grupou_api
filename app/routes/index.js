const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const alunoHardskills = require('./aluno_hardskills.routes');
const professor = require('./professor.routes');
const aluno = require('./aluno.routes');
const disciplina = require('./disciplina.routes');
const professorDisciplinas = require('./professor_disciplinas.routes');
const professorTurmas = require('./professor_turmas.routes');
const atividadeAvaliativa = require('./atividadeAvaliativa.routes');
const avaliacao360 = require('./avaliacao360.routes');
const curso = require('./curso.routes');
const grupo = require('./grupo.routes');
const questaoDia = require('./questaoDia.routes');
const softskill = require('./softskill.routes');
const tarefa = require('./tarefa.routes');
const turma = require('./turma.routes');
const alunoGrupos = require('./aluno_grupos.routes');
const alunoSoftskills = require('./aluno_softskills.routes');
const alunoTurmas = require('./aluno_turmas.routes');
const cursoTurmas = require('./curso_turmas.routes');
const disciplinaHardskills = require('./disciplina_hardskills.routes');
const hardskillAtividadesAvaliativas = require('./hardskill_atividadesAvaliativas.routes');
const softskillAvaliacoes360 = require('./softskill_avaliacoes360.routes');
const turmaHardskills = require('./turma_hardskills.routes');

module.exports = app => {
    app.use('/api/usuario', usuario)
    app.use('/api/questao', questao)
    app.use('/api/hardskill', hardskill)
    app.use('/api/aluno_hardskills', alunoHardskills)
    app.use('/api/professor', professor)
    app.use('/api/aluno', aluno)
    app.use('/api/disciplina', disciplina)
    app.use('/api/professor_disciplinas', professorDisciplinas)
    app.use('/api/professor_turmas', professorTurmas)
    app.use('/api/atividadeAvaliativa', atividadeAvaliativa)
    app.use('/api/avaliacao360', avaliacao360)
    app.use('/api/curso', curso)
    app.use('/api/grupo', grupo)
    app.use('/api/questaoDia', questaoDia)
    app.use('/api/softskill', softskill)
    app.use('/api/tarefa', tarefa)
    app.use('/api/turma', turma)
    app.use('/api/aluno_grupos', alunoGrupos)
    app.use('/api/aluno_softskills', alunoSoftskills)
    app.use('/api/aluno_turmas', alunoTurmas)
    app.use('/api/curso_turmas', cursoTurmas)
    app.use('/api/disciplina_hardskills', disciplinaHardskills)
    app.use('/api/hardskills_atividadesAvaliativas', hardskillAtividadesAvaliativas)
    app.use('/api/softskill_avaliacoes360', softskillAvaliacoes360)
    app.use('/api/turma_hardskills', turmaHardskills)
}