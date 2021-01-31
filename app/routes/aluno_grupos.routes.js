module.exports = (() => {

    const alunoGrupoController = require("../controlers/aluno_grupos.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const alunoGrupo = await alunoGrupoController.store(req.body, req.params.id);
        res.json(alunoGrupo);
    }) 

    router.delete("/:id", async (req, res) => {
        const alunoGrupo = await alunoGrupoController.destroy(req.body, req.params.id);
        res.json(alunoGrupo);
    })

    return router
})()