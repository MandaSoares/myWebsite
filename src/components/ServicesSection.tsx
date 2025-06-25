export const ServicesSection = () => {
  const services = [
    {
      title: "Mentorship",
      description: "I can mentor other girls who are interested in STEM by sharing my experiences and my tips. I can help them develop their skills, overcome their difficulties and make their dreams come true.",
      image: "/images/mentoria.jpg",
      icon: "👥"
    },
    {
      title: "Teaching",
      description: "I offer support and guidance for participants in the OBI (Brazilian Computer Olympics) and OBA (Brazilian Astronomy Olympics), with materials and activities adapted to each level of knowledge.",
      image: "/images/obi-oba.jpg",
      icon: "💻"
    },
    {
      title: "STEM Inspiration Talk",
      description: "I can give talks through the ConsCientistas, inspiring girls and young people to explore the fascinating universe of Science, Technology, Engineering and Mathematics (STEM).",
      image: "/images/palestra.jpg",
      icon: "🎤"
    }
  ];

  return (
    <section id="abilities" className="py-20 px-6 bg-bege">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-luckiest text-brown-800 mb-4">
            What I Can Do for You
          </h2>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 animate-slide-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative group">
                <div className="w-full flex justify-center lg:justify-end items-end">
                  <img 
                      src={service.image}
                      alt={service.title}
                      className="w-[360px] sm:w-[400px] md:w-[440px] lg:w-[480px] xl:w-[520px] object-contain align-bottom rounded-2xl"
                    />
                    
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-block px-4 py-2 bg-brown-800/20 rounded-full">
                  <span className="text-brown-800 font-medium text-sm">Service</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-brown-800">
                  {service.title}
                </h3>
                
                <p className="text-brown-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
