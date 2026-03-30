# 如何将 Vibma 插件导入到 Figma

## 📁 插件文件位置

**方式 1: 使用独立文件夹**
- 位置：`/workspace/VIBMA-PLUGIN/`
- 包含文件：
  - ✅ `manifest.json` - 插件清单（这是你需要选择的文件）
  - ✅ `code.js` - 插件代码
  - ✅ `ui.html` - 插件界面

**方式 2: 使用压缩包**
- 位置：`/workspace/vibma-figma-plugin.tar.gz`
- 需要先解压再导入

---

## 📥 导入步骤

### 1. 下载插件文件

**选项 A**: 下载整个文件夹
- 从你的文件管理器访问 `/workspace/VIBMA-PLUGIN/`
- 将整个文件夹复制到你的本地桌面

**选项 B**: 下载压缩包
- 下载 `/workspace/vibma-figma-plugin.tar.gz`
- 解压后得到 `VIBMA-PLUGIN` 文件夹

### 2. 在 Figma 中导入

1. 打开 **Figma 桌面应用** 或访问 https://figma.com
2. 点击左上角 **菜单图标** (或 按 `Cmd/Ctrl + /`)
3. 选择 **Plugins → Development → Import plugin from manifest...**
4. 浏览并选择：
   ```
   你的桌面/VIBMA-PLUGIN/manifest.json
   ```
5. 点击 **打开**

### 3. 运行插件

1. 在 Figma 中，按 `Cmd/Ctrl + /` 打开命令面板
2. 搜索 "Vibma"
3. 选择 "Vibma" 插件运行
4. 会弹出连接面板

### 4. 连接到 WebSocket 隧道

在插件面板中：
- **Port**: 输入 `3055`
- **Channel**: 输入 `vibma`
- 点击 **Connect** 按钮
- 看到 "✅ Connected" 状态即成功

---

## ⚠️ 重要提示

### 必须保持文件完整
确保导入时 `manifest.json`、`code.js` 和 `ui.html` 三个文件在**同一文件夹**中。

### 隧道必须运行
插件需要连接到正在运行的 WebSocket 隧道：
- 隧道地址：`http://127.0.0.1:3055`
- 如果隧道未运行，执行：
  ```bash
  npx @ufira/vibma-tunnel
  ```

### Figma 桌面应用 vs Web
- **桌面应用**：可以导入开发插件 ✅
- **Web 版**：只能安装已发布的插件 ❌

必须使用 **Figma 桌面应用** 才能导入本地开发插件。

---

## 🔍 文件内容预览

### manifest.json (核心文件)
```json
{
  "name": "Vibma",
  "id": "...",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html",
  "networkAccess": {
    "allowedDomains": ["localhost:3055", "localhost:3056", ...]
  }
}
```

这个文件定义了插件的名称、入口点和网络权限。

---

## ❓ 故障排除

### 找不到导入选项？
确保你使用的是 **Figma 桌面应用**，不是浏览器 Web 版。

### 导入后找不到插件？
1. 按 `Cmd/Ctrl + /` 打开命令面板
2. 搜索 "Vibma"
3. 或者进入 **Plugins → Development → Vibma**

### 插件显示 "Disconnected"？
1. 确认隧道正在运行：`netstat -tlnp | grep 3055`
2. 重启隧道：`npx @ufira/vibma-tunnel`
3. 关闭并重新打开 Figma 插件

---

## 📞 需要帮助？

- 文档：https://ufira-ai.github.io/Vibma/
- GitHub：https://github.com/ufira-ai/Vibma
- Discord：https://discord.gg/4XTedZdwV6
