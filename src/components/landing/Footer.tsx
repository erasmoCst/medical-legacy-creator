import { Instagram } from "lucide-react";
import logoRebrave from "@/assets/logo-rebrave-branca.png";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-terracotta py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <img 
                  src={logoRebrave} 
                  alt="Re Bravè Med" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="font-sans text-sm text-white/60">
                Construindo o legado de médicos e clínicas.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-8">
                <a href="#cenario" className="text-sm text-white/60 hover:text-white transition-colors font-sans">
                  Cenário
                </a>
                <a href="#servicos" className="text-sm text-white/60 hover:text-white transition-colors font-sans">
                  Serviços
                </a>
                <a href="#para-quem" className="text-sm text-white/60 hover:text-white transition-colors font-sans">
                  Para Quem
                </a>
                <a href="#portfolio" className="text-sm text-white/60 hover:text-white transition-colors font-sans">
                  Portfólio
                </a>
              </nav>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href="https://www.instagram.com/rebravemed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors p-2"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors p-2"
            >
              <TikTokIcon />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="font-sans text-xs text-white/40">
                © {new Date().getFullYear()} Re Bravè Med. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-sans">
                  Política de Privacidade
                </a>
                <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-sans">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
