import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import productRouter from './routes/product.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes Mounting
app.use('/api', productRouter);

// Server Start
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(PORT, () => {
  console.log(`🚀 Server running in professional MVC style on http://localhost:${PORT}`);
});