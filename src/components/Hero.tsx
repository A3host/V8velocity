
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-workshop-slate to-workshop-light"></div>
      
      {/* Main content */}
      <div className="workshop-container relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroRef} className="appear-animation">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/10 rounded-full">
            Turbotech Auto Workshop
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-workshop-navy mb-6">
              Precision Engineering for <span className="text-workshop-titanium">Exceptional</span> Performance
            </h1>
            <p className="text-workshop-charcoal mb-8 text-lg md:pr-12 leading-relaxed">
              At Precision Auto, we combine traditional craftsmanship with cutting-edge technology to deliver unparalleled automotive care for luxury and performance vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="flex items-center gap-2 px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-charcoal hover:shadow-lg"
              >
                Our Services <ArrowRight size={16} />
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 border border-workshop-navy text-workshop-navy font-medium rounded-md transition-all duration-300 hover:bg-workshop-navy hover:text-workshop-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-full h-[500px] bg-workshop-navy/5 rounded-2xl overflow-hidden shadow-xl transition-transform duration-700 hover:scale-[1.02]">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                <div className="w-full h-full bg-gradient-to-tr from-workshop-navy/40 to-transparent flex items-end p-8">
                  <div className="bg-workshop-light/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                    <p className="text-sm font-medium text-workshop-navy">
                      Expert service for luxury and performance vehicles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-workshop-light to-transparent"></div>
    </section>
  );
};

export default Hero;
