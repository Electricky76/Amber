HERO (main landing photo)
-------------------------
Hero uses a **flow spacer** the same height as the fixed header so the portrait
does not slide under the nav. Thin **egg** line under that strip. Centered
type; bottom-weighted scrim.

Prefer a web-sized export (~2–4 MB) for speed.

GALLERY (albums)
----------------
Albums live in `data/gallery-albums.ts`. Each album = one square tile; add
`{ src, alt }` entries per event or vibe. Arrows only cycle within that tile.
Drop new JPEGs/WEBPs into `public/images/` and reference them by path.

SUBMARK (optional)
--------------------
If you add `public/logo-submark.png`, we can swap the hero logo or header mark.
