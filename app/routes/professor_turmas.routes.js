module.exports = (() => {

    const professorTurmaController = require("../controlers/professor_turmas.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const professorTurma = await professorTurmaController.store(req.body, req.params.id);
        res.json(professorTurma);
    }) 

    router.delete("/:id", async (req, res) => {
        const professorTurma = await professorTurmaController.destroy(req.body, req.params.id);
        res.json(professorTurma);
    })

    return router
})()