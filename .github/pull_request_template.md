## Jira

- Identyfikator: `CHECK-…`
- Link do zgłoszenia: 

## Opis zmian

<!-- Co zostało zrobione i dlaczego. -->

## Plan testów

<!-- Jak sprawdzić zmiany lokalnie / na preview. -->

- [ ] `pnpm install --frozen-lockfile`
- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm build`
- [ ] `pnpm dev` (jeśli dotyczy UI)

## Lista kontrolna weryfikacji

- [ ] Tytuł PR zawiera identyfikator Jira (np. `CHECK-2: …`)
- [ ] Commity zawierają identyfikator Jira
- [ ] `pnpm-lock.yaml` zaktualizowany razem z zależnościami (jeśli dotyczy)
- [ ] Brak sekretów i plików `.env` w diffie
- [ ] Dokumentacja zaktualizowana (README / docs), jeśli zmiana tego wymaga
- [ ] CI (lint, typecheck, build) przechodzi
- [ ] Reviewer wyznaczony; scalenie dopiero po review

## Uwagi / ryzyka

<!-- Opcjonalnie: breaking changes, blokady, follow-upy. -->
