import { User, Building2, Award, Users, Target } from "lucide-react";
import teamAudience from "@/assets/team-audience.jpg";

const audiences = [
  {
    icon: User,
    text: "Médicos especialistas que buscam reconhecimento",
  },
  {
    icon: Building2,
    text: "Clínicas médicas em expansão",
  },
  {
    icon: Award,
    text: "Profissionais que valorizam ética e posicionamento",
  },
  {
    icon: Users,
    text: "Médicos que querem atrair pacientes qualificados",
  },
  {
    icon: Target,
    text: "Clínicas que buscam diferenciação real no mercado",
  },
];

const AudienceSection = () => {
  return (
    <section id="para-quem" className="py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div>
              <span className="inline-block text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-6 font-medium">
                Para Quem
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-graphite-dark mb-8 text-balance leading-tight">
                A Re Bravè Med é para médicos que pensam grande.
              </h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-10">
                Trabalhamos com profissionais que entendem que construir autoridade é um investimento 
                de longo prazo — e que querem parceiros, não fornecedores.
              </p>
              
              {/* Cards with icons */}
              <div className="space-y-4">
                {audiences.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50 hover:border-terracotta/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Doctor image */}
            <div className="relative lg:mt-16">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated relative">
                <img 
                  src={teamAudience} 
                  alt="Equipe Re Bravè Med" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-dark/90 via-transparent to-transparent" />
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-serif text-xl md:text-2xl text-beige italic leading-relaxed">
                    "Construindo o legado de quem cuida da saúde."
                  </p>
                </div>
                
                {/* Decorative accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-terracotta" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-terracotta/20 rounded-2xl hidden lg:block" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-terracotta/5 rounded-2xl -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
