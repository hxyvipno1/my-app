import React from 'react';
import styles from './App.module.scss';
import { useLocation } from 'react-router-dom';
import { withRouter } from "react-router";
import * as H from 'history';
import { Layout } from 'antd';
import Nav from './Nav';
import Crumb from './Crumb';
import { ClickParam } from 'antd/lib/menu';
import { useConcent, NoMap } from 'concent';
import { RootState, CtxMS,FooM } from "types/store";

const { Header, Content, Footer } = Layout;

interface appProp{
  children?: React.ReactNode;
  history?: H.History;
  location?: H.Location
}

interface istate{
  activeKey:string
}

type CtxPre = CtxMS<appProp,FooM, istate>;

const setup = (ctx: CtxPre)=>{
  
  return{
    changeKeys({key}:ClickParam){
      const { state:{githubAdress,activeKey},props:{ history } } = ctx;
      if(key ==='github'){        
        window.open(githubAdress);
      }else if(activeKey===key){
        return false;
      }else{
        ctx.setState({ activeKey:key });
        history?.push({
          pathname: key
        })
      }
    },
    getYear(){new Date().getFullYear()} 
  }
}

type Ctx = CtxMS<appProp,FooM, istate,ReturnType<typeof setup>>;

const BasicLayout: React.FC = ({children, history}:appProp) => {

  const {state:{activeKey},settings} = useConcent<{}, Ctx, NoMap, RootState, FooM, istate>({ 
    module:'foo' ,
    setup,
    state:{
      activeKey:useLocation().pathname
    },
    props:{children, history}
  });

  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
      <div className={styles.logo} >
        <i className="iconfont">&#xe660;</i>
      </div>
      <Nav selectedKeys={[activeKey]} changeKeys={(item)=>{settings.changeKeys(item)}}/>      
    </Header>
    <Content className={styles["site-layout"]} style={{ padding: '0 50px', marginTop: 64 }}>
      <Crumb/>
      <div className={styles["site-layout-background"]} style={{ padding: 24, minHeight: 380 }}>
          {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Visible ©{settings.getYear()} Created by Hu Xian Yang</Footer>
  </Layout>
  );
};

export default withRouter(React.memo(BasicLayout));
