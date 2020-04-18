import React, { useEffect } from 'react'
import G6 from '@antv/g6';
export default function Behavior() {

    useEffect(()=>{
        init();
    },[]);

    function init(){
        const dom = document.getElementById('container') as HTMLElement;
        const width = dom.scrollWidth;
        const height = dom.scrollHeight || 500;
        const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        modes:{
            default:[ 'drag-canvas','zoom-canvas','click-select','brush-select' ]
        },
        layout: {
            type: 'force',
        },
        nodeStateStyles: {
            selected: {
              stroke: '#d9d9d9',
              fill: '#5394ef',
            }
          },
        defaultNode: {
            size: 15,
            color: '#5B8FF9',
            style: {
            lineWidth: 2,
            fill: '#C6E5FF',
            },
        },
        defaultEdge: {
            size: 1,
            color: '#e2e2e2',
        },
        });

        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json')
        .then(res => res.json())
        .then(data => {
            graph.data({
            nodes: data.nodes,
            edges: data.edges.map(function(edge:any, i:any) {
                edge.id = 'edge' + i;
                return Object.assign({}, edge);
            }),
            });
            graph.render();

            const forceLayout = graph.get('layoutController').layoutMethod;
            graph.on('node:dragstart', function(e:any) {
            graph.layout()
            refreshDragedNodePosition(e);
            });
            graph.on('node:drag', function(e:any) {
            forceLayout.execute();
            refreshDragedNodePosition(e);
            });
            graph.on('node:dragend', function(e:any) {
            e.item.get('model').fx = null;
            e.item.get('model').fy = null;
            });
        });

        function refreshDragedNodePosition(e:any) {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
        }
    }

    return (
        <div id="container" style={{height:'500px',width:'100%'}}>
            
        </div>
    )
}
