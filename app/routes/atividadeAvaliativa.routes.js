module.exports = (() => {

    const atividadeAvaliativaController = require("../controlers/atividadeAvaliativa.controller");

    var router = require("express").Router();

    router.post("/", async (req,res) => {
        const atividadeAvaliativa = await atividadeAvaliativaController.store(req.body);
        res.json(atividadeAvaliativa);
    }) 

    router.get("/", async (req, res) => {
        const atividadeAvaliativa = await atividadeAvaliativaController.index();
        res.json(atividadeAvaliativa);
    })

    router.get("/:id", async (req, res) =>{
        const atividadeAvaliativa = await atividadeAvaliativaController.show(req.params.id);
        res.json(atividadeAvaliativa);
    })

    
    router.put("/:id", async (req, res) =>{
        const atividadeAvaliativa = await atividadeAvaliativaController.update(req.body, req.params.id);
        res.json(atividadeAvaliativa);
    })

    router.delete("/:id", async (req, res) => {
        const atividadeAvaliativa = await atividadeAvaliativaController.destroy(req.params.id);
        res.json(atividadeAvaliativa);
    })

    return router
})()