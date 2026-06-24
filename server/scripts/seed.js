import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import 'dotenv/config'; 

const prisma = new PrismaClient();

const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Beauty', 'Sports'];
const TOTAL_RECORDS = 200000;
const BATCH_SIZE = 10000; 

async function main() {
  console.log('⏳ 2,00,000 Products generate aur seed hona shuru ho rahe hain...');
  const startTime = Date.now();

  for (let i = 0; i < TOTAL_RECORDS; i += BATCH_SIZE) {
    const productsBatch = [];

    for (let j = 0; j < BATCH_SIZE; j++) {
      productsBatch.push({
        name: faker.commerce.productName(),
        category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
        price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
      });
    }

    // Ek baar me 10,000 products direct insert
    await prisma.product.createMany({
      data: productsBatch,
    });

    console.log(`✅ ${i + BATCH_SIZE} / ${TOTAL_RECORDS} products seed ho gaye...`);
  }

  const endTime = Date.now();
  console.log(`🎉 Shabaash! Poora 2 Lakh data sirf ${((endTime - startTime) / 1000).toFixed(2)} seconds me seed ho gaya!`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding me error aaya:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });