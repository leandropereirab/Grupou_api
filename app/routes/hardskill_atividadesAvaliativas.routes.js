module.exports = (() => {

    const hardskillAtividadeAvaliativaController = require("../controlers/hardskill_atividadesAvaliativas.controller");

    var router = require("express").Router();

    router.post("/:id", async (req,res) => {
        const hardskillAtividadeAvaliativa = await hardskillAtividadeAvaliativaController.store(req.body, req.params.id);
        res.json(hardskillAtividadeAvaliativa);
    }) 

    router.delete("/:id", async (req, res) => {
        const hardskillAtividadeAvaliativa = await hardskillAtividadeAvaliativaController.destroy(req.body, req.params.id);
        res.json(hardskillAtividadeAvaliativa);
    })

    return router
})()