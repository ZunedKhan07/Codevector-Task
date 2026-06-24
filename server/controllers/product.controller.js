import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
    try {
        const { category, limit = 10, cursor } = req.query;
        const pageSize = parseInt(limit);

        const queryOptions = {
            take: pageSize,
            orderBy: { createdAt: "desc"}
        }

        if(category){
            queryOptions.where = { category: category}
        }

        if(cursor){
            queryOptions.skip = 1,
            queryOptions.cursor = { id: cursor }
        }

        const products = await prisma.product.findMany(queryOptions);

        let nextCursor = null;
        if(products.length === pageSize){
            nextCursor = products[products.length - 1].id;
        }

        res.status(200).json({
            success: true,
            data: products,
            nextCursor
        });
    } catch (error) {
        console.log('❌ Controller Err: ', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}