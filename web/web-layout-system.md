# Web 端布局系统 - 响应式与适配规范
> 参考 Bootstrap / Tailwind / Material Design / Ant Design Grid

**生成日期：** 2026-03-27  
**适用场景：** Web 应用、管理后台、SaaS 平台、响应式网站

---

## 🎯 设计原则

### 参考大厂标准

| 设计系统 | 网格列数 | 间距单位 | 断点数量 | 容器宽度 |
|----------|---------|---------|---------|---------|
| **Bootstrap 5** | 12 列 | Gutter 24px | 5 个 | 540-1320px |
| **Tailwind** | 12 列 | Gap 灵活 | 5 个 | 无最大宽度 |
| **Ant Design** | 24 列 | Gutter 16px | 6 个 | 无最大宽度 |
| **Material Design 3** | 12 列 | 4dp grid | 5 个 | 自适应 |
| **Foundation** | 12 列 | Gutter 20px | 5 个 | 1200px |

### 本系统采用

- **网格列数：** 12 列（可整除 2/3/4/6）
- **间距（Gutter）：** 24px（Desktop）/ 16px（Mobile）
- **断点数量：** 6 个（XS/SM/MD/LG/XL/2XL）
- **容器宽度：** 最大 1440px（居中）
- **基础单位：** 8px grid

---

## 📐 Breakpoints 断点系统

### 断点定义

| 断点 | 缩写 | 最小宽度 | 容器宽度 | 列间距 | 设备类型 | 典型设备 |
|------|------|---------|---------|--------|---------|---------|
| **Extra Small** | xs | 0px | 100% | 16px | 手机（竖屏） | iPhone SE, 小屏手机 |
| **Small** | sm | 640px | 100% | 16px | 手机（横屏）、平板（竖屏） | iPhone 14, iPad Mini |
| **Medium** | md | 768px | 720px | 24px | 平板 | iPad, 小笔记本 |
| **Large** | lg | 1024px | 960px | 24px | 笔记本 | MacBook Air, 小显示器 |
| **Extra Large** | xl | 1280px | 1200px | 24px | 桌面显示器 | MacBook Pro, 标准显示器 |
| **2X Large** | 2xl | 1536px | 1440px | 24px | 大屏显示器 | 27寸+, 4K 显示器 |

### CSS 媒体查询

```css
/* Mobile First (推荐) */
/* xs: 默认样式，无媒体查询 */

/* sm: >= 640px */
@media (min-width: 640px) {
  /* 手机横屏、小平板 */
}

/* md: >= 768px */
@media (min-width: 768px) {
  /* 平板 */
}

/* lg: >= 1024px */
@media (min-width: 1024px) {
  /* 笔记本 */
}

/* xl: >= 1280px */
@media (min-width: 1280px) {
  /* 桌面显示器 */
}

/* 2xl: >= 1536px */
@media (min-width: 1536px) {
  /* 大屏显示器 */
}
```

### Desktop First（备选）

```css
/* 2xl: 默认样式 */

/* <= 1535px */
@media (max-width: 1535px) {
  /* xl */
}

/* <= 1279px */
@media (max-width: 1279px) {
  /* lg */
}

/* <= 1023px */
@media (max-width: 1023px) {
  /* md */
}

/* <= 767px */
@media (max-width: 767px) {
  /* sm */
}

/* <= 639px */
@media (max-width: 639px) {
  /* xs */
}
```

---

## 🎨 Grid 网格系统

### 12 列网格

```
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│1│2│3│4│5│6│7│8│9│10│11│12│
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘
```

### 列宽计算

```css
/* 单列宽度 */
width: calc((100% - 11 * 24px) / 12);

/* n 列宽度 */
width: calc((100% - (12 - n) * 24px) / 12 * n + (n - 1) * 24px);

/* 简化：使用 CSS Grid */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 24px;
```

### 常用布局

#### 1 列（100%）
```
┌───────────────────────────┐
│          col-12           │
└───────────────────────────┘
```

#### 2 列（50% / 50%）
```
┌─────────────┬─────────────┐
│   col-6     │   col-6     │
└─────────────┴─────────────┘
```

