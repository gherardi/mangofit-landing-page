import {
  MessageSquare,
  Dumbbell,
  TrendingUp,
  CreditCard,
  Monitor,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Comunica con i tuoi clienti",
    description:
      "Gestisci facilmente la comunicazione con i tuoi clienti per rafforzare la relazione e offrire un supporto costante e personalizzato.",
  },
  {
    icon: Dumbbell,
    title: "Crea e assegna programmi di allenamento",
    description:
      "Organizza e distribuisci piani di allenamento personalizzati per aiutare ogni cliente a raggiungere i propri obiettivi.",
  },
  {
    icon: TrendingUp,
    title: "Monitora i progressi dei clienti",
    description:
      "Tieni sotto controllo i risultati dei tuoi clienti con strumenti di monitoraggio avanzati e report dettagliati.",
  },
  {
    icon: CreditCard,
    title: "Gestisci i pagamenti",
    description:
      "Ricevi e controlla i pagamenti in modo semplice e sicuro, per garantire continuità al tuo business.",
  },
  {
    icon: Monitor,
    title: "Lavora da desktop e mobile",
    description:
      "Accedi alla piattaforma ovunque ti trovi, con un’interfaccia intuitiva disponibile sia da desktop che da app.",
  },
  {
    icon: Smartphone,
    title: "App dedicata per i clienti",
    description:
      "Offri ai tuoi clienti un’app facile da usare per seguire gli allenamenti, monitorare i progressi e restare sempre motivati.",
  },
];


export function Features() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-24">
      <div className="relative z-10 mx-auto space-y-4 text-center md:space-y-8">
        <h2 className="text-balance text-4xl font-medium lg:text-5xl">
          La soluzione digitale per i Personal Trainer
        </h2>
        <p className="text-balance">
          MangoFit è la soluzione digitale per i Personal Trainer che permette
          di gestire in modo semplice e veloce i propri clienti, le proprie
          attività e le proprie fatture.
        </p>
      </div>

      <div className="relative mx-auto grid divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="space-y-3">
              <IconComponent className="size-4 stroke-brand" />
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
