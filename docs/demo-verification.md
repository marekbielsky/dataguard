# Weryfikacja demo statycznego (CHECK-3)

- **Data:** 2026-11-22
- **Środowisko lokalne:** macOS Darwin arm64, Node.js 24.17.0, pnpm 12.21.0
- **Gałąź:** CHECK-3-static-demo
- **Commit:** 47e524d

## Kontrole lokalne

| Kontrola | Wynik |
| --- | --- |
| `pnpm install --frozen-lockfile` | OK |
| `pnpm lint` | OK |
| `pnpm typecheck` | OK |
| `pnpm build` | OK |
| Treść strony (nazwa, temat, oznaczenie demo, planowane możliwości, brak przetwarzania danych) | OK (przegląd kodu + HTTP) |
| `lang="pl"`, tytuł, opis, favicon | OK |
| Brak zewnętrznych fontów / trackerów w kodzie | OK |
| Brak formularzy / fałszywego uploadu / logowania | OK |

## Kontrole przeglądarkowe / responsywność

| Kontrola | Wynik | Uwagi |
| --- | --- | --- |
| Szerokości 320 / 768 / 1440 px | do potwierdzenia na publicznym URL | układ fluid + `max-w-5xl`, `min-width: 320px`, `overflow-x: hidden` |
| Brak poziomego przewijania przy 320 px | do potwierdzenia na publicznym URL | |
| Nawigacja klawiaturą i widoczny fokus | częściowo zweryfikowane w kodzie | skip-link, `focus-visible` na odnośnikach |
| Brak nieoczekiwanych żądań zewnętrznych | do potwierdzenia w DevTools na publicznym URL | brak zewnętrznych zasobów w kodzie |

## Publikacja

- **Hosting:** Render (darmowy Web Service, plan Free)
- **Blueprint:** `render.yaml`
- **Gałąź produkcyjna:** `main` (auto-deploy po push)
- **Adres HTTPS:** (uzupełniane po wdrożeniu)
- **Zgodność z commitem:** (uzupełniane po wdrożeniu)

## Ograniczenia

- Free Web Service na Render może przechodzić w stan idle po ~15 min bez ruchu (zimny start ~1 min).
- Pełny Playwright / zautomatyzowane testy E2E nie były instalowane w tym epiku.
- Dostępy GitHub dla zespołu nadal zablokowane (brak loginów) — patrz `docs/blockers.md`.
