const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function store(req,res){
    const tagData = req.body

    prisma.tag.create({
        name: tagData.name
    })
     


}

module.exports = {
    
        store,
       
}