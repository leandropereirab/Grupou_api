module.exports = (() => {

    const turmaHardskillController = require("../controlers/turma_hardskills.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const turmaHardskill = await turmaHardskillController.store(req.body, req.params.id);
        res.json(turmaHardskill);
    }) 

    router.delete("/:id", async (req, res) => {
        const turmaHardskill = await turmaHardskillController.destroy(req.body, req.params.id);
        res.json(turmaHardskill);
    })

    return router
})()