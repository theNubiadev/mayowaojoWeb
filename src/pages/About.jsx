import React from "react";
import {
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  CheckCircle,
  Airplay,
} from "lucide-react";
import Hero from "../assets/hero.jpg";

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <Airplay className="h-4 w-4 mr-2" />
            More about me
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mt-4">
                  About Me
                </span>
                Mayowa Ojo
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Dynamic finance professional, entrepreneur, and public affairs
                advocate
              </p>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>United Kingdom</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-gray-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <img src={Hero} alt="Mayowa Ojo" className="object-cover mb-14" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Biography
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Mayowa Ojo is a dynamic finance professional, entrepreneur, and public affairs advocate with deep roots in
            Nigeria and a growing influence on the global stage. Born in Ibadan, Oyo State, Nigeria, he built a solid
            academic foundation—earning diplomas in Accountancy from The Polytechnic Ibadan and a bachelor's degree in
            accounting from Lagos State University.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            A member of leading professional bodies in both Nigeria and the United Kingdom, Mayowa is committed to the
            highest standards of financial expertise and lifelong learning. His career spans multiple continents,
            bringing international perspective to every role he undertakes.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Currently serving as Finance Controller for HEL Limited, a laboratory-equipment manufacturer, Mayowa
            oversees the preparation and analysis of financial reports for the EMEA and US regions, ensuring accuracy,
            transparency, and alignment with corporate objectives.
          </p>
          </div>
      </section>

      {/* Professional Journey */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Journey
            </h3>
          </div>
          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mayowa launched his career in Lagos, Nigeria, at The Kitchen, a
              premier hospitality chain, where he honed his core accounting
              skills. He then advanced to roles at British American Tobacco
              Nigeria (BATN), Landmark, and UPDC PLC, gaining broad experience
              in finance, compliance, and strategic planning.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              In pursuit of new challenges, Mayowa relocated to the United
              Kingdom, where he now serves as Finance Controller for{" "}
              <a href="#">HEL Limited</a>, a laboratory-equipment manufacturer.
              There, he oversees the preparation and analysis of financial
              reports for the EMEA and US regions, ensuring accuracy,
              transparency, and alignment with corporate objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="bg-white rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl  font-bold text-slate-900 text-center mb-12">Key Milestones</h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-slate-900 w-4 h-4 rounded-full mt-2 mr-6 flex-shrink-0"></div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Present</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Finance Controller - HEL Limited</h3>
                <p className="text-slate-600">
                  Overseeing financial operations for EMEA and US regions, ensuring accuracy and corporate alignment.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 w-4 h-4 rounded-full mt-2 mr-6 flex-shrink-0"></div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">2025</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Political Advocacy & Parliamentary Tour</h3>
                <p className="text-slate-600">
                  Contested Briars Ward seat in Hatfield for UK Labour Party and was honored with invitation to tour
                  House of Parliament.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-slate-900 w-4 h-4 rounded-full mt-2 mr-6 flex-shrink-0"></div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                  <span className="text-sm font-medium text-slate-600">Career Journey</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Professional Development Across Continents
                </h3>
                <p className="text-slate-600">
                  Career progression from The Kitchen (Lagos) to BATN, Landmark, UPDC PLC, gaining broad experience in
                  finance, compliance, and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Advocacy */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Political Advocacy
            </h2>
          </div>
          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              As a proud member of the UK Labour Party, Mayowa contested the
              Briars Ward seat in Hatfield in January 2025, channelling his
              passion for equity and accountability into grassroots campaigning.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In February 2025, he was honoured with an invitation to tour the
              House of Parliament, enriching his understanding of UK
              parliamentary processes and policymaking.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              An active contributor to Labour at local and national levels,
              Mayowa bridges diaspora perspectives with UK political discourse,
              championing policies that foster economic empowerment, youth
              development, and transparent governance.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Credentials & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Professional qualifications and continuous education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Bachelor in Accounting</p>
                  <p className="text-gray-600">Lagos State University</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Diploma in Accountancy</p>
                  <p className="text-gray-600">The Polytechnic Ibadan</p>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Memberships
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">ICAN</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">ACCA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default About;
