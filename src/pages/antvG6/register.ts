import G6 from '@antv/g6';
// import { ModelConfig } from '@antv/g6/lib/types';
// import GGroup from '@antv/g-canvas/lib/group';


G6.registerNode('iconfont', {
  drawShape(cfg:any, group:any) {
      const {
        backgroundConfig:backgroundStyle,
        style,
        labelCfg: labelStyle,
      } = cfg;
  

        // console.log(backgroundStyle)
        const keyShape =  group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: cfg.size,
            ...backgroundStyle,
          },
          name:'circle-shape'
        });

  
      group.addShape('text', {
        attrs: {
          x: 0,
          y: 0,
          fontFamily: 'iconfont', // 对应css里面的font-family: "iconfont";
          textAlign: 'center',
          textBaseline: 'middle',
          text: cfg.text,
          fontSize: cfg.size,
          ...style,
        },
        name:'text-shape1'
      });
      // const labelY = backgroundStyle ? cfg.size * 2 : cfg.size;
  
      // group.addShape('text', {
      //   attrs: {
      //     x: 0,
      //     y: labelY,
      //     textAlign: 'center',
      //     text: cfg.label,
      //     ...labelStyle.style,
      //   },
      //   name:'text-shape1'
      // });
      return keyShape;
    },
  },
  'iconfont-node'
  );

  G6.registerNode(
    'sql',
    {
      drawShape(cfg:any, group:any) {
        const rect = group.addShape('rect', {
          attrs: {
            x: -75,
            y: -25,
            width: 150,
            height: 50,
            radius: 10,
            stroke: '#5B8FF9',
            fill: '#C6E5FF',
            lineWidth: 3,
          },
          name: 'rect-shape',
        });
        if (cfg.name) {
          group.addShape('text', {
            attrs: {
              text: cfg.name,
              x: 0,
              y: 0,
              fill: '#00287E',
              fontSize: 14,
              textAlign: 'center',
              textBaseline: 'middle',
              fontWeight: 'bold',
            },
            name: 'text-shape',
          });
        }
        return rect;
      },
    },
    'single-node',
  );



  export default G6;