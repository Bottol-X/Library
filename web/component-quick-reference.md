# Web Component System - Quick Reference 快速参考

## 🎯 最常用（Top 10）

```css
/* 1. 标准间距 */
gap: 8px;           /* 元素间 */
padding: 16px;      /* 区块内 */
margin-bottom: 24px; /* 区块间 */

/* 2. 标准按钮（Medium） */
height: 40px;
padding: 8px 16px;
font-size: 14px;
border-radius: 8px;

/* 3. 标准输入框（Medium） */
height: 40px;
padding: 8px 12px;
font-size: 14px;
border: 1px solid #E2E2E8;

/* 4. 标准卡片 */
padding: 24px;
border-radius: 8px;
box-shadow: 0 1px 2px rgba(0,0,0,0.05);

/* 5. 容器最大宽度 */
max-width: 1440px;
margin: 0 auto;
```

---

## 📏 Spacing 间距速查

| Token | 值 | 场景 |
|-------|-----|------|
| `--spacing-1` | 4px | 最小间距 ⭐ |
| `--spacing-2` | 8px | 标准小间距 ⭐ |
| `--spacing-3` | 12px | 中等间距 |
| `--spacing-4` | 16px | 标准区块间距 ⭐ |
| `--spacing-6` | 24px | 大区块间距 ⭐ |
| `--spacing-8` | 32px | Section 间距 |
| `--spacing-12` | 48px | 页面级间距 |

**记忆法则：** 基础 4px，常用 8/16/24px

---

## 🔘 Button 按钮速查

| 尺寸 | 高度 | 内边距 | 字号 | 图标 | 最小宽度 |
|------|------|--------|------|------|---------|
| **Small** | 32px | 4px 12px | 13px | 16px | 64px |
| **Medium** | 40px | 8px 16px | 14px | 18px | 80px |
| **Large** | 48px | 12px 24px | 16px | 20px | 96px |

**CSS 变量：**
```css
height: var(--btn-height-md);        /* 40px */
padding: var(--btn-padding-md);      /* 8px 16px */
font-size: var(--btn-font-size-md);  /* 14px */
```

---

## 📝 Input 输入框速查

| 尺寸 | 高度 | 内边距 | 字号 | 边框 | 圆角 |
|------|------|--------|------|------|------|
| **Small** | 32px | 4px 8px | 13px | 1px | 8px |
| **Medium** | 40px | 8px 12px | 14px | 1px | 8px |
| **Large** | 48px | 12px 16px | 16px | 1px | 8px |

**状态：**
- Default: `border: 1px solid #E2E2E8`
- Focus: `border: 2px solid #1068E4` + 外发光
- Error: `border: 2px solid #F23C00`

---

## 🃏 Card 卡片速查

| 尺寸 | 内边距 | 圆角 | 阴影 |
|------|--------|------|------|
| **Small** | 16px | 8px | `0 1px 2px rgba(0,0,0,0.05)` |
| **Medium** | 24px | 8px | `0 1px 2px rgba(0,0,0,0.05)` |
| **Large** | 32px | 12px | `0 1px 2px rgba(0,0,0,0.05)` |

**标准卡片：**
```css
padding: 24px;
border-radius: 8px;
background: white;
box-shadow: 0 1px 2px rgba(0,0,0,0.05);
```

---

## 📱 Breakpoints 断点速查

| 断点 | 最小宽度 | 设备 | 容器宽度 | 列间距 |
|------|---------|------|---------|--------|
| **xs** | 0px | 手机竖屏 | 100% | 16px |
| **sm** | 640px | 手机横屏 | 100% | 16px |
| **md** | 768px | 平板 | 720px | 24px |
| **lg** | 1024px | 笔记本 | 960px | 24px |
| **xl** | 1280px | 桌面 | 1200px | 24px |
| **2xl** | 1536px | 大屏 | 1440px | 24px |

**媒体查询：**
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## 🎨 Border Radius 圆角速查

| Token | 值 | 应用 |
|-------|-----|------|
| `--radius-sm` | 4px | 标签、小徽章 |
| `--radius-base` | 8px | 按钮、输入框、卡片 ⭐ |
| `--radius-lg` | 12px | 大卡片、模态框 |
| `--radius-xl` | 16px | 特大容器 |
| `--radius-full` | 9999px | 圆形、胶囊按钮 |

---

## 📑 Tabs 标签页速查

| 尺寸 | 高度 | 内边距 | 字号 | 下划线 |
|------|------|--------|------|--------|
| **Small** | 32px | 8px 12px | 13px | 2px |
| **Medium** | 40px | 12px 16px | 14px | 2px |
| **Large** | 48px | 16px 24px | 16px | 3px |

**Tab 间距：** 24px（Line Tabs）/ 8px（Card Tabs）

---

## 🗂️ Table 表格速查

| 元素 | 高度 | 内边距 | 字号 |
|------|------|--------|------|
| **表头** | 48px | 12px 16px | 14px |
| **行（Medium）** | 48px | 12px 16px | 14px |
| **行（Small）** | 40px | 8px 12px | 13px |

