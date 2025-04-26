# DeepWiki Redirect Extension

This is a Chrome extension that provides a quick button to redirect users to the corresponding DeepWiki URL when visiting GitHub repository pages.

## Main Features

- Adds a "View on DeepWiki" button to GitHub repository pages
- Clicking the button redirects to the corresponding DeepWiki page (in the format: https://deepwiki.com/org/repo)
- Supports opening DeepWiki pages in a new tab

## Tech Stack

- JavaScript
- HTML/CSS
- Chrome Extension API (Manifest V3)

## Third-party Dependencies

- No additional third-party packages required

## Installation Instructions

### 1. Prepare Icon Files

The project includes an SVG source file for the icon, which needs to be converted to PNG icons of different sizes:

You can use online conversion tools or the following commands to generate icons (requires Inkscape or other SVG processing tools):

```bash
# Using Inkscape to generate icons (if installed)
inkscape -w 16 -h 16 icons/icon.svg -o icons/icon16.png
inkscape -w 48 -h 48 icons/icon.svg -o icons/icon48.png
inkscape -w 128 -h 128 icons/icon.svg -o icons/icon128.png

# Or use other online tools to convert SVG to PNG
```

### 2. Install the Extension

1. Open Chrome browser and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top-right corner
3. Click "Load unpacked extension"
4. Select this project folder

### 3. Usage

After installation, visit any GitHub repository page, and you will see the added "View on DeepWiki" button. Click the button to navigate to the corresponding DeepWiki page.

## Development Guide

- Modify `content.js` to change button behavior or position
- Modify `styles.css` to change button styling
- Modify `manifest.json` to change extension configuration

## Changelog

- v1.0: Initial version, implementing the feature to add a "View on DeepWiki" button on GitHub repository pages
