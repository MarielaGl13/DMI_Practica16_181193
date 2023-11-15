//playerRoutes.js
import express from "express";
import obj from "../controllers/playerController.js"
const ROUTER = express.Router()

ROUTER.get('/getAll', obj.getAllPlayers)
ROUTER.get('/getOneById/:id', obj.findOneById)
ROUTER.get('/getOneByEmail/:Email', obj.findOneByEmail)
ROUTER.post('/createOnePlayer', obj.createOnePlayer)
ROUTER.put('/updatePlayer/:id', obj.putPlayer)
ROUTER.delete('/delPlayer/:id', obj.delPlayer)
ROUTER.patch('/patchPlayer/:id', obj.patchPlayer)

export default ROUTER;