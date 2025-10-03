import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Denny Hariadi Simanjuntak",
    role: "CEO",
    company: "RelibotAI",
    content: "Really nice app!.",
    avatar: "DS"
  },
    {
    name: "Aries Thio Gunawan",
    role: "CTO",
    company: "RelibotAI",
    content: "Really nice app!.",
    avatar: "AG"
  },
    {
    name: "Billy Jonathan",
    role: "CTO",
    company: "RelibotAI",
    content: "Really nice app!.",
    avatar: "BJ"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about RelibotAI.
          </p>
        </div>

        <center>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Coming Soon
          </h3>
        </center>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group hover:border-primary/50"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;