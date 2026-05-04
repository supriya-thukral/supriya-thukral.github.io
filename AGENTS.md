# AGENTS.md

## Cursor Cloud specific instructions

This is a **React + TypeScript portfolio SPA** built with Vite 5 and MUI v6. There is no backend, database, or external API — the contact form uses a `mailto:` link.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `yarn install` |
| Dev server | `yarn dev` (Vite on port 5173) |
| Lint | `yarn lint` (ESLint 9) |
| Build | `yarn build` (`tsc -b && vite build`) |
| Preview prod build | `yarn preview` |

### Notes

- **Package manager**: Yarn v1 classic (`yarn.lock` present). Do not use npm.
- **Styling**: SCSS + MUI theme. The Vite config silences the `legacy-js-api` Sass deprecation warning — this is intentional.
- **No test framework**: The project does not have a test runner configured (no Jest/Vitest). If tests are needed, add Vitest.
- **Node version**: Node.js 20 LTS is required (installed via NodeSource).
- **Dev server host**: Use `yarn dev --host 0.0.0.0` to make the dev server accessible outside localhost in the Cloud VM.
