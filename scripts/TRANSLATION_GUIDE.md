# Prompt 翻译工具使用指南

本目录包含用于批量翻译 UI Style Prompt 模板的工具脚本。

## 📋 背景

项目中有 102 个 Markdown prompt 文件的中文翻译不完整，英文内容详尽但中文部分只有简短描述。这些脚本帮助你批量分析和翻译这些文件。

## 🔍 第一步：分析需要翻译的文件

运行分析脚本找出需要翻译的文件：

```bash
npm run analyze:markdown
```

这会生成 `markdown-translation-analysis.json`，包含：
- 102 个需要翻译的文件列表
- 每个文件的英文/中文长度比例
- 按目录分组的统计信息

**关键发现：**
- 24 个文件中文完全缺失（比例 = ∞）
- 用户提到的 TOP 10 问题文件：
  1. `/core/skeuomorphism` - 368.0x
  2. `/visual/claymorphism` - 99.2x-100x（多个文件）
  3. `/visual/neoBrutalism` - 100x
  4. `/visual/monochrome/portfolio-showcase` - 84.9x
  5. `/core/brutalism/modern-brutalism-project-mgmt` - 76.0x
  6. `/visual/monochrome/visual-monochrome` - 56.9x
  7. `/visual/antiDesign/visual-tech-anti-design` - 55.5x
  8. `/core/fluent2/fluent2-Notification` - 52.9x
  9. `/visual/leather/visual-texture-leather-vintage-journal` - 47.5x
  10. `/core/fluent2/fluent2-settings` - 45.1x

## 🚀 第二步：翻译文件

### 方案 A：使用 Claude API（推荐）

#### 1. 安装依赖

```bash
npm install @anthropic-ai/sdk
```

#### 2. 设置 API Key

创建 `.env` 文件或导出环境变量：

```bash
export ANTHROPIC_API_KEY=your-api-key-here
```

#### 3. 运行翻译

**测试运行（不修改文件）：**
```bash
npm run translate:prompts:dry-run
```

**翻译前 10 个最严重的文件：**
```bash
npm run translate:prompts:top10
```

**翻译所有文件：**
```bash
npm run translate:prompts
```

**自定义选项：**
```bash
# 只翻译前 5 个文件
node scripts/translate-prompts.js --max=5

# 调整 API 请求延迟（毫秒）
node scripts/translate-prompts.js --delay=2000

# Dry run 前 10 个
node scripts/translate-prompts.js --dry-run --top-10
```

### 方案 B：手动翻译

如果不想使用 API，可以：

1. 查看 `markdown-translation-analysis.json` 获取文件列表
2. 打开对应的 `.md` 文件（在 `dist/data/prompts/styles/` 目录下）
3. 找到 `## English Version (en-US)` 部分
4. 将翻译内容放到 `## 中文版本 (zh-CN)` 部分

**文件格式示例：**
```markdown
# Custom Prompt

## 中文版本 (zh-CN)

[在这里放置翻译的中文内容]

---

## English Version (en-US)

[原始英文内容]
```

### 方案 C：使用其他翻译 API

修改 `scripts/translate-prompts.js` 中的 `translateWithClaude` 函数，替换为你喜欢的翻译服务：

- OpenAI GPT-4
- Google Cloud Translation
- DeepL API
- 本地 LLM（如 Ollama）

## 📝 翻译要求

翻译时请遵循以下原则：

1. **保持格式：** Markdown 标题、列表、代码块格式不变
2. **技术术语保留英文：**
   - 框架名：TailwindCSS, React, Fluent 2
   - UI 术语：Hero, CTA, Card, Modal
   - CSS 类名：`rounded-xl`, `shadow-sm`, `hover:`
3. **数值保持原样：** 38–52px, 4.5:1, 120–180ms
4. **代码相关内容保持英文：** HTML 标签、属性名、变量名
5. **翻译要自然专业：** 符合中文技术文档表达习惯
6. **保持语气：** 专业、清晰、指导性

## 📊 翻译进度跟踪

翻译完成后会生成 `translation-results.json`，包含：
- 成功翻译的文件数
- 失败的文件列表
- 跳过的文件
- 详细的翻译统计

## 🔧 脚本说明

### `analyze-markdown-prompts.js`
- 扫描所有 Markdown prompt 文件
- 分析中英文长度比例
- 生成需要翻译的文件列表

### `translate-prompts.js`
- 批量翻译 Markdown 文件
- 支持 dry-run 模式预览
- 自动更新文件中的中文部分
- API 速率限制保护

## ⚠️ 注意事项

1. **备份：** 翻译前建议提交当前更改或创建备份
2. **API 成本：** 使用 Claude API 会产生费用，建议先用 `--dry-run` 测试
3. **速率限制：** 脚本默认每个请求间隔 1.5 秒，避免触发 API 限制
4. **文件路径：** 脚本操作 `dist/data/prompts/styles/` 目录，确保运行 `npm run build` 后再翻译

## 🎯 推荐工作流程

```bash
# 1. 构建项目（生成 dist 目录）
npm run build

# 2. 分析需要翻译的文件
npm run analyze:markdown

# 3. 测试翻译（dry run）
npm run translate:prompts:dry-run --max=3

# 4. 翻译前 10 个最严重的文件
npm run translate:prompts:top10

# 5. 检查翻译结果
git diff dist/data/prompts/styles/

# 6. 如果满意，翻译所有文件
npm run translate:prompts

# 7. 提交更改
git add dist/data/prompts/styles/
git commit -m "feat: 添加简体中文翻译到 prompt 模板"
```

## 📂 相关文件

- `scripts/analyze-markdown-prompts.js` - 分析脚本
- `scripts/translate-prompts.js` - 翻译脚本
- `markdown-translation-analysis.json` - 分析结果
- `translation-results.json` - 翻译结果
- `dist/data/prompts/styles/**/*.md` - 待翻译的 Markdown 文件

## 💡 常见问题

**Q: 为什么操作的是 `dist/` 目录而不是 `src/`？**
A: Prompt 文件在构建时生成到 `dist/` 目录，这是运行时实际使用的文件。

**Q: 翻译后需要重新构建吗？**
A: 是的，翻译完成后运行 `npm run build` 确保更改被应用。

**Q: 可以只翻译特定的文件吗？**
A: 可以，使用 `--max=N` 参数或直接修改 `translate-prompts.js` 中的文件列表。

**Q: 翻译质量如何保证？**
A: 使用 Claude 4.5 Sonnet 模型，配合专门的翻译提示词，确保技术术语准确、格式保持一致。

## 🤝 贡献

如果你发现翻译问题或有改进建议，欢迎提交 PR 或 Issue。
