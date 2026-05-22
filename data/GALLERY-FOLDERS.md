# Gallery photos — easy workflow (Timothy)

You do **not** need to copy files into folders or edit code yourself.

## What to do (usual)

1. Drop the photos into the Cursor chat (attach all 8, or however many you have).
2. Say something plain, for example:

   > Incoming — **The Mitchells**. Photographer: **Kelly Costello Photography**. These are the 8 gallery photos.

3. The agent will:
   - Put the files in the right place on the site (`public/images/weddings/`)
   - Name them in a simple, web-safe way
   - Update the gallery carousel (couple name + photographer credit)
   - Commit and push so Vercel updates

## High-res from your organized folders (best quality)

Keep sorting photos on your Desktop or in:

`Amber Morrill\Assorted Wedding Photos\`  
→ `The Mitchells_Kelly Costello Photography`, `The Ralstons_…`, `The Buenos`, `The Munzies`

**The live site reads only:**

`Amber Morrill\website\public\images\weddings\`

File names must match:

| Album | Files |
|--------|--------|
| Mitchells | `nicole-matt-01.jpg` … `09.jpg` |
| Ralstons | `ralstons-01.jpg` … `14.jpg` |
| Buenos | `buenos-01.jpg` … `13.jpg` |
| Munizes | `munizes-01.jpg` … `08.jpg` |

After you add/replace files in **Assorted Wedding Photos**, tell the agent:

> High-res gallery folders are updated — run the import script and push.

The agent can run `website/scripts/import-gallery-from-assorted.ps1` to copy, resize large JPEGs for web, and deploy.

**Note:** If `image001`–`image011` in a folder are only ~30 KB each, they are the same low-res exports as chat — you will need full photographer JPEGs in that folder for a real upgrade.

## One line per wedding

When you have the next set ready, same pattern:

> Incoming — **[Couple names]**. Photographer: **[Name]**. Gallery photos attached.

That’s it.
