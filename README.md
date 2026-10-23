# Adson Mitbier — Vue 3 + Vite

Responsive first version of the Adson Mitbier beer archive, prepared from the Instagram `posts.json` export.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Important: restore the photos

The JSON includes relative image paths such as `media/posts/18112639907141479.jpg`, but the JSON itself does not contain the image bytes. Copy the **`media` folder from your Instagram export** into this project's `public/` directory, so the final paths look like `public/media/posts/18112639907141479.jpg`.

If your Instagram download is a ZIP, extract it and copy its `media` folder. Keep the relative folder structure intact. The site gracefully displays a placeholder when an image is missing.

## Data

`src/data/beers.json` was generated from the supplied export. Country, rating, brewery handle, date and image paths are inferred from post captions and media records. Review the records with country `Unidentified` and any ambiguous country spellings before launch. Beer style is intentionally not guessed when the export doesn't contain it.

## Deploy to adsonmitbier.com

Build with `npm run build`; upload the contents of `dist/` to the web root configured for `adsonmitbier.com`. Configure HTTPS and SPA fallback only if you later add client-side routes. The generated `dist/` contains static assets and can be hosted by Apache, Nginx, cPanel, or a static host.
