import React from "react"
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, TrendingUp, Shield, Star } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
         <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
              <Award className="h-4 w-4 mr-2" />
              {/* Certified Accountant • 10+ Years Experience */}
              Accountant | Entrepreneur | Political Advocate
            </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"> Hi, I'm 
            <br/>
              Mayowa Ojo
              {/* <span className="block text-3xl md:text-4xl font-medium text-gray-600 mt-4">
                Your Trusted Financial Partnern
              </span> */}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              {/* Helping individuals and businesses in Lagos manage their finances with integrity, precision, and strategic insight for sustainable growth. */}
              Guided by integrity, leadership, and service, Mayowa Ojo embodies a new generation of professionals who integrate business excellence with social purpose. 
            </p>
            </div>
            </div>
        </section>

        {/* Vision & Values FSection */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vision &amp; Values
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Guided by integrity, leadership, and service, Mayowa Ojo embodies a new generation of professionals who integrate business excellence with social purpose. 
              Whether crafting financial strategy, steering entrepreneurial ventures, or engaging in public service, he is dedicated to building a more inclusive, prosperous, and accountable world.
            </p>
          </div>
        </section>
    </div>
  )
}

export default Home;