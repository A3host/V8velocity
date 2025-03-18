
import { useEffect, useRef, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  category: string;
  description: string;
  delay?: number;
}

const ProductCard = ({ name, image, price, category, description, delay = 0 }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
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

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      ref={cardRef}
      className="appear-animation bg-workshop-light rounded-xl overflow-hidden shadow-sm border border-workshop-slate/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-workshop-slate/30">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-workshop-slate/20">
            <div className="w-8 h-8 border-2 border-workshop-titanium/30 border-t-workshop-titanium rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-workshop-light/80 backdrop-blur-sm text-workshop-navy rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-workshop-navy mb-2">{name}</h3>
        <p className="text-workshop-charcoal text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-workshop-titanium font-semibold">{price}</span>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-workshop-navy text-workshop-light transition-all duration-300 hover:bg-workshop-titanium">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
