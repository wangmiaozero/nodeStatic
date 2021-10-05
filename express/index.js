const express = require('express');
const history = require('connect-history-api-fallback');
const expressJwt = require("express-jwt");
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(history({
    index: '/view/index.html'
}))

app.use(require('cors')())                              // 跨域
app.use(express.json())                                 // JSON转换
app.use(bodyParser.json())                              // 数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }))     // 解析post请求数据

/**
 * 静态文件
 */
app.use('/view', express.static(__dirname + '/view'))


app.listen(3000, () => {
    console.log('http://localhost:3000')
})