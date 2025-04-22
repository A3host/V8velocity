
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-workshop-navy text-workshop-light">
      <div className="workshop-container">
        <div className="section-padding grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-3 md:col-span-3">
            <Link to="/" className="inline-block text-xl font-semibold tracking-tighter mb-4">
              V8<span className="text-workshop-titanium">VELOCITY</span>
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
          
          {/* <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Engine Rebuilds
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Performance Tuning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Electrical Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-workshop-silver hover:text-workshop-titanium transition-colors duration-300">
                  Preventative Maintenance
                </Link>
              </li>
            </ul>
          </div> */}
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {/* <li className="flex items-start">
                <MapPin size={18} className="text-workshop-titanium mt-1 mr-3 flex-shrink-0" />
                <span className="text-workshop-silver">123 Workshop Drive, London, UK SE1 7PB</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-workshop-titanium mr-3 flex-shrink-0" />
                <span className="text-workshop-silver">+44 20 1234 5678</span>
              </li> */}
              <li className="flex items-center">
                <Mail size={18} className="text-workshop-titanium mr-3 flex-shrink-0" />
                <span className="text-workshop-silver">info@v8velocityltd.co.uk</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* <div className="border-t border-workshop-navy-700 py-6 text-center md:text-left text-sm text-workshop-silver flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Precision Auto Workshop Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-workshop-titanium transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-workshop-titanium transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