#### 3 列（33% / 33% / 33%）
```
┌────────┬────────┬────────┐
│ col-4  │ col-4  │ col-4  │
└────────┴────────┴────────┘
```

#### 侧边栏布局（25% / 75%）
```
┌──────┬────────────────────┐
│col-3 │      col-9         │
│      │                    │
│Sidebar│     Content       │
└──────┴────────────────────┘
```

#### 主次布局（66% / 33%）
```
┌────────────────┬──────────┐
│     col-8      │  col-4   │
│   Main Content │ Sidebar  │
└────────────────┴──────────┘
```

---

## 📦 Container 容器

### 容器类型

#### Fixed Container（固定宽度）

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 16px; /* xs, sm */
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1440px;
  }
}
```

#### Fluid Container（流式宽度）

```css
.container-fluid {
  width: 100%;
  padding: 0 16px; /* xs, sm */
}

@media (min-width: 768px) {
  .container-fluid {
    padding: 0 24px;
  }
}
```

### 页面边距（Page Margin）

| 断点 | 左右边距 |
|------|---------|
| **xs** | 16px |
| **sm** | 16px |
| **md** | 24px |
| **lg** | 32px |
| **xl** | 48px |
| **2xl** | 64px（或居中 max-width） |

---

## 📏 Spacing Scale 间距体系

### 完整间距表

| Token | 值 | rem | Tailwind | 应用场景 |
|-------|-----|-----|----------|---------|
| `space-0` | 0px | 0 | 0 | 无间距 |
| `space-1` | 4px | 0.25rem | 1 | 最小间距 |
| `space-2` | 8px | 0.5rem | 2 | 紧凑间距 |
| `space-3` | 12px | 0.75rem | 3 | 小间距 |
| `space-4` | 16px | 1rem | 4 | **标准间距** ⭐ |
| `space-5` | 20px | 1.25rem | 5 | 中等间距 |
| `space-6` | 24px | 1.5rem | 6 | **区块间距** ⭐ |
| `space-8` | 32px | 2rem | 8 | 大间距 |
| `space-10` | 40px | 2.5rem | 10 | 超大间距 |
| `space-12` | 48px | 3rem | 12 | Section 间距 |
| `space-16` | 64px | 4rem | 16 | 页面级间距 |
| `space-20` | 80px | 5rem | 20 | Hero 区块 |
| `space-24` | 96px | 6rem | 24 | 顶部大间距 |
| `space-32` | 128px | 8rem | 32 | 超大区块 |

### 使用建议

| 用途 | 推荐间距 | 示例 |
|------|---------|------|
| **元素内边距** | 4/8/12px | 按钮、输入框 padding |
| **元素间间距** | 8/16/24px | 列表项、表单字段 |
| **组件间间距** | 16/24/32px | 卡片、区块 |
| **Section 间距** | 32/48/64px | 页面模块 |
| **页面级间距** | 64/80/96px | Hero, Footer |

---

## 🎯 Layout Patterns 常用布局

### 1. Dashboard 仪表板布局

```
┌──────────────────────────────────────┐
│            Header (64px)             │
├──────┬───────────────────────────────┤
│      │                               │
│      │                               │
│Sidebar│         Content              │
│240px │                               │
│      │                               │
│      │                               │
└──────┴───────────────────────────────┘
```

#### CSS 实现

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
```

#### 响应式

```css
@media (max-width: 1023px) {
  .dashboard {
    grid-template-areas:
      "header"
      "content";
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}
```

---

### 2. Marketing 营销页布局

```
┌────────────────────────────────────┐
│      Hero Section (100vh)          │
│     (全屏背景 + CTA)                 │
├────────────────────────────────────┤
│      Feature Section               │
│   [Icon] [Icon] [Icon] [Icon]      │
├────────────────────────────────────┤
│      Content Section               │
│   [Image]  [Text Content]          │
├────────────────────────────────────┤
│      Pricing Section               │
│   [Card] [Card] [Card]             │
├────────────────────────────────────┤
│      Footer                        │
└────────────────────────────────────┘
```

#### Section 间距

```css
.section {
  padding: 64px 24px; /* lg */
}

@media (min-width: 1024px) {
  .section {
    padding: 96px 48px; /* 2xl */
  }
}
```

