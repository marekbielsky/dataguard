# Contributing

## Gałęzie

- Gałąź główna: `main`
- Każde zadanie realizuj na osobnej gałęzi (np. `CHECK-2-repository`)

## Commity i Pull Requesty

- W tytule PR i w komunikatach commitów umieszczaj identyfikator zadania z Jiry (np. `CHECK-2`)
- Scalanie tylko po code review
- Nie scalaj własnych PR bez przeglądu

## Zależności

- Jedyny menedżer pakietów: **pnpm**
- Przy zmianie zależności aktualizuj i commituj `pnpm-lock.yaml` w tym samym PR
- Instalacja w CI i lokalnie: `pnpm install --frozen-lockfile`

## Bezpieczeństwo

- Nie commituj sekretów, tokenów ani plików `.env`
- Do przykładów konfiguracji używaj wyłącznie `.env.example` bez wartości poufnych

## Kontrola jakości przed PR

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```
