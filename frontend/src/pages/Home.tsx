import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Done' },
    { number: '100+', label: 'Interns Trained' },
    { number: '25+', label: 'Clients Served' },
    { number: '3+', label: 'Years Experience' }
  ];
 
  
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      text: 'CodeVerse internship transformed my career. The mentorship and real-world projects were invaluable.'
    },
    {
      name: 'Rahul Kumar',
      role: 'Full Stack Developer',
      text: 'Amazing learning experience! The team is supportive and the projects are cutting-edge.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering the Future of Tech 🚀
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            CodeVerse specializes in custom software solutions, mobile app development, 
            and academic project internships. Join us to innovate, create, and connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/internship"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Apply for Internship
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Software Development', icon: '💻', desc: 'Custom web and desktop applications' },
              { title: 'Mobile Apps', icon: '📱', desc: 'iOS and Android app development' },
              { title: 'Internship Training', icon: '🎓', desc: 'Hands-on learning programs' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="inline-block mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">What Our Interns Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;