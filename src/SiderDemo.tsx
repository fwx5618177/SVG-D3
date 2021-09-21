import React from 'react';
import { Layout, Menu, Button, Modal } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import OperationsCard from './component/OperationsCard';
import PicturesWall from './component/upload'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
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

  handleImport() {
    const confirm = Modal.info({
      title: '上传',
      content: (
          <PicturesWall ></PicturesWall>
      ),
      onOk: (record: any) => {
        confirm.destroy();
      }
    })
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<BorderOutlined />}>
              方框
            </Menu.Item>
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
            <div style={{ paddingBottom: 10 }}>
              <Button type='primary' onClick={this.handleImport}>上传图片</Button>
            </div>
            <OperationsCard />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;