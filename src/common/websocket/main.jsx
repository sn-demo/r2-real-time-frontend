class MainWebsocket {

	constructor(dispatch){
		console.time("websocket连接")
		this.socket = io('http://localhost:3000/');
		console.timeEnd("websocket连接")
		console.time("接收总数据")
		this.uid = this.getUid(); 
		this.socket.emit('loginEvent', { uid: this.uid});
		this.socket.on('loginEvent',data=>{
			dispatch(r2ActionCreator.getData(data));
		})
		this.socket.on('updateEvent',data=>{
			data.updateList.forEach(v=>{
				dispatch(r2ActionCreator.updateData(v));
			})
		})
	}

	getUid(){
		return new Date().getTime()+""+Math.floor(Math.random()*899+100);
	}
    
}

module.exports = MainWebsocket; 
