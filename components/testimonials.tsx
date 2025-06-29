import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-24">
      <div className="relative z-10 mx-auto space-y-4 text-center md:space-y-8">
        <h2 className="text-4xl font-medium text-balance lg:text-5xl">
          Cosa dicono i nostri clienti
        </h2>
        <p className="text-balance">
          I nostri clienti sono soddisfatti del nostro servizio e del nostro
          supporto costante. Scopri come Mangofit ha trasformato il loro modo di
          lavorare.
        </p>
      </div>

      <div className="grid gap-4 mt-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
        <Card className="sm:col-span-2 sm:px-6 lg:row-span-2">
          <CardContent className="p-6 h-full">
            <div className="flex flex-col gap-6 justify-between h-full">
              <p className="text-xl font-medium">
                Mangofit è rivoluzionaria nella gestione dei clienti. Finalmente
                un'unica piattaforma moderna, efficiente e completa che rende il
                lavoro di ogni personal trainer più semplice. Posso gestire
                pagamenti, creare programmi personalizzati e seguire i progressi
                dei miei atleti in modo chiaro e veloce.
              </p>

              <div className="flex gap-3 items-center">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/shekinah.webp"
                    alt="Lorenzo Fanelli"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>LF</AvatarFallback>
                </Avatar>

                <div>
                  <div className="text-sm font-medium text-brand">
                    Lorenzo Fanelli
                  </div>
                  <span className="block text-sm text-muted-foreground">
                    Personal Coach
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="h-full">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p className="">
                Mangofit per me significa comodità e organizzazione. Mi consente
                di comunicare facilmente con i miei atleti, farli sentire sempre
                supportati. Senza quest'app sarebbe tutto più complesso: dalla
                gestione dei clienti alla creazione dei programmi
                personalizzati.
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/jonathan.webp"
                    alt="Tommaso Belgrano"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-brand">
                    Tommaso Belgrano
                  </div>
                  <span className="block text-sm text-muted-foreground">
                    S&C Coach
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="h-full">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                Mangofit ha reso tutto più semplice e professionale. Posso
                creare programmi personalizzati, monitorare i progressi e
                comunicare in modo diretto con i miei clienti. Per chi si allena
                con me significa avere sempre il piano di allenamento aggiornato
                e un supporto costante.
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/yucel.webp"
                    alt="Emanuele De Sanctis"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>EDS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-brand">
                    Emanuele De Sanctis
                  </div>
                  <span className="block text-sm text-muted-foreground">
                    Personal Trainer
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
