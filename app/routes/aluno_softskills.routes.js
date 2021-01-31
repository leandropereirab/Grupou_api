module.exports = (() => {

    const alunosoftskillController = require("../controlers/aluno_softskills.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const alunosoftskill = await alunosoftskillController.store(req.body, req.params.id);
        res.json(alunosoftskill);
    }) 

    router.delete("/:id", async (req, res) => {
        const alunosoftskill = await alunosoftskillController.destroy(req.body, req.params.id);
        res.json(alunosoftskill);
    })

    return router
})()