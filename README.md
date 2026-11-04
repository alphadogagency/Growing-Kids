# Growing Kids

Astro website rebuild for Growing Kids Learning Centers. This is the active project at /Users/bryanarambula/Projects/growing-kids.

## Start here

Read [project instructions](AGENTS.md), [business context](PRODUCT.md) and [design system](DESIGN.md). Additional continuation notes are available locally in outputs/CONTINUE-HERE.md.

## Development

Requires Node >=22.23.4. Run `npm ci` to install dependencies, `npm run dev -- --host 127.0.0.1 --port 43981` for development, and `npm run build` for static output in `dist/`.

Cloudflare Pages target: build command `npm run build`, output directory `dist`. Hosting is not connected or deployed yet.

## Layout

- `src/`, `public/`: website code and assets
- `briefs/`, `.impeccable/`: saved homepage design context
- `outputs/`: Kyle’s source brief, route mappings, pending inputs and review evidence
- `work/`: research captures and intermediate asset tools

The homepage is implemented as a review draft. Supporting pages and completed provider integration remain future work. No real lead submissions or public launch have been performed.

The original Documents/Codex preparation folder is retained as a backup. Continue development here.

## Repository

GitHub: https://github.com/alphadogagency/Growing-Kids

This public repository includes the website, assets and build configuration. Client source documents, correspondence, research captures and review evidence in `outputs/` and `work/` stay local and are not required to build. References to those folders in project guides describe local-only materials.
