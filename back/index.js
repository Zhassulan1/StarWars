import express from "express";
import axios from "axios";
import cors from "cors";


const app = express();
app.use(cors())
const BASE_URL = "https://swapi.dev/api/";


app.get('/', (request, response) => {
    const ipAddress = request.ip;
    response.send("Hello from the back end server!");
    console.log(`GET /   \nfrom ip: ${ipAddress}\n`);
    response.end();
})


app.get('/api/:item/page/:page', (request, response) => {
    const ipAddress = request.ip;
    const item = request.params.item;
    const page = request.params.page;
    console.log(`GET api/${item}/page/${page}  \nfrom ip: ${ipAddress}`);

    let error = null
    axios.get(`${BASE_URL}${item}?page=${page}`).catch(err => {
        error = err;
    }).then((res) => {
        if (error) {
            response.sendStatus(404);
            console.log(`ERROR: Axios error\n`);
            return;
        }
        response.send(res.data);
        response.end();
        console.log(`\n`);
    })
    
})


// Details
app.get('/api/:item/:itemId', (request, response) => {
    const ipAddress = request.ip;
    const item = request.params.item;
    const itemId = request.params.itemId;
    console.log(`GET api/${item}/${itemId}  \nfrom ip: ${ipAddress}`);

    let error = null
    axios.get(`${BASE_URL}${item}/${itemId}`).catch(err => {
        error = err;
    }).then((res) => {
        if (error) {
            response.sendStatus(404);
            console.log(`ERROR: Axios error\n`);
            return;
        }
        response.send(res.data);
        response.end();
        console.log(`\n`);
    })
})


// Search
app.get('/api/:item/search/:query', (request, response) => {
    const ipAddress = request.ip;
    const item = request.params.item;
    const query = request.params.query;
    console.log(`GET api/${item}/search/${query}  \nfrom ip: ${ipAddress}`);

    let error = null
    axios.get(`${BASE_URL}${item}/?search=${query}`).catch(err => {
        error = err;
    }).then((res) => {
        if (error) {
            response.sendStatus(404);
            console.log(`ERROR: Axios error\n`);
            return;
        }
        response.send(res.data);
        response.end();
        console.log(`\n`);
    })
})


app.use((request, response) => {
    const requestURL = request.get('host') + request.originalUrl;
    const ipAddress = request.ip;
    const method = request.method;
    
    console.log(`NOT FOUND\n${method} ${requestURL}   \nfrom ip: ${ipAddress}\n`);
    response.sendStatus(404);
    response.end();
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
