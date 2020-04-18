import React , { useState } from 'react';
import styles from './App.module.scss';
import { useLocation } from 'react-router-dom';
import { withRouter } from "react-router";
import * as H from 'history';
import { Layout } from 'antd';
import Nav from './Nav';
import Crumb from './Crumb';
import { ClickParam } from 'antd/lib/menu';

const { Header, Content, Footer } = Layout;

interface appProp{
  children?: React.ReactNode;
  history?: H.History;
  location?: H.Location
}

const BasicLayout: React.FC = ({children, history}:appProp) => {
  const { pathname } = useLocation();
  const [activeKey,setActiveKey] = useState(pathname);
  const getYear = ()=> new Date().getFullYear();
  const changeKeys = ({key}:ClickParam)=>{
    setActiveKey(key);
    history&&history.push({
      pathname: key
    })
  }

  return (
    <Layout style={{height:'100%'}}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className={styles.logo} >
        <i className="iconfont">&#xe660;</i>
      </div>
      <Nav selectedKeys={[activeKey]} changeKeys={(item)=>{changeKeys(item)}}/>
    </Header>
    <Content className={styles["site-layout"]} style={{ padding: '0 50px', marginTop: 64 }}>
      <Crumb/>
      <div className={styles["site-layout-background"]} style={{ padding: 24, minHeight: 380 }}>
          {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Visible ©{getYear()} Created by Hu Xian Yang</Footer>
  </Layout>
  );
};

export default withRouter(BasicLayout);
