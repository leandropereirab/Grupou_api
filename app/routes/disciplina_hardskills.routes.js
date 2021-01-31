module.exports = (() => {

    const disciplinaHardskillController = require("../controlers/disciplina_hardskills.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const disciplinaHardskill = await disciplinaHardskillController.store(req.body, req.params.id);
        res.json(disciplinaHardskill);
    }) 

    router.delete("/:id", async (req, res) => {
        const disciplinaHardskill = await disciplinaHardskillController.destroy(req.body, req.params.id);
        res.json(disciplinaHardskill);
    })

    return router
})()