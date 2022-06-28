const http = require('http');

const server=http.createServer(function(request,response){
    response.write(JSON.stringify({name:"shanth",age:24}))
    response.end()
})
server.listen(7000)