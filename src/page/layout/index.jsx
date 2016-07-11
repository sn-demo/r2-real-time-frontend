import React from 'react'
import LayoutComponent from 'r2/module/LayoutAntdComponent'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu } from 'antd'
import MainWebsocket from 'common/websocket/main'
require('css/main.css')
require('css/layout.css')

class Layout extends LayoutComponent{
	constructor(props){
		super(props); 
	}

	componentDidMount(){
		new MainWebsocket(this.props.dispatch)
	}
	
	componentDidUpdate(){
	}
	
    render() {
		super.render();
		return (
			<div className="r2-layout">
				<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
					<Menu.Item key="demo">
						<Link to="/">
							R2框架之实时监控Demo
						</Link>
					</Menu.Item>
				</Menu>
				<div className="r2-breadcrumb">
					{ this.breadcrumb || "" }
				</div>
				<div className="r2-contents">
					{ this.props.contents || "" }
				</div>
			</div>
		)
    }
}

function mapStateToProps(state){
	return {
	};
}
Layout = connect(mapStateToProps)(Layout)
module.exports = Layout; 

