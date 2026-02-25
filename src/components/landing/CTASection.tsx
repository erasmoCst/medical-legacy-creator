import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-beige opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-6 font-medium">
            Próximos Passos
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-graphite-dark mb-8 text-balance leading-tight">
            Seu nome pode ser apenas mais um...
            <br />
            <span className="text-terracotta">ou pode se tornar referência.</span>
          </h2>
          
          <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Agende uma conversa estratégica e descubra como podemos transformar 
            sua presença médica em um legado duradouro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5541987987873" target="_blank" rel="noopener noreferrer">
              <Button className="bg-terracotta text-white hover:bg-terracotta-dark shadow-elevated text-base px-10 py-7 rounded-full transition-all duration-300 hover:-translate-y-1">
                Quero falar com a Re Bravè Med
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/5541987987873" target="_blank" rel="noopener noreferrer">
              <Button className="border-2 border-graphite/30 text-graphite-dark hover:bg-graphite/10 text-base px-10 py-7 rounded-full transition-all duration-300 bg-transparent">
                Agendar conversa estratégica
              </Button>
            </a>
          </div>

          <p className="font-sans text-sm text-muted-foreground mt-10">
            Sem compromisso. Apenas uma conversa para entender suas necessidades.
          </p>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-terracotta" />
    </section>
  );
};

export default CTASection;
