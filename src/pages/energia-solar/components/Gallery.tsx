import React from "react";

const Gallery: React.FC = () => {
  return (
    <section id="portfolio" className="py-section-padding bg-white">
      <div className="container-max mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            Portfólio
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
            Nossas Instalações
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 group relative overflow-hidden">
            <img
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Close-up of sleek black solar panels on a dark tiled roof, minimalist architectural photography"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2RCXzK3CXTJj27-R5Y4iTp7W6gJPUKheOe3XQukcm64R5g9tMBr4_YJYkb-lSjpBoL9Ondd_tF5NdsWDHc-ySXnrGrKeVpILMFNKEaQCDLIdryKBfM4OVTnhDynNOqJ2KMlrasKfJ2RZC04OPpho298t_yNF6_lEnJxG1pfQ4FV7H4fx-IW83XzW48rc61g-fR1qf-EECmQlaj5RiPpusSwvRkJvUCrDxpYT3kKnk5ZxwhgNUgav0XV1f1aY1p-j9bo9QXzwUz-Kh"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-label-caps text-label-caps">
                Projeto Residencial - Morumbi
              </p>
            </div>
          </div>
          <div className="md:col-span-5 group relative overflow-hidden">
            <img
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Modern house exterior with integrated solar energy solutions, sleek architectural lines"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMNHl9omppR4UmaMsbJnrjNPOiVqS_VxiRVCE3DcvBYMqn9n0j0Z7t_26NUXwCP5g6Lw5SEskoKKB71poibejCS7_dja39aLVLa7Ks4ujz0_n8fI8ZZPiQSDsbCeFF4NhAkw7w8FC1p3g3DoecuA9YeO6QcL4B85Rz_m3OQH_qxCAzJvvNOCBAZOKU4t9jZKToNpZM5cviJak83VZ0DqLh7hAAR8aDNwPc6gkGbkYZTla-Xjr5tZplFqMrfmFObpZYnAb7miequFmp"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-label-caps text-label-caps">
                Residência Alpha - Barueri
              </p>
            </div>
          </div>
          <div className="md:col-span-5 group relative overflow-hidden">
            <img
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Solar panel system installation on a high-end estate surrounded by manicured gardens"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOsfnEORpV9w55OfPgxDsqKyy0Cim1yRXR8xhxdXHP_eGpeZF7azsnqCv2TCSUFmZjLp0tu1mL6kiP4l9XFe64tfX4KpHY0K8rIYWfv550151DONoPtX49VIV5iVcSbuCG4FBBx4h2cOZmJofwDz-RIIkphBsGqfw9mWwj_iEwl9RZVe5WZPswA95IjKX0uExtC2BXQuRIRO3nPmTVWrAQMtqRCd9H6QgKRX6txSp8I_jmFGAY8GFJbqyVkaTFHsPgCx5WPX5yjmRo"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-label-caps text-label-caps">
                Fazenda Solar - Itatiba
              </p>
            </div>
          </div>
          <div className="md:col-span-7 group relative overflow-hidden">
            <img
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Contemporary home featuring solar roof and expansive glass windows at dusk"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSlXeIdAAVChVYDRYf25-liiIVW_t7alk18s1415V75TW4zHms6QBJAjr-yj6jL0oRiuOkH4t4a6Bg-O1O2nIbq0AnO7hwBmMLpHILIXEq-a64014gWFmpRol5qhjgr_c9-eWVusBggBe-G35in51EwlYJo8ynKXTn3SX540_Wa_YeT6K_IQJZjOOZ8-AvSWD3a7PWdZ72GwEMLZy6zJqldWfc6CxpcgUKAwayrqwEoNwakbRhE-6hbfCvndGjan6tBUoIc9Qf56gE"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-label-caps text-label-caps">
                Projeto Jardim Europa - São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
