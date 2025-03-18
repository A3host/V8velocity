
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Tool, Briefcase, Shield } from 'lucide-react';

const About = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
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
    
    const sections = [storyRef, valuesRef, teamRef];
    
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
      icon: <Tool />,
      title: "Innovation",
      description: "We embrace both traditional craftsmanship and cutting-edge technology to provide superior automotive care."
    },
    {
      icon: <Briefcase />,
      title: "Integrity",
      description: "We conduct our business with honesty and transparency, providing clear communication and fair pricing."
    }
  ];

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

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-workshop-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Classic car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-workshop-navy/70"></div>
        </div>
        
        <div className="workshop-container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/20 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-workshop-light mb-6">
              Craftsmanship Meets Innovation
            </h1>
            <p className="text-workshop-silver text-lg mb-8 leading-relaxed">
              Since 1998, Precision Auto has set the standard for luxury and performance vehicle care in the UK, combining traditional expertise with cutting-edge technology.
            </p>
            <a 
              href="#our-story" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-workshop-titanium text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium/90"
            >
              Discover Our Story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="section-padding">
        <div className="workshop-container">
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
                  Over the years, we've expanded our facilities and capabilities while maintaining our commitment to personalized service. Every vehicle that enters our workshop receives the same meticulous attention to detail, whether it's a classic British sports car or the latest supercar.
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
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section-padding bg-workshop-slate/30">
        <div className="workshop-container">
          <div ref={valuesRef} className="appear-animation text-center mb-16">
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
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div ref={teamRef} className="appear-animation text-center mb-16">
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
          
          <div className="mt-12 text-center appear-animation" style={{ animationDelay: '400ms' }}>
            <p className="text-workshop-charcoal mb-6">
              Our extended team includes specialists in various automotive disciplines, ensuring we have the expertise to handle any challenge.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Workshop Tour Section */}
      <section className="py-20 bg-workshop-navy text-workshop-light">
        <div className="workshop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="appear-animation">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/20 rounded-full">
                Our Facility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-workshop-light mb-6">
                State-of-the-Art Workshop
              </h2>
              <p className="text-workshop-silver mb-6">
                Our purpose-built facility combines cutting-edge diagnostic equipment with traditional workshop tools, creating the perfect environment for precision automotive care.
              </p>
              <p className="text-workshop-silver mb-8">
                We continuously invest in the latest technology and equipment to stay at the forefront of automotive service and repair. From advanced computer diagnostics to specialized tools for exotic vehicles, we have everything needed to service your vehicle to the highest standard.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-workshop-titanium text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium/90"
              >
                Schedule a Visit <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 appear-animation" style={{ animationDelay: '200ms' }}>
              <div className="aspect-[3/4] bg-workshop-navy-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Workshop interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-workshop-navy-800 rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1572982294294-cdf0df1f4e14?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Diagnostic equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-workshop-navy-800 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591064036883-01264eaec3a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Tool organization" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-workshop-navy-800 rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Vehicle on lift" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
