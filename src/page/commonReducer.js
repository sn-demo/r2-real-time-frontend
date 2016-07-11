//框架自带公共reducer,用不到可以去掉
import * as r2CommonReducer from 'r2/reducer' 
import Immutable from 'immutable'
//自定义公共reducer可以在这里定义
module.exports = Object.assign({},r2CommonReducer,{
	allData(state = {}, action) {
		switch (action.type) {
			case r2ActionCreator.GETALLDATA: 
				var data = Object.assign({},state,action.data);
			//console.debug(action.data)
				var i_state = Immutable.fromJS(data)
				return i_state;
			case r2ActionCreator.UPDATEALLDATA: 
				var ids = state.getIn(['allData',action.data.table,'ids']).toJS();
			//console.debug(state.toJS(),ids[action.data.data.id])
				var type = action.data.type;
				var data; 
				switch(type){
					case "update":
						var id = ids[action.data.data.id];
						data = state.updateIn(['allData',action.data.table,'data',id+""],value=>action.data.data)
						break;
					case "insert":
						var count = state.getIn(["allData",action.data.table,'data']).count();
						//添加索引id
						var i_data = state.setIn(["allData",action.data.table,'ids',action.data.data.id+""],count);
						//添加数据
						data = i_data.setIn(["allData",action.data.table,'data',count+""],Immutable.fromJS(action.data.data));
						break;
					case "delete":
						var id = ids[action.data.data.id];
						//删掉具体数据
						var i_data = state.deleteIn(["allData",action.data.table,'data',id+""]);
						//重排索引id映射关系
						var i = 0;
						var ids = {};
						i_data.getIn(["allData",action.data.table,'data']).forEach(v=>{
							ids[v.get("id")] = i;
							i++;
						});
						data = i_data.setIn(["allData",action.data.table,'ids'],Immutable.fromJS(ids));
						//console.debug(i_data.toJS().allData.foods.ids[action.data.data.id])
						break;
				}
				return data;
			default:
				return state;
		}
	}
}) 
