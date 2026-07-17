# Mud & Brush

A "coming soon" landing page for Mud & Brush — light, natural, unhurried.

Built with **Vite + React + TypeScript**. Static, no runtime dependencies beyond React.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # serve the built dist/ locally
```

## Design notes

- **Palette** — warm plaster neutrals biased toward foliage, sage (`#5E7355`) as the single accent. Light and dark themes both defined via CSS custom properties; the viewer's OS preference or an explicit `data-theme` on `<html>` selects one.
- **Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces), a soft variable serif, subset and inlined as a woff2 data URI in [`src/fonts.css`](src/fonts.css) so there is no font-CDN dependency. Body copy uses the system sans stack.
- **Motif** — a hand-drawn monstera leaf ([`src/Monstera.tsx`](src/Monstera.tsx)) stands in as the mark until a logo exists. It draws itself on load. Ambient "window light" drifts behind the card.
- No literal reference to pottery — the feel is a bright studio, not the craft.

## Deployment

Hosted on **GitHub Pages** at **`www.mudandbrush.com`** (see [`public/CNAME`](public/CNAME)).

Pushing to the **`production`** branch triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and
publishes to Pages. `main` is the working branch; promote a release with:

```bash
git switch production && git merge main && git push
```

### DNS

- **`www`** → `CNAME` record pointing at `plenipotentss.github.io`.
- **apex `mudandbrush.com`** → the four GitHub Pages `A` records
  (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
  and the matching `AAAA` records. With the custom domain set to the `www` host,
  GitHub Pages automatically **redirects the apex to `www.mudandbrush.com`** —
  no redirect code needed.

One-time setup: in the repo's **Settings → Pages**, Source is **GitHub Actions**
and the custom domain is `www.mudandbrush.com` with *Enforce HTTPS* on.

### Custom domain vs. project path

The build uses base `/` for the custom domain. If you ever serve from
`https://<user>.github.io/mudandbrush/` instead, build with
`VITE_BASE=/mudandbrush/ npm run build` and remove `public/CNAME`.
