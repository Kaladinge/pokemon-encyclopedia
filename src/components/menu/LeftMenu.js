import React, { Component } from 'react';
import { Menu } from 'antd';


class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          Pokémon
        </Menu.Item>
        <Menu.Item key="games">
          Games
        </Menu.Item>
        <Menu.Item key="game">
          Game Mechanics
        </Menu.Item>
      </Menu>
    )
  }
}

export default LeftMenu