// Single template module: 3D — 3D Cube
// 立体魔方 - 真实的3D立方体旋转

import { demoHTML, customStyles } from './Demo';

export const cube3d = {
  id: 'visual-threed-cube3d',
  title: 'styles.visual.cube3d.title',
  description: 'styles.visual.cube3d.description',

  customPrompt: {
    'zh-CN': `核心理念：六面体构建 + 3D旋转 + 空间透视

设计要点：
1. 六个面 — front/back/left/right/top/bottom
2. 面定位 — rotateY/rotateX + translateZ(100px)
3. 3D空间 — transform-style: preserve-3d
4. 连续旋转 — animation: rotateCube 12s infinite
5. 适用场景 — 产品展示、logo动画、3D导航`,
    'en-US': `Core Concept: Hexahedron construction + 3D rotation + Spatial perspective

Design Points:
1. Six faces — front/back/left/right/top/bottom
2. Face positioning — rotateY/rotateX + translateZ(100px)
3. 3D space — transform-style: preserve-3d
4. Continuous rotation — animation: rotateCube 12s infinite
5. Use cases — Product showcases, logo animations, 3D navigation`
  },

  demoHTML,
  customStyles,
};

export default cube3d;
