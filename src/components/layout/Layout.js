import React, { Component } from 'react';
import LeftMenu from '../menu/LeftMenu'
import RightMenu from '../menu/RightMenu'
import { Drawer, Button } from 'antd';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`


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
      <Nav type="heading">
        <div className="logo">
          <a type="heading" href="">Logo</a>
        </div>
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
            <Button className="barsMenu" type="heading" onClick={this.showDrawer}>
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
      </Nav>
    )
  }
}

export default Layout

