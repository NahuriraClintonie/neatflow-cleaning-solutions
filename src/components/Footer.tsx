import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">NeatFlow Cleaning Solutions</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Professional cleaning services for homes and businesses. Your trusted partner for a cleaner, healthier space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline opacity-90">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline opacity-90">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline opacity-90">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline opacity-90">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:underline opacity-90">Residential Cleaning</a></li>
              <li><a href="/services" className="hover:underline opacity-90">Commercial Cleaning</a></li>
              <li><a href="/services" className="hover:underline opacity-90">Carpet Care</a></li>
              <li><a href="/services" className="hover:underline opacity-90">Pressure Washing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@neatflow.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Main St, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; {currentYear} NeatFlow Cleaning Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms of Service</a>
              <a href="#" className="hover:opacity-100">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
