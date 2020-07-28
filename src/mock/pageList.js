/* eslint-disable */
import Mock from 'mockjs' // 引入mockjs
import { resSuc, resErr } from '@/utils'
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

// 构建列表数据
const buildList = () => {
	const data = {
		total: 30,
		pageSize: 10,
		currentPage: 1, //从1 开始
		list: []
	} // 用于接受生成数据的数组

	for (let i = 0; i < 10; i++) {
		// 可自定义生成的个数
		const template = {
			keyid: Random.integer(1, 99999),
			status: Random.integer(0, 1),
			tag: Random.string(2, 6),
			date: Random.date(),
			create: Random.string(5, 7)
		}
		data.list.push(template)
	}
	return data
}


Mock.mock('/mock/pageList', 'post', (req) => {
	console.log(req)
	const params = JSON.parse(req.body)
	const data = buildList()
	data.currentPage = params.page
	data.pageSize = params.pageSize
	return resSuc(data)
}) // 根据数据模板生成模拟数据
