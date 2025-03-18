
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Gauge, Settings, Tool, Shield, Users, Zap, RotateCcw, Cpu, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const specializationsRef = useRef<HTMLDivElement>(null);
  
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
    
    const sections = [servicesRef, processRef, specializationsRef];
    
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
      id: "diagnostics",
      title: "Advanced Diagnostics",
      description: "Using state-of-the-art diagnostic equipment, we identify issues with precision. Our technicians are trained to interpret complex data and pinpoint problems quickly.",
      icon: <Gauge size={24} />,
      image: "https://images.unsplash.com/photo-1560179324-c7e50169bdca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "performance",
      title: "Performance Tuning",
      description: "Enhance your vehicle's performance with custom ECU mapping, exhaust upgrades, and suspension modifications. We fine-tune every aspect for optimal results.",
      icon: <Settings size={24} />,
      image: "https://images.unsplash.com/photo-1553502936-3fd3e6c36929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "maintenance",
      title: "Preventative Maintenance",
      description: "Regular servicing prevents costly repairs and extends vehicle life. Our maintenance programs are tailored to your specific vehicle model and driving habits.",
      icon: <Wrench size={24} />,
      image: "https://images.unsplash.com/photo-1493043326353-ef466075dd33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "electrical",
      title: "Electrical Systems",
      description: "From troubleshooting complex electrical faults to installing high-end audio systems, our specialists handle all automotive electrical needs with precision.",
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1453939674550-c76f42921085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "engine",
      title: "Engine Rebuilds",
      description: "Complete engine overhauls and rebuilds performed to exacting standards. We restore power, efficiency, and reliability to aging or damaged engines.",
      icon: <RotateCcw size={24} />,
      image: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "software",
      title: "Software Updates",
      description: "Keep your vehicle's systems current with manufacturer software updates and security patches, ensuring optimal performance and functionality.",
      icon: <Cpu size={24} />,
      image: "https://images.unsplash.com/photo-1533750169210-6f7d1dd68d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "warranty",
      title: "Warranty Services",
      description: "Maintain your manufacturer warranty with our certified service. We follow all manufacturer specifications while providing superior care.",
      icon: <Shield size={24} />,
      image: "https://images.unsplash.com/photo-1555652736-e92021d28a39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "consultation",
      title: "Expert Consultation",
      description: "Personalized advice on vehicle maintenance, performance upgrades, and custom modifications tailored to your driving style and preferences.",
      icon: <Users size={24} />,
      image: "https://images.unsplash.com/photo-1564591111581-d797ab2fbcdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const specializations = [
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Ferrari",
    "Jaguar",
    "Land Rover",
    "Maserati",
    "Mercedes-Benz",
    "Porsche",
    "Range Rover",
    "Rolls-Royce"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your vehicle's needs, your concerns, and your performance goals to create a tailored service plan."
    },
    {
      number: "02",
      title: "Comprehensive Inspection",
      description: "Our technicians perform a thorough multi-point inspection to identify current and potential issues."
    },
    {
      number: "03",
      title: "Detailed Service Proposal",
      description: "You receive a transparent breakdown of recommended services, costs, and timeframes with no hidden fees."
    },
    {
      number: "04",
      title: "Precision Service",
      description: "Our certified technicians perform all agreed-upon work with meticulous attention to detail and quality control."
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Each vehicle undergoes rigorous testing to ensure all systems function optimally before delivery."
    },
    {
      number: "06",
      title: "Follow-up Care",
      description: "We maintain detailed service records and provide ongoing support to keep your vehicle performing at its best."
    }
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-workshop-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1597762117709-859f744b84c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Workshop background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-workshop-navy/70"></div>
        </div>
        
        <div className="workshop-container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/20 rounded-full">
              Professional Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-workshop-light mb-6">
              Expert Automotive Care for Exceptional Vehicles
            </h1>
            <p className="text-workshop-silver text-lg mb-8 md:pr-12 leading-relaxed">
              Our comprehensive range of services combines traditional craftsmanship with cutting-edge technology to maintain and enhance your luxury or performance vehicle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="px-6 py-3 bg-workshop-titanium text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium/90"
              >
                Explore Services
              </a>
              <Link 
                to="/contact" 
                className="px-6 py-3 border border-workshop-light text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-light/10"
              >
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="workshop-container">
          <div ref={servicesRef} className="appear-animation text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">Comprehensive Automotive Solutions</h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              From routine maintenance to complex performance modifications, our skilled technicians provide exceptional service for discerning vehicle owners.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                id={service.id}
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center appear-animation ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="bg-workshop-navy/5 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex flex-col h-full">
                    <div className="text-workshop-titanium bg-workshop-titanium/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-workshop-navy mb-4">{service.title}</h3>
                    <p className="text-workshop-charcoal mb-6 flex-grow">{service.description}</p>
                    <Link 
                      to="/contact" 
                      className="group inline-flex items-center text-workshop-navy font-medium hover:text-workshop-titanium transition-colors duration-300"
                    >
                      Enquire about this service 
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="section-padding bg-workshop-slate/30">
        <div className="workshop-container">
          <div ref={processRef} className="appear-animation text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">The Precision Auto Experience</h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              Our systematic approach ensures every vehicle receives meticulous attention and care from initial consultation to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50 hover:shadow-md transition-all duration-300 appear-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-workshop-titanium/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-workshop-navy mb-3">{step.title}</h3>
                <p className="text-workshop-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specializations Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div ref={specializationsRef} className="appear-animation text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">Specialized in Premium Brands</h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              Our technicians are specifically trained to work with high-end, luxury, and performance vehicles.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {specializations.map((brand, index) => (
              <div 
                key={index}
                className="bg-workshop-light p-5 rounded-xl border border-workshop-slate/50 text-center hover:border-workshop-titanium/50 transition-all duration-300 appear-animation"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium text-workshop-navy">{brand}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 appear-animation" style={{ animationDelay: '600ms' }}>
            <p className="text-workshop-charcoal mb-6">
              Don't see your vehicle brand listed? We service many other premium and luxury brands.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
            >
              Contact Us About Your Vehicle <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-workshop-navy text-workshop-light">
        <div className="workshop-container">
          <div className="max-w-3xl mx-auto text-center appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Superior Service?
            </h2>
            <p className="text-workshop-silver mb-8 text-lg">
              Book a service appointment or consultation with our expert technicians today.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-workshop-titanium text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium/90"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
