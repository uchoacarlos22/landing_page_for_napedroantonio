import React from "react";

const Footer: React.FC = () => {
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white full-width mt-0">
      <div className="max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="text-xl font-bold text-secondary mb-6">NPA Solar</div>
          <p className="font-headline-lg text-sm leading-relaxed text-white/60">
            © {new Date().getFullYear()} NPA Solar. Engenharia de alto padrão em soluções residenciais de energia renovável.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-headline-lg text-sm uppercase tracking-wider">Serviços</h4>
          <ul className="space-y-4">
            <li><a className="text-white/60 font-headline-lg text-sm hover:text-white transition-colors" href="#como-funciona" onClick={(e) => scrollTo('como-funciona', e)}>Energia Solar Residencial</a></li>
            <li><a className="text-white/60 font-headline-lg text-sm hover:text-white transition-colors" href="#contato" onClick={(e) => scrollTo('contato', e)}>Consultoria Energética</a></li>
            <li><a className="text-white/60 font-headline-lg text-sm hover:text-white transition-colors" href="#faq" onClick={(e) => scrollTo('faq', e)}>Suporte e FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-headline-lg text-sm uppercase tracking-wider">Parceiros</h4>
          <ul className="space-y-4">
            <li><a className="text-white/60 font-headline-lg text-sm hover:text-white transition-colors" href="#por-que-npa" onClick={(e) => scrollTo('por-que-npa', e)}>Parceiros Arquitetos</a></li>
            <li><a className="text-white/60 font-headline-lg text-sm hover:text-white transition-colors" href="#por-que-npa" onClick={(e) => scrollTo('por-que-npa', e)}>Unidade Construção (NPA)</a></li>
            <li><a className="text-white/60 font-headline-lg text-sm hover:text-white transition-colors" href="#beneficios" onClick={(e) => scrollTo('beneficios', e)}>Sustentabilidade ESG</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-headline-lg text-sm uppercase tracking-wider">Contato</h4>
          <p className="text-white/60 font-headline-lg text-sm mb-4">São Paulo, SP - Brasil</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-secondary hover:text-white cursor-pointer transition-colors" aria-label="Email">mail</span>
            <span className="material-symbols-outlined text-secondary hover:text-white cursor-pointer transition-colors" aria-label="Telefone">phone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
