const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function connectDB() {
    try {
        await prisma.$queryRaw`SELECT 1`;
        console.log('✅ Database connected successfully');
    } catch (err) {
        console.error('❌ Failed to connect to the database:', err);
        process.exit(1);
    }
}

module.exports = { prisma, connectDB };