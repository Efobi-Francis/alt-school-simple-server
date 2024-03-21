const http = require('http')

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Efobi Francis Onyeka')
})

const PORT = 8900

app.listen(PORT)
console.log(`Server running on port localhost:${PORT}`)