const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function index(req,res){
const postToFind = req.body
console.log(postToFind);
//find many ritorna una promise, quindi faccio un await
const data = await prisma.post.findMany({
    where: {
        published: postToFind.published,
        title: {
            contains: postToFind.title
        },
        content:{
            contains:postToFind.content
        }
    }
})

return res.json(data)

}

async function show(req,res){
const slug = req.params.slug
const data = await prisma.post.findUnique({
    where: {
        slug: slug,
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
    const slug = req.params.slug;
    const postToUpdate = req.body;

    const data = await prisma.post.findUnique({
        where: {
            slug: slug,
        }
    })
    if(!data){
        throw new Error ('Not Found')
    }
    const postUpdated = await prisma.post.update({
       data: postToUpdate,
       where: {
        slug: slug
       }
    })
   return res.json(postUpdated) 
}



async function destroy(req,res){
    const slug = req.params.slug;
await prisma.post.delete({
    where: {
        slug: slug,
    }
})
    return res.json({message: "Post obliterato"})
}








module.exports = {
    index,
    show,
    store,
    update,
    destroy,
}