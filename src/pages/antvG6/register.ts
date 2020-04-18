import G6 from '@antv/g6';
// import { ModelConfig } from '@antv/g6/lib/types';
// import GGroup from '@antv/g-canvas/lib/group';


G6.registerNode('iconfont', {
    draw(cfg:any, group:any) {
      const {
        backgroundConfig:backgroundStyle,
        style,
        labelCfg: labelStyle,
      } = cfg;
  
      if (backgroundStyle) {
        group.addShape('circle', {
          attrs: {
            x: 0,
            y: 0,
            r: cfg.size,
            ...backgroundStyle,
          },
        });
      }
  
      const keyShape = group.addShape('text', {
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
      });
      const labelY = backgroundStyle ? cfg.size * 2 : cfg.size;
  
      group.addShape('text', {
        attrs: {
          x: 0,
          y: labelY,
          textAlign: 'center',
          text: cfg.label,
          ...labelStyle.style,
        },
      });
      return keyShape;
    },
  });


  export default G6;