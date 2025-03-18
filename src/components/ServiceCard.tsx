
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  link: string;
}

const ServiceCard = ({ title, description, icon, delay = 0, link }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100 + delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="appear-animation bg-workshop-light p-6 rounded-xl shadow-sm border border-workshop-slate/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
    >
      <div className="text-workshop-titanium bg-workshop-titanium/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-workshop-navy mb-2">{title}</h3>
      <p className="text-workshop-charcoal mb-6 flex-grow">{description}</p>
      <Link 
        to={link}
        className="group inline-flex items-center text-workshop-navy font-medium text-sm hover:text-workshop-titanium transition-colors duration-300"
      >
        Learn more 
        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
