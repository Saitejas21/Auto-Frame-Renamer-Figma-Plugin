# 🔢 Auto Frame Renamer – A Figma Plugin

A minimal, internal-use Figma plugin to rename selected frames visually from left to right in ascending order.

Built out of necessity to make my own life easier
---

## ✨ Features

- 🖱️ Rename only selected frames
- ⬅️➡️ Renames from **left to right** based on canvas position (X-axis)
- 🔁 Overwrites names starting from `1`, `2`, `3`, ...
- 🧼 Skips untouched frames – keeps your Figma file clean

---

## 🧩 How to Install & Use

> No publishing or packaging required — just drop it into your Figma environment locally.

### 1. Clone this repo
```bash
git clone https://github.com/Saitejas21/Auto-Frame-Renamer-Figma-Plugin.git
```

### 2. Open Figma (Standalone App, Not Web)
Go to:
```
Menu → Plugins → Development → Import Plugin from Manifest...
```
Then select the `manifest.json` file inside the folder you just cloned.

### 3. Use It
In your Figma file:
```
Menu → Plugins → Development → Auto Frame Renamer
```
Click the button to rename your selected frames instantly!

---

## 📁 File Structure

| File             | Purpose                            |
|------------------|-------------------------------------|
| `code.ts`        | Main plugin logic                  |
| `ui.html`        | Minimal UI with a button           |
| `manifest.json`  | Figma plugin manifest config       |
| `README.md`      | You're reading it 💁‍♂️             |

---

## 💬 Why This Plugin?

As someone who builds flows, presentations, and screen maps regularly, I needed a dead-simple way to rename slides without relying on visual sorting or checking for name conflicts.

This plugin was built for myself — but sharing it in case it helps anyone else simplify their process.

---

## 👨‍💻 Built With

- TypeScript
- Figma Plugin API
- Pure HTML (no frameworks)
- Productivity cravings ☕✌️

---

## 🧠 Credits

Built with ❤️ by [A R Sai Tejas](https://github.com/Saitejas21)  
> Designer. Developer. Builder. Dreamer.

---

> “Not every plugin needs to be published. Some just need to make your day better.”  
> — *You, after using this.*
