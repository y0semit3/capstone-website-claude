# Thesis Portfolio Website

**"Surplus as Nature, Surplus as Politics"**
A single-page portfolio website for Sebastian Alexander's HLS Capstone thesis at The American University of Paris.

Dark academia aesthetic with modern, tech-forward design inspired by Palantir and data companies.

## Folder Structure

```
project/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
├── audio/
│   ├── chapter1.mp3
│   ├── chapter2.mp3
│   ├── chapter3.mp3
│   ├── chapter4.mp3
│   └── chapter5.mp3
├── img/
│   ├── chapter1.jpg
│   ├── chapter2.jpg
│   ├── chapter3.jpg
│   ├── chapter4.jpg
│   ├── chapter5.jpg
│   └── video-poster.jpg    (optional poster frame for video)
└── video/
    └── presentation.mp4
```

## How to Preview Locally

Open `index.html` directly in a browser. Everything works without a server.

**Note:** Audio and video playback may be restricted by some browsers when opening via `file://`. If media doesn't play, run a local server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Current Content Status

✅ **Completed:**
- Hero section with thesis title, subtitle, and abstract
- All 5 chapter narratives with accurate content
- Timeline with 8 research milestones
- Footer with university information
- Audio files mapped (chapters 1-4)

⚠️ **Needs Attention:**
- Chapter 5 audio (`audio/chapter5.mp3`) - You'll need to record this
- All chapter images - See instructions below

## How to Add Your Content

### Text Content

The website is **fully populated** with your thesis content. If you need to make edits, all text is in `index.html`:

- **Hero section**: Title, subtitle, abstract
- **Chapter I**: Pacioli & double-entry bookkeeping (Venice, 1494)
- **Chapter II**: Palazzo San Giorgio & Genoa (state within a state)
- **Chapter III**: Aquinas vs Calvin usury debate
- **Chapter IV**: Modern financial abstraction (your desk in Paris)
- **Chapter V**: Physiocracy & surplus as political power

To edit any text, simply open `index.html` in a text editor and modify the content.

### Images

Drop images into the `img/` folder with these exact names. Here are suggested images for each chapter:

