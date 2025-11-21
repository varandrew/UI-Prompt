/**
 * 預设模板（MVP）
 *
 * 結構描述使用简化樹：只标明 componentType 与可選的 overrides
 * 由 store 的 loadTemplate 在應用時為每個節點分配 id 並合成默認 props。
 */

export const TEMPLATES = {
  hero: {
    name: 'templates.hero.name',
    tree: {
      componentType: 'Flex',
      layoutOverrides: { display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center' },
      children: [
        {
          componentType: 'Text',
          overrides: { baseProps: { content: { text: 'templates.hero.title' }, style: { fontSize: 36, fontWeight: 700 } } }
        },
        {
          componentType: 'Text',
          overrides: { baseProps: { content: { text: 'templates.hero.subtitle' }, style: { fontSize: 18, color: '#6B7280' } } }
        },
        {
          componentType: 'Button',
          overrides: { baseProps: { content: { text: 'templates.hero.button' } } }
        }
      ]
    }
  },

  threeCards: {
    name: 'templates.threeColumnCards.name',
    tree: {
      componentType: 'Grid',
      layoutOverrides: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
      children: [
        ...Array.from({ length: 3 }).map((_, i) => ({
          componentType: 'Card',
          children: [
            { componentType: 'Text', overrides: { baseProps: { content: { text: `卡片标題 ${i + 1}` }, style: { fontSize: 20, fontWeight: 600 } } } },
            { componentType: 'Text', overrides: { baseProps: { content: { text: '用简潔清晰的描述來傳遞價值。' }, style: { color: '#6B7280' } } } },
            { componentType: 'Button', overrides: { baseProps: { content: { text: '瞭解更多' } } } }
          ]
        }))
      ]
    }
  }
};

