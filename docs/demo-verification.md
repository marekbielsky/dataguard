# Weryfikacja demo statycznego (CHECK-3)

Dokument opisuje **rzeczywisty** stan weryfikacji epika CHECK-1 (etap B).  
Wyniki oznaczone jako „nie przeprowadzono” nie były wykonywane i nie są deklarowane jako zaliczone.

## Metadane

| Pole | Wartość |
| --- | --- |
| Data weryfikacji | 2026-11-22 |
| Środowisko lokalne | macOS Darwin arm64, Node.js 24.17.0, pnpm 12.21.0 |
| Katalog lokalny | `/Users/marekbielski/WebstormProjects/dataguard` |
| Repozytorium | https://github.com/marekbielsky/dataguard (publiczne) |
| Gałąź produkcyjna | `main` |
| Commit produkcyjny (HEAD `main`) | `11984f7b85c08f2076004077366aa8ee3d08c5c9` |
| Treść demo (commit feature) | `a876756` — CHECK-3: statyczne demo DataGuard i publikacja na Render |
| Merge do `main` | PR #2 — https://github.com/marekbielsky/dataguard/pull/2 |
| Adres publiczny HTTPS | https://dataguard-web.onrender.com |
| Hosting | Render Free Web Service `dataguard-web` (`srv-dc172hmc6qcc73cp5esg`), region Frankfurt |
| Blueprint | `render.yaml` |
| Auto-deploy | gałąź `main`, trigger: commit |
| CI po merge do `main` | SUCCESS — https://github.com/marekbielsky/dataguard/actions/runs/44986010695 |

## Zakres demo (co jest w zakresie)

- Statyczna strona informacyjna Next.js (App Router) w `apps/web`
- Bez logiki biznesowej, formularzy, API, bazy i logowania
- Bez trackerów, analityki i zewnętrznych fontów w kodzie aplikacji
- Publiczny HTTPS na Render; jakość kodu w GitHub Actions

## Kontrole lokalne (przeprowadzone)

| Kontrola | Wynik | Jak sprawdzono |
| --- | --- | --- |
| `pnpm install --frozen-lockfile` | OK | uruchomienie z katalogu głównego monorepo |
| `pnpm lint` | OK | ESLint w `@dataguard/web` |
| `pnpm typecheck` | OK | `tsc --noEmit` |
| `pnpm build` | OK | `next build` — trasa `/` jako static |
| Skrypty root (`dev` / `lint` / `typecheck` / `build`) | OK | delegacja przez `pnpm --filter @dataguard/web` |
| TypeScript strict | OK | `strict: true` w `apps/web/tsconfig.json` |
| Brak backendu / pustych usług spoza zakresu | OK | przegląd struktury repozytorium |

## Treść i semantykę HTML (przeprowadzone)

Sprawdzenie: przegląd kodu źródłowego + pobranie HTML z produkcji (`curl` HTTPS, HTTP 200).

| Kontrola | Wynik |
| --- | --- |
| Nazwa **DataGuard** | OK |
| Pełny temat projektu (jakość danych / AI / analityka) | OK |
| Krótki opis celu | OK |
| Oznaczenie „Statyczne demo — etap przygotowawczy” | OK |
| Sekcja planowanych możliwości (katalog, ocena jakości, klasyfikacja AI, zgodność, zatwierdzanie) | OK |
| Informacja, że demo nie przetwarza danych użytkownika | OK |
| Brak przycisków udających upload / analizę / logowanie | OK |
| Brak formularzy | OK |
| Brak fikcyjnych wyników | OK |
| Jedyny odnośnik zewnętrzny merytoryczny: repozytorium GitHub | OK |
| `lang="pl"` | OK |
| Tytuł strony (`<title>DataGuard — ocena jakości danych dla AI</title>`) | OK |
| Meta description | OK (w kodzie `layout.tsx`; obecne w buildzie Next) |
| Favicon | OK |
| Landmarky: `header`, `main`, `footer`; jeden `h1` | OK |
| Hierarchia nagłówków h1 → h2 → h3 | OK |
| Skip-link „Przejdź do treści” | OK (w kodzie) |

### Absolute URL w HTML produkcji (2026-11-22)

W wyrenderowanym HTML występują wyłącznie odnośniki do:

- `https://github.com/marekbielsky/dataguard`

Assety aplikacji są ścieżkami względnymi (`/_next/static/...`, favicon).  
**Nie** stwierdzono w HTML odwołań do Google Fonts, analytics ani innych trackerów.

Uwaga: odpowiedź HTTP produkcji przechodzi przez infrastrukturę Render/Cloudflare (`server: cloudflare`, `x-render-origin-server: Render`). To warstwa hostingu, nie kod aplikacji.

## Publikacja i zgodność z `main` (przeprowadzone)

