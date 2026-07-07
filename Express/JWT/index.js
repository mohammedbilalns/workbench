import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [];

const JWT_SECRET = "secretKey12";

// POST /register
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password asynchronously
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user with hashed password
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: "User Registered successfully" });
});

// POST /login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ message: 'User not found!' });

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password!' });

    // Generate a JWT
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

    if (!token) return res.sendStatus(403); // Forbidden

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user; // Store the user data in the request object
        next();
    });
};

// Protected route example
app.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route!', user: req.user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Corrected this line
});
