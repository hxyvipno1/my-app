import React from 'react';
import { Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import MenuData from './manuData';
import styles from './index.module.scss';
import {
    CaretDownOutlined
  } from '@ant-design/icons';

interface NavProp {
    selectedKeys: string[];
    changeKeys: (item:ClickParam)=> void;
}

const Nav: React.FC<NavProp> = ({ selectedKeys,changeKeys }) => {
    return (
        <div className={styles.menuCont}>
            <Menu mode="horizontal" theme="dark" selectedKeys={selectedKeys} onClick={changeKeys}>
                {
                    MenuData.map((item)=>
                        item.child?
                        <Menu.SubMenu                             
                            key={item.path}
                            title={<> {item.name} <CaretDownOutlined /></>} 
                        >
                            {
                                item.child.map((sitem)=> <Menu.Item key={sitem.path}>{sitem.name}</Menu.Item>)
                            }
                        </Menu.SubMenu>:
                        <Menu.Item key={item.path}>{item.name}</Menu.Item>
                    )
                } 
            </Menu>
        </div>
    )
}

export default Nav