<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

Single-package Next.js 16.4.2 App Router frontend (React 19.3.1, Tailwind v4, shadcn/ui `base-nova`). No `src/`, no route handlers yet, and no tests or CI. `mongodb`, `cors`, and `dotenv` are installed but unused.

## Commands

- `npm run dev` — Turbopack is the default in Next 16.
- `npm run build`
- `npm run lint` — runs the ESLint CLI; `next lint` no longer exists.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run format` — Prettier, but only for `**/*.{ts,tsx}`.
- No test runner is configured; use typecheck and build as the real verification.

## Current baseline (verified)

- `npm run build` and `npm run typecheck` pass.
- `npm run lint` fails on two pre-existing errors: `components/ui/carousel.tsx:98` and `hooks/use-mobile.ts:14` (`react-hooks/set-state-in-effect`). Do not assume your change caused them.
- `npx prettier --check "**/*.{ts,tsx}"` reports 26 unformatted files. Avoid running `npm run format` repo-wide in a focused change; format only files you touch.

## Structure and conventions

- `app/` is the App Router (`app/layout.tsx`, `app/page.tsx`). `@/*` maps to the repo root, not `src/`.
- `components/ui/` contains shadcn-generated primitives built on `@base-ui/react`, not Radix. Base UI composes with the `render` prop, not `asChild`; follow the existing components.
- Add primitives with `npx shadcn@latest add <name>`. `components.json` defines style `base-nova` and the `@/components`, `@/lib`, and `@/hooks` aliases.
- Tailwind v4 is CSS-first: there is no `tailwind.config`. Theme tokens and dark-mode values live in `app/globals.css` (`@theme inline`, `:root`, `.dark`).
- `cn` is the `cn` package re-exported by `lib/utils.ts`; generated files sometimes import `"cn"` directly. Both forms are intentional.
- `lib/highlighter.tsx` uses a manual Shiki language allowlist. Register a new language and its aliases there, or `highlightCode` returns `null`.
- Next 16 specifics: `params`/`searchParams` are Promises, middleware is now `proxy.ts`, and Turbopack is the default. Version-matched docs are in `node_modules/next/dist/docs/`.
- Edit `AGENTS.md` for instructions; `CLAUDE.md` only imports `@AGENTS.md`.
