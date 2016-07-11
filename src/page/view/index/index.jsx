import React from 'react'
import Component from 'r2/module/ModuleComponent'
import { connect } from 'react-redux'
import * as Antd from 'antd'
import * as actionCreator from './action'
import Test from './components/Test'
require('css/list.css')

class View extends Component {
	constructor(props){
		super(props); 
	}

	componentDidMount(){
	}

	componentDidUpdate(){
		console.timeEnd("渲染时间")
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
		//console.debug(this.props.allData.get && this.props.allData.toJS())
		if(!this.props.allData.get){
			return (
				<Antd.Spin size="large"/>
			)
		}
		console.timeEnd("接收总数据")
		console.time("渲染时间")
		return (
			<div>
				<div style={{float:"left",width:"50%",}}>
					{
						this.props.allData.get && this.props.allData.get('allData') &&
						<Test data={ this.props.allData.getIn(['allData','foods','data']) }/>
					}
				</div>
				<div style={{float:"left",width:"50%",}}>
					{
						this.props.allData.get && this.props.allData.get('allData') &&
						<Test data={ this.props.allData.getIn(['allData','users','data']) }/>
					}
				</div>
			</div>
		)	
    }
}
var ReduxView = connect((state)=>{
	return {
		allData: state.get('allData'),
	};
})(View)
ReduxView.defaultProps = Object.assign({},Component.defaultProps,{
	title: "实时监控系统",
	layout: 'page/layout/index',
	breadcrumb:[
		{
			label:'websocket',
		},
	],
});
module.exports = ReduxView; 
