const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function index(req,res){
//fina many ritorna una promise, quindi faccio un await
const data = await prisma.post.findMany()
return res.json(data)

}

async function show(req,res){
const slug = req.params.slug
const data = await prisma.post.findUnique({
    where: {
        slug: slug
    }
})
return res.json(data)  
}

async function store(req,res){
const postToAdd = req.body
const newPost = await prisma.post.create({
    data: {
        title: postToAdd.title,
        slug: postToAdd.slug,
        content: postToAdd.content,
        image: postToAdd.image,
        published: postToAdd.published
    }
})
return res.json(newPost)  
}


async function update(req,res){

    
}
async function destroy(req,res){

    
}








module.exports = {
    index,
    show,
    store,
    update,
    destroy,
}