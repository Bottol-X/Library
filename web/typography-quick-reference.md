# Web Typography - Quick Reference 快速参考

## 🎯 最常用（Top 5）

```css
/* 页面标题 */
h1 { font: var(--font-heading-h1); }  /* 32px / 40px / 600 */

/* 标准正文 */
p { font: var(--font-body-lg); }      /* 16px / 24px / 400 */

/* 标准按钮 */
button { font: var(--font-label-md); } /* 14px / 20px / 500 */

/* 辅助说明 */
small { font: var(--font-caption-md); } /* 12px / 18px / 400 */

/* 代码块 */
code { font: var(--font-code-md); }    /* 14px / 22px / 400 */
```

---

## 📏 完整速查表

### Display（超大标题）
| Token | 字号 | 行高 | 字重 | 场景 |
|-------|------|------|------|------|
| `--font-display-2xl` | 72px | 90px | 700 | Hero 首屏 |
| `--font-display-xl`  | 60px | 72px | 700 | Landing 主标题 |
| `--font-display-lg`  | 48px | 60px | 600 | 营销大标题 |
| `--font-display-md`  | 36px | 44px | 600 | 特性区块 |

### Heading（页面标题）
| Token | 字号 | 行高 | 字重 | 场景 |
|-------|------|------|------|------|
| `--font-heading-h1` | 32px | 40px | 600 | 页面主标题 ⭐ |
| `--font-heading-h2` | 24px | 32px | 600 | 二级标题 |
| `--font-heading-h3` | 20px | 28px | 600 | 区块标题 |
| `--font-heading-h4` | 18px | 28px | 600 | 小区块 |
| `--font-heading-h5` | 16px | 24px | 600 | 列表标题 |
| `--font-heading-h6` | 14px | 22px | 600 | 辅助标题 |

### Body（正文）
| Token | 字号 | 行高 | 字重 | 场景 |
|-------|------|------|------|------|
| `--font-body-xl` | 18px | 28px | 400 | 大段落 |
| `--font-body-lg` | 16px | 24px | 400 | **标准正文** ⭐ |
| `--font-body-md` | 14px | 22px | 400 | 表单说明 |
| `--font-body-sm` | 13px | 20px | 400 | 辅助说明 |
| `--font-body-xs` | 12px | 18px | 400 | 次要内容 |
| `--font-body-lg-strong` | 16px | 24px | 600 | 强调文本 |
| `--font-body-md-strong` | 14px | 22px | 600 | 列表重点 |
| `--font-body-sm-strong` | 13px | 20px | 600 | 小标签强调 |

### Label（标签）
| Token | 字号 | 行高 | 字重 | 场景 |
|-------|------|------|------|------|
| `--font-label-lg` | 16px | 24px | 500 | 大按钮 |
| `--font-label-md` | 14px | 20px | 500 | **标准按钮** ⭐ |
| `--font-label-sm` | 13px | 18px | 500 | 小按钮、Tab |
| `--font-label-xs` | 12px | 16px | 500 | 徽章 |

### Caption（辅助）
| Token | 字号 | 行高 | 字重 | 场景 |
|-------|------|------|------|------|
| `--font-caption-md` | 12px | 18px | 400 | **提示文字** ⭐ |
| `--font-caption-sm` | 11px | 16px | 400 | 时间戳 |
| `--font-caption-xs` | 10px | 14px | 400 | 角标 |

### Code（代码）
| Token | 字号 | 行高 | 字重 | 场景 |
|-------|------|------|------|------|
| `--font-code-lg` | 16px | 24px | 400 | 代码编辑器 |
| `--font-code-md` | 14px | 22px | 400 | **代码块** ⭐ |
| `--font-code-sm` | 13px | 20px | 400 | 行内代码 |
| `--font-code-xs` | 12px | 18px | 400 | 小代码片段 |

---

## 💻 代码示例

### HTML

```html
<!-- 页面标题 -->
<h1 class="text-h1">页面标题</h1>
<h2 class="text-h2">二级标题</h2>

<!-- 正文 -->
<p class="text-body-lg">这是标准正文内容...</p>
<p class="text-body-md">这是中等正文内容...</p>

<!-- 强调 -->
<strong class="text-body-lg-strong">重要信息</strong>

<!-- 按钮 -->
<button class="text-label-md">确定</button>

<!-- 提示 -->
<small class="text-caption-md">提示信息</small>

<!-- 代码 -->
<code class="text-code-md">npm install</code>
```

### React/JSX

```jsx
<div>
  <h1 style={{ font: 'var(--font-heading-h1)' }}>
    页面标题
  </h1>
  
  <p style={{ font: 'var(--font-body-lg)' }}>
    正文内容
  </p>
  
  <button style={{ font: 'var(--font-label-md)' }}>
    确定
  </button>
</div>
```

### Tailwind CSS

```html
<!-- 使用 tailwind-typography-config.js -->
<h1 class="text-h1">页面标题</h1>
<p class="text-body-lg">正文内容</p>
<button class="text-label-md">确定</button>

<!-- 响应式 -->
<h1 class="text-h2 md:text-h1 lg:text-display-md">
  响应式标题
</h1>
```

---

## 📱 响应式断点

```css
/* Desktop (默认) */
h1 { font: var(--font-heading-h1); } /* 32px */

/* Tablet (≤1023px) */
@media (max-width: 1023px) {
  h1 { font: var(--font-heading-h2); } /* 24px */
}

/* Mobile (≤767px) */
@media (max-width: 767px) {
  h1 { font-size: 20px; line-height: 28px; } /* 移动端 */
}
```

---

## 🎨 Figma 变量命名

```
typography/display/2xl
typography/display/xl
typography/display/lg
typography/display/md

typography/heading/h1
typography/heading/h2
typography/heading/h3
typography/heading/h4
typography/heading/h5
typography/heading/h6

typography/body/xl
typography/body/lg
typography/body/md
typography/body/sm
typography/body/xs

typography/label/lg
typography/label/md
typography/label/sm
typography/label/xs

typography/caption/md
typography/caption/sm
typography/caption/xs
```

---

## ✅ 使用检查清单

### 设计
- [ ] 所有文本图层绑定变量（不硬编码）
- [ ] 标题层级符合语义（h1 > h2 > h3）
- [ ] 正文至少 16px（移动端）/ 14px（Web 端）
- [ ] 行高 1.5-1.8（舒适阅读）

### 开发
- [ ] 导入 `web-typography.css`
- [ ] 组件使用 CSS Variables
- [ ] 响应式媒体查询设置
- [ ] 字体加载优化（font-display: swap）

### 无障碍
- [ ] 最小字号 12px（可读性底线）
- [ ] 文字对比度 ≥ 4.5:1（WCAG AA）
- [ ] 语义化 HTML 标签（h1-h6, p, strong）

---

## 🔗 相关文件

- **完整文档：** `web-typography-system.md`
- **CSS 文件：** `web-typography.css`
- **Tailwind 配置：** `tailwind-typography-config.js`
- **演示页面：** `typography-demo.html`

---

**生成日期：** 2026-03-27  
**维护人：** ux (AICO Team)  
**版本：** v1.0
