import React from 'react'
import { Award, TrendingUp, Users, CheckCircle, Shield } from 'lucide-react';
import Hero from "../assets/hero1.jpg"; // Adjust the path as necessary
function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                <Award className="h-4 w-4 mr-2" />
                Finance | Entrepreneur | Politics
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mt-4">
                  Hi I'm
                </span>
                Mayowa Ojo

              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl lg:max-w-none">
                Guided by integrity, leadership, and service, i embody a new generation of professionals who integrate business excellence with social purpose.
              </p>
            </div>

            {/* Professional Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={Hero}
                    alt="Mayowa Ojo  - Professional Accountant"
                    className="w-full h-full object-cover"
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission and Vision Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving excellence in financial services while building a better future for our community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">My Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower individuals and businesses with exceptional financial expertise, innovative solutions, and personalized service that drives sustainable growth and financial security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering accurate, timely, and strategic financial guidance while maintaining the highest standards of professional integrity and client confidentiality.
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-medium">
                <CheckCircle className="h-5 w-5 mr-2" />
                Excellence in Financial Services
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">My Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Guided by integrity, leadership, and service, Mayowa Ojo embodies a new generation of professionals who integrate business excellence with social purpose.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether crafting financial strategy, steering entrepreneurial ventures, or engaging in public service, he is dedicated to building a more inclusive, prosperous, and accountable world.
              </p>
              <div className="mt-6 flex items-center text-purple-600 font-medium">
                <Award className="h-5 w-5 mr-2" />
                Building a Better Future
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                <p className="text-gray-600 leading-relaxed">
                  Upholding the highest ethical standards in all my professional dealings and relationships.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  Delivering superior financial services through continuous learning and professional development.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Service</h4>
                <p className="text-gray-600 leading-relaxed">
                  Putting needs first and building lasting relationships based on trust and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;