---

### 3. List + Detail 列表详情布局

```
┌──────────────┬─────────────────────┐
│   List       │      Detail         │
│  (固定 360px) │     (自适应)         │
│              │                     │
│ [Item 1]     │  ┌──────────────┐   │
│ [Item 2]     │  │  Detail      │   │
│ [Item 3]     │  │  Content     │   │
│              │  └──────────────┘   │
└──────────────┴─────────────────────┘
```

#### CSS 实现

```css
.list-detail {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 24px;
  height: 100vh;
}

@media (max-width: 1023px) {
  .list-detail {
    grid-template-columns: 1fr;
  }
  
  .detail {
    position: fixed;
    inset: 0;
    background: white;
    transform: translateX(100%);
    transition: transform 0.3s;
  }
  
  .detail.active {
    transform: translateX(0);
  }
}
```

---

### 4. Card Grid 卡片网格布局

```
┌──────┬──────┬──────┬──────┐
│Card 1│Card 2│Card 3│Card 4│
├──────┼──────┼──────┼──────┤
│Card 5│Card 6│Card 7│Card 8│
└──────┴──────┴──────┴──────┘
```

#### 响应式列数

| 断点 | 列数 | 卡片宽度 |
|------|------|---------|
| **xs** | 1 列 | 100% |
| **sm** | 2 列 | 50% |
| **md** | 3 列 | 33.33% |
| **lg** | 4 列 | 25% |
| **xl** | 4-6 列 | 根据内容 |

#### CSS 实现

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* xs */
  gap: 16px;
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* sm */
    gap: 24px;
  }
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* md */
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr); /* lg */
  }
}
```

---

### 5. Flex 等分布局

```
┌─────────┬─────────┬─────────┐
│  Item 1 │  Item 2 │  Item 3 │
│  (flex:1)│ (flex:1)│ (flex:1)│
└─────────┴─────────┴─────────┘
```

#### CSS 实现

```css
.flex-equal {
  display: flex;
  gap: 24px;
}

.flex-equal > * {
  flex: 1;
  min-width: 0; /* 防止溢出 */
}

/* 响应式：小屏幕堆叠 */
@media (max-width: 767px) {
  .flex-equal {
    flex-direction: column;
  }
}
```

---

## 🎨 Z-Index 层级系统

### 层级定义

| 层级 | Z-Index | 组件 | 说明 |
|------|---------|------|------|
| **Base** | 0 | 普通内容 | 默认层级 |
| **Dropdown** | 1000 | 下拉菜单 | 输入框下拉 |
| **Sticky** | 1020 | 固定元素 | 固定表头、导航 |
| **Fixed** | 1030 | 固定定位 | 悬浮按钮 |
| **Modal Backdrop** | 1040 | 模态框遮罩 | 半透明背景 |
| **Modal** | 1050 | 模态框 | 弹窗内容 |
| **Popover** | 1060 | 气泡提示 | Popover, Tooltip |
| **Notification** | 1070 | 通知 | Toast, Message |

### CSS Variables

```css
:root {
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-notification: 1070;
}
```

---

## 📱 Mobile 移动端适配

### Safe Area 安全区域

```css
/* iPhone X+ 刘海屏适配 */
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
```

### Viewport Meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
```

### Touch Target 触摸目标

| 元素 | 最小尺寸 | 推荐尺寸 | 说明 |
|------|---------|---------|------|
| **按钮** | 44px × 44px | 48px × 48px | iOS 推荐 44px |
| **链接** | 44px × 44px | 48px × 48px | 可点击区域 |
| **图标按钮** | 44px × 44px | 48px × 48px | 独立图标 |
| **表单控件** | 44px × 44px | 48px × 48px | Checkbox, Radio |

### 滚动容器

```css
/* 平滑滚动 */
.scroll-container {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* iOS 弹性滚动 */
  overscroll-behavior: contain; /* 防止滚动穿透 */
}
```

---

## 💻 Desktop 桌面端优化

### Hover 状态

```css
/* 仅在支持 hover 的设备显示 */
@media (hover: hover) {
  .button:hover {
    background: var(--brand-tap);
  }
}
```

