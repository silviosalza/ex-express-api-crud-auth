const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function store(req,res){
    const tagData = req.body
    const newTag = await prisma.tag.create({
        data:{
            name: tagData.name
        }
    })
    return res.json(newTag)
}

module.exports = {
    
        store,
       
}