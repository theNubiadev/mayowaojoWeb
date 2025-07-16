import React from "react";
import {Mail, Phone, MapPin, Linkedin, Twitter} from "lucide-react";
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
            <p className="text-gray-300 leading-relaxed max-w-md">
              {/* Helping individuals and businesses in Lagos manage their finances with integrity, precision, and over 10 years of professional experience. */}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">info@mayowaojo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+234 (80) 5214 8610</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {/* <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-3">
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">Tax Preparation</a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">Bookkeeping</a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">Payroll Services</a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">Financial Planning</a>
            </div>
          </div> */}
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