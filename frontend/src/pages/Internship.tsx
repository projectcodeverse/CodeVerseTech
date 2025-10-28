import React, { useState } from 'react';
import { submitInternship } from '../utils/api';
import toast from 'react-hot-toast';

const Internship: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    domain: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const domains = ['Web Development', 'Mobile App Development', 'AI/ML', 'IoT', 'Data Science'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await submitInternship(formData);
      toast.success('Application submitted successfully!');
      setFormData({ name: '', email: '', college: '', domain: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Internship Program</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our comprehensive internship program and gain hands-on experience 
            in cutting-edge technologies with industry mentorship.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right ">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Internship?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Real-world project experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>One-on-one mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Industry-standard tools and practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3">✓</span>
                  <span>Job placement assistance</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {domains.map((domain, index) => (
                <div key={index} className="bg-background p-6 rounded-lg text-center">
                  <h3 className="font-semibold text-primary">{domain}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">Apply for Internship</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    College/University *
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Domain *
                  </label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Domain</option>
                    {domains.map((domain) => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join this internship?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your motivation and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;