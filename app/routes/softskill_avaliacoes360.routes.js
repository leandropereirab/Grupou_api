module.exports = (() => {

    const softskillAvalicao360Controller = require("../controlers/softskill_avaliacoes360.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const softskillAvalicao360 = await softskillAvalicao360Controller.store(req.body, req.params.id);
        res.json(softskillAvalicao360);
    }) 

    router.delete("/:id", async (req, res) => {
        const softskillAvalicao360 = await softskillAvalicao360Controller.destroy(req.body, req.params.id);
        res.json(softskillAvalicao360);
    })

    return router
})()