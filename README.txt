VIBEKART — EDITORIAL REDESIGN PATCH

This is an overlay package for the existing repository:
https://github.com/vibekart-in/vibekart-in.github.io

IMPORTANT: Extract these files into the ROOT of your existing repository clone.
The ZIP is intentionally arranged with files at the root (not inside another folder).

FILES INCLUDED
- index.html (homepage refresh)
- home.css, home.js (homepage design and interactions)
- clothing.html, beauty.html, jewellery.html, books.html, deals.html
- category.css, category.js (shared category-page design and interactions)

EXISTING FILES TO KEEP
- style.css and script.js (the refreshed pages still load these base files)
- about.html, contact.html, privacy-policy.html, affiliate-disclaimer.html
- image/ (including image/beauty/swiss-beauty-moisturiser.jpg)
- Any repository / GitHub Pages configuration files

RECOMMENDED GIT WORKFLOW (WINDOWS POWERSHELL)
1. Clone the repository (skip this if you already have a clean local clone):
   git clone https://github.com/vibekart-in/vibekart-in.github.io.git
   cd vibekart-in.github.io

2. Start from the latest main branch and create a separate feature branch:
   git switch main
   git pull origin main
   git switch -c feature/vibekart-editorial-redesign

3. Extract this ZIP into the repository ROOT, allowing the listed files to be replaced.

4. Review the changed files:
   git status --short
   git diff -- index.html clothing.html beauty.html jewellery.html books.html deals.html

5. Preview locally from the repository root:
   py -m http.server 8000
   Then open http://localhost:8000
   Stop the local server with Ctrl+C.

6. Commit and push only the intended redesign files:
   git add index.html home.css home.js clothing.html beauty.html jewellery.html books.html deals.html category.css category.js
   git commit -m "Redesign VibeKart editorial storefront"
   git push -u origin feature/vibekart-editorial-redesign

7. On GitHub, open a Pull Request from feature/vibekart-editorial-redesign into main.
   Review the preview and changes, then merge only when satisfied.

DESIGN / FUNCTIONALITY NOTES
- All six refreshed pages use a shared editorial visual system.
- Category pages include responsive navigation, collection search, product-note dialogs and an accessible empty state.
- Sample prices, discount claims, star ratings and unsupported popularity claims have been removed from category pages.
- The existing Swiss Beauty retailer destination is retained. Other category product cards indicate that a verified retailer link is still pending.
- Product photography is editorial/illustrative and may not show the exact SKU. Replace with verified brand/retailer imagery before presenting products as exact purchasable items.
- The Deals page is a curated shortlist, not a live/verified deals feed.
- This is a static HTML/CSS/JavaScript site. It does not add checkout, inventory, accounts, payment processing or a product database.
- Google Fonts and Unsplash imagery require an internet connection.

SAFETY
Do not overwrite or delete the existing image/ directory or the shared base files style.css and script.js.
Keep the feature branch separate from main until local testing and review are complete.
