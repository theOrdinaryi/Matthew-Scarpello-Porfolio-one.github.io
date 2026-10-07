# Matthew Scarpello's portfolio

A complete static website for GitHub Pages. No installation, terminal, API key, paid service, or build command is needed to publish these files.

## Start here

1. Open `GITHUB_SETUP.html` for the step-by-step setup guide.
2. Open `index.html` in a browser to preview the website locally.
3. Upload the extracted files to a GitHub repository and enable Pages as described in the guide.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage and interactive project viewer |
| `project-noaa.html` | NOAA project content page |
| `project-two.html` | Second project content page |
| `project-three.html` | Third project content page |
| `portfolio-data.js` | All editable profile text, project descriptions, highlights, image paths, and resource links |
| `styles.css` | Colors, spacing, typography, responsive layout, and dark appearance |
| `script.js` | Project switching, highlight carousel, theme preference, and rendering |
| `profile-placeholder.svg` | Replaceable profile image |
| `project-*.svg` | Three replaceable project cover images |
| `highlight-*.svg` | Three replaceable highlight figure assets |
| `favicon.svg` | Browser-tab icon |
| `.nojekyll` | Tells GitHub Pages to serve the static files directly |
| `GITHUB_SETUP.html` | Full setup and editing guide, readable in a browser |
| `README.md` | This file |

Keep every file at the same directory level. All paths are relative, so the site works at either `USERNAME.github.io` or `USERNAME.github.io/REPOSITORY/`.

## Included features

- Three projects with a mouse-wheel selector, previous/next controls, keyboard navigation, and direct selection buttons.
- Project title, role, completion date, overview, tools, highlights, and full description.
- A three-highlight carousel for each project.
- Separate project detail pages with methods, findings, contributions, references, and optional report/code links.
- Interactive four-stage process panel: Ask, Explore, Model, Explain.
- Responsive phone and desktop layouts.
- Light/dark appearance with a preference saved on the visitor's device.
- Explicit placeholders for missing content and images. No invented scores or fake working report links.

## Content status

The NOAA project uses the research question provided in the conversation. Methods, results, metrics, references, completion dates, and links must be filled from the final project materials. The other two projects contain clearly labeled sample content for forecasting and classification; they are not claims of completed work. The biography is sample copy, and the email address has intentionally been left blank. The initial skills come from the approved wireframe.

The supplied wireframe's unclear upper-right graphic has been interpreted as an interactive analytical process panel. No skill proficiency percentages are implied. Dates in the footer are manual last-updated dates, not a changing current-date display.

## Editing

Edit `portfolio-data.js` for content. Use straight quotation marks, preserve commas and brackets, and use double quotes around text that contains an apostrophe. Do not rename project IDs or HTML filenames unless you also update the matching HTML `data-project` value, links, and image paths.

You can replace placeholder images with PNG, JPG, or SVG files. Upload the images beside `index.html`, then set the exact filename in the appropriate `photo` or `image` field. Give every image an accurate `photoAlt` or `alt` description. Suggested sizes: profile 432 × 496, covers 1280 × 960, highlight images 1280 × 840. These are suggestions, not requirements.

The site loads no external fonts, trackers, libraries, or data. JavaScript must be enabled to display the interactive content. All website code and placeholder SVG assets are included.

## Assignment handoff

This package provides a homepage and three content pages. Your original drawing can be submitted separately as the wireframe. Follow your course submission form for the final upload format; use the live homepage URL and at least one project-page URL where requested. Replace placeholders according to your rubric before presenting this as a completed professional portfolio.
