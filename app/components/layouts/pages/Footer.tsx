import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">YourBrand</h2>
          <p className="text-white/80">
            Building next-gen web apps with style, speed, and simplicity.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="w-5 h-5 hover:text-white/90 transition cursor-pointer" />
            <FaTwitter className="w-5 h-5 hover:text-white/90 transition cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-white/90 transition cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-white/80 mb-4">Get updates and offers straight to your inbox.</p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-white text-indigo-600 hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
