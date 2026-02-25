import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import portfolioVideo2 from "@/assets/portfolio-video-2.mp4";
import portfolioVideo3 from "@/assets/portfolio-video-3.mp4";
import portfolioVideo4 from "@/assets/portfolio-video-4.mp4";
import portfolioVideo5 from "@/assets/portfolio-video-5.mp4";
import portfolioVideo6 from "@/assets/portfolio-video-6.mp4";
import portfolioVideo7 from "@/assets/portfolio-video-7.mp4";
import portfolioVideo8 from "@/assets/portfolio-video-8.mp4";
import portfolioVideo9 from "@/assets/portfolio-video-9.mp4";

const portfolioItems = [
  {
    id: 2,
    title: "Clínica Vida Saudável",
    description: "Rebranding completo e estratégia digital",
    video: portfolioVideo2,
  },
  {
    id: 3,
    title: "Dra. Camila Ferreira",
    description: "Conteúdo educativo e autoridade médica",
    video: portfolioVideo3,
  },
  {
    id: 4,
    title: "Centro Médico Premium",
    description: "Experiência do paciente e jornada digital",
    video: portfolioVideo4,
  },
  {
    id: 5,
    title: "Dr. André Oliveira",
    description: "Performance e captação de pacientes",
    video: portfolioVideo5,
  },
  {
    id: 6,
    title: "Dra. Marina Costa",
    description: "Estratégia de conteúdo e posicionamento",
    video: portfolioVideo6,
  },
  {
    id: 7,
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    video: portfolioVideo7,
  },
  {
    id: 8,
    title: "Amet Consectetur",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna",
    video: portfolioVideo8,
  },
  {
    id: 9,
    title: "Adipiscing Elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    video: portfolioVideo9,
  },
];

const PortfolioCard = ({ item }: { item: typeof portfolioItems[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="group cursor-pointer">
      <div 
        className="relative bg-graphite-dark rounded-2xl overflow-hidden mb-6 shadow-elevated group-hover:shadow-soft transition-all duration-300"
        style={{ aspectRatio: '9/16' }}
        onClick={handlePlayClick}
      >
        {item.video ? (
          <>
            <video
              ref={videoRef}
              src={item.video}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
            />
            {/* Play button overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-graphite-dark/30">
                <div className="w-20 h-20 rounded-full bg-terracotta/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-terracotta transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            )}
            {/* Mute/Unmute button */}
            {isPlaying && (
              <button
                onClick={handleMuteToggle}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-200 z-10"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite via-graphite-dark to-graphite-dark">
            <div className="w-20 h-20 rounded-full bg-terracotta/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-terracotta transition-all duration-300">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/5 transition-colors duration-300 pointer-events-none" />
      </div>
      
      <h3 className="font-serif text-xl font-medium text-graphite-dark mb-2 group-hover:text-terracotta transition-colors duration-300">
        {item.title}
      </h3>
      <p className="font-sans text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-sans uppercase tracking-[0.25em] text-terracotta mb-6 font-medium">
            Portfólio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-graphite-dark mb-8 text-balance leading-tight">
            Nossos trabalhos em destaque
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para médicos e clínicas que buscam excelência.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="pl-6 basis-[280px] md:basis-[320px] lg:basis-[360px]">
                  <PortfolioCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="relative static translate-y-0 border-graphite-light text-graphite hover:bg-graphite hover:text-beige h-12 w-12" />
              <CarouselNext className="relative static translate-y-0 border-graphite-light text-graphite hover:bg-graphite hover:text-beige h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