| Kontrola | Wynik | Szczegóły |
| --- | --- | --- |
| Publiczny HTTPS | OK | https://dataguard-web.onrender.com → HTTP/2 200 |
| Certyfikat TLS | OK | weryfikacja klienta curl (`ssl_verify_result=0`) |
| Deploy z gałęzi `main` | OK | usługa ustawiona na `main` po merge PR #2 |
| Auto-deploy po commitach do `main` | OK | `autoDeploy=yes`, trigger `commit` |
| Zgodność wdrożenia z commitem | OK | deploy live z `11984f7` (merge PR #2) |
| CI na `main` po merge | OK | run `44986010695`, conclusion `success` |
| Brak równoległego drugiego hostingu aplikacji | OK | tylko Render; GitHub Actions = kontrole, nie publish |

## Kontrole przeglądarkowe (status)

Poniższe punkty brief CHECK-3 wymagają **prawdziwej przeglądarki** (DevTools: viewport, Network, Console, klawiatura).  
W tym epiku **nie uruchomiono** sesji przeglądarki ani Playwright do tych pomiarów.

| Kontrola | Wynik | Uzasadnienie / mitigacja w kodzie |
| --- | --- | --- |
| Layout przy szerokości **320 px** | **nie przeprowadzono** w przeglądarce | CSS: `min-width: 320px`, `overflow-x: hidden`, fluid `px-4` / grid |
| Layout przy szerokości **768 px** | **nie przeprowadzono** w przeglądarce | breakpointi `sm:` w Tailwind |
| Layout przy szerokości **1440 px** | **nie przeprowadzono** w przeglądarce | kontener `max-w-5xl` |
| Brak poziomego przewijania przy 320 px | **nie przeprowadzono** w przeglądarce | `html { overflow-x: hidden }` |
| Nawigacja klawiaturą (Tab) po odnośnikach | **nie przeprowadzono** w przeglądarce | jeden link w stopce + skip-link |
| Widoczny fokus elementów interaktywnych | **nie przeprowadzono** w przeglądarce | `a:focus-visible` / klasy focus w kodzie |
| Brak błędów aplikacji w konsoli przeglądarki | **nie przeprowadzono** | — |
| Network: brak nieoczekiwanych requestów third-party z aplikacji | **nie przeprowadzono** w DevTools | HTML produkcji bez trackerów/fontów zewnętrznych (patrz wyżej) |

## CI (przeprowadzone)

| Zdarzenie | Wynik | URL |
| --- | --- | --- |
| PR #1 (CHECK-2) | SUCCESS | https://github.com/marekbielsky/dataguard/pull/1 |
| PR #2 (CHECK-3) | SUCCESS | https://github.com/marekbielsky/dataguard/pull/2 |
| Push `main` po PR #1 | SUCCESS | https://github.com/marekbielsky/dataguard/actions/runs/44984911905 |
| Push `main` po PR #2 | SUCCESS | https://github.com/marekbielsky/dataguard/actions/runs/44986010695 |

Workflow `.github/workflows/ci.yml`: `pnpm install --frozen-lockfile` → lint → typecheck → build.  
Wersje: Node z `.nvmrc` (24), pnpm 12.21.0. Minimalne uprawnienia `contents: read`.

## Odstępstwa od briefu (świadome)

| Temat | Decyzja |
| --- | --- |
| Katalog roboczy | `~/WebstormProjects/dataguard` zamiast `~/projects/dataguard` (polecenie użytkownika) |
| Hosting | Render Free zamiast preferowanego Vercel (praktyka użytkownika; bez płatnych usług) |
| shadcn/ui | nie dodano — brak komponentów wymagających biblioteki na statycznym demo |
| E2E / Playwright | nie instalowano pełnego zestawu testowego do jednej strony |

## Blokady poza weryfikacją UI

Zob. `docs/blockers.md`:

- Loginy GitHub zespołu i prowadzącego **nie przekazane**
- Zaproszenia collaborators **nie wysłane**
- Jedyny collaborator: właściciel `marekbielsky`

## Ograniczenia hostingu

- Plan Free na Render: możliwy **idle** po ~15 min bez ruchu i zimny start (~1 min)
- Free instance hours / bandwidth limity workspace Render
- PR previews na usłudze: wyłączone w konfiguracji CLI

## Podsumowanie weryfikacji CHECK-3

| Obszar | Status |
| --- | --- |
| Jakość kodu lokalnie i w CI | zaliczone |
| Treść i zakres statycznego demo | zaliczone |
| Publikacja HTTPS + deploy z `main` | zaliczone |
| Smoke test HTML produkcji (`curl`) | zaliczone |
| Interaktywna weryfikacja w przeglądarce (viewport / klawiatura / Console / Network UI) | **niezaliczone — nie przeprowadzono** |
| Dostępy zespołu do repo | **blokada** (poza UI; osobne kryterium epika) |

## Reprodukcja kontroli (dla ponowienia)

```bash
cd /Users/marekbielski/WebstormProjects/dataguard
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
curl -sS -D- -o /tmp/dataguard.html https://dataguard-web.onrender.com/
```

Ręcznie w przeglądarce (do domknięcia):

1. Otwórz https://dataguard-web.onrender.com  
2. DevTools → wymiary 320, 768, 1440 → sprawdź brak horizontal scroll  
3. Tab przez fokusowalne elementy  
4. Console i Network (wykluczyć szum infrastruktury hostingu)
