import React, { useState } from 'react';
import { submitContact } from '../utils/api';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await submitContact(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@codeverse.tech</p>
                    <p className="text-gray-600">careers@codeverse.tech</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-gray-600">+91 8765432109</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Tech Park, Electronic City<br />
                      Bengaluru, Karnataka 560100<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    🔗
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-primary hover:text-accent">LinkedIn</a>
                      <a href="#" className="text-primary hover:text-accent">GitHub</a>
                      <a href="#" className="text-primary hover:text-accent">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267813266897!2d77.6648!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149c0c9c3f8b%3A0x7c2b0c0c0c0c0c0c!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
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
                        Email *
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;