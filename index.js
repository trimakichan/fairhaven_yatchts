const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express();
//Enable cors
app.use(cors());
//Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 300,
    message: 'Too many requests, please try again later.',
    statusCode: 429,
    headers: true
});
app.use(limiter)
app.set('trust proxy', 1);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Routes
app.use('/api', require('./routes'))


// Serve static files from the Frontend/dist directory in production
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the Frontend/dist directory
    app.use(express.static(path.join(__dirname, 'Frontend', 'dist')));

    // All other requests should return the index.html file from dist
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html'), (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))