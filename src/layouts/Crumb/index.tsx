import React from 'react';
import { useLocation } from 'react-router-dom';
import { withRouter } from "react-router";
import { Breadcrumb } from 'antd';

function Crumb() {
    const {pathname} = useLocation();

    const crumbList = pathname.substr(1).split('/');
    
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {
                crumbList.map((name,i)=><Breadcrumb.Item key={i}>{name}</Breadcrumb.Item>)
            }
        </Breadcrumb>
    )
}
export default withRouter(Crumb);