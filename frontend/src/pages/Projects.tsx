import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web',
      image: '🛒',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Food Delivery App',
      category: 'Mobile',
      image: '🍕',
      description: 'Cross-platform mobile app for food ordering with real-time tracking.',
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      id: 3,
      title: 'Smart Home IoT System',
      category: 'IoT',
      image: '🏠',
      description: 'IoT-based home automation system with mobile app control.',
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'React Native']
    },
    {
      id: 4,
      title: 'AI Chatbot Platform',
      category: 'AI',
      image: '🤖',
      description: 'Intelligent chatbot platform with natural language processing.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask']
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'Web',
      image: '📚',
      description: 'Comprehensive LMS with video streaming and progress tracking.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS']
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'Mobile',
      image: '💪',
      description: 'Mobile app for fitness tracking with workout plans and nutrition.',
      technologies: ['Flutter', 'Firebase', 'Health APIs']
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'IoT', 'AI'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various domains 
            and technologies, showcasing our expertise and innovation.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {project.image}
                  </div>
                  <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-800">Technologies:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-background text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-block bg-accent text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Collaborate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Completed Projects' },
              { number: '25+', label: 'Happy Clients' },
              { number: '15+', label: 'Technologies Used' },
              { number: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate and bring your innovative ideas to life. Our experienced team 
            is ready to tackle your next challenge.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;