var query = require("../config/db_sqlcon")
var express = require("express")
var router = express.Router()
var generateUUID = require("./common/Unique") //生成唯一标识
var creatTime = require("./common/creatTime") //创建时间
const moment = require('moment'); //格式化数据库时间

//一级二级类名的查询函数//
var select_Class = function (req, res, next, sql) {

	return new Promise(function (resolve, reject) {
		query(sql, function (err, rows, fields) {
			rows.map(function (i) {
				return i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss')
			});
			if (err) {
				reject(err)
			} else {
				resolve(rows)
			}
		})
	})
}

// 一二级类名的查询接口
router.get("/getClass", function (req, res, next) {
	var sqlone = `select * from one_class`
	var sqltwo = `select * from two_class`

	Promise.all([select_Class(req, res, next, sqlone), select_Class(req, res, next, sqltwo)]).then(function (data) {
		res.send({
			code: "3001",
			data: data,
			msg: "查询成功"
		})
	}, function (err) {
		res.send({
			code: "3000",
			data: null,
			msg: "查询失败"
		})
	})
})



// 文章添加接口
router.post("/addArticle", function (req, res, next) {
	var con = req.body.content.replace(/"/g, "'");
	var sql = `insert into ${req.body.enname_one}(id,onenname,oneId,twoId,article_name,editer,content,time,visitors,daodu,imgsrc,recommend,art_show) values("${generateUUID()}","${req.body.enname_one}","${req.body.oneId}","${req.body.twoId}","${req.body.article_name}","${req.body.editer}","${con}","${req.body.time}","0","${req.body.daodu}","${req.body.imgsrc}","${req.body.recommend}","${req.body.art_show}")`
	// var updateClassTwo = `update set two_class `
	query(sql, function (err, rows, fields) {
		if (err) {
			res.send({
				code: "3010",
				msg: err
			})
		} else {
			res.send({
				code: "3011",
				msg: "添加成功"
			})
		}
	})

})

//文章列表接口

router.get("/getArticle", function (req, res, next) {

	var sqlone = `select * from one_class`
	select_Class(req, res, next, sqlone).then(function (data) {
		// 多章表sql的拼接
		var selectArtSql = `select * from (`
		data.forEach(function (i, index) {
			if (index < (data.length - 1)) {
				selectArtSql += `select * from ${i.enname} UNION ALL`
			} else {
				selectArtSql += ` select * from ${i.enname})as tabel_all order by time desc`
			}

		}, this);
		console.log(selectArtSql)
		// 所有表数据的查询
		query(selectArtSql, function (err, rows, fields) {
			if (err) {
				res.send({
					code: "3021",
					data: null,
					msg: "查询失败"
				})
			} else {
				res.send({
					code: "3022",
					data: rows,
					msg: "查询成功"
				})
			}
		}).catch(function (err) {
			console.log(err)
		})
	}, function (err) {
		res.send({
			code: "3020",
			data: null,
			msg: "查询失败"
		})
	})
})

// 文章修改
router.post("/amendArticle", function (req, res, next) {


	// // 检测当前文章表中是否有新传递的一级分类字段
	// var testonesql = `select * from ${req.body.enname_one} where oneId='${req.body.oneId}'`
	//     // 如果找不到新传递的一类分类字段相应的数据，则修改了一级分类
	//     // 在当前表中删除该文章
	// var deletesql = `delete * from ${req.body.enname_one} where id='${req.body.id}'`

	// // 将新数据插入新一级分类所对应的表中，并修改对应二级分类所属一级分类
	// var insertNewTable = `insert into ${req.body.enname_oneNew}(id,oneIdNew,twoIdNew,article_name,editer,content,time,visitors,daodu,imgsrc,recommend,art_show) values('${req.body.id}','${req.body.oneId}','${req.body.twoId}','${req.body.article_name}','${req.body.editer}','${req.body.content}','${req.body.time}','${req.body.recommend}','${req.body.daodu}','${req.body.imgsrc}','${req.body.recommend}','${req.body.art_show}')`
	// 如果找到新传递的一类分类字段相应的数据，则未修改一级分类

	// 不允许更变一级和二级分类
	var sql = `update ${req.body.enname_one} set article_name='${req.body.article_name}',editer='${req.body.editer}',content='${req.body.content}',time='${req.body.time}',visitors="0",daodu='${req.body.daodu}',imgsrc='${req.body.imgsrc}',recommend='${req.body.recommend}',art_show='${req.body.art_show}' where id='${req.body.id}'`
	console.log(sql)
	query(sql, function (err, rows, fields) {
		if (err) {
			res.send({
				code: "3030",
				msg: err
			})
		} else {
			res.send({
				code: "3031",
				msg: "修改成功"
			})
		}
	})

})

// sql执行成功与否的检测
var sqlStateFn = function (req, res, next, sql) {
	return new Promise(function (resolve, reject) {
		query(sql, function (err, rows, fields) {
			console.log(err)
			if (err) {
				reject("err")
			} else {
				resolve("ok")
			}
		})
	})
}

router.post("/deleteOne", function (req, res, next) {
	let deleteSql = `delete from ${req.body.enname_one} where id='${req.body.id}'`
	console.log(deleteSql)
	sqlStateFn(req, res, next, deleteSql).then(function (data) {
		res.send({
			code: "3041",
			msg: "删除成功"
		})
	}, function (err) {
		res.send({
			code: "3040",
			msg: "删除失败"
		})
	})


})

// 测试接口
router.get("/aa", function (req, res, next) {
	res.send("hahah")
})
// 头部导航数据查询
router.get("/getNav", function (req, res, next) {
	var sql = `select * from one_class order by time desc`
	query(sql, function (err, rows, fields) {

		if (err) {
			res.send({
				code: "6011",
				msg: "数据查询失败"
			})
		} else {
			// rows.map(function(i) {
			//     return i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss')
			// });
			res.send({
				code: "6010",
				msg: "数据查询成功",
				data: rows
			})
		}

	})
})
// 获取所有文章查询
router.get("/getArticleAll", function (req, res, next) {
	var sqlone = `select * from one_class`

	select_Class(req, res, next, sqlone).then(function (data) {
		// 多章表sql的拼接
		var selectArtSql = `select * from (`
		data.forEach(function (i, index) {
			if (index < (data.length - 1)) {
				selectArtSql += `select * from ${i.enname} UNION ALL`
			} else {
				selectArtSql += ` select * from ${i.enname})as tabel_all where art_show='21' order by time desc`
			}
		}, this);
		// 所有表数据的查询
		query(selectArtSql, function (err, rows, fields) {
			rows.map(function (i) {
				return i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss')
			});
			if (err) {
				res.send({
					code: "6011",
					data: null,
					msg: "查询失败"
				})
			} else {
				res.send({
					code: "6012",
					data: rows,
					msg: "查询成功"
				})
			}
		})
	}, function (err) {
		res.send({
			code: "6013",
			data: null,
			msg: "查询失败"
		})
	})
})

// 根据不同的一级类名获取相应的二级类名
router.post("/getClassTwo", function (req, res, next) {
	var sql = `select * from two_class where parent_id='${req.body.oneId}'`
	query(sql, function (err, rows, fields) {
		if (err) {
			res.send({
				code: "6021",
				msg: "数据查询失败"
			})
		} else {
			rows.map(function (i) {
				return i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss')
			});
			res.send({
				code: "6020",
				msg: "数据查询成功",
				data: rows
			})
		}

	})
})
// 根据id获取文章
router.get("/getArt", function (req, res, next) {
	var sqlone = `select * from one_class`

	select_Class(req, res, next, sqlone).then(function (data) {
		// 多章表sql的拼接
		var selectArtSql = `select * from (`
		data.forEach(function (i, index) {
			if (index < (data.length - 1)) {
				selectArtSql += `select * from ${i.enname} UNION ALL`
			} else {
				selectArtSql += ` select * from ${i.enname})as tabel_all where id='${req.query.id}' and art_show=21 order by time desc`
			}

		}, this);
		console.log(selectArtSql)
		// 所有表数据的查询
		query(selectArtSql, function (err, rows, fields) {
			rows.map(function (i) {
				return i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss')
			});
			if (err) {
				res.send({
					code: "6031",
					data: null,
					msg: "查询失败"
				})
			} else {
				res.send({
					code: "6030",
					data: rows[0],
					msg: "查询成功"
				})
			}
		})
	}, function (err) {
		res.send({
			code: "6032",
			data: null,
			msg: "查询失败"
		})
	})
})

module.exports = router
