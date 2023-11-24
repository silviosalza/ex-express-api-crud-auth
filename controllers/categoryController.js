const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function store(req,res){
    const catData = req.body
    const newCat = await prisma.category.create({
        data:{
            name: catData.name
        }
    })
    return res.json(newCat)
}

module.exports = {
    
        store,
       
}