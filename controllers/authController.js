const {validationResult} = require("express-validator")
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {matchedData} = require("express-validator")

async function register(req,res){
const validation = validationResult(req)
if(!validation.isEmpty()){
    return res.status(422).json(validation.array())
}
//passo solo i dati che sono nel validatore
const sanitizedData = matchedData(req);
 const user = await prisma.user.create({
     ...sanitizedData,
 })


res.json(sanitizedData)
}


async function login(req,res){
    res.send("funziona")

}

module.exports = {
    register,
    login
}