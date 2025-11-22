import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Talent</span>
              <span className="text-accent">Mobi</span>
            </h3>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <p className="text-white/80 leading-relaxed">
              At TalentMobi, our story is one rooted in a deep passion for matching talent with opportunity. We are driven by the belief that the right placement can transform lives and empower businesses to thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
            <div className="space-y-4">
              <a
                href="tel:+918867852555"
                className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-sm text-white/60">Call Us</p>
                  <p className="font-semibold">+91 886 785 2555</p>
                </div>
              </a>

              <a
                href="mailto:info@talentmobi.com"
                className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-sm text-white/60">Email Us</p>
                  <p className="font-semibold">info@talentmobi.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-semibold">
                    1590, 1st floor, 1st A Cross, 3rd Main Road, Vijayanagar, Chandra layout, Bengaluru-560040
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Talent Mobi - Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
