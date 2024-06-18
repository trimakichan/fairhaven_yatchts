const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();


const PORT = process.env.PORT || 5000

const app = express();

// app.get("/*", function (req, res) {
//     res.sendFile(__dirname, "./Frontend/dist/index.html"),
//         function (err) {
//             if (err) {
//                 res.status(500).send(err);
//             }
//         }

// })
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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Rate Limiting
const limiter = rateLimit({
    windowsMs: 10 * 60 * 1000, //10mins
    max: 100
})

app.use(limiter)
app.set('trust proxy', 1)


//Routes
app.use('/api', require('./routes'))

//Enable cors
app.use(cors());

//this runs our app in heroku
// const __dirname = path.resolve()
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/Frontend/dist')))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html'))
//     })
// };
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'Frontend', 'dist')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html'));
//     });
// };




app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 