import React from 'react'
import { Award, Calendar, MapPin, GraduationCap, CheckCircle} from 'lucide-react';
import Hero from "../assets/bghero.jpg"

// This is the About page for Mayowa Ojo, a Certified Public Accountant
// It includes a brief introduction, professional background, and credentials
function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                <Award className="h-4 w-4 mr-2" />
                Certified Public Accountant
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                About Mayowa Ojo
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Your trusted financial partner with over a decade of experience in accounting and financial management, dedicated to helping you achieve financial success.
              </p>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-gray-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <img src={Hero} className="object-cover " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mayowa Ojo is a Certified Public Accountant (CPA) with over 10 years of experience in the field.
              He specializes in tax filing, bookkeeping, payroll, and financial strategy, helping both individuals
              and businesses navigate complex financial landscapes with confidence and precision.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Based in Lagos, Nigeria, Mayowa has built a reputation for integrity, precision, and personalized service.
              His commitment to staying current with the latest accounting standards and tax regulations ensures that
              his clients receive the most accurate and beneficial financial guidance available.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Mayowa believes that sound financial management is the foundation of personal and business success.
              He works closely with each client to understand their unique needs and develop customized solutions
              that promote long-term financial health and sustainable growth.
            </p>
          </div>
        </div>
      </section>


       {/* Credentials */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Credentials & Certifications</h2>
            <p className="text-xl text-gray-600">Professional qualifications and continuous education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Bachelor of Science in Accounting</p>
                  <p className="text-gray-600">University of Lagos</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Advanced Taxation Certificate</p>
                  <p className="text-gray-600">Chartered Institute of Taxation of Nigeria</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Memberships</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Institute of Chartered Accountants of Nigeria (ICAN)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Association of National Accountants of Nigeria (ANAN)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Chartered Institute of Taxation of Nigeria (CITN)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About