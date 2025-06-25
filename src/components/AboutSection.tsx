
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-sand-200 mt-16">
      <div className="container mx-auto max-w-10xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-luckiest text-brown-800 mb-8">
              About Me
            </h2>
            
            <div className="prose prose-lg text-brown-700 space-y-4">
              <p className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                My name is Amanda Soares and I believe that we can be agents of
                transformation in science and technology. I want to encourage, support, and
                empower girls in STEM (Science, Technology, Engineering, and
                Mathematics), promoting a fairer, more diverse, and innovative society.
              </p>
              
              <p className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                I am an enthusiast, an enabler, and an agent of transformation. I believe in
                the power of science and technology to transform the world and people. I
                have experience in creating and leading projects that positively impact the
                lives of girls, awakening their interest and confidence in STEM. My
                purpose is to apply my knowledge and skills to develop innovative and
                creative solutions for various sectors.
              </p>
              
              <p className="animate-fade-in" style={{animationDelay: '0.3s'}}>
                One of my projects is ConsCientistas, which I co-founded with other
                incredible women. It has directly impacted more than 1200 girls and has
                been supported by organizations like Força Meninas. We inspire and
                empower girls to become interested and involved in STEM through talks,
                mentoring and conversation circles. Another project I led was Sem Parar,
                where I taught girls how to hunt asteroids. It's a free initiative aimed at
                awakening girls' interest and passion for the exact and biological sciences.
              </p>
              
              <p className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                In addition to wanting to continue helping the population access quality
                information and education in STEM, I have a strong desire to work in the
                field of aeronautics. My goal is to contribute to technological innovations
                that can impact the space sector. I see this journey as an opportunity not
                only to achieve a great dream but also to apply my skills to projects that
                drive scientific and technological progress.
              </p>
              
              <p className="animate-fade-in" style={{animationDelay: '0.5s'}}>
                My passions guide me both in my personal and professional life. They bring
                me purpose and happiness, while also teaching me the fundamental values such
                as respect, dedication, humility, and gratitude. My goal is to help create an
                environment where more people can develop their potential, learn, and
                express themselves, contributing to a fairer, more inclusive, and innovative
                society.
              </p>
            </div>
          </div>

          {/* Right side - Images in column with 4 equal sized images */}
          <div className="flex flex-col gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/images/fotoimprensa.jpg"
                alt="Amanda in action"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/images/fotoequipe.jpg"
                alt="STEM activities"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/images/fotosemear.jpg"
                alt="Team collaboration"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img 
                src="/images/fotoimprensa2.jpg"
                alt="Conference presentation"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
