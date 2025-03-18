
import { useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
        }
      },
      { threshold: 0.1 }
    );
    
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    
    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 bg-workshop-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-workshop-navy/70"></div>
        </div>
        
        <div className="workshop-container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/20 rounded-full">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-workshop-light mb-6">
              Get In Touch
            </h1>
            <p className="text-workshop-silver text-lg mb-6 leading-relaxed">
              Whether you need to schedule a service, have a question about your vehicle, or want to learn more about our offerings, we're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div className="bg-workshop-light rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-workshop-navy mb-8">
                How Can We Help You?
              </h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-workshop-slate/30">
        <div className="workshop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="appear-animation">
              <h2 className="text-3xl font-bold text-workshop-navy mb-6">Find Us</h2>
              <p className="text-workshop-charcoal mb-6">
                Our workshop is conveniently located in central London with easy access from major routes. We offer a comfortable waiting area with complimentary refreshments and Wi-Fi for clients who prefer to wait while their vehicle is being serviced.
              </p>
              <div className="space-y-4 text-workshop-charcoal">
                <p className="font-medium">Address:</p>
                <p>123 Workshop Drive<br />London, UK SE1 7PB</p>
                <p className="font-medium mt-4">Hours of Operation:</p>
                <div className="space-y-1">
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
            
            <div ref={mapRef} className="appear-animation">
              <div className="bg-workshop-light rounded-xl overflow-hidden shadow-md h-[400px]">
                {/* This would normally contain an actual map embed */}
                <div className="w-full h-full bg-workshop-slate/50 flex items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-workshop-navy font-medium mb-2">Interactive Map</p>
                    <p className="text-workshop-charcoal text-sm">
                      A Google Maps embed would typically be placed here, showing the location of the workshop at 123 Workshop Drive, London, UK SE1 7PB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div className="text-center mb-16 appear-animation">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              Find answers to common questions about our services, booking process, and policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 appear-animation" style={{ animationDelay: '200ms' }}>
            <div className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50">
              <h3 className="text-xl font-semibold text-workshop-navy mb-3">How do I book a service?</h3>
              <p className="text-workshop-charcoal">
                You can book a service by calling us directly, using our online contact form, or visiting our workshop in person. We recommend booking at least a week in advance for routine services.
              </p>
            </div>
            
            <div className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50">
              <h3 className="text-xl font-semibold text-workshop-navy mb-3">Do you offer collection and delivery?</h3>
              <p className="text-workshop-charcoal">
                Yes, we offer a collection and delivery service within a 15-mile radius of our workshop. This service is complimentary for vehicles under warranty or maintenance contracts.
              </p>
            </div>
            
            <div className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50">
              <h3 className="text-xl font-semibold text-workshop-navy mb-3">What payment methods do you accept?</h3>
              <p className="text-workshop-charcoal">
                We accept all major credit and debit cards, bank transfers, and cash payments. For larger repairs or restoration projects, we can arrange flexible payment plans.
              </p>
            </div>
            
            <div className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50">
              <h3 className="text-xl font-semibold text-workshop-navy mb-3">Do you work on classic cars?</h3>
              <p className="text-workshop-charcoal">
                Yes, we have specialists who are experienced in working with classic and vintage vehicles. We understand the unique requirements and care needed for these special automobiles.
              </p>
            </div>
            
            <div className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50">
              <h3 className="text-xl font-semibold text-workshop-navy mb-3">Will servicing with you affect my warranty?</h3>
              <p className="text-workshop-charcoal">
                No, we are an authorized service center for many manufacturers, and all our work complies with manufacturer specifications to maintain your warranty.
              </p>
            </div>
            
            <div className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50">
              <h3 className="text-xl font-semibold text-workshop-navy mb-3">Do you provide detailed service reports?</h3>
              <p className="text-workshop-charcoal">
                Yes, after every service you'll receive a comprehensive report detailing all work performed, parts replaced, and recommendations for future maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-workshop-navy text-workshop-light">
        <div className="workshop-container">
          <div className="max-w-3xl mx-auto text-center appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Superior Automotive Care?
            </h2>
            <p className="text-workshop-silver mb-8 text-lg">
              Contact us today to discuss your vehicle's needs or schedule an appointment with our expert team.
            </p>
            <div className="space-x-4">
              <a 
                href="tel:+442012345678" 
                className="px-8 py-4 bg-workshop-titanium text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium/90"
              >
                Call Us Now
              </a>
              <a 
                href="mailto:info@precisionauto.co.uk" 
                className="px-8 py-4 border border-workshop-light text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-light/10"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
