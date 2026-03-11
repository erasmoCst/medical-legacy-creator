import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDesktop from "@/assets/team-hero-desktop.png";
import heroMobile from "@/assets/team-hero-mobile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-end md:items-center pb-16 md:pb-0 relative overflow-hidden">

      {/* Background */}
      <div
        className="
          absolute inset-x-0 top-16 bottom-0 md:top-0
          bg-cover
          bg-[center_75%]        /* posição mobile */
          md:bg-[85%_60%]        /* direita + baixo no desktop */
        "
        style={{ backgroundImage: `url(${heroMobile})` }}
      />

      <div
        className="
          absolute inset-x-0 top-16 bottom-0 md:top-0
          bg-cover
          hidden md:block
          bg-[right_top]
        "
        style={{ backgroundImage: `url(${heroDesktop})` }}
      />



      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 md:via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pb-8 pt-20 md:py-32">
        <div className="max-w-3xl">
          {/* Text content */}
          <div className="text-left">
            <div className="animate-fade-up opacity-0">
              <span className="inline-block text-sm font-sans uppercase tracking-[0.3em] text-terracotta mb-6 font-medium">
                Marketing Médico Estratégico
              </span>
            </div>

            <h1 className="animate-fade-up opacity-0 animation-delay-100 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-beige leading-tight mb-8 text-balance">
              Construa um legado médico que vai além do consultório.
            </h1>

            <p className="animate-fade-up opacity-0 animation-delay-200 font-sans text-lg md:text-xl text-beige-dark/90 max-w-xl mb-12 leading-relaxed">
              Posicionamento estratégico, experiência do paciente e performance digital
              para médicos e clínicas que querem crescer com ética e autoridade.
            </p>

            <div className="animate-fade-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5541987987873" target="_blank" rel="noopener noreferrer">
                <Button className="bg-terracotta text-white hover:bg-terracotta-dark shadow-elevated hover:shadow-soft text-base px-8 py-6 rounded-full transition-all duration-300 hover:-translate-y-1">
                  Quero estruturar meu posicionamento
                  {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                </Button>
              </a>
              <a href="https://wa.me/5541987987873" target="_blank" rel="noopener noreferrer">
                <Button className="border-2 border-beige/30 text-beige hover:bg-beige/10 text-base px-8 py-6 rounded-full transition-all duration-300 bg-transparent">
                  Conhecer a Re Bravè Med
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="animate-fade-in opacity-0 animation-delay-500 w-px h-24 bg-gradient-to-b from-terracotta/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
