import React from 'react'
import Component from 'r2/module/ModuleComponent'
import * as Antd from 'antd'

class Li extends Component {
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
		console.debug("li")
		return (
			<li>
				{ data }
			</li>
		)	
    }
}

module.exports = Li; 
