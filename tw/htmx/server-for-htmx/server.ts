import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface Products {
	id: number
	name: string;	
	price: number;
	quantity: number;
}
const products : Products[] = [
	{id:1, name: 'iPhone 12', price: 999, quantity: 1},
	{id:2, name: 'iPhone 12 Pro', price: 999, quantity: 1},
	{id:3, name: 'iPhone 12 Pro Max', price: 999, quantity: 1},
	{id:4, name: 'iPhone 12 mini', price: 999, quantity: 1},
	{id:5, name: 'iPhone 12 mini Max', price: 999, quantity: 1},
	{id:6, name: 'iPhone 12 Max', price: 999, quantity: 1},

]




// Single route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to your typescript server! 🎉',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get("/products", (req: Request, res: Response) => {
	const {page, limit, query} = req.body; 
	const offset = (page - 1) * limit;
	res.json({
		products: products.filter((product: Products) => product.name.includes(query)),
		total: products.length,
		offset,
		limit,
	});

})

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
