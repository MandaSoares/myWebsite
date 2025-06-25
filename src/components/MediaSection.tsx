import { Card } from "@/components/ui/card";

export const MediaSection = () => {
  const mediaItems = [
    {
      title: "G1 Globo",
      subtitle: "Estudantes lideram clube de incentivo às mulheres na ciência e representam o Brasil em projeto astronômico da Nasa: 'Inspirar meninas'",
      image: "/images/midia1.jpg",
      type: "news",
      url: "https://g1.globo.com/sp/sorocaba-jundiai/noticia/2023/09/30/estudantes-lideram-clube-de-incentivo-as-mulheres-na-ciencia-e-representam-o-brasil-em-projeto-astronomico-da-nasa-inspirar-meninas.ghtml"
    },
    {
      title: "Blog Facens",
      subtitle: "Alunas Facens buscam sistemas planetários e mundos semelhantes à Terra espalhados pela Galáxia",
      image: "/images/midia2.jpg",
      type: "blog",
      url: "https://blog.facens.br/estudantes-universitarias-brasileiras-buscam-sistemas-planetarios-e-mundos-semelhantes-a-terra-espalhados-pela-galaxia/?utm_campaign=newsletter_72_disparo&utm_medium=email&utm_source=RD+Station"
    },
    {
      title: "Revista Segura",
      subtitle: "Conheça as Meninas Brasileiras que Querem mudar o Mundo",
      image: "/images/midia3.jpg",
      type: "article",
      url: "https://revistasegura.com.br/conheca-as-meninas-brasileiras-que-querem-mudar-o-mundo/"
    },
    {
      title: "TN Petróleo",
      subtitle: "Estudantes universitárias brasileiras buscam planetas fora do Sistema Solar",
      image: "/images/midia4.jpg",
      type: "news",
      url: "https://tnpetroleo.com.br/academy/estudantes-universitarias-brasileiras-buscam-sistemas-planetarios-e-mundos-semelhantes-a-terra-espalhados-pela-galaxia/"
    }
  ];

  const handleMediaClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="media" className="py-20 px-6 bg-[#5B2C06]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-luckiest text-white mb-4">
            Media
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => handleMediaClick(item.url)}
            >
              <div className="aspect-video">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-earth-200 text-earth-800 text-xs font-medium rounded-full">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-earth-600 leading-relaxed">
                  {item.subtitle}
                </p>
                <div className="mt-4 inline-flex items-center text-earth-600 font-medium hover:text-earth-700 transition-colors">
                  <span>Leia mais</span>
                  <span className="ml-2 transform transition-transform hover:translate-x-1">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
