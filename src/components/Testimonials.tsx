
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Dodo Tasks has completely transformed how our engineering team manages action items from our daily standups. No more lost tasks!",
      author: "Sarah Johnson",
      role: "Engineering Manager",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "We've tried many productivity tools, but none integrate with Slack as seamlessly as Dodo Tasks. It's like having a smart assistant in every channel.",
      author: "Michael Chang",
      role: "Product Director",
      company: "InnovateLabs",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "The ability to maintain context with each task saves us so much time. Everyone knows exactly what needs to be done without extra explanation.",
      author: "Rachel Torres",
      role: "Marketing Team Lead",
      company: "GrowthBoost",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Loved by Productive Teams</h2>
          <p className="text-lg text-gray-600">
            See how teams are using Dodo Tasks to streamline their workflow and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-dodo-200" />
              <p className="text-gray-700 mb-8 text-lg relative">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