**Chapter 1** (`chapter1.jpg`) - **Luca Pacioli Portrait**
- The famous portrait by Jacopo de' Barbari (c. 1495) showing Pacioli with his mathematical instruments and ledger
- Available from: [Linda Hall Library](https://www.lindahall.org/about/news/scientist-of-the-day/luca-pacioli/) or [Wikipedia Commons](https://en.wikipedia.org/wiki/Luca_Pacioli)

**Chapter 2** (`chapter2.jpg`) - **Palazzo San Giorgio Facade**
- The frescoed Renaissance facade facing the Genoa waterfront
- Search: "Palazzo San Giorgio Genoa exterior" or use [official palace photos](https://www.palazzosangiorgio.org/)

**Chapter 3** (`chapter3.jpg`) - **Medieval Money Changers or Usury Scene**
- Historical painting depicting medieval banking/money changing
- Alternative: Portraits of Thomas Aquinas and/or John Calvin side by side
- Search: "medieval money changers painting" or "Quentin Matsys money changer"

**Chapter 4** (`chapter4.jpg`) - **Modern Financial Workspace**
- Multiple monitors showing financial data, trading screens, analytics dashboards
- Your actual desk photo would be ideal! Otherwise search: "financial analyst multiple monitors"
- Free stock images available at [StockCake](https://stockcake.com/i/trading-desk-setup_675780_1044658)

**Chapter 5** (`chapter5.jpg`) - **Tableau Économique Diagram**
- Quesnay's original zigzag diagram from 1758
- Available from: [Wikipedia Tableau économique](https://en.wikipedia.org/wiki/Tableau_%C3%A9conomique) or economics history archives

**Video Poster** (`video-poster.jpg`) - Optional
- Thumbnail for the presentation video player

**Image Tips:**
- Any format works (jpg, png, webp) — just update the extension in `index.html`
- Images display at 4:3 aspect ratio with `object-fit: cover`
- Landscape-oriented images (1200x900px or similar) work best
- If using your own photos, keep them under 500KB for faster loading

### Audio

Audio files have been **automatically mapped** from your thesis recordings:

✅ **Already Copied:**
- `chapter1.mp3` ← Capstone Narrative Person.mp3 (Pacioli/ledger narrative)
- `chapter2.mp3` ← Capstone Narrative Place.mp3 (Palazzo San Giorgio narrative)
- `chapter3.mp3` ← Debate Narrative.mp3 (Aquinas vs Calvin)
- `chapter4.mp3` ← Capstone Narrative Artifact.mp3 (Your desk in Paris)

⚠️ **Still Needed:**
- `chapter5.mp3` — You need to record the conclusion about Quesnay's Tableau and physiocracy

**To add the final audio:**
1. Record your Chapter V narration (Physiocracy & the naturalization of power)
2. Export as MP3
3. Copy to `audio/chapter5.mp3`

Other formats (ogg, wav) work too — add additional `<source>` tags inside the `<audio>` element in `index.html` if needed.

### Video

Drop your presentation video into the `video/` folder:

- `presentation.mp4`

The video player supports MP4 (H.264). If you have other formats, add additional `<source>` tags inside the `<video>` element in `index.html`.

## How to Edit Timeline Events

The timeline is **fully populated** with your actual research milestones from September 2024 through February 2026, including:
- Topic selection and primary source research
- Comparative framework development
- Proposal submission
- Narrative and audio production
- Final synthesis and presentation

To edit the timeline, open `js/main.js` and find the `TIMELINE_EVENTS` array near the top of the file. Each event has three fields:

```javascript
{
  date: 'Feb 2026',           // Short date label
  title: 'Final Presentation', // Brief title for the node
  detail: 'Completed thesis examining how Quesnay\'s naturalized surplus...'
}
```

To edit:
- **Change an event:** Modify the `date`, `title`, or `detail` values
- **Add an event:** Add a new object to the array
- **Remove an event:** Delete the object from the array
- **Reorder:** Move objects within the array — they render left to right in array order

## How to Edit References

References are in `index.html` inside the `<ol class="reference-list">` element. Each `<li>` is one reference. Use `<em>` tags for italicized titles. The numbering is automatic (CSS counters).

## Customization

### Colors

All colors are CSS custom properties at the top of `css/style.css`:

```css
--bg:          #0a0a0a;     /* Page background */
--accent:      #8b7355;     /* Gold accent color */
--text:        #e8e8e8;     /* Primary text */
--text-muted:  #888888;     /* Secondary text */
```

### Accent Color

To switch from gold to steel blue, change `--accent` to something like `#6b8299` and update `--accent-glow` accordingly.

### Fonts

The site uses Inter from Google Fonts. To change it, update the `<link>` tag in `index.html` and the `--font` variable in `css/style.css`.

## Quick Start Checklist

1. ✅ Text content — **Done!** All chapters populated
2. ✅ Audio files — **4/5 done!** Record chapter5.mp3
3. ⚠️ Images — **Add 5-6 images** to `img/` folder (see suggestions above)
4. ⚠️ Video — Add `presentation.mp4` to `video/` folder
5. ✅ Timeline — **Done!** Accurate research milestones
6. ✅ References — **Done!** Bibliography populated with Quesnay, Smith, Bloomfield, Young, etc.

## Image Sources & Attribution

Recommended sources for historical images:
- [Wikimedia Commons](https://commons.wikimedia.org/) - Public domain historical images
- [Linda Hall Library](https://www.lindahall.org/) - Science & technology history
- [StockCake](https://stockcake.com/) - Free stock photos (modern workspace)
- [Unsplash](https://unsplash.com/) - Free high-quality photos

For your thesis, consider fair use for academic purposes when using historical paintings and diagrams.

## Browser Support

Tested for modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid, custom properties, IntersectionObserver, and backdrop-filter.

---

## Research Context

This portfolio website presents Sebastian Alexander's capstone thesis examining the political ontology of economic surplus through the lens of 18th-century physiocratic thought, tracing how François Quesnay's naturalization of surplus as agrarian law became destabilized and politicized through Adam Smith and Karl Marx, revealing that what began as claims about nature were always claims about power.
