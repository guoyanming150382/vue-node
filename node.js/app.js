const express = require('express')
const app = new express()
const md5 = require('md5-node')
var session = require('express-session')
const bodyParser = require('body-parser')
var multiparty = require('multiparty')
var ObjectId = require('mongodb').ObjectID

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 100000000
	},
	rolling: true
}))

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')
const url = 'mongodb://localhost:27017'
const dbName = 'nodejs'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/upload', express.static('upload'))



app.use(function(req, res, next) {
	if (req.url == '/login' || req.url == "/dologin") {
		if (req.session.userinfo && req.session.userinfo != '') {
			res.redirect('/product')
		} else {
			next()
		}
	} else {
		if (req.session.userinfo && req.session.userinfo != '') {
			app.locals['userinfo'] = req.session.userinfo //ejs模板的全局处理
			// app.locals['menu'] = res.session.usermenu
			next()
		} else {
			res.redirect('/login')
		}
	}
})

app.get('/login', function(req, res) {
	res.render('login')
})
// 首页
app.get('/product', function(req, res) {
	var page = req.query.page
	var pagesize = req.query.pagesize
	page = page ? parseInt(page) : 1
	pagesize = pagesize ? parseInt(pagesize) : 5
	var skipp = (page - 1) * pagesize
	var limitp = pagesize ? pagesize : 5
	const client = new MongoClient(url)
	client.connect(function(err) {
		assert.equal(null, err)
		const db = client.db(dbName)
		const collection = db.collection('fenye')
		var result = collection.find().skip(skipp).limit(parseInt(limitp))
		result.toArray(function(error, data) {
			var totalArr = collection.find()
			totalArr.toArray(function(error1, totaldata) {
				var num = totaldata.length
				if (data.length == 0) {
					var msg = '暂无数据'
				} else {
					var msg = 1
				}
				res.render('index', {
					list: data,
					msg,
					num: Math.ceil(num / pagesize),
					curpage: page
				})
				client.close()
			})
		})
	})

})
app.post('/dologin', function(req, res) {
	const client = new MongoClient(url)
	client.connect(function(err) {
		assert.equal(null, err)
		const db = client.db(dbName)
		const collection = db.collection('user')
		var result = collection.find({
			name: req.body.username,
			password: md5(req.body.password)
		}) //根据条件查找
		result.toArray(function(error, data) { // 转换成数组
			if (data.length > 0) { // 如果有数据
				req.session.userinfo = data[0] // 生成session 存储用户信息
				const collection1 = db.collection('menu') //   选择集合
				var resMenu = collection1.find({
					status: new RegExp(data[0].status)
				}) //根据条件查找
				resMenu.toArray(function(err1, result) { // 转换成数组
					app.locals['asidemenu'] = result // 存入全局变量里面
					res.redirect('/product') // 页面重定向
				})
				client.close() //关闭数据库
			} else { // 没有查到，打回登陆页面
				res.send("<script>alert('用户名或密码不正确');history.back()</script>")
			}
		})
	})
})
app.get('/loginout', function(req, res) {
	req.session.destroy(function(err) {
		if (err) {
			console.log(err)
		} else {
			//重定向到登录页面
			res.redirect('/login')
		}
	})
})
app.get('/add', function(req, res) {
	res.render('add')
})

app.post('/doAdd', function(req, res) {
	console.log(req.body)
	var form = new multiparty.Form()
	form.uploadDir = 'upload' //指名上传到哪个路径下面
	form.parse(req, function(err, fields, files) {
		var title = fields.title[0]
		var price = fields.price[0]
		var fee = fields.fee[0]
		var description = fields.description[0]
		var pic = files.pic[0].path
		MongoClient.connect(url, (err, client) => {
			//连接db_name这个数据库并使用student这个表
			const collection = client.db('nodejs').collection("fenye");

			//存入数据并退出连接
			collection.save({
				title,
				price,
				fee,
				description,
				pic
			}, (err, result) => {
				console.log(result)
				client.close();
			})
		})
	})

	res.send('添加商品')
})

app.get('/edit', function(req, res) {
	var id = req.query.id.trim()
	const client = new MongoClient(url)
	client.connect(function(err) {
		assert.equal(null, err)
		const db = client.db(dbName)
		const collection = db.collection('fenye')
		var result = collection.find({
			"_id": ObjectId(id)
		})
		result.toArray(function(error, data) {
			console.log(data[0])
			res.render('edit', {
				obj: data[0]
			})
		})
	})
})
app.post('/doEdit', function(req, res) {

})

app.use(function(req, res) {
	res.render('404')
})
app.listen(8002, '127.0.0.1')
