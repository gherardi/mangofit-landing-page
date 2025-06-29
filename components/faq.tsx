import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    title: "Cos'è Mangofit e a chi è destinata?",
    content:
      "Mangofit è un'app dedicata ai personal trainer e ai loro clienti. È progettata per semplificare la gestione dei clienti, la creazione e assegnazione dei programmi di allenamento e le comunicazioni, migliorando l'efficienza e l'esperienza dei tuoi clienti.",
  },
  {
    title: "Mangofit è compatibile con dispositivi mobili?",
    content:
      "Sì, Mangofit è accessibile sia da desktop che da dispositivi iOS e Android, offrendo una flessibilità totale per gestire la tua attività ovunque tu sia.",
  },
  {
    title: "Come funziona il periodo di prova gratuita?",
    content:
      "Il periodo di prova gratuita dura 30 giorni, durante i quali avrai accesso completo a tutte le funzionalità e potrai gestire tanti utenti quanti vorrai. Alla fine della prova, potrai decidere se sottoscrivere un abbonamento oppure interrompere l'utilizzo senza alcun costo.",
  },
  {
    title: "Posso cambiare il piano di abbonamento in qualsiasi momento?",
    content:
      "Sì, puoi passare a un piano superiore o inferiore in qualsiasi momento direttamente dal tuo account. Il sistema riconosce automaticamente il cambio di piano e ti avvisa del passaggio. Se passi a un piano superiore, il costo aggiuntivo viene calcolato immediatamente e addebitato subito, consentendoti di accedere alle nuove funzionalità senza attese. Invece, se scegli un piano inferiore, il credito residuo verrà riconosciuto e applicato al prossimo pagamento. In entrambi i casi, il sistema si adatta alle tue esigenze per offrirti la massima flessibilità.",
  },
  {
    title: "Offrite sconti per abbonamenti annuali?",
    content:
      "Sì, offriamo uno sconto del 20% per chi sottoscrive un abbonamento annuale.",
  },
  {
    title: "Come posso cancellare il mio abbonamento?",
    content:
      "Puoi cancellare il tuo abbonamento in qualsiasi momento dalle impostazioni del tuo account. L'accesso all'app rimarrà attivo fino alla fine del periodo di fatturazione.",
  },
  // {
  //   title: "Quali metodi di pagamento accettate?",
  //   content:
  //     "Accettiamo pagamenti tramite carta di credito, PayPal e bonifico bancario. Tutte le transazioni sono sicure e protette.",
  // },
  // {
  //   title:
  //     "Cosa succede se supero il numero di utenti consentito dal mio piano?",
  //   content:
  //     "Se raggiungi il limite di utenti del tuo piano, il sistema riconoscerà automaticamente la transizione.",
  // },
  // {
  //   title: "I dati dei miei clienti sono al sicuro su Mangofit?",
  //   content:
  //     "Assolutamente sì. Utilizziamo protocolli di sicurezza avanzati per proteggere tutte le informazioni sensibili. La privacy dei tuoi clienti è una nostra priorità.",
  // },
  // {
  //   title: "Come faccio a invitare i miei clienti ad utilizzare Mangofit?",
  //   content:
  //     "Come personal trainer, puoi invitare facilmente i tuoi clienti a utilizzare Mangofit condividendo un link di invito tramite WhatsApp, email o altri canali. In questo modo, i tuoi clienti potranno registrarsi e accedere ai programmi di allenamento personalizzati e ai servizi che offri.",
  // },
];

export function Faq() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-24">
      <div className="relative z-10 mx-auto space-y-4 text-center md:space-y-8">
        <h2 className="text-4xl font-medium text-balance lg:text-5xl">
          Domande frequenti
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-16 w-full" defaultValue="10">
        {faqItems.map((item, index) => (
          <AccordionItem value={index.toString()} key={index} className="py-3">
            <AccordionTrigger className="py-2 text-lg leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
