import logoRebrave from "@/assets/logo-rebrave-branca.png";

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-6 font-medium">
            Quem Somos
          </span>
          
          <div className="space-y-6">
            <p className="font-sans text-lg md:text-xl text-graphite-dark leading-relaxed">
              Somos a Re Bravè Med, uma agência especializada em marketing médico, focada em ajudar médicos e clínicas a crescerem com posicionamento, autoridade e previsibilidade, sempre respeitando as diretrizes do CFM.
            </p>
            
            <p className="font-sans text-lg md:text-xl text-graphite-dark leading-relaxed">
              Atuamos exclusivamente com profissionais da saúde que entendem que marketing não é sobre volume ou promessas, mas sobre estratégia, ética e construção de marca.
            </p>
            
            <p className="font-sans text-lg md:text-xl text-graphite-dark leading-relaxed">
              Nosso trabalho vai além de posts e anúncios. Estruturamos o ecossistema completo do negócio médico, conectando branding, experiência do paciente, comercial e performance para gerar crescimento sustentável.
            </p>
            
            <p className="font-sans text-lg md:text-xl text-graphite-dark leading-relaxed">
              Somos especialistas em dermatologia, cirurgia plástica e nutrologia, nichos onde percepção de valor e posicionamento são decisivos.
            </p>
            
            <p className="font-sans text-lg md:text-xl text-graphite-dark leading-relaxed font-medium">
              Nosso propósito é claro: transformar presença digital em autoridade real e crescimento consistente, construindo marcas médicas sólidas e duradouras.
            </p>
          </div>
          
          {/* Decorative element with logo */}
          <div className="mt-12 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-terracotta flex items-center justify-center p-3">
              <img 
                src={logoRebrave} 
                alt="Re Bravè Med" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
