VIBEKART — EDITORIAL REDESIGN REFINEMENT PATCH

This is an overlay package for the existing repository:
https://github.com/vibekart-in/vibekart-in.github.io

TARGET BRANCH
feature/vibekart-editorial-redesign

Extract these files into the ROOT of your existing repository clone. The ZIP
is intentionally arranged with files at the root, not inside a nested folder.
This patch is intended to be applied on the feature branch above; do not create
another branch and do not merge into main until the preview has been reviewed.

FILES INCLUDED
- index.html (homepage refresh)
- clothing.html, beauty.html, jewellery.html, books.html, deals.html
- home.css, home.js (homepage styles and interactions)
- category.css, category.js (category-page styles and interactions)
- base.css (small shared reset and accessibility foundation)
- affiliate-disclaimer.html (fixes its Privacy Policy destination)

EXISTING FILES TO KEEP
- style.css and script.js (still used by the pages not yet redesigned)
- about.html, contact.html, privacy-policy.html
- image/ (including image/beauty/swiss-beauty-moisturiser.jpg)
- README.md and any repository / GitHub Pages configuration files

APPLY THE UPDATE (WINDOWS POWERSHELL)
1. Open PowerShell in your existing repository folder.
2. Switch to the feature branch and pull its latest commit:
   git switch feature/vibekart-editorial-redesign
   git pull origin feature/vibekart-editorial-redesign
3. Extract this ZIP into the repository ROOT, allowing the listed files to be replaced.
4. Review the changed files:
   git status --short
   git diff --check
   git diff --stat
5. Preview locally from the repository root:
   py -m http.server 8000
   Open http://localhost:8000 and inspect the homepage and all five category pages.
   Stop the local server with Ctrl+C.
6. Stage and review the intended update files:
   git add index.html clothing.html beauty.html jewellery.html books.html deals.html home.css home.js category.css category.js base.css affiliate-disclaimer.html README.txt
   git diff --cached --check
   git diff --cached --stat
7. Commit and push the refinement to the SAME feature branch:
   git commit -m "Polish VibeKart contrast and page foundations"
   git push
8. Review the feature branch / Pull Request before merging into main.

WHAT CHANGED IN THIS REFINEMENT
- Darkened muted text and rust accents to improve contrast on the warm light surfaces.
- Increased contrast for small footer and disclosure text on dark backgrounds.
- Added base.css with the shared reset, image sizing, font inheritance, and visible keyboard focus styling.
- Removed the legacy style.css dependency from the six refreshed pages. The old style.css file is intentionally kept for legacy pages.
- Fixed the Privacy Policy link in affiliate-disclaimer.html to point to privacy-policy.html.

CONTENT AND FUNCTIONALITY NOTES
- Category pages contain editorial product imagery; it may not depict the exact SKU.
- The existing Swiss Beauty retailer destination is retained. Other category products still need verified retailer links.
- The Deals page is a curated shortlist, not a live/verified deals feed.
- This is a static HTML/CSS/JavaScript showcase. It does not add checkout, inventory, accounts, payment processing, or a product database.
- Google Fonts and Unsplash imagery require an internet connection.

SAFETY
- Keep the feature branch separate from main until local testing and review are complete.
- Do not delete the existing image/ folder, style.css, script.js, or GitHub Pages configuration files.
