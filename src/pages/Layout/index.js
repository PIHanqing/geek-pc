import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'


function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme
  };
}

const { Header, Sider } = Layout
const items = [
  getItem('数据概览', '/', <HomeOutlined />, ),
  getItem('内容管理', '/article', <DiffOutlined />),
  getItem('发布文章', '/publish', <EditOutlined />)
]

const GeekLayout = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />
        </Sider>
        {/* 二级路由对应显示 */}
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由默认页面 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
