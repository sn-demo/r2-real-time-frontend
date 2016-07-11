//框架自带公共actionCreator,用不到可以去掉
import * as r2CommonActionCreator from "r2/actionCreator"
//自定义公共actionCreator可以在这里定义

const GETALLDATA = 'GETALLDATA'; 
const UPDATEALLDATA = 'UPDATEALLDATA'; 
module.exports = Object.assign({},r2CommonActionCreator,{
	GETALLDATA: GETALLDATA,
	getData(data){
		return {
			type: GETALLDATA,
			data: data,
		}
	},
	UPDATEALLDATA: UPDATEALLDATA,
	updateData(data){
		return {
			type: UPDATEALLDATA,
			data: data,
		}
	}
}) 
