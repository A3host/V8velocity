
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="md:order-2 animate-fade-in">
        <h3 className="text-2xl font-semibold text-workshop-navy mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-workshop-titanium/10 text-workshop-titanium p-3 rounded-full">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-medium text-workshop-navy">Our Location</h4>
              <p className="text-workshop-charcoal mt-1">123 Workshop Drive, London, UK SE1 7PB</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-workshop-titanium/10 text-workshop-titanium p-3 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-medium text-workshop-navy">Phone Number</h4>
              <p className="text-workshop-charcoal mt-1">+44 20 1234 5678</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-workshop-titanium/10 text-workshop-titanium p-3 rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-medium text-workshop-navy">Email Address</h4>
              <p className="text-workshop-charcoal mt-1">info@precisionauto.co.uk</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-workshop-navy mb-6">Business Hours</h3>
          <div className="space-y-2 text-workshop-charcoal">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:order-1 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <h3 className="text-2xl font-semibold text-workshop-navy mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-workshop-charcoal mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-workshop-slate rounded-md focus:outline-none focus:ring-2 focus:ring-workshop-titanium/50 transition"
              placeholder="John Smith"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-workshop-charcoal mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-workshop-slate rounded-md focus:outline-none focus:ring-2 focus:ring-workshop-titanium/50 transition"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-workshop-charcoal mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-workshop-slate rounded-md focus:outline-none focus:ring-2 focus:ring-workshop-titanium/50 transition"
                placeholder="+44 7123 456789"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-workshop-charcoal mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-workshop-slate rounded-md focus:outline-none focus:ring-2 focus:ring-workshop-titanium/50 transition"
            >
              <option value="">Select a subject</option>
              <option value="service">Service Inquiry</option>
              <option value="product">Product Information</option>
              <option value="appointment">Book an Appointment</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-workshop-charcoal mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-workshop-slate rounded-md focus:outline-none focus:ring-2 focus:ring-workshop-titanium/50 transition"
              placeholder="How can we help you?"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-workshop-light/30 border-t-workshop-light rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
