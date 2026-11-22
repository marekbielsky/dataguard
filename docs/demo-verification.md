# Weryfikacja demo statycznego (CHECK-3)

Dokument opisuje **rzeczywisty** stan weryfikacji epika CHECK-1 (etap B).  
Wyniki oznaczone jako „nie przeprowadzono” nie były wykonywane.

## Metadane

| Pole | Wartość |
| --- | --- |
| Data weryfikacji | 2026-11-22 |
| Środowisko lokalne | macOS Darwin arm64, Node.js 24.17.0, pnpm 12.21.0 |
| Katalog lokalny | `/Users/marekbielski/WebstormProjects/dataguard` |
| Repozytorium | https://github.com/marekbielsky/dataguard (publiczne) |
| Gałąź produkcyjna | `main` |
| Commit przy weryfikacji przeglądarkowej | HEAD `main` w momencie testu (treść demo z linii CHECK-3; publikacja Render) |
| Adres publiczny HTTPS | https://dataguard-web.onrender.com |
| Hosting | Render Free Web Service `dataguard-web` (`srv-dc172hmc6qcc73cp5esg`), Frankfurt |
| Blueprint | `render.yaml` |
| Auto-deploy | gałąź `main`, trigger: commit |
| CI po merge PR #2 | SUCCESS — https://github.com/marekbielsky/dataguard/actions/runs/44986010695 |
| Artefakty przeglądarkowe | `docs/verification/` |

## Narzędzie weryfikacji przeglądarkowej

| Pole | Wartość |
| --- | --- |
| Data/czas testu | 2026-11-22 (raport JSON) |
| Silnik | Google Chrome (Playwright `channel: "chrome"`, headless) |
| Biblioteka | `playwright-core@1.56.1` |
| URL testowany | https://dataguard-web.onrender.com/ |
| Raport maszynowy | [docs/verification/browser-report.json](verification/browser-report.json) |
| Zrzuty | [docs/verification/screenshots/](verification/screenshots/) |

Skrypt nie jest częścią CI aplikacji; uruchomiono go jednorazowo na potrzeby epika.

## Zakres demo

- Statyczna strona informacyjna Next.js (App Router) w `apps/web`
- Bez logiki biznesowej, formularzy, API, bazy i logowania
- Bez trackerów, analityki i zewnętrznych fontów w kodzie aplikacji
- Publiczny HTTPS na Render; jakość kodu w GitHub Actions

## Kontrole lokalne (przeprowadzone)

| Kontrola | Wynik | Jak sprawdzono |
| --- | --- | --- |
| `pnpm install --frozen-lockfile` | OK | katalog główny monorepo |
| `pnpm lint` | OK | ESLint `@dataguard/web` |
| `pnpm typecheck` | OK | `tsc --noEmit` |
| `pnpm build` | OK | `next build`, trasa `/` static |
| Skrypty root | OK | `dev` / `lint` / `typecheck` / `build` |
| TypeScript strict | OK | `apps/web/tsconfig.json` |
| Brak usług spoza zakresu | OK | struktura repo |

## Treść i semantyka (przeprowadzone)

Źródła: kod + HTML produkcji + DOM w Chrome.

| Kontrola | Wynik |
| --- | --- |
| HTTP 200 na HTTPS | OK |
| `lang="pl"` | OK |
| Tytuł zawiera DataGuard | OK |
| Dokładnie jeden `h1` („DataGuard”) | OK |
| Nazwa DataGuard | OK |
| Temat / AI-analityka | OK |
| Badge „Statyczne demo — etap przygotowawczy” | OK |
| Sekcja „Planowane możliwości” | OK |
| Informacja o braku przetwarzania danych | OK |
| Brak formularzy | OK |
| Landmarky `header` / `main` / `footer` | OK |
| Link do https://github.com/marekbielsky/dataguard | OK (DOM + HTTP 200 na docelowy URL) |
| Favicon | OK |

