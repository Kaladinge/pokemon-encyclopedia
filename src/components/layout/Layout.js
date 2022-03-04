import React, { Component } from 'react';
import LeftMenu from '../menu/LeftMenu'
import RightMenu from '../menu/RightMenu'
import { Drawer, Button } from 'antd';
import styled from 'styled-components';



class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'pokemon',
      visible: false
    }
  }

  showDrawer = () => this.setState({visible:true})

  onClose = () => this.setState({visible: false})

  render() {
    return(
      <nav>
        <div className="logo">
          <a href="">Logo</a>
        </div>
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer 
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}>
              <LeftMenu/>
              <RightMenu />
            </Drawer>
      </nav>
    )
  }
}

export default Layout

