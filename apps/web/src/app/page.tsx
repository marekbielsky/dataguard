const plannedCapabilities = [
  {
    title: "Katalog danych",
    description:
      "Przeglądanie i organizacja zbiorów danych dostępnych w organizacji.",
  },
  {
    title: "Ocena jakości",
    description:
      "Metryki kompletności, spójności i wiarygodności danych wejściowych.",
  },
  {
    title: "Klasyfikacja AI",
    description:
      "Wspomagane modelami AI oznaczanie kategorii i ryzyka wykorzystania danych.",
  },
  {
    title: "Ocena zgodności",
    description:
      "Sprawdzanie wymagań regulacyjnych i polityk wewnętrznych przed użyciem.",
  },
  {
    title: "Zatwierdzanie wykorzystania danych",
    description:
      "Ścieżka akceptacji pozwalająca kontrolować, kiedy dane trafiają do systemów AI i analityki.",
  },
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Przejdź do treści
      </a>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <p className="text-base font-semibold tracking-tight text-slate-900">
            DataGuard
          </p>
          <p className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-950 sm:text-sm">
            Statyczne demo — etap przygotowawczy
          </p>
        </div>
      </header>

      <main id="tresc" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <section aria-labelledby="intro-heading" className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-600">
            Projekt akademicki
          </p>
          <h1
            id="intro-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            DataGuard
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-800">
            Platforma oceny i zarządzania jakością danych dla systemów
            AI/analitycznych.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Celem DataGuard jest wsparcie organizacji w ocenie jakości zbiorów
            danych oraz w kontrolowanym udostępnianiu ich do procesów
            analitycznych i systemów opartych o sztuczną inteligencję. Wersja
            demonstracyjna jest statyczna i służy wyłącznie do prezentacji
            zakresu projektu.
          </p>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="mt-12 border-t border-slate-200 pt-10"
        >
          <h2
            id="capabilities-heading"
            className="text-2xl font-semibold tracking-tight text-slate-900"
          >
            Planowane możliwości
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            Poniższe obszary należą do docelowego zakresu produktu. Nie są jeszcze
            zaimplementowane w tym demo.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {plannedCapabilities.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="demo-note-heading"
          className="mt-12 rounded-xl border border-slate-300 bg-slate-100 p-5 sm:p-6"
        >
          <h2
            id="demo-note-heading"
            className="text-xl font-semibold text-slate-900"
          >
            Informacja o demo
          </h2>
          <p className="mt-3 leading-relaxed text-slate-800">
            To demo nie przetwarza danych użytkownika. Nie ma formularzy,
            logowania ani połączeń z backendem, bazą danych ani zewnętrznymi
            usługami analitycznymi.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>DataGuard — statyczne demo przygotowawcze</p>
          <p>
            Kod źródłowy:{" "}
            <a
              href="https://github.com/marekbielsky/dataguard"
              className="font-medium text-slate-900 underline decoration-slate-400 underline-offset-2 hover:decoration-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              github.com/marekbielsky/dataguard
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
