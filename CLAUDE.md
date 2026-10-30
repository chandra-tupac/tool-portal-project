# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks or libraries (no React, Vue, Tailwind, etc.).
- No build step: files are opened or served exactly as written.

## Project Structure

The project is nearly empty for now:

- `README.md` – short project readme
- `CLAUDE.md` – this file

All files currently live at the top level. Update this section as folders
(for example for pages, styles, and scripts) are added.

## Key Requirements

1. **Responsive:** every page must be responsive and work on desktop,
   tablet, and phone.
2. **Light/dark theme:** users can toggle between a light and a dark theme.
   The default is the light theme.
3. **Readable text:** text must stay easy to read, with good contrast
   between text and background, in both the light and the dark theme.

## Feature Plan

A web portal where students try out small web tools about human
factors in aviation.

### Portal structure
- **Homepage** (`index.html`): a short intro and one card per tool.
- **Opening a tool:** click its card to go to the tool's own page
  (`tools/<tool-name>/index.html`).
- **Getting back:** every page has the same header with the portal
  name, a "Home" link and the light/dark theme toggle.
- **Adding a tool later:** create a new folder under `tools/`, then
  add one card for it on the homepage.
- Shared styles live in `css/`, shared scripts (like the theme
  toggle) in `js/`.

### Phases
1. **Portal + first tool.** Homepage, shared header and theme toggle,
   and the Dirty Dozen tool: a study page explaining the 12 common
   causes of human error, then a 12-question quiz with instant
   feedback and a score at the end.
2. **More tools.** Add further human-factors tools one at a time
   (ideas: an IMSAFE fitness self-check, a fatigue estimator).
3. **Portal polish.** Once there are several tools: group or filter
   them on the homepage.

Phases 2 and 3 are ideas; confirm with the user before starting them.

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- When something is unclear, ask rather than guess.
