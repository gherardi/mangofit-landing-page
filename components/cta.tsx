import Link from "next/link";

export function CTA() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto text-center text-balance">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Trasforma il tuo business.
          <br />
          Inizia con Mangofit oggi.
        </h2>
        <p className="mx-auto mt-6 text-lg leading-8">
          Unisciti ai personal trainer che hanno già semplificato il loro lavoro
          quotidiano, ottimizzato le attività e mantenuto i clienti motivati con
          la nostra piattaforma completa.
        </p>
        <div className="flex gap-x-6 justify-center items-center mt-10">
          <Link
            href="#"
            className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-brand/90"
          >
            Richiedi una demo
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6">
            Scopri di più <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
