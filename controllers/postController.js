const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();








module.exports = {
    index,
    show,
    store,
    update,
    destroy,
}