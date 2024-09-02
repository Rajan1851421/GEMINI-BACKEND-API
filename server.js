const http = require('http')
const port = process.env.PORT || 3000;
const app = require('./app')
const cors = require('cors')


app.use(cors())
const server = http.createServer(app)

server.listen(port,()=>{
    console.log("App is running on port ",port)
})