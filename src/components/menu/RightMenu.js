import React, { Component } from 'react';
import { Menu } from 'antd';

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          Log In
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu