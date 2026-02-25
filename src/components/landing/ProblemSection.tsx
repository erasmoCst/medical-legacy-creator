import { Calendar, Eye, MessageSquare, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Calendar,
    title: "Agenda instável",
    description: "Meses cheios, meses vazios. A falta de previsibilidade compromete seu planejamento e seu crescimento.",
  },
  {
    icon: Eye,
    title: "Presença digital fraca",
    description: "Perfis genéricos que não comunicam sua especialidade nem transmitem a autoridade que você construiu.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação sem autoridade",
    description: "Conteúdo sem estratégia que não diferencia você dos milhares de outros profissionais no mercado.",
  },
  {
    icon: TrendingDown,
    title: "Marketing sem retorno",
    description: "Investimento em ações isoladas, sem direção clara e sem métricas que justifiquem o esforço.",
  },
];

const ProblemSection = () => {
  return (
    <section id="cenario" className="py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-6 font-medium">
            O Cenário Atual
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-graphite-dark mb-8 text-balance leading-tight">
            Você se identifica com algum desses cenários?
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Muitos médicos excepcionais enfrentam as mesmas barreiras quando o assunto é 
            posicionamento e presença no mercado.
          </p>
        </div>

        {/* Editorial grid layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Decorative line */}
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta/40 via-terracotta/20 to-transparent hidden md:block" />
                
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-terracotta/10 transition-colors duration-300">
                    <problem.icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-graphite-dark mb-3">
                      {problem.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
