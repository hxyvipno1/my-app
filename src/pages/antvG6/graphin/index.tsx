import React, { useState } from 'react';
import './models';
import { defaultNode,defaultEdge } from './g6Cfg';
import ToolBar from './components/toolBar';
import OperatorBar from './components/operatorBar';
import AutoDrawer from './components/autoDrawer';
import styles from './index.module.scss';
import { useConcent,NoMap,SettingsType } from 'concent';
import { GraphinM, CtxM,RootState } from 'types/store';
// import { CtxPre } from '../components';
import G6 from '../register';

type CtxPre = CtxM<{},GraphinM>;


const setup = (ctx: CtxPre)=>{

    ctx.effect(()=>{
        const minimap = new G6.Minimap({
            size: [150, 100]
          });
        const dom = document.getElementById('mycontainer') as HTMLDivElement;
        const width = dom.clientWidth;
        const height = dom.clientHeight;
        const graph = new G6.Graph({
            container:dom,
            width,
            height,
            defaultNode,
            defaultEdge,
            plugins: [ minimap ]
        });
        graph.data({nodes:[],edges:[]});
        graph.render();
        ctx.setState({graph})
    },[]);
    return{}
}

type Ctx = CtxM<{},GraphinM,SettingsType<typeof setup>>

export default function Graphin() {
    useConcent<{}, Ctx, NoMap, RootState, GraphinM>({
        module:'graphin',
        setup
    })
    return (
        <div>
            <OperatorBar/>
            <div id="mycontainer" className={styles.graphCont}>
                <ToolBar/>
                
            </div>
            <AutoDrawer/>
        </div>
    )
}
