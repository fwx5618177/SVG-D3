import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import { RouterList } from './pages/router.config';
import D3Case from './pages/D3';
import D3_4 from './pages/D3_4.x';

const { Header, Sider, Content } = Layout;

class SideMenu extends React.Component {
  state = {
    collapsed: false,
  };

  constructor(props: any) {
    super(props)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {RouterList?.map((item, index) => (
            <Menu.Item key={index} icon={<BorderOutlined />}>
              {item.menuName}
            </Menu.Item>
          ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              backgroundColor: '#DCDCDC',
            }}
          >
            {/* <D3Case /> */}
            <D3_4 />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SideMenu;