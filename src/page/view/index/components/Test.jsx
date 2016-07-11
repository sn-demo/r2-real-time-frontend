import React from 'react'
import Component from 'r2/module/ModuleComponent'
import * as Antd from 'antd'
import Li from './Li'

class Test extends Component {
	constructor(props){
		super(props); 
	}

	componentDidMount(){
	}

	componentWillUnmount(){
	}
	/**
	 *	数据处理与适配
	 */
	dataAdapter(){
		var _this = this;
		return {
		}
	}
	/**
	 *	事件处理
	 */
	events(){
		var _this = this;
		return{
		}
	}

    render() {
		super.render();
		let { data } = this.props;
		data =  data.toJS();
		console.debug("test")
		return (
			<ul>
				{
					data && data.map((v,key)=>{
						return (
							<Li key={ v.id } data={ v.name || v.id }/>
						)
					})
				}
			</ul>
		)	
    }
}

module.exports = Test; 
