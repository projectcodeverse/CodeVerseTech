import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Software Development',
      description: 'Custom web applications, desktop software, and enterprise solutions built with modern technologies.',
      features: ['React/Angular/Vue.js', 'Node.js/Python/Java', 'Database Design', 'API Development']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)']
    },
    {
      icon: '🎓',
      title: 'Internship Training',
      description: 'Comprehensive training programs with hands-on projects and industry mentorship.',
      features: ['Live Projects', 'One-on-One Mentoring', 'Industry Exposure', 'Certification']
    },
    {
      icon: '📊',
      title: 'Academic Project Guidance',
      description: 'Expert guidance for final year projects, research work, and academic assignments.',
      features: ['Project Planning', 'Technical Support', 'Documentation', 'Presentation Skills']
    },
    {
      icon: '🚀',
      title: 'Startup Tech Consultation',
      description: 'Technology consulting for startups including architecture design and tech stack selection.',
      features: ['Tech Strategy', 'Architecture Design', 'Team Building', 'MVP Development']
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for existing applications.',
      features: ['Bug Fixes', 'Performance Optimization', '24/7 Support', 'Regular Updates']
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technology solutions designed to empower your business 
            and accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow group"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', desc: 'Building your solution with regular updates' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
            ].map((process, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expert team and proven methodologies.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/internship"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;