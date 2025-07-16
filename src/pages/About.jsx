import React from "react";
import {
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import Hero from "../assets/bghero.png"; // Adjust the path as necessary

// This is the About page for Mayowa Ojo, a Certified Public Accountant
// It includes a brief introduction, professional background, and credentials
function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                About Mayowa Ojo
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                dynamic finance professional, entrepreneur, and
              public affairs advocate
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
                <img src={Hero} className="object-cover mb-14" />
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
              Mayowa Ojo is a dynamic finance professional, entrepreneur, and
              public affairs advocate with deep roots in Nigeria and a growing
              influence on the global stage. Born in Ibadan, Oyo State, Nigeria,
              he built a solid academic foundation—earning Diplomas in
              Accountancy from The Polytechnic Ibadan and a bachelor’s degree in
              accounting from Lagos State University.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A member of leading professional bodies in both Nigeria and the
              United Kingdom, Mayowa is committed to the highest standards of
              financial expertise and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entrepreneurship & Leadership
            </h2>
          </div>
          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mayowa launched his career in Lagos, Nigeria, at The Kitchen, a
              premier hospitality chain, where he honed his core accounting
              skills. He then advanced to roles at British American Tobacco
              Nigeria (BATN), Landmark, and UPDC PLC, gaining broad experience
              in finance, compliance, and strategic planning.
            </p>
            {/*  */}
            <p className="text-xl text-gray-700 leading-relaxed">
              In pursuit of new challenges, Mayowa relocated to the United
              Kingdom, where he now serves as Finance Controller for HEL
              Limited, a laboratory-equipment manufacturer. There, he oversees
              the preparation and analysis of financial reports for the EMEA and
              US regions, ensuring accuracy, transparency, and alignment with
              corporate objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Political Advocacy Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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

      {/* Credentials */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Journey
            </h2>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credentials & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Professional qualifications and continuous education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">
                    Bachelor in Accounting
                  </p>
                  <p className="text-gray-600">Lagos State University </p>
                </div>
                {/* <div>
                  <p className="font-semibold text-gray-900">
                      Diploma in Accountancy 
                  </p>
                  <p className="text-gray-600">
                    The Polytechnic Ibadan
                  </p>
                </div> */}
              </div>
            </div>

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
                  <span className="text-gray-700">
                    Institute of Chartered Accountants of Nigeria (ICAN)
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Association of National Accountants of Nigeria (ANAN)
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    Chartered Institute of Taxation of Nigeria (CITN)
                  </span>
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
