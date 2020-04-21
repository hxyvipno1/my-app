import React from 'react';
import { useConcent, NoMap } from 'concent';
import { AntVM,RootState,CtxM } from 'types/store';
import G6 from '../register';
import comStyle from './index.module.scss';
export type CtxPre = CtxM<{},AntVM>;



const setup = (ctx:CtxPre)=>{
    ctx.effect((ctx:Ctx)=>{
      const minimap = new G6.Minimap({
        size: [150, 100]
      });
        const { state:{ componentsGraphData } } = ctx;
        const dom = document.getElementById('container') as HTMLDivElement;
        const width = dom.clientWidth;
        const height = dom.clientHeight;
        const graph = new G6.Graph({
            container: dom,
            width,
            height,
            modes: {
              default: ['drag-canvas', 'drag-node'],
            },
            layout: {
              type: 'radial',
              unitRadius: 70,
              maxIteration: 1000,
              linkDistance: 10,
              preventOverlap: true,
              nodeSize: 30,
              sortBy: 'sortAttr2',
              sortStrength: 50,
            },
            animate: true,
            defaultEdge: {
              size: 1,
              color: '#e2e2e2',
              style: {
                endArrow: {
                  path: 'M 0,0 L 8,4 L 8,-4 Z'
                },
              },
            },
            plugins: [ minimap ]
          });
          
          type ColorObj ={
              [index:string]:string
          }
          const colors:string[] = ['steelblue', 'green', 'pink', 'grey'];
          const colorsObj:ColorObj = { a: 'steelblue', b: 'green', c: 'pink', d: 'grey' };
          componentsGraphData.nodes.forEach((node:any) => {
            node.size = 20;
            node.style = {
              lineWidth: 4,
              fill: '#fff',
              stroke: colors[node.sortAttr]||colorsObj[node.sortAttr2] ,
            };
          });
          graph.data(componentsGraphData);
          graph.render();

    },[])

    return{}
}

export type Ctx = CtxM<{},AntVM,ReturnType<typeof setup>>;

const Components: React.FC = ()=> {
    useConcent<{}, Ctx, NoMap, RootState, AntVM>({
        module:'antV',
        setup
    })
    return (
        <div id="container" className={comStyle.comCont}>
          
        </div>
    )
}

export default Components;
