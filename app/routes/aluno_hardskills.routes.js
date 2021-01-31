module.exports = (() => {

    const alunoHardskillController = require("../controlers/aluno_hardskills.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const alunoHardskill = await alunoHardskillController.store(req.body, req.params.id);
        res.json(alunoHardskill);
    }) 

    router.delete("/:id", async (req, res) => {
        const alunoHardskill = await alunoHardskillController.destroy(req.body, req.params.id);
        res.json(alunoHardskill);
    })

    return router
})()