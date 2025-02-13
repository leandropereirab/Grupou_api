module.exports = (() => {

    const tarefaController = require("../controlers/tarefa.controller");

    var router = require("express").Router();

    router.post("/", async (req,res) => {
        const tarefa = await tarefaController.store(req.body);
        res.json(tarefa);
    }) 

    router.get("/", async (req, res) => {
        const tarefa = await tarefaController.index();
        res.json(tarefa);
    })
    
    router.get("/:id", async (req, res) =>{
        const tarefa = await tarefaController.show(req.params.id);
        res.json(tarefa);
    })

    router.put("/:id", async (req, res) =>{
        const tarefa = await tarefaController.update(req.body, req.params.id);
        res.json(tarefa);
    })

    router.delete("/:id", async (req, res) => {
        const tarefa = await tarefaController.destroy(req.params.id);
        res.json(tarefa);
    })

    return router
})()