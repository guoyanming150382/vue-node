const express=require('express')
// post传参数用bodyparser
const bodyParser = require('body-parser')
const app=new express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
// parse application/json
app.use(bodyParser.json())


app.get('/index',function(req,res){
	res.header("Content-Type", "text/html; charset=utf-8")
	const data=[
		{
			menu:'手机电话卡',
			list:[                                                               
				{title:'小米cc9 pro',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74bb2ad7cb8b3707d8fd9d596e1866e2.png',link:'http://www.baidu.com'},
				{title:'小米6plus',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png',link:'http://www.sohu.com'}
			]
		},
		{
			menu:'小米电视机',
			list:[                                                               
				{title:'小米cc9 pro',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74bb2ad7cb8b3707d8fd9d596e1866e2.png',link:'http://www.baidu.com'},
				{title:'小米6plus',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png',link:'http://www.sohu.com'}
			]
		}
	]
	res.json({code:200,msg:'success',data:data});
})

// get 传参数
app.get('/getsDate',function(req,res){
	console.log("get传参数",req.query)
	res.json({code:200,msg:'get  success',})
})
//post传参数
app.post('/send',function(req,res){
	console.log("收到",req.body)
	if(req.body.name){
		res.send({code:200,msg:"成功"})
	}
})
//post拿取数据
app.post('/postTake',function(req,res){
	const datas=[
		{
			menu:'手机电话卡',
			list:[                                                               
				{title:'小米cc9 pro',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74bb2ad7cb8b3707d8fd9d596e1866e2.png',link:'http://www.baidu.com'},
				{title:'小米6plus',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png',link:'http://www.sohu.com'}
			]
		},
		{
			menu:'post小米电视机',
			list:[                                                               
				{title:'小米cc9 pro',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74bb2ad7cb8b3707d8fd9d596e1866e2.png',link:'http://www.baidu.com'},
				{title:'小米6plus',imgurl:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png',link:'http://www.sohu.com'}
			]
		}
	]
	res.send({code:200,msg:"post获取参数",data:datas})
})
app.listen(3333,'127.0.0.1')

