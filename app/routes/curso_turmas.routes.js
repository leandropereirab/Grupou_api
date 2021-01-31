module.exports = (() => {

    const cursoturmaController = require("../controlers/curso_turmas.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const cursoturma = await cursoturmaController.store(req.body, req.params.id);
        res.json(cursoturma);
    }) 

    router.delete("/:id", async (req, res) => {
        const cursoturma = await cursoturmaController.destroy(req.body, req.params.id);
        res.json(cursoturma);
    })

    return router
})()