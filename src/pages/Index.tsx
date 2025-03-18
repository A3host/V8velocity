
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Wrench, Gauge, Settings, ToolIcon, Shield, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    const sections = [servicesRef, aboutRef, testimonialsRef];
    
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      sections.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const services = [
    {
      title: "Diagnostics & Repair",
      description: "Advanced computer diagnostics to identify and resolve complex issues with pinpoint accuracy.",
      icon: <Gauge />,
      link: "/services#diagnostics"
    },
    {
      title: "Performance Tuning",
      description: "Custom engine mapping and performance enhancements to unleash your vehicle's full potential.",
      icon: <Settings />,
      link: "/services#performance"
    },
    {
      title: "Maintenance Service",
      description: "Comprehensive maintenance programs tailored to your specific vehicle model and driving habits.",
      icon: <Wrench />,
      link: "/services#maintenance"
    },
    {
      title: "Electrical Systems",
      description: "Expert diagnostics and repair of complex electrical and electronic vehicle systems.",
      icon: <ToolIcon />,
      link: "/services#electrical"
    },
    {
      title: "Warranty Services",
      description: "Manufacturer-approved service that maintains your warranty while providing superior care.",
      icon: <Shield />,
      link: "/services#warranty"
    },
    {
      title: "Consultation",
      description: "Expert advice on vehicle maintenance, upgrades, and personalized performance solutions.",
      icon: <Users />,
      link: "/services#consultation"
    }
  ];

  const testimonials = [
    {
      text: "The level of detail and care they put into servicing my Aston Martin is unmatched. These mechanics are true craftsmen.",
      author: "James H.",
      role: "Aston Martin Owner"
    },
    {
      text: "After taking my Range Rover to three other workshops with no solution, Precision Auto fixed the issue on the first attempt. Exceptional expertise.",
      author: "Sarah L.",
      role: "Range Rover Enthusiast"
    },
    {
      text: "Their performance tuning transformed my M4. Precision Auto combines old-school knowledge with cutting-edge technology perfectly.",
      author: "Robert K.",
      role: "BMW M4 Owner"
    }
  ];

  return (
    <div className="page-transition">
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-workshop-slate/30">
        <div className="workshop-container">
          <div ref={servicesRef} className="appear-animation text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">Comprehensive Auto Services</h2>
            <p className="text-workshop-charcoal max-w-2xl mx-auto">
              From routine maintenance to performance enhancements, our team of certified technicians delivers precision service for luxury and high-performance vehicles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-workshop-navy text-workshop-navy font-medium rounded-md transition-all duration-300 hover:bg-workshop-navy hover:text-workshop-light"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div ref={aboutRef} className="appear-animation order-2 md:order-1">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">
                Precision Engineering at Its Finest
              </h2>
              <p className="text-workshop-charcoal mb-4">
                Founded in 1998, Precision Auto has established itself as the premier destination for discerning vehicle owners who demand excellence without compromise.
              </p>
              <p className="text-workshop-charcoal mb-6">
                Our workshop combines traditional craftsmanship with state-of-the-art technology, allowing us to service everything from classic cars to the latest luxury and performance vehicles with the same meticulous attention to detail.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-workshop-slate/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-workshop-titanium mb-1">25+</span>
                  <span className="text-sm text-workshop-charcoal">Years Experience</span>
                </div>
                <div className="bg-workshop-slate/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-workshop-titanium mb-1">12K+</span>
                  <span className="text-sm text-workshop-charcoal">Vehicles Serviced</span>
                </div>
                <div className="bg-workshop-slate/30 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-workshop-titanium mb-1">98%</span>
                  <span className="text-sm text-workshop-charcoal">Client Satisfaction</span>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
              >
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 appear-animation" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="bg-workshop-navy/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1635774855317-edf3ee4463db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Workshop interior" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-workshop-light p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-start space-x-3">
                    <div className="text-workshop-titanium mt-1">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-workshop-navy">Quality Guaranteed</h4>
                      <p className="text-sm text-workshop-charcoal mt-1">
                        All our repairs and services come with a comprehensive warranty and satisfaction guarantee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-workshop-navy text-workshop-light">
        <div className="workshop-container">
          <div ref={testimonialsRef} className="appear-animation text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/20 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-workshop-silver max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the discerning vehicle owners who trust us with their prized possessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-workshop-navy-800 border border-workshop-navy-700 p-6 rounded-xl appear-animation"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 text-workshop-titanium">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <blockquote className="mb-6 text-workshop-light/90 italic">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-workshop-light">{testimonial.author}</p>
                  <p className="text-sm text-workshop-silver">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-workshop-slate/70 to-workshop-slate/30">
        <div className="workshop-container">
          <div className="max-w-3xl mx-auto text-center appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-6">
              Ready to Experience True Automotive Excellence?
            </h2>
            <p className="text-workshop-charcoal mb-8 text-lg">
              Schedule a consultation with our team of experts or visit our workshop to discuss your vehicle's needs and discover the Precision Auto difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
              >
                Book a Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border border-workshop-navy text-workshop-navy font-medium rounded-md transition-all duration-300 hover:bg-workshop-navy hover:text-workshop-light"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
