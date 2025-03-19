import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white ">
      <div className="container py-12 max-w-screen-2xl mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LOGO</h3>
            <p className="text-blue-200 mb-4">
              High-quality printing & design services for businesses and
              individuals. From business cards to banners, we bring your ideas
              to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/business-cards"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Business Cards
                </a>
              </li>
              <li>
                <a
                  href="/products/flyers"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Flyers & Brochures
                </a>
              </li>
              <li>
                <a
                  href="/products/banners"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Banners & Signs
                </a>
              </li>
              <li>
                <a
                  href="/products/promotional"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Promotional Products
                </a>
              </li>
              <li>
                <a
                  href="/products/packaging"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Packaging
                </a>
              </li>
              <li>
                <a
                  href="/products/apparel"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Apparel & Clothing
                </a>
              </li>
              <li>
                <a
                  href="/products/all"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  View All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                <span className="text-blue-200">
                  123 Print Street
                  <br />
                  Design City, DC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-200 mr-2" />
                <a
                  href="tel:+11234567890"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-200 mr-2" />
                <a
                  href="mailto:info@printingcompany.com"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  info@printingcompany.com
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-blue-200 text-sm mb-2">
              Subscribe to get special offers and updates
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-800 hover:bg-blue-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Printing Company. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
