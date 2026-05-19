import { ScrollXCarousel, ScrollXCarouselContainer, ScrollXCarouselProgress, ScrollXCarouselWrap } from "./ui/scroll-x-carousel";
import { CardHoverReveal, CardHoverRevealContent, CardHoverRevealMain } from './ui/reveal-on-hover';
import { Badge } from './ui/badge';

import img1 from '../../../assets/solar/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.14.06.jpeg';
import img2 from '../../../assets/solar/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.32.jpeg';
import img3 from '../../../assets/solar/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.33 (1).jpeg';
import img4 from '../../../assets/solar/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.33 (2).jpeg';
import img5 from '../../../assets/solar/images/images_divulgacao/WhatsApp Image 2026-04-22 at 19.18.33.jpeg';

export const SLIDES = [
  {
    id: 'slide-1',
    title: 'Energia Residencial',
    description: 'Levamos economia e sustentabilidade para casas, garantindo independência e redução imediata na conta de luz.',
    services: ['homologação', 'instalação', 'garantia 25 anos'],
    type: 'Residencial',
    imageUrl: img1,
  },
  {
    id: 'slide-2',
    title: 'Painéis Alto Padrão',
    description: 'Sistemas de alta eficiência com módulos VIP e inversores híbridos de última geração.',
    services: ['engenharia', 'design integrado'],
    type: 'Premium',
    imageUrl: img2,
  },
  {
    id: 'slide-3',
    title: 'Sistemas Comerciais',
    description: 'Transforme o teto da sua empresa em uma usina. Ideal para galpões logísticos e clínicas.',
    services: ['trifásico', 'projetos grandes', 'ROI focado'],
    type: 'Comercial',
    imageUrl: img3,
  },
  {
    id: 'slide-4',
    title: 'Usinas Off-Grid',
    description: 'Projetos rurais e fazendas podem ser 100% independentes com nossa arquitetura fora da rede.',
    services: ['armazenamento', 'off-grid'],
    type: 'Agro',
    imageUrl: img4,
  },
  {
    id: 'slide-5',
    title: 'Eficiência Energética',
    description: 'Nossa engenharia analisa o seu telhado para extrair o máximo de irradiação solar em qualquer estação.',
    services: ['análise 3d', 'suporte técnico'],
    type: 'Consultoria',
    imageUrl: img5,
  },
];

export function DemoOne() {
  return (
    <ScrollXCarousel className="h-[150vh]">
      <ScrollXCarouselContainer className="h-dvh place-content-center flex flex-col gap-8 py-12 bg-surface">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">Nossas Especialidades</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Conheça as áreas onde a NPA se destaca no mercado de energia renovável.</p>
        </div>

        <div className=" pointer-events-none w-[12vw] h-[103%] absolute inset-[0_auto_0_0] z-10 bg-[linear-gradient(90deg,_var(--background)_35%,_transparent)]" />
        <div className="pointer-events-none bg-[linear-gradient(270deg,_var(--background)_35%,_transparent)] w-[15vw] h-[103%] absolute inset-[0_0_0_auto] z-10" />

        <ScrollXCarouselWrap className="flex-4/5 flex space-x-8 [&>*:first-child]:ml-8">
          {SLIDES.map((slide) => (
            <CardHoverReveal
              key={slide.id}
              className="min-w-[70vw] md:min-w-[38vw] shadow-xl border xl:min-w-[30vw] rounded-xl"
            >
              <CardHoverRevealMain>
                <img
                  alt={slide.title}
                  src={slide.imageUrl}
                  className="size-full aspect-square object-cover"
                />
              </CardHoverRevealMain>
              <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(0,0,0,.5)] backdrop-blur-3xl p-4">
                <div className="space-y-2">
                  <h3 className="text-sm text-white/80">Segmento</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="capitalize rounded-full bg-secondary text-primary">
                      {slide.type}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-white/80">Inclusos</h3>
                  <div className="flex flex-wrap gap-2">
                    {slide.services.map((service) => (
                      <Badge
                        key={service}
                        className="capitalize rounded-full bg-white/20 text-white hover:bg-white/30"
                        variant={'secondary'}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  <h3 className="text-white capitalize font-medium text-lg">
                    {slide.title}
                  </h3>
                  <p className="text-white/80 text-sm">{slide.description}</p>
                </div>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </ScrollXCarouselWrap>
        <ScrollXCarouselProgress
          className="bg-gray-200 mx-8 h-2 rounded-full overflow-hidden mt-6"
          progressStyle="size-full bg-primary rounded-full"
        />
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  )
}
