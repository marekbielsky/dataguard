# Architektura DataGuard

## Cel

DataGuard to platforma oceny i zarządzania jakością danych dla systemów AI/analitycznych.

## Docelowy stos (planowany)

| Warstwa | Technologia | Status |
| --- | --- | --- |
| Frontend | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui | **uruchomiony** (minimalny frontend) |
| Backend | NestJS, TypeScript | planowane — niewdrożone |
| Baza danych | PostgreSQL, Prisma | planowane — niewdrożone |
| Zadania w tle | Redis, BullMQ | planowane — niewdrożone |
| Analiza danych | Python, Polars | planowane — niewdrożone |
| AI | OpenAI API, walidacja Zod | planowane — niewdrożone |
| Uwierzytelnianie | LDAP | planowane — niewdrożone |
| Testy | Jest, React Testing Library, Playwright | planowane — niewdrożone |
| Środowisko | Docker Compose | planowane — niewdrożone |
| CI/CD | GitHub Actions | **uruchomione** (lint, typecheck, build) |
| Monorepo | pnpm workspaces | **uruchomione** |

## Aktualnie uruchomione

- Frontend Next.js w `apps/web` (App Router, TypeScript strict, Tailwind CSS)
- Strona informacyjna bez logiki biznesowej, bez API i bez bazy danych
- Workflow CI sprawdzający jakość kodu frontendu

## Docelowa odpowiedzialność warstw

### Frontend (`apps/web`)

Interfejs użytkownika: prezentacja katalogu danych, wyników oceny jakości, statusów zgodności oraz procesów zatwierdzania. W obecnym etapie wyłącznie statyczna strona informacyjna.

### Backend (planowany)

API domenowe, uwierzytelnianie LDAP, orkiestracja zadań, persystencja w PostgreSQL, integracja z kolejkami.

### Proces analizy (planowany)

Przetwarzanie i ocena jakości zbiorów danych (Python/Polars), ewentualne wspomaganie klasyfikacji przez modele AI z walidacją odpowiedzi.

## Uwagi

Elementy oznaczone jako planowane **nie istnieją** w repozytorium jako działające usługi. Nie należy traktować ich opisu jako zaimplementowanych funkcji.
