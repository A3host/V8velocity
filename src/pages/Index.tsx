
import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { Wrench, Gauge, Settings, CircuitBoard, Shield, Users, ArrowRight, Zap, RotateCcw, Cpu, Award, Clock, Briefcase, Filter, Search } from 'lucide-react';

const Index = () => {
  // Refs for all sections
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const specializationsRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  // State for products filtering
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
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
    
    const sections = [
      servicesRef, aboutRef, testimonialsRef, productsRef, storyRef, 
      valuesRef, teamRef, processRef, specializationsRef, contactFormRef, mapRef
    ];
    
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

  // Services data
  const services = [
    {
      id: "diagnostics",
      title: "Advanced Diagnostics",
      description: "Using state-of-the-art diagnostic equipment, we identify issues with precision. Our technicians are trained to interpret complex data and pinpoint problems quickly.",
      icon: <Gauge />,
      image: "https://images.unsplash.com/photo-1560179324-c7e50169bdca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "performance",
      title: "Performance Tuning",
      description: "Enhance your vehicle's performance with custom ECU mapping, exhaust upgrades, and suspension modifications. We fine-tune every aspect for optimal results.",
      icon: <Settings />,
      image: "https://images.unsplash.com/photo-1553502936-3fd3e6c36929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "maintenance",
      title: "Preventative Maintenance",
      description: "Regular servicing prevents costly repairs and extends vehicle life. Our maintenance programs are tailored to your specific vehicle model and driving habits.",
      icon: <Wrench />,
      image: "https://images.unsplash.com/photo-1493043326353-ef466075dd33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "electrical",
      title: "Electrical Systems",
      description: "From troubleshooting complex electrical faults to installing high-end audio systems, our specialists handle all automotive electrical needs with precision.",
      icon: <Zap />,
      image: "https://images.unsplash.com/photo-1453939674550-c76f42921085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "engine",
      title: "Engine Rebuilds",
      description: "Complete engine overhauls and rebuilds performed to exacting standards. We restore power, efficiency, and reliability to aging or damaged engines.",
      icon: <RotateCcw />,
      image: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "software",
      title: "Software Updates",
      description: "Keep your vehicle's systems current with manufacturer software updates and security patches, ensuring optimal performance and functionality.",
      icon: <Cpu />,
      image: "https://images.unsplash.com/photo-1533750169210-6f7d1dd68d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Testimonials data
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

  // Product categories and data
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'performance', name: 'Performance Parts' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'fluids', name: 'Oils & Fluids' }
  ];

  const products = [
    {
      id: 1,
      name: 'High-Performance Air Filter',
      image: 'https://images.unsplash.com/photo-1536584754829-12214d404f32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£89.99',
      category: 'performance',
      description: 'Improved airflow and filtration for enhanced engine performance and longevity.'
    },
    {
      id: 2,
      name: 'Premium Synthetic Oil',
      image: 'https://images.unsplash.com/photo-1635359056637-1950c9d09811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£49.99',
      category: 'fluids',
      description: 'Advanced synthetic formula for superior engine protection and performance.'
    },
    {
      id: 3,
      name: 'Carbon Fiber Steering Wheel',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£349.99',
      category: 'accessories',
      description: 'Lightweight carbon fiber construction with premium leather grip for enhanced driving experience.'
    },
    {
      id: 4,
      name: 'Performance Brake Pads',
      image: 'https://images.unsplash.com/photo-1558704164-ab7a0016c1f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£129.99',
      category: 'performance',
      description: 'High-temperature performance brake pads for superior stopping power and reduced fade.'
    },
    {
      id: 5,
      name: 'Complete Service Kit',
      image: 'https://images.unsplash.com/photo-1572540688236-b3e5d78cd3c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£199.99',
      category: 'maintenance',
      description: 'All-inclusive service kit with premium filters, plugs, and fluids for comprehensive maintenance.'
    },
    {
      id: 6,
      name: 'LED Interior Lighting Kit',
      image: 'https://images.unsplash.com/photo-1551826152-d7518ee27220?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£69.99',
      category: 'accessories',
      description: 'Custom LED lighting system for interior ambiance and personalization.'
    }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Team data
  const team = [
    {
      name: "James Harrison",
      role: "Founder & Master Technician",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "With over 25 years of experience working with luxury and performance vehicles, James founded Precision Auto with a vision to combine traditional craftsmanship with modern technology."
    },
    {
      name: "Elizabeth Chen",
      role: "Performance Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Elizabeth specializes in performance tuning and engine optimization. Her expertise in ECU mapping and dyno tuning has helped countless clients unlock their vehicles' true potential."
    },
    {
      name: "Marcus Williams",
      role: "Diagnostic Expert",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Marcus has a unique ability to diagnose complex electrical and mechanical issues. His methodical approach and attention to detail make him invaluable for challenging problems."
    },
    {
      name: "Sophia Rodriguez",
      role: "Service Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Sophia ensures every client receives personalized service and that all work meets our exacting standards. Her organizational skills keep the workshop running efficiently."
    }
  ];

  // Company values
  const values = [
    {
      icon: <Shield />,
      title: "Uncompromising Quality",
      description: "We use only genuine or premium aftermarket parts and follow manufacturer specifications to ensure the highest quality service."
    },
    {
      icon: <Award />,
      title: "Technical Excellence",
      description: "Our technicians undergo continuous training to stay at the forefront of automotive technology and best practices."
    },
    {
      icon: <Users />,
      title: "Client Relationship",
      description: "We build long-term relationships based on trust, transparency, and exceeding expectations with every interaction."
    },
    {
      icon: <Clock />,
      title: "Timeliness",
      description: "We respect your time and schedule, ensuring accurate time estimates and on-time delivery of your vehicle."
    },
    {
      icon: <CircuitBoard />,
      title: "Innovation",
      description: "We embrace both traditional craftsmanship and cutting-edge technology to provide superior automotive care."
    },
    {
      icon: <Briefcase />,
      title: "Integrity",
      description: "We conduct our business with honesty and transparency, providing clear communication and fair pricing."
    }
  ];

  // Service process steps
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

  // Specializations
  const specializations = [
    "Aston Martin", "Audi", "Bentley", "BMW", 
    "Ferrari", "Jaguar", "Land Rover", "Maserati", 
    "Mercedes-Benz", "Porsche", "Range Rover", "Rolls-Royce"
  ];

  return (
    <div className="page-transition">
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-workshop-slate/30">
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
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
                link={`#${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Details Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div className="text-center mb-16">
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
                    <a 
                      href="#contact" 
                      className="group inline-flex items-center text-workshop-navy font-medium hover:text-workshop-titanium transition-colors duration-300"
                    >
                      Enquire about this service 
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Steps */}
          <div ref={processRef} className="appear-animation text-center mt-32 mb-16">
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
          
          {/* Specializations */}
          <div ref={specializationsRef} className="appear-animation text-center mt-32 mb-16">
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
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="workshop-container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">
              Craftsmanship Meets Innovation
            </h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              Since 1998, Precision Auto has set the standard for luxury and performance vehicle care in the UK, combining traditional expertise with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={storyRef} className="appear-animation">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-6">
                A Legacy of Excellence
              </h2>
              
              <div className="space-y-6 text-workshop-charcoal">
                <p>
                  Precision Auto was founded in 1998 by James Harrison, a master technician with extensive experience working with prestigious European manufacturers. What began as a small specialist workshop has evolved into one of the UK's premier destinations for luxury and performance vehicle care.
                </p>
                <p>
                  Our journey has always been guided by a simple philosophy: combine traditional craftsmanship with innovative technology to deliver exceptional results. This approach has earned us the trust of discerning vehicle owners across the country.
                </p>
                <p>
                  Today, our team of specialists continues to uphold the standards that have defined Precision Auto for over two decades: technical excellence, uncompromising quality, and a genuine passion for automotive perfection.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-workshop-titanium mb-1">25+</div>
                  <div className="text-sm text-workshop-charcoal">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-workshop-titanium mb-1">15</div>
                  <div className="text-sm text-workshop-charcoal">Expert Technicians</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-workshop-titanium mb-1">12K+</div>
                  <div className="text-sm text-workshop-charcoal">Vehicles Serviced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-workshop-titanium mb-1">98%</div>
                  <div className="text-sm text-workshop-charcoal">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="appear-animation" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="aspect-[4/3] bg-workshop-navy/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Classic car in workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-workshop-light p-5 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="italic text-workshop-charcoal">
                    "Our mission is to deliver a level of service and expertise that exceeds expectations with every vehicle we touch."
                  </p>
                  <p className="mt-2 font-medium text-workshop-navy">— James Harrison, Founder</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div ref={valuesRef} className="appear-animation text-center mt-32 mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">What Drives Us</h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              These core principles guide everything we do at Precision Auto, from how we approach vehicle care to how we interact with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50 hover:shadow-md transition-all duration-300 appear-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-workshop-titanium bg-workshop-titanium/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-workshop-navy mb-2">{value.title}</h3>
                <p className="text-workshop-charcoal">{value.description}</p>
              </div>
            ))}
          </div>
          
          {/* Team */}
          <div ref={teamRef} className="appear-animation text-center mt-32 mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">Meet The Experts</h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              Our team combines decades of experience with specialized expertise across all aspects of luxury and performance vehicle care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-workshop-light rounded-xl overflow-hidden shadow-sm border border-workshop-slate/50 hover:shadow-md transition-all duration-300 appear-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-workshop-slate/30">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-workshop-navy mb-1">{member.name}</h3>
                  <p className="text-workshop-titanium text-sm mb-3">{member.role}</p>
                  <p className="text-workshop-charcoal text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-workshop-slate/30">
        <div className="workshop-container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Premium Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">Quality Parts & Accessories</h2>
            <p className="text-workshop-charcoal max-w-3xl mx-auto">
              We offer a carefully curated selection of premium parts, fluids, and accessories to enhance your vehicle's performance, appearance, and longevity.
            </p>
          </div>
          
          <div ref={productsRef} className="appear-animation mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <h3 className="text-2xl font-bold text-workshop-navy">Our Products</h3>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-64 border border-workshop-slate rounded-md focus:outline-none focus:ring-2 focus:ring-workshop-titanium/50"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-workshop-charcoal/60" size={18} />
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-workshop-navy text-workshop-light'
                      : 'bg-workshop-slate/30 text-workshop-charcoal hover:bg-workshop-slate/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  category={categories.find(cat => cat.id === product.category)?.name || ''}
                  description={product.description}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-workshop-charcoal text-lg">No products match your search criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 px-4 py-2 bg-workshop-navy text-workshop-light rounded-md transition-colors duration-300 hover:bg-workshop-titanium"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Product info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="appear-animation">
              <h3 className="text-2xl font-semibold text-workshop-navy mb-4">Product Information</h3>
              <p className="text-workshop-charcoal mb-4">
                All products are available for purchase at our workshop. For vehicle-specific parts or special orders, please contact our team for assistance.
              </p>
              <p className="text-workshop-charcoal mb-4">
                We source our products directly from manufacturers and authorized distributors to ensure authenticity and quality. All parts come with a manufacturer warranty.
              </p>
              <p className="text-workshop-charcoal">
                Installation services are available for all products we sell. Our technicians are certified to install and calibrate performance parts for optimal results.
              </p>
            </div>
            
            <div className="appear-animation" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold text-workshop-navy mb-4">Custom Orders</h3>
              <p className="text-workshop-charcoal mb-4">
                Can't find what you're looking for? We specialize in sourcing rare and custom parts for luxury and performance vehicles. 
              </p>
              <p className="text-workshop-charcoal mb-6">
                Our extensive network of suppliers allows us to find genuine parts for classic, exotic, and limited-edition vehicles that might be difficult to source elsewhere.
              </p>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
              >
                Contact for Custom Orders
              </a>
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
      
      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="workshop-container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-4">
              Get In Touch
            </h2>
            <p className="text-workshop-charcoal max-w-2xl mx-auto">
              Whether you need to schedule a service, have a question about your vehicle, or want to learn more about our offerings, we're here to help.
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="bg-workshop-light rounded-2xl shadow-lg overflow-hidden mb-20">
            <div ref={contactFormRef} className="p-6 md:p-12 appear-animation">
              <h3 className="text-2xl font-bold text-workshop-navy mb-8">
                How Can We Help You?
              </h3>
              
              <ContactForm />
            </div>
          </div>
          
          {/* Map Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="appear-animation">
              <h3 className="text-2xl font-bold text-workshop-navy mb-6">Find Us</h3>
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
          
          {/* FAQs Section */}
          <div className="mt-20">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-workshop-slate/70 to-workshop-slate/30">
        <div className="workshop-container">
          <div className="max-w-3xl mx-auto text-center appear-animation">
            <h2 className="text-3xl md:text-4xl font-bold text-workshop-navy mb-6">
              Ready to Experience True Automotive Excellence?
            </h2>
            <p className="text-workshop-charcoal mb-8 text-lg">
              Schedule a consultation with our team of experts or visit our workshop to discuss your vehicle's needs and discover the Precision Auto difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
              >
                Book a Consultation
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border border-workshop-navy text-workshop-navy font-medium rounded-md transition-all duration-300 hover:bg-workshop-navy hover:text-workshop-light"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
