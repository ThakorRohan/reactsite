const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 5600;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use((req, res) => {
        //req.url = req.url.replace('/sofbox-react', '');
        handle(req, res);
    });

    server.get('*', (req, res) => {

        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
});
