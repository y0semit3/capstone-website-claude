# Quick Start Guide

## Your Website is 90% Complete! 🎉

Your thesis portfolio website is fully built and populated with your actual research content. Here's what you need to do to finish it:

---

## ✅ What's Already Done

- ✅ Full website structure (HTML/CSS/JS)
- ✅ All text content from your thesis
- ✅ Chapter 1-4 audio files (automatically copied)
- ✅ Timeline with your research milestones
- ✅ Dark academia aesthetic styling
- ✅ Responsive mobile design
- ✅ Bibliography/references section

---

## ⚠️ What You Need to Add (3 items)

### 1. Images (5-6 files)
Add these images to the `img/` folder:

**chapter1.jpg** — [Luca Pacioli portrait](https://www.lindahall.org/about/news/scientist-of-the-day/luca-pacioli/)
- The famous 1495 portrait with ledger and instruments

**chapter2.jpg** — Palazzo San Giorgio facade
- Search Google Images: "Palazzo San Giorgio Genoa exterior"

**chapter3.jpg** — Medieval money changers or Aquinas/Calvin
- Search: "Quentin Matsys money changer" or "medieval banking painting"

**chapter4.jpg** — Modern trading desk
- Use YOUR desk photo or download from [StockCake](https://stockcake.com/i/trading-desk-setup_675780_1044658)

**chapter5.jpg** — [Tableau Économique diagram](https://en.wikipedia.org/wiki/Tableau_%C3%A9conomique)
- Quesnay's original 1758 zigzag diagram

**video-poster.jpg** (optional) — Video thumbnail

### 2. Audio (1 file)
**chapter5.mp3** — Record your conclusion about Quesnay and physiocracy
- Topic: How surplus transitioned from "natural law" to political power
- Length: 3-5 minutes (match your other narrations)

### 3. Video (1 file)
**presentation.mp4** — Your thesis defense recording
- Add to `video/` folder
- Any length/format works

---

## 🚀 How to Preview

### Option 1: Direct Open (simplest)
Double-click `index.html` — opens directly in your browser

⚠️ **Note:** Audio/video may not play due to browser security. If so, use Option 2.

### Option 2: Local Server (recommended)
```bash
cd "/Users/sebastianalexander/Library/Mobile Documents/com~apple~CloudDocs/personal./captstone-website-claude"
python3 -m http.server 8000
```
Then open: **http://localhost:8000**

---

## 📸 Quick Image Download Guide

1. **Right-click on search results** → Save Image As...
2. **Rename** to match required name (e.g., `chapter1.jpg`)
3. **Move** to the `img/` folder
4. **Refresh** your browser to see changes

---

## 🎨 Customization (Optional)

### Change Accent Color
Edit `css/style.css` line 18:
```css
--accent: #8b7355;  /* Current: muted gold */
--accent: #6b8299;  /* Try: steel blue */
```

### Edit Timeline Events
Edit `js/main.js` starting at line 9:
```javascript
const TIMELINE_EVENTS = [ ... ]
```

### Change Text
Edit `index.html` — all content is there

---

## 🎯 Priority Order

If you're short on time, do this in order:

1. **Add images** — Makes the biggest visual impact
2. **Record chapter 5 audio** — Completes the narrative arc
3. **Add video** — Can be done last (or omitted if not ready)

---

## 📁 File Locations Quick Reference

```
project/
├── index.html           ← Main website (all text here)
├── README.md            ← Full documentation
├── CONTENT-SUMMARY.md   ← What content goes where
├── css/style.css        ← All styling
├── js/main.js           ← Timeline + interactions
├── audio/
│   ├── chapter1.mp3     ✅ Done
│   ├── chapter2.mp3     ✅ Done
│   ├── chapter3.mp3     ✅ Done
│   ├── chapter4.mp3     ✅ Done
│   └── chapter5.mp3     ⚠️ RECORD THIS
├── img/
│   ├── chapter1.jpg     ⚠️ ADD THIS (Pacioli)
│   ├── chapter2.jpg     ⚠️ ADD THIS (Palazzo)
│   ├── chapter3.jpg     ⚠️ ADD THIS (Usury/money changers)
│   ├── chapter4.jpg     ⚠️ ADD THIS (Your desk)
│   ├── chapter5.jpg     ⚠️ ADD THIS (Tableau)
│   └── video-poster.jpg ⚠️ OPTIONAL
└── video/
    └── presentation.mp4 ⚠️ ADD THIS
```

---

## 🎓 Content Overview

Your thesis examines how economic surplus evolved from:
- **Quesnay** (1758): Natural agricultural law
- **Smith** (1776): Product of human labor
- **Marx** (1867): Structurally unequal power relation
- **Modern era**: Completely abstracted future-based financial instrument

The website tells this story through:
1. **Pacioli's ledger** (1494) — Recording surplus
2. **Genoa's bank** (1490) — Controlling surplus without territory
3. **Usury debate** (13th-16th c.) — Moralizing surplus
4. **Your desk** (2026) — Abstracting surplus
5. **Tableau** (1758) — Naturalizing surplus (then exposing the politics)

---

## ❓ Questions?

- Read **README.md** for full documentation
- Read **CONTENT-SUMMARY.md** for content details
- Edit files in any text editor
- Images can be .jpg, .png, or .webp

---

## 🏁 Final Checklist

- [ ] Download/add 5-6 images to `img/` folder
- [ ] Record and add chapter5.mp3
- [ ] Add presentation.mp4
- [ ] Test website by opening index.html
- [ ] Share URL or host online

**That's it! You're done.** 🎉
