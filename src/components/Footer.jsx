import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-xl font-bold">Mayowa Ojo</span>
              </div>
            </div>
      
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mayowa-ojo-865b29bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mayowa_ojo1?utm_source=qr&igsh=aGZ2aW5lM3F0aDJ6" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/1Aa3dyrj8U/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">hello@mayowaojo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+44 7519 531573</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Mayowa Ojo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;