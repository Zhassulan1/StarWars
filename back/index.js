import http from "http";



let server = http.createServer((request, response) => {
    
})


const PORT = 3001;
const HOST = 'localhost';


server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})


console.log("This is the back end server running on port 3001");
