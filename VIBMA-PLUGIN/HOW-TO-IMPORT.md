# How to Import Vibma Plugin into Figma

## 📁 Plugin Files Location

**Option 1: Standalone Folder**
- Location: `/workspace/VIBMA-PLUGIN/`
- Contains:
  - ✅ `manifest.json` - Plugin manifest (this is the file you need to select)
  - ✅ `code.js` - Plugin code
  - ✅ `ui.html` - Plugin UI

**Option 2: Archive**
- Location: `/workspace/vibma-figma-plugin.tar.gz`
- Extract before importing

---

## 📥 Import Steps

### 1. Download Plugin Files

**Option A**: Download the entire folder
- Access `/workspace/VIBMA-PLUGIN/` from your file manager
- Copy the entire folder to your local desktop

**Option B**: Download the archive
- Download `/workspace/vibma-figma-plugin.tar.gz`
- Extract to get the `VIBMA-PLUGIN` folder

### 2. Import in Figma

1. Open **Figma Desktop App** or visit https://figma.com
2. Click the **menu icon** in the top-left (or press `Cmd/Ctrl + /`)
3. Select **Plugins → Development → Import plugin from manifest...**
4. Browse and select:
   ```
   your-desktop/VIBMA-PLUGIN/manifest.json
   ```
5. Click **Open**

### 3. Run the Plugin

1. In Figma, press `Cmd/Ctrl + /` to open the command palette
2. Search for "Vibma"
3. Select the "Vibma" plugin to run
4. A connection panel will appear

### 4. Connect to WebSocket Tunnel

In the plugin panel:
- **Port**: Enter `3055`
- **Channel**: Enter `vibma`
- Click the **Connect** button
- You should see "✅ Connected" status

---

## ⚠️ Important Notes

### Keep Files Together
Ensure `manifest.json`, `code.js`, and `ui.html` are in the **same folder** when importing.

### Tunnel Must Be Running
The plugin needs to connect to the WebSocket tunnel:
- Tunnel address: `http://127.0.0.1:3055`
- If not running, execute:
  ```bash
  npx @ufira/vibma-tunnel
  ```

### Desktop App Required
- **Desktop App**: Can import development plugins ✅
- **Web Version**: Can only install published plugins ❌

You **must use the Figma Desktop App** to import local development plugins.

---

## 🔍 File Preview

### manifest.json (Core File)
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

This file defines the plugin name, entry points, and network permissions.

---

## ❓ Troubleshooting

### Can't Find Import Option?
Make sure you're using the **Figma Desktop App**, not the web browser version.

### Can't Find Plugin After Import?
1. Press `Cmd/Ctrl + /` to open the command palette
2. Search for "Vibma"
3. Or go to **Plugins → Development → Vibma**

### Plugin Shows "Disconnected"?
1. Verify tunnel is running: `netstat -tlnp | grep 3055`
2. Restart tunnel: `npx @ufira/vibma-tunnel`
3. Close and reopen the Figma plugin

---

## 📞 Need Help?

- Docs: https://ufira-ai.github.io/Vibma/
- GitHub: https://github.com/ufira-ai/Vibma
- Discord: https://discord.gg/4XTedZdwV6
