# 快速开始 - Prompt 翻译

## 🚀 5 分钟快速入门

### 步骤 1: 分析现状

```bash
# 运行分析脚本
npm run analyze:markdown
```

**输出示例:**
```
Analyzing Markdown prompt files...
Found 332 Markdown prompt files

=== TOP 30 FILES NEEDING TRANSLATION ===

1. visual/claymorphism/custom.md
   Ratio: ∞ (EN: 17377 chars, ZH: 0 chars)

2. visual/neoBrutalism/custom.md
   Ratio: ∞ (EN: 16739 chars, ZH: 0 chars)

...

Total: 102 files need translation
Results saved to: markdown-translation-analysis.json
```

### 步骤 2: 选择翻译方案

#### 方案 A: 自动翻译（推荐，需要 API Key）

```bash
# 1. 安装依赖
npm install @anthropic-ai/sdk

# 2. 设置 API Key（临时）
export ANTHROPIC_API_KEY=sk-ant-xxxx

# 或创建 .env 文件
echo "ANTHROPIC_API_KEY=sk-ant-xxxx" > .env

# 3. 测试翻译 1 个文件（dry run）
node scripts/translate-prompts.js --dry-run --max=1

# 4. 如果满意，翻译前 10 个文件
npm run translate:prompts:top10

# 5. 翻译所有文件
npm run translate:prompts
```

#### 方案 B: 手动翻译（无需 API Key）

```bash
# 1. 运行交互式助手
npm run translate:helper

# 2. 选择 "3. 批量导出英文内容"
#    英文内容会保存到 translation-export/ 目录

# 3. 使用你喜欢的工具翻译
#    - ChatGPT
#    - DeepL
#    - Google Translate

# 4. 返回助手，选择 "2. 交互式翻译"
#    逐个粘贴翻译后的内容
```

### 步骤 3: 验证结果

```bash
# 查看翻译结果统计
cat translation-results.json | jq

# 查看具体文件的翻译
cat dist/data/prompts/styles/visual/claymorphism/custom.md

# 或使用 diff 查看更改
git diff dist/data/prompts/styles/visual/claymorphism/custom.md
```

### 步骤 4: 重新构建

```bash
# 重新构建项目
npm run build

# 测试开发服务器
npm run dev
# 访问 http://localhost:1000
```

### 步骤 5: 提交更改

```bash
# 查看所有更改
git status

# 添加翻译文件
git add dist/data/prompts/styles/

# 提交
git commit -m "feat: 添加简体中文翻译到 102 个 prompt 模板"

# 推送（可选）
git push
```

## 📋 翻译示例

### 翻译前

```markdown
## 中文版本 (zh-CN)

请使用 TailwindCSS 创建 Claymorphism 风格的界面。

---

## English Version (en-US)

Build a Claymorphism-style interface with soft, rounded, 3D clay-like shapes.

**Core Principles:**
- Soft shadows (inner and outer) create depth
- Pastel, saturated color palette
- Generous border radius (16px+)
- Subtle gradients for volume
- Playful, tactile aesthetic

**Layout:**
- Hero section with large clay buttons
- Card grid with floating clay cards
- Interactive elements with press states
...
```

### 翻译后

```markdown
## 中文版本 (zh-CN)

使用 TailwindCSS 创建 Claymorphism（黏土态）风格的界面，采用柔和、圆润、3D 黏土般的形状。

**核心原则：**
- 柔和的阴影（内阴影和外阴影）创造深度感
- 柔和饱和的色彩调色板
- 大圆角（16px 以上）
- 微妙的渐变营造体积感
- 俏皮、触感的美学

**布局：**
- Hero 部分配大型黏土按钮
- 卡片网格配浮动黏土卡片
- 交互元素具有按下状态
...

---

## English Version (en-US)

Build a Claymorphism-style interface with soft, rounded, 3D clay-like shapes.
...
```

## ⚡ 常用命令

```bash
# 分析需要翻译的文件
npm run analyze:markdown

# 交互式翻译助手
npm run translate:helper

# 自动翻译（dry run 模式）
npm run translate:prompts:dry-run

# 自动翻译前 10 个文件
npm run translate:prompts:top10

# 自动翻译所有文件
npm run translate:prompts

# 自定义翻译（3 个文件，延迟 2 秒）
node scripts/translate-prompts.js --max=3 --delay=2000
```

## 🔑 API Key 获取

### Claude API (推荐)

1. 访问 https://console.anthropic.com/
2. 注册/登录账号
3. 创建 API Key
4. 设置环境变量：
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-api03-xxx
   ```

### 成本估算

- Claude Sonnet 4.5: $3.00 / 1M input tokens
- 平均每个文件 ~5000 tokens
- 102 个文件 ≈ 510,000 tokens ≈ $1.53
- 加上 output tokens: 总计约 $3-5

## 🐛 常见问题

### Q: 运行 analyze 脚本报错 "Directory not found"

**A:** 先运行 `npm run build` 生成 dist 目录

```bash
npm run build
npm run analyze:markdown
```

### Q: 翻译脚本报错 "ANTHROPIC_API_KEY is required"

**A:** 设置环境变量

```bash
export ANTHROPIC_API_KEY=your-key-here
npm run translate:prompts
```

或创建 `.env` 文件：
```bash
echo "ANTHROPIC_API_KEY=your-key-here" > .env
```

### Q: 翻译后的内容格式不对

**A:** 检查 Markdown 格式是否正确

```bash
# 查看具体文件
cat dist/data/prompts/styles/path/to/file.md

# 如果格式有问题，可以手动调整
code dist/data/prompts/styles/path/to/file.md
```

### Q: 只想翻译特定的几个文件

**A:** 使用 `--max` 参数或手动编辑

```bash
# 方法 1: 限制数量
node scripts/translate-prompts.js --max=5

# 方法 2: 手动编辑脚本
# 编辑 scripts/translate-prompts.js 中的 filesToTranslate 数组

# 方法 3: 使用交互式助手
npm run translate:helper
```

### Q: API 请求速率限制

**A:** 增加请求延迟

```bash
# 默认 1.5 秒，增加到 3 秒
node scripts/translate-prompts.js --delay=3000
```

## 📚 进一步阅读

- [完整使用指南](scripts/TRANSLATION_GUIDE.md)
- [项目总结](TRANSLATION_SUMMARY.md)
- [翻译脚本源码](scripts/translate-prompts.js)
- [分析脚本源码](scripts/analyze-markdown-prompts.js)

## 💬 获取帮助

如果遇到问题：

1. 查看 `scripts/TRANSLATION_GUIDE.md` 详细文档
2. 查看 `TRANSLATION_SUMMARY.md` 项目总结
3. 检查 `markdown-translation-analysis.json` 分析结果
4. 检查 `translation-results.json` 翻译结果

祝翻译顺利！🎉
