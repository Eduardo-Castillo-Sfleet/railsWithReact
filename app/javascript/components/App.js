import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import Subjects from './Subjects/Subjects'
import Subject from './Subject/Subject'
import Home from './Home'

//AntDesign
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    BookOutlined,
    ContactsOutlined,
    UserOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



const App = () => {

    const[collapsed, setCollapsed] = useState([])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Router>
                <Sider collapsible collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="inicio" icon={<HomeOutlined />}>
                        <Link to="/inicio">Inicio</Link>
                        </Menu.Item>
                        <Menu.Item key="materias" icon={<BookOutlined />}>
                            <Link to="/materias">Materias</Link>
                        </Menu.Item>
                        <Menu.Item key="profesores" icon={<ContactsOutlined />}>
                            Profesores
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Otras jaladas">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="perfil" icon={<UserOutlined />}>
                            Perfil
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background flex" style={{ padding: 24, minHeight: 360 }}>
                            <Route exact path="/inicio" component={Home} />
                            <Route exact path="/materias" component={Subjects} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Softweb Company</Footer>
                </Layout>
            </Router>
      </Layout>)

}

//Antes de <Content><Header className="site-layout-background" style={{ padding: 0 }} />

export default App