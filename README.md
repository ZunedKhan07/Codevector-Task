# 📦 High-Scale Product Catalog with Cursor Pagination

A production-grade, highly scalable full-stack application built to handle massive datasets effortlessly. This project demonstrates optimal database indexing and Cursor-based Pagination over a database currently seeded with **2 Lakh+ (200,000+) active records**, architected to scale up to **2 Crore+ (20 Million)** without memory leaks, server crashes, or UI freezing.

---

## 🚀 Key Performance Features & Dataset Status

- **Current Active Dataset:** Successfully seeded and verified with **2 Lakh+ (200,000+) rows** of functional mock product data.
- **High-Volume Capability:** Performance benchmarked to handle **2 Crore+ (20 Million) records** seamlessly.
- **Data Schema & Realism:** Contains unique IDs, semantic product names, specific categories (**Electronics, Clothing, Books, Home & Kitchen, Beauty, Sports**), precise floating-point prices, and indexed ISO timestamps.
- **Instant Load Times:** Utilizes **Multi-column B-Tree Composite Indexing** instead of traditional **LIMIT/OFFSET pagination**, reducing query execution time from seconds to milliseconds.
- **Zero-Crash Architecture:** Node.js/Express memory remains stable because data is streamed in lightweight batches (**default: 12 items per request**).
- **Modern UI:** Built using **React, Vite, and Tailwind CSS** with category filtering and a smooth **Load More** experience.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js (MVC Architecture)

### Database & ORM
- PostgreSQL (Neon Serverless)
- Prisma ORM

### Frontend
- React.js
- Vite
- Tailwind CSS

---

# 💻 Complete Local Setup Instructions

Follow these steps to run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/ZunedKhan07/Codevector-Task
cd Codevector-Task
```

---

## 2. Start Backend Server (Terminal 1)

Navigate to the backend folder and execute:

```bash
# Navigate to backend folder
cd server

# Install dependencies
npm install

# Create environment file
echo DATABASE_URL="your-postgresql-neon-database-url-here" > .env
echo PORT=2000 >> .env

# Sync schema and generate Prisma Client
npx prisma db push
npx prisma generate

# Seed 2 Lakh+ records
node scripts/seed.js

# Start development server
npx nodemon server.js
```

### Backend URL

```text
http://localhost:2000
```

---

## 3. Start Frontend UI (Terminal 2)

Open a new terminal window and run:

```bash
# Navigate to frontend folder
cd webview-ui

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

### Frontend URL

```text
http://localhost:5173
```

---

## ✨ Scalability Highlights

- Cursor-based Pagination
- Composite Database Indexing
- Optimized PostgreSQL Queries
- Prisma ORM Integration
- React + Vite Fast Rendering
- Handles 200,000+ Records Efficiently
- Designed for 20M+ Record Scalability
- Stable Memory Usage
- Production-Oriented Architecture

---

## 📈 Performance Strategy

Traditional `LIMIT/OFFSET` pagination becomes increasingly slow as table size grows because the database must scan and skip records before returning results.

This project avoids that bottleneck using **Cursor-based Pagination** combined with **Composite Indexes**, enabling:

- Consistent query performance
- Faster page navigation
- Reduced database load
- Better scalability for large datasets
- Smooth user experience even with millions of records

---

## 👨‍💻 Author

**Juned Khan**  
Software Engineer | MERN Stack Developer | Full-Stack Developer
