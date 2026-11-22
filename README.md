# DataGuard

Platforma oceny i zarządzania jakością danych dla systemów AI/analitycznych.

Projekt akademicki (monorepo). W bieżącym zakresie uruchomiony jest wyłącznie frontend demonstracyjny.

## Aktualny zakres

- Aplikacja frontendowa Next.js (`apps/web`) ze stroną informacyjną
- monorepo pnpm workspaces
- CI (lint, typecheck, build) w GitHub Actions

Pozostałe elementy docelowego stosu (NestJS, PostgreSQL, Redis/BullMQ, Python/Polars, OpenAI, LDAP, pełny zestaw testów) są **planowane** i nie są jeszcze wdrożone.

## Repozytorium

- Adres: [https://github.com/marekbielsky/dataguard](https://github.com/marekbielsky/dataguard)
- Widoczność: publiczne
- Gałąź główna: `main`

## Pobranie projektu

```bash
git clone https://github.com/marekbielsky/dataguard.git
cd dataguard
```

## Wymagania

| Narzędzie | Wersja |
| --- | --- |
| Node.js | 20.9+ (zalecane LTS 24, plik `.nvmrc`) |
| pnpm | 12.21.0 (`packageManager` w `package.json`) |

## Instalacja

Z katalogu głównego sklonowanego repozytorium:

```bash
pnpm install --frozen-lockfile
```

## Uruchomienie

```bash
pnpm dev
```

Aplikacja jest dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Dostępne polecenia

Uruchamiane z katalogu głównego repozytorium:

| Polecenie | Opis |
| --- | --- |
| `pnpm dev` | serwer deweloperski frontendu |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | kontrola TypeScript (`tsc --noEmit`) |
| `pnpm build` | produkcyjny build frontendu |

## Struktura repozytorium

```text
/
  apps/
    web/                 # frontend Next.js (App Router)
  docs/
    architecture.md      # opis architektury i stanu wdrożenia
  .github/workflows/
    ci.yml               # lint, typecheck, build
  package.json
  pnpm-workspace.yaml
  pnpm-lock.yaml
```

## Publikacja

Hosting: **Render** (darmowy Web Service, bez płatnych dodatków).

- Blueprint: `render.yaml` w katalogu głównym
- Instalacja z lockfile monorepo (`pnpm install --frozen-lockfile`)
- Build: `pnpm build` (workspace `apps/web`)
- Start: `pnpm --filter @dataguard/web start`
- Gałąź produkcyjna: `main` (automatyczne wdrożenie po push)
- Adres publiczny HTTPS: [https://dataguard-web.onrender.com](https://dataguard-web.onrender.com)

CI (GitHub Actions) sprawdza kod (lint, typecheck, build). Po udanym CI na `main` workflow **Deploy Render** wywołuje wdrożenie usługi Render przez API (mostek CD — natywny webhook GitHub App nie był dostępny dla tego repo).

Adres dashboardu: https://dashboard.render.com/web/srv-dc172hmc6qcc73cp5esg


<!-- ci-cd-verify:2026-11-22T05:18Z -->
## Licencja

Projekt akademicki — szczegóły licencji do ustalenia przez zespół.
