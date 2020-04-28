import React, { Component } from 'react'
import G6 from '../register';
import styles from './index.module.scss';

export default class index extends Component {


    componentDidMount() {
        this.init()
    }

    init() {
        const data = {
            nodes: [{
                id: '0',
                label: '0',
                type: 'rect',
                size:40,
                style:{
                    fill: 'red',
                    stroke: 'blue',
                    lineWidth: 5,
                }
            },
            {
                id: '1',
                label: '1',
                text: '\ue674',
                type: 'ellipse',
                size: [60, 40],
                style:{
                    fill: '#bae637',
                    stroke: '#eaff8f',
                    lineWidth: 5,
                }
            },
            {
                id: '2',
                label: '2',
                type: 'diamond',
                size: [200, 80],
                style: {
                    fill: '#bae637',
                    stroke: '#eaff8f',
                    lineWidth: 5,
                  },
                  labelCfg: {
                    style: {
                      fill: '#9254de',
                      fontSize: 18,
                    },
                    position: 'bottom',
                  }
            },
            {
                id: '3',
                label: '3',
                type: 'triangle',
                style:{
                    fill: 'red',
                    stroke: 'blue',
                    lineWidth: 5,
                }
            },
            {
                id: '4',
                label: '4',
                type: 'star'
            },
            {
                id: '5',
                label: '5',
                type: 'modelRect',
                size:[100,50]
            },
            {
                id: '6',
                label: '6',
                text: '\ue674',
                labelCfg: {
                    position: 'bottom',
                    offset:20,
                    style:{
                        fill:'red'
                    }
                  }
            },
            {
                id: '7',
                label: '7',
                text: '\ue674',
                labelCfg: {
                    position: 'bottom',
                    offset:20,
                    style:{
                        fill:'red'
                    }
                  }
            },
            {
                id: '8',
                label: '8',
                text: '\ue674',
                labelCfg: {
                    position: 'bottom',
                    offset:20,
                    style:{
                        fill:'red'
                    }
                  }
            },
            {
                id: '9',
                label: '9',
                text: '\ue674',
                labelCfg: {
                    position: 'bottom',
                    offset:20,
                    style:{
                        fill:'red'
                    }
                  }
            },{
                id:'10',
                label:'10',
                type:'sql'
            }],
            edges: [{
                source: '0',
                target: '1'
            },
            {
                source: '0',
                target: '2'
            },
            {
                source: '0',
                target: '3'
            },
            {
                source: '0',
                target: '4'
            },
            {
                source: '0',
                target: '5'
            },
            {
                source: '0',
                target: '7'
            },
            {
                source: '0',
                target: '8'
            },
            {
                source: '0',
                target: '9'
            },
            {
                source: '2',
                target: '3'
            },
            {
                source: '4',
                target: '5'
            },
            {
                source: '4',
                target: '6'
            },
            {
                source: '5',
                target: '6'
            }]
        };
        const COLOR = '#40a9ff';
        const dom = document.getElementById('container') as HTMLElement;
        const width = dom.scrollWidth;
        const height = dom.scrollHeight || 500;
        const graph = new G6.Graph({
            container: 'container',
            width,
            height,
            modes: {
                default: ['drag-node','drag-canvas','zoom-canvas','click-select']
            },
            defaultNode: {
                size: 20,
                color: '#5B8FF9',
                style: {
                    lineWidth: 2,
                    fill: '#C6E5FF'
                },
                type: 'iconfont',
                labelCfg: {
                    style: {
                        fill: COLOR,
                        fontSize: 12,
                    },
                },
                backgroundConfig:{
                    fill:'Coral',
                    stroke:'green'
                }
            },
            defaultEdge: {
                size: 1,
                color: '#e2e2e2'
            },
            nodeStateStyles:{
                selected:{
                    stroke: '#d9d9d9',
                    fill: '#5394ef',
                }
            }
            
        });
        graph.data({nodes:[],edges:[]});
        graph.render();
        
        
        graph.on('node:click',(ev:any)=>{
            console.log(ev.item)
        })

        setTimeout(() => {
            data.nodes.forEach((item)=>{
                graph.addItem('node',item);
            })
            data.edges.forEach((item)=>{
                graph.addItem('edge',item);
            })
            graph.updateLayout({type:'circular'});
            graph.fitView();
        }, 16)
    }

 

    render() {
        return (
            <div id="container" className={styles.shapCont}>

            </div>
        )
    }
}

