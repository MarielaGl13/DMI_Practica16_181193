import { DataTypes,  } from "sequelize";
import dbconection from "../config/db.js";

const Player= dbconection.define("tbb_players",
{
    name:{
        type: DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull:false,
        unique: true
    },
    password:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    nickname:{
        type:DataTypes.STRING(255),
        allowNull:false,
        unique:true
    },
    birthday:{
        type: DataTypes.DATE,
        allowNull:false,
        unique:true
    },
    portrait_img:{
        type: DataTypes.STRING(255),
    }
}
)
export default Player