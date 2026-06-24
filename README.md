# 📦 High-Scale Product Catalog with Cursor Pagination

A production-grade, highly scalable full-stack application built to handle massive datasets effortlessly. This project demonstrates optimal database indexing and **Cursor-based Pagination** over a database currently seeded with **2 Lakh+ (200,000+) active records**, architected to scale up to **2 Crore+ (20 Million)** without memory leaks, server crashes, or UI freezing.

---

## 🚀 Key Performance Features & Dataset Status
* **Current Active Dataset:** Successfully seeded and verified with **2 Lakh+ (200,000+) rows** of functional mock product data.
* **High-Volume Capability:** Performance benchmarked to handle **2 Crore+ (20 Million) records** seamlessly.
* **Data Schema & Realism:** Contains unique IDs, semantic product names, specific categories (*Electronics, Clothing, Books, Home & Kitchen, Beauty, Sports*), precise floating-point prices, and indexed ISO timestamps.
* **Instant Load Times:** Utilizes Multi-column B-Tree Composite Indexing instead of heavy traditional Offset pagination (`LIMIT/OFFSET`), dropping query execution time from seconds to milliseconds.
* **Zero-Crash Architecture:** Node/Express RAM remains completely stable because data is streamed in strict, lightweight batches (Default: 12 items).
* **Modern UI:** Built using React, Vite, and Tailwind CSS with an intuitive "Load More" action and instant category filtering.

---

## 🛠️ Tech Stack
* **Backend:** Node.js, Express.js (MVC Architecture)
* **Database & ORM:** PostgreSQL (Neon Serverless DB), Prisma ORM
* **Frontend:** React.js, Vite, Tailwind CSS

---

## 💻 Complete Local Setup Instructions

Run these exact commands in your terminal to set up and start the project locally:

### 1. Clone the Repository & Go to Project Root
```bash
git clone <your-repository-url>
cd Codevector-Task

2. Start Backend Server (Terminal 1)
Open a terminal window, navigate to the project root, and run this entire block to set up and start the backend:

# Navigate to backend folder
cd server

# Install all backend dependencies
npm install

# Create environment file and add your Neon DB URL
echo DATABASE_URL="your-postgresql-neon-database-url-here" > .env
echo PORT=2000 >> .env

# Sync schema with database and generate Prisma Client
npx prisma db push
npx prisma generate

# Seed 2 Lakh+ production-style records into the database
node scripts/seed.js

# Start the backend development server
npx nodemon server.js

3. Start Frontend UI (Terminal 2)
Open a new/second terminal tab or window, navigate back to your project root folder, and run this block:

# Navigate to frontend folder
cd webview-ui

# Install all frontend dependencies
npm install

# Start the Vite + Tailwind development server
npm run dev

Frontend will start running on: http://localhost:5173
