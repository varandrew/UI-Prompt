import { useEffect, useState } from 'react';
import { VirtualMasonryVariable } from './VirtualMasonryVariable';

/**
 * ComponentVirtualGrid - 組件页面专用虛擬化网格
 * 響應式: 手機2欄, iPad3欄, 電腦4欄
 */
export function ComponentVirtualGrid({ items, renderItem, ...props }) {
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setColumnCount(4);        // 電腦: 4欄
      else if (w >= 768) setColumnCount(3);    // iPad: 3欄
      else setColumnCount(2);                  // 手機: 2欄
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <VirtualMasonryVariable
      items={items}
      columnCount={columnCount}
      renderItem={renderItem}
      {...props}
    />
  );
}

export default ComponentVirtualGrid;
