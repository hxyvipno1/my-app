import React, { useEffect } from 'react'
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import {  notification } from 'antd';

export default function Pie() {

    useEffect(()=>{
        init();
    },[])

    function init(){
        const data = [
            { value: 30, type: '乾', name:'戌',describe:'乾卦对应地支戌、亥，如代表农历九月、十月等' },
            { value: 30, type: '乾', name:'亥' ,describe:'乾卦对应地支戌、亥，如代表农历九月、十月等'},
            { value: 30, type: '兑', name:'酉' ,describe:'兑卦对应酉，代表农历八月等'},
            { value: 30, type: '离', name:'午' ,describe:'离卦对应午，代表农历五月等'},
            { value: 30, type: '震', name:'卯' ,describe:'震卦对应卯，代表农历二月等'},
            { value: 30, type: '巽', name:'辰' ,describe:'巽对应辰、巳，代表农历三月、四月等'},
            { value: 30, type: '巽', name:'巳' ,describe:'巽对应辰、巳，代表农历三月、四月等'},
            { value: 30, type: '坎', name:'子' ,describe:'坎卦对应子，代表冬月等'},
            { value: 30, type: '艮', name:'丑' ,describe:'艮卦对应丑、寅，代表腊月、正月等'},
            { value: 30, type: '艮', name:'寅' ,describe:'艮卦对应丑、寅，代表腊月、正月等'},
            { value: 30, type: '坤', name:'未' ,describe:'坤卦对应未、申，代表农历六月、七月等'},
            { value: 30, type: '坤', name:'申' ,describe:'坤卦对应未、申，代表农历六月、七月等'},
        ]
          // 通过 DataSet 计算百分比
          const dv = new DataSet.DataView();
          dv.source(data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'type',
            as: 'percent',
          });
          const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 500,
            padding: 0,
          });
          chart.data(dv.rows);
          chart.scale({
            percent: {
              formatter: (val) => {
                val = (val * 100).toFixed(2) + '%';
                return val;
              },
            },
          });
          chart.coordinate('theta', {
            radius: 0.5,
          });
          chart.tooltip({
            showTitle: false,
            showMarkers: false,
          });
          chart.legend(false);
          chart
            .interval()
            .adjust('stack')
            .position('percent')
            .color('type')
            .label('type', {
              offset: -10,
            })
            .tooltip('name*percent', (item, percent) => {
              percent = (percent * 100).toFixed(2) + '%';
              return {
                name: item,
                value: percent,
              };
            })
            .style({
              lineWidth: 1,
              stroke: '#fff',
            });
          
          const outterView = chart.createView();
          const dv1 = new DataSet.DataView();
          dv1.source(data).transform({
            type: 'percent',
            field: 'value',
            dimension: 'name',
            as: 'percent',
          });
          
          outterView.data(dv1.rows);
          outterView.scale({
            percent: {
              formatter: (val) => {
                val = (val * 100).toFixed(2) + '%';
                return val;
              },
            },
          });
          outterView.coordinate('theta', {
            innerRadius: 0.5 / 0.75,
            radius: 0.75,
          });
          outterView
            .interval()
            .adjust('stack')
            .position('percent')
            .color('name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4'])
            .label('name')
            .tooltip('name*percent', (item, percent) => {
              percent = (percent * 100).toFixed(2) + '%';
              return {
                name: item,
                value: percent,
              };
            })
            .style({
              lineWidth: 1,
              stroke: '#fff',
            });
          
          chart.interaction('element-highlight');
          chart.on('click', (ev:any) => {
            notification.open({
              message: `${ev.data.data.type}卦，${ev.data.data.name}时`,
              description: `${ev.data.data.describe}`
            })
           console.log(ev)
          });
          chart.render();
    }

    return (
        <>
        <h2>太极八卦与十二地支对应关系</h2>
        <div id="container" style={{height:500}}>
        </div>
        </>
    )
}
