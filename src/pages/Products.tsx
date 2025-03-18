
import { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const productsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (productsRef.current) {
      observer.observe(productsRef.current);
    }
    
    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);

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
    },
    {
      id: 7,
      name: 'High-Performance Exhaust System',
      image: 'https://images.unsplash.com/photo-1602986205463-441766cb7524?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£899.99',
      category: 'performance',
      description: 'Stainless steel construction with optimized flow for increased power and distinctive sound.'
    },
    {
      id: 8,
      name: 'Advanced Diagnostic Tool',
      image: 'https://images.unsplash.com/photo-1607254492548-9a8dbd4e6c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£299.99',
      category: 'maintenance',
      description: 'Professional-grade diagnostic scanner for comprehensive vehicle system analysis.'
    },
    {
      id: 9,
      name: 'Transmission Fluid Exchange Kit',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecce4e2e4cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£79.99',
      category: 'fluids',
      description: 'Complete kit for transmission fluid exchange with premium synthetic fluid.'
    },
    {
      id: 10,
      name: 'Luxury Car Cover',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£159.99',
      category: 'accessories',
      description: 'Weatherproof, breathable cover with soft interior lining for superior vehicle protection.'
    },
    {
      id: 11,
      name: 'Performance Coilover Suspension',
      image: 'https://images.unsplash.com/photo-1616093875201-79b4ca5e0bb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£1,299.99',
      category: 'performance',
      description: 'Adjustable height and damping for optimized handling and stance.'
    },
    {
      id: 12,
      name: 'Brake System Flush Kit',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      price: '£89.99',
      category: 'maintenance',
      description: 'Professional brake fluid flush kit with premium DOT 4 fluid for optimal braking performance.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 bg-workshop-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Products background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-workshop-navy/70"></div>
        </div>
        
        <div className="workshop-container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-workshop-titanium uppercase bg-workshop-titanium/20 rounded-full">
              Premium Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-workshop-light mb-6">
              Quality Parts & Accessories
            </h1>
            <p className="text-workshop-silver text-lg mb-6 leading-relaxed">
              We offer a carefully curated selection of premium parts, fluids, and accessories to enhance your vehicle's performance, appearance, and longevity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section-padding">
        <div className="workshop-container">
          <div ref={productsRef} className="appear-animation mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <h2 className="text-3xl font-bold text-workshop-navy">Our Products</h2>
              
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-16 bg-workshop-slate/30">
        <div className="workshop-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
              <button className="px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium">
                Contact for Custom Orders
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