## Publikacja (przeprowadzone)

| Kontrola | Wynik |
| --- | --- |
| Publiczny HTTPS | OK — https://dataguard-web.onrender.com |
| Deploy / auto-deploy z `main` | OK |
| CI na `main` | OK |
| Tylko Render jako hosting aplikacji | OK |

## Kontrole przeglądarkowe (przeprowadzone 2026-11-22)

### Viewporty i poziome przewijanie

| Szerokość | `clientWidth` | `scrollWidth` | Poziomy scroll | Zrzut |
| --- | --- | --- | --- | --- |
| 320 px | 320 | 320 | **brak** | [viewport-320.png](verification/screenshots/viewport-320.png) |
| 768 px | 768 | 768 | **brak** | [viewport-768.png](verification/screenshots/viewport-768.png) |
| 1440 px | 1440 | 1440 | **brak** | [viewport-1440.png](verification/screenshots/viewport-1440.png) |

Wysokość okna testowego: 900 px. Pomiar: `documentElement` / `body` `scrollWidth` vs `clientWidth` (tolerancja 1 px).

### Klawiatura i fokus

| Kontrola | Wynik | Szczegóły |
| --- | --- | --- |
| Tab osiąga skip-link „Przejdź do treści” | OK | `href="#tresc"` |
| Tab osiąga link GitHub w stopce | OK | `https://github.com/marekbielsky/dataguard` |
| Widoczny fokus | OK | computed style m.in. `outline: solid 2px rgb(15, 23, 42)` na fokusowanym odnośniku |
| Elementy interaktywne obsługiwane klawiaturą | OK | jedyne interaktywne odnośniki: skip-link + GitHub |

### Konsola i błędy strony

| Kontrola | Wynik |
| --- | --- |
| `pageerror` | brak |
| `console` typu `error` | brak |

### Sieć (requesty podczas ładowania strony)

| Klasa | Liczba | Komentarz |
| --- | --- | --- |
| `app` (dataguard-web.onrender.com) | 14 | dokument, skrypty/style `/_next`, favicon |
| `third-party` (analityka, fonty zewnętrzne, trackery) | **0** | OK |

Nie stwierdzono żądań do Google Fonts, analytics ani innych trackerów aplikacji.  
Infrastruktura CDN hostingu (nagłówki Cloudflare po stronie odpowiedzi HTTP) nie generowała osobnych third-party requestów aplikacji w zebranym logu Playwright.

Pełna lista requestów: [browser-report.json](verification/browser-report.json).

## CI

| Zdarzenie | Wynik | URL |
| --- | --- | --- |
| PR #1 CHECK-2 | SUCCESS | https://github.com/marekbielsky/dataguard/pull/1 |
| PR #2 CHECK-3 | SUCCESS | https://github.com/marekbielsky/dataguard/pull/2 |
| Push `main` po PR #1 | SUCCESS | https://github.com/marekbielsky/dataguard/actions/runs/44984911905 |
| Push `main` po PR #2 | SUCCESS | https://github.com/marekbielsky/dataguard/actions/runs/44986010695 |

## Odstępstwa od briefu (świadome)

| Temat | Decyzja |
| --- | --- |
| Katalog | `~/WebstormProjects/dataguard` (polecenie użytkownika) |
| Hosting | Render Free zamiast Vercel (praktyka użytkownika) |
| shadcn/ui | nie dodano — brak potrzeby na tym demo |
| E2E w CI | brak stałego joba Playwright w GitHub Actions; weryfikacja przeglądarkowa wykonana lokalnie i zarchiwizowana w `docs/verification/` |

## Blokady poza UI

Zob. `docs/blockers.md`:

- Loginy GitHub zespołu / prowadzącego nieprzekazane
- Zaproszenia collaborators niewysłane
- Collaborator: tylko `marekbielsky`

## Ograniczenia hostingu

