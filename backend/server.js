import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/monogodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config 
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send("Forever E-Commerce API is working 🚀");
});

// DB + Cloudinary + Server Start
const startServer = async () => {
  try {
    await connectDB();
    connectCloudinary();

    app.listen(port, () => {
      console.log(`✅ Server started on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();
