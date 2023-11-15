//server.js
import ex from "express";
import 'dotenv/config'
import ROUTER from "./routes/playerRoutes.js";
import dbconection from "./config/db.js";
import Player from "./models/player.js";

const api = ex();
const port = process.env.PORT || 44446;

api.use(ex.json())
api.use("/player",ROUTER)

try{
    console.log("STATUS -> Intenatando conectarse a la base de datos")
    dbconection.authenticate()
    console.log("STATUS -> Conexion a la base de datos exotosa")
    console.log("STATUS -> Sincronizando a la bd con los objetos existentes")
    dbconection.sync({force:true})
    console.log("STATUS -> BD lista para realizar operaciones")
}catch(error){
    console.error("Han ocurrido errores intentando conectarse a la BD")
    console.error(error)
}

api.get('/' , (req,res) => { res.json({Hola:"WELCOME STUDENT"})})
api.listen(port,()=>console.log("Su Servidor se encuentra en en puerto : " + port +" ------------ "+" http://localhost:"+port))