var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

var port = process.env.PORT || 80

app.use(serveStatic(path.join(__dirname, 'public')))

app.listen(port, function () {
    console.log('listening on port: ', port)
})