module.exports = (() => {

    const alunoturmaController = require("../controlers/aluno_turmas.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const alunoturma = await alunoturmaController.store(req.body, req.params.id);
        res.json(alunoturma);
    }) 

    router.delete("/:id", async (req, res) => {
        const alunoturma = await alunoturmaController.destroy(req.body, req.params.id);
        res.json(alunoturma);
    })

    return router
})()