- Render Free: możliwy idle po ~15 min i zimny start
- Limity bandwidth / pipeline minutes workspace

## Podsumowanie weryfikacji CHECK-3

| Obszar | Status |
| --- | --- |
| Jakość kodu lokalnie i w CI | **zaliczone** |
| Treść i zakres statycznego demo | **zaliczone** |
| Publikacja HTTPS + deploy z `main` | **zaliczone** |
| Smoke HTML / DOM | **zaliczone** |
| Viewporty 320 / 768 / 1440 + brak horizontal scroll | **zaliczone** |
| Klawiatura + widoczny fokus | **zaliczone** |
| Konsola bez błędów aplikacji | **zaliczone** |
| Brak third-party requestów aplikacji | **zaliczone** |
| Dostępy zespołu do repo | **blokada** (osobne kryterium) |

## Reprodukcja

```bash
cd /Users/marekbielski/WebstormProjects/dataguard
pnpm install --frozen-lockfile
pnpm lint && pnpm typecheck && pnpm build
curl -sS -D- -o /tmp/dataguard.html https://dataguard-web.onrender.com/
```

Weryfikacja przeglądarkowa (przykład użytego podejścia):

```bash
# wymaga lokalnego Google Chrome + playwright-core
node /path/to/verify.mjs  # wynik jak docs/verification/browser-report.json
```

Ręcznie: otwórz https://dataguard-web.onrender.com → DevTools device mode 320/768/1440 → Tab → Console/Network.


## Weryfikacja CI/CD po push do main (2026-11-22)

### GitHub Actions (CI) — potwierdzone

| Commit | Wynik | URL |
| --- | --- | --- |
| `2973e36` CHECK-8: weryfikacja CI/CD po zmianie na main | SUCCESS | https://github.com/marekbielsky/dataguard/actions/runs/44988046414 |
| `020b8e2` CHECK-8: ponowna weryfikacja auto-deploy z main | SUCCESS | https://github.com/marekbielsky/dataguard/actions/runs/44988860069 |

Push do `main` uruchamia workflow `.github/workflows/ci.yml` (lint, typecheck, build).

### Render auto-deploy (CD) — niepotwierdzone w tej próbie

| Oczekiwanie | Wynik |
| --- | --- |
| Push `2973e36` / `020b8e2` na `main` tworzy nowy deploy | **nie** — live pozostał na `11984f7` (trigger `api`) |
| `autoDeploy` na usłudze | `yes`, trigger `commit`, branch `main` |
| Webhooki GitHub w repozytorium | **brak** (`GET /repos/marekbielsky/dataguard/hooks` → pusta lista) |

**Wniosek:** CI działa automatycznie. Automatyczne CD na Render **nie działa**, dopóki integracja GitHub (Render GitHub App / webhook) nie jest podpięta do repozytorium. Samo `autoDeploy=yes` nie wystarcza bez eventów push.

Live: https://dataguard-web.onrender.com (HTTP 200, commit demo `11984f7`).


## Naprawa CD (2026-11-22, po merge PR #4)

### Problem
Usługa Render utworzona z publicznym URL repo nie otrzymywała webhooków GitHub (`hooks` = 0). Push na `main` uruchamiał tylko CI, nie deploy.

### Rozwiązanie
1. Wdrożono bieżący `main` przez Render API (`POST /services/.../deploys`).
2. Dodano workflow `.github/workflows/deploy-render.yml`: po **udanym CI** na `main` (`workflow_run`) wywołuje deploy Render API.
3. Secret GitHub `RENDER_API_KEY` ustawiony w repozytorium.

### Weryfikacja
- CI na push: nadal `.github/workflows/ci.yml`
- CD: job Deploy Render po SUCCESS CI
- Opcjonalnie docelowo: zainstalować [Render GitHub App](https://github.com/apps/render/installations/new) na repo i wrócić do natywnego auto-deploy.

