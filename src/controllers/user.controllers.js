import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(
    async (req,res)=>{
        res.status(200).json(
            {
                id:1,
                name:"nikita sarje",
                email:"nikitasarje2000@gmail.com"

            }

        )
    }
)
const userInfromation = asyncHandler(
    async(req,res)=>{
        res.status(200).json(
            {
                id:2,
                name:"aniket wagh",
                email:"waniket48@gmail.com"
            }
        )
    }
)
const myInfromation = asyncHandler(
    async(req,res)=>{
        res.status(200).json(
            {
                id:3,
                name:"aniket wagh",
                email:"waniket2000@gmail.com"
            }
        )
    }
)
export {registerUser,userInfromation,myInfromation}