### 最小宽度

```css
/* 防止窗口过小 */
body {
  min-width: 320px;
}

/* 大屏最大宽度 */
.container {
  max-width: 1440px;
  margin: 0 auto;
}
```

### 键盘导航

```css
/* Focus 样式 */
:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* 跳过 focus 轮廓（鼠标点击） */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 🎯 常用组件响应式规则

### Button 按钮

| 断点 | 尺寸 | 宽度 |
|------|------|------|
| **xs, sm** | Medium/Large | 100%（全宽）或自适应 |
| **md+** | Medium | 自适应 |

### Input 输入框

| 断点 | 高度 | 宽度 |
|------|------|------|
| **xs, sm** | 48px (Large) | 100% |
| **md+** | 40px (Medium) | 根据布局 |

### Table 表格

| 断点 | 显示方式 |
|------|---------|
| **xs** | 卡片式（堆叠） |
| **sm** | 滚动表格 |
| **md+** | 标准表格 |

### Navigation 导航

| 断点 | 显示方式 |
|------|---------|
| **xs, sm** | 汉堡菜单（Drawer） |
| **md** | 折叠导航 |
| **lg+** | 完整导航栏 |

### Card 卡片

| 断点 | 布局 |
|------|------|
| **xs** | 1 列（100%） |
| **sm** | 2 列（50%） |
| **md** | 3 列（33.33%） |
| **lg+** | 4 列（25%） |

---

## 📏 Aspect Ratio 宽高比

### 常用比例

| 比例 | 应用场景 | CSS |
|------|---------|-----|
| **16:9** | 视频、横屏图片 | `aspect-ratio: 16/9` |
| **4:3** | 标准图片 | `aspect-ratio: 4/3` |
| **1:1** | 正方形、头像 | `aspect-ratio: 1/1` |
| **3:2** | 照片 | `aspect-ratio: 3/2` |
| **21:9** | 超宽屏 | `aspect-ratio: 21/9` |

### CSS 实现

```css
/* 现代浏览器 */
.media-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* 兼容方案（Padding Hack） */
.media-container-legacy {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 = 9/16 * 100% */
}

.media-container-legacy > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 🎨 CSS Grid 高级布局

### Auto-fit Grid（自动填充）

```css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```

### 自适应卡片宽度：
- 最小 280px
- 自动计算列数
- 等分剩余空间

### Masonry Layout（瀑布流）

```css
.masonry {
  column-count: 3;
  column-gap: 24px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 24px;
}

@media (max-width: 1023px) {
  .masonry { column-count: 2; }
}

@media (max-width: 767px) {
  .masonry { column-count: 1; }
}
```

---

## ✅ 响应式设计检查清单

### 设计阶段
- [ ] 定义 3-5 个关键断点（xs/sm/md/lg/xl）
- [ ] 每个断点设计主要页面布局
- [ ] 移动优先（Mobile First）设计
- [ ] 触摸目标至少 44×44px
- [ ] 文字大小移动端至少 16px

### 开发阶段
- [ ] 使用 CSS Grid / Flexbox 布局
- [ ] 媒体查询覆盖所有断点
- [ ] 图片响应式（srcset, picture）
- [ ] 视频自适应（aspect-ratio）
- [ ] 测试横屏/竖屏切换

### 测试阶段
- [ ] 真机测试（iPhone, Android）
- [ ] 不同分辨率测试（Chrome DevTools）
- [ ] 平板横屏/竖屏
- [ ] 超大屏幕（4K）
- [ ] 触摸交互测试

### 性能优化
- [ ] 移动端资源优化（小图片）
- [ ] 懒加载（Lazy Loading）
- [ ] 媒体查询仅加载必要 CSS
- [ ] 减少重绘重排
- [ ] 使用 CSS Transform 代替 top/left

---

## 🔗 相关文档

- **组件系统：** `web-component-system.md`
- **字体系统：** `web-typography-system.md`
- **CSS 实现：** `web-component.css`
- **演示页面：** `component-demo.html`

---

**生成日期：** 2026-03-27  
**维护人：** ux (AICO Team)  
**版本：** v1.0
