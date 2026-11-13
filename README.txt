VIBEKART — PORTFOLIO DEMONSTRATION REFINEMENT

This ZIP contains an overlay patch for the existing repository:
https://github.com/vibekart-in/vibekart-in.github.io

TARGET BRANCH
feature/vibekart-editorial-redesign

Apply this ZIP to the ROOT of the existing repository clone. It contains files
at the root (plus the existing image folder), not inside a nested project folder.
Keep the current feature branch; do not create a new branch or merge into main
until the preview has been checked.

FILES INCLUDED
- index.html (homepage copy and accessibility refinements)
- clothing.html, beauty.html, jewellery.html, books.html, deals.html
- home.css, category.css, base.css (small visual and accessibility polish)
- about.html, contact.html, privacy-policy.html, affiliate-disclaimer.html
- info.css (matching supporting-page styles)
- README.txt
- Existing project assets and scripts are preserved in this package.

WHAT CHANGED
- Kept the existing cream, charcoal and rust editorial identity, typography,
  homepage composition and category layouts.
- Added small navigation, card, focus and reduced-motion refinements.
- Rebuilt About, Contact, Privacy and Demo Information pages to match the site.
- Replaced non-working contact form fields with a direct sample email link.
- Removed the one external product destination and made all collection cards
  sample-content previews; no active store or affiliate relationship is implied.
- Clarified that product names, copy and some imagery are illustrative content.

APPLY (WINDOWS POWERSHELL)
1. Open PowerShell in your repository folder.
2. Confirm the feature branch and pull it:
   git switch feature/vibekart-editorial-redesign
   git pull origin feature/vibekart-editorial-redesign
3. Extract this ZIP into the repository ROOT, allowing files to be replaced.
4. Check the update:
   git status --short
   git diff --check
   git diff --stat
5. Preview locally:
   py -m http.server 8000
   Open http://localhost:8000 and inspect the homepage, category pages and footer links.
   Stop the server with Ctrl+C.
6. Stage and review:
   git add index.html clothing.html beauty.html jewellery.html books.html deals.html home.css category.css base.css about.html contact.html privacy-policy.html affiliate-disclaimer.html info.css README.txt
   git diff --cached --check
   git diff --cached --stat
7. Commit and push:
   git commit -m "Polish VibeKart portfolio demo pages"
   git push

The ZIP does not change the GitHub Pages publishing branch. Review the updated
feature branch and publish it only after local and live checks.

This project is a static HTML/CSS/JavaScript portfolio demonstration. It does
not include checkout, accounts, inventory, payment processing or a live product
catalogue. Google Fonts and Unsplash imagery require an internet connection.
