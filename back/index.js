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
    axios.get(`${BASE_URL}${request.params.item}?page=${request.params.page}`).then((res) => {
        response.send(res.data);
        console.log(`GET api/${request.params.item}/page/${request.params.page}  \nfrom ip: ${ipAddress}\n`);
        response.end();
    })
})



// Details
app.get('/api/:item/:itemId', (request, response) => {
    const ipAddress = request.ip;
    axios.get(`${BASE_URL}${request.params.item}/${request.params.itemId}`).then((res) => {
        response.send(res.data);
        console.log(`GET api/${request.params.item}/${request.params.itemId}  \nfrom ip: ${ipAddress}\n`);
        response.end();
    })
})


// Search
app.get('/api/:item/search/:query', (request, response) => {
    const ipAddress = request.ip;
    axios.get(`${BASE_URL}${request.params.item}/?search=${request.params.query}`).then((res) => {
        response.send(res.data);
        console.log(`GET api/${request.params.item}/search/${request.params.query}  \nfrom ip: ${ipAddress}\n`);
        response.end();
    })
})




const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
