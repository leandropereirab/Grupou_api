module.exports = (() => {

    const professorDisciplinaController = require("../controlers/professor_disciplinas.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const professorDisciplina = await professorDisciplinaController.store(req.body, req.params.id);
        res.json(professorDisciplina);
    }) 

    router.delete("/:id", async (req, res) => {
        const professorDisciplina = await professorDisciplinaController.destroy(req.body, req.params.id);
        res.json(professorDisciplina);
    })

    return router
})()