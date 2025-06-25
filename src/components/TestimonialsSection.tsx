import { Card } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Name1",
      role: "Professor",
      text: "",
      icon: "💎",
      color: "from-terracotta-600 to-terracotta-800"
    },
    {
      name: "Name2",
      role: "Past-Boss",
      text: "",
      icon: "✨",
      color: "from-terracotta-500 to-terracotta-700"
    },
    {
      name: "Name3",
      role: "Close Friend",
      text: "",
      icon: "🌟",
      color: "from-terracotta-400 to-terracotta-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-terracotta-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-luckiest text-center text-brown-800 mb-16 animate-slide-up">
          Testimonials
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-90`} />
              <div className="relative p-8 text-white">
                <div className="text-4xl mb-6 text-center opacity-80 animate-bounce-gentle">
                  {testimonial.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-sm opacity-90 mb-6 text-center">
                  {testimonial.role}
                </p>
                
                <p className="text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
