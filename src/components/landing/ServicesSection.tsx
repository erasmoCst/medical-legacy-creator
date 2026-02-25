import { Palette, FileText, Heart, Share2, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    step: "01",
    title: "Posicionamento e Marca Médica",
    description: "Identidade visual, tom de voz e estratégia de marca que comunicam sua essência profissional.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Estratégia de Conteúdo",
    description: "Conteúdo relevante e educativo que posiciona você como autoridade na sua especialidade.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Experiência do Paciente",
    description: "Jornada do paciente otimizada, do primeiro contato ao pós-consulta, gerando fidelização.",
  },
  {
    icon: Share2,
    step: "04",
    title: "Gestão de Redes Sociais",
    description: "Presença consistente e estratégica nas plataformas certas para seu público.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Performance e Tráfego",
    description: "Campanhas estratégicas para médicos e clínicas que buscam crescimento mensurável.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-6 font-medium">
            Como Fazemos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-graphite-dark mb-8 text-balance leading-tight">
            Soluções completas para sua presença médica.
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Cada serviço é pensado para construir, passo a passo, 
            a autoridade que seu trabalho merece.
          </p>
        </div>

        {/* Step flow - horizontal on desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Step card */}
                <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/30 h-full flex flex-col">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:scale-110 transition-all duration-300">
                    <span className="font-sans text-sm font-semibold text-terracotta group-hover:text-white transition-colors duration-300">
                      {service.step}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-medium text-graphite-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>
                </div>
                
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < services.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-terracotta/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
