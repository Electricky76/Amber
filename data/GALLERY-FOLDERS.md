# Gallery folders (for Timothy)

When you organize **Assorted Wedding Photos** (or copy into the site), use **one folder per wedding**:

```
Assorted Wedding Photos/
  The Mitchells — Kelly Costello Photography/
    photo-01.jpg
    photo-02.jpg
    … (8 images)
  Another Couple — Photographer Name/
    …
```

## Wire into the site

1. Copy each folder’s images into `website/public/images/weddings/`  
   (use simple filenames, e.g. `mitchells-01.jpg` … `mitchells-08.jpg`).

2. Edit `website/data/gallery-albums.ts`:
   - `title`: couple name (e.g. **The Mitchells**)
   - `photographer`: credit line (e.g. **Kelly Costello Photography**)
   - `images`: list all 8 `{ src, alt }` paths

3. Push / deploy — each album is one carousel tile on the homepage.

The site shows the couple name in caps under the tile and the photographer in smaller normal case below it.