**列宽建议：**
- 复选框：48px
- 序号：64px
- 操作：120px
- 状态：100px
- 时间：160px
- 短文本：150px
- 长文本：300px

---

## 🏷️ Tag 标签速查

| 尺寸 | 高度 | 内边距 | 字号 | 圆角 |
|------|------|--------|------|------|
| **Small** | 20px | 2px 8px | 12px | 10px |
| **Medium** | 24px | 4px 12px | 13px | 12px |
| **Large** | 32px | 8px 16px | 14px | 16px |

---

## 🖼️ Avatar 头像速查

| 尺寸 | 大小 | 字号 | 应用场景 |
|------|------|------|---------|
| **XS** | 24px | 12px | 标签、徽章 |
| **Small** | 32px | 14px | 紧凑列表 |
| **Medium** | 40px | 16px | 列表、评论 ⭐ |
| **Large** | 48px | 18px | 用户卡片 |
| **XL** | 64px | 24px | 个人主页 |

---

## 🎯 Icon 图标速查

| 场景 | 尺寸 |
|------|------|
| **按钮内图标** | 16-20px |
| **输入框图标** | 16-18px |
| **菜单图标** | 18-20px |
| **列表图标** | 16px |
| **独立图标** | 24px |
| **空状态图标** | 48-64px |

**与文字间距：** 8px

---

## 🔔 Modal 模态框速查

| 尺寸 | 宽度 | 应用场景 |
|------|------|---------|
| **Small** | 400px | 确认框、简单表单 |
| **Medium** | 600px | 标准表单、详情 |
| **Large** | 800px | 复杂表单、多步骤 |

**结构：**
- Header：56px 高，padding 16px 24px
- Content：padding 24px
- Footer：64px 高，padding 16px 24px
- 按钮间距：8px

---

## 🧭 Navigation 导航速查

| 元素 | 尺寸 | 说明 |
|------|------|------|
| **顶部导航高度** | 64px | 固定高度 |
| **侧边栏宽度** | 240px | 展开状态 |
| **侧边栏折叠宽度** | 64px | 折叠状态 |
| **菜单项高度** | 40px | 标准菜单项 |
| **子菜单项高度** | 36px | 次级菜单 |

---

## 📏 Z-Index 层级速查

| 层级 | Z-Index | 组件 |
|------|---------|------|
| **Base** | 0 | 普通内容 |
| **Dropdown** | 1000 | 下拉菜单 |
| **Sticky** | 1020 | 固定表头 |
| **Fixed** | 1030 | 悬浮按钮 |
| **Modal Backdrop** | 1040 | 模态框遮罩 |
| **Modal** | 1050 | 模态框 |
| **Popover** | 1060 | 气泡提示 |
| **Notification** | 1070 | 全局通知 |

---

## 💻 常用 CSS 片段

### 标准按钮
```css
.button {
  height: 40px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background: #1068E4;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.button:hover {
  background: #3A68E2;
}
```

### 标准输入框
```css
.input {
  height: 40px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #E2E2E8;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.input:focus {
  outline: none;
  border-color: #1068E4;
  border-width: 2px;
  padding: 7px 11px; /* 补偿边框增加 */
}
```

### 标准卡片
```css
.card {
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
```

### 响应式网格
```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile */
  gap: 16px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* Desktop */
  }
}
```

### 居中容器
```css
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 🎨 使用 CSS Variables

```css
/* 使用预定义变量 */
.my-button {
  height: var(--btn-height-md);
  padding: var(--btn-padding-md);
  border-radius: var(--btn-border-radius);
  font-size: var(--btn-font-size-md);
}

.my-card {
  padding: var(--card-padding-md);
  border-radius: var(--card-border-radius);
  box-shadow: var(--shadow-sm);
}

.my-input {
  height: var(--input-height-md);
  padding: var(--input-padding-md);
  border-radius: var(--input-border-radius);
}
```

---

## ✅ 快速检查清单

### 间距
- [ ] 元素间距使用 8/16/24px
- [ ] 内边距使用 4/8/12/16/24px
- [ ] 区块间距使用 24/32/48px

### 尺寸
- [ ] 按钮高度 32/40/48px
- [ ] 输入框高度 32/40/48px
- [ ] 圆角使用 4/8/12px

### 响应式
- [ ] 移动优先设计
- [ ] 至少 3 个断点（md/lg/xl）
- [ ] 触摸目标 ≥ 44px

### 性能
- [ ] 使用 CSS Variables
- [ ] 避免硬编码尺寸
- [ ] 组件化样式

---

## 🔗 相关文档

- **完整规范：** `web-component-system.md`
- **布局系统：** `web-layout-system.md`
- **字体系统：** `web-typography-system.md`
- **CSS 实现：** `web-component.css`

---

**生成日期：** 2026-03-27  
**维护人：** ux (AICO Team)  
**版本：** v1.0
