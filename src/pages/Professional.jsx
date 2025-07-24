import React from 'react'
import { Building2, TrendingUp, Globe, Users, Award, Target } from "lucide-react"

function Professional() {

    const milestones = [
    {
      period: "Present",
      role: "Finance Controller",
      company: "HEL Limited",
      location: "United Kingdom",
      description:
        "Leading financial operations for a laboratory-equipment manufacturer, overseeing preparation and analysis of financial reports for EMEA and US regions.",
      achievements: [
        "Ensuring accuracy and transparency in financial reporting",
        "Maintaining alignment with corporate objectives across regions",
        "Managing complex international financial operations",
        "Implementing strategic financial planning initiatives",
      ],
    },
    {
      period: "Previous Role",
      role: "Senior Finance Professional",
      company: "UPDC PLC",
      location: "Lagos, Nigeria",
      description:
        "Gained broad experience in finance, compliance, and strategic planning within Nigeria's leading real estate and infrastructure development company.",
      achievements: [
        "Developed expertise in project finance and real estate accounting",
        "Contributed to strategic planning and business development",
        "Enhanced skills in compliance and regulatory reporting",
        "Built strong foundation in corporate finance",
      ],
    },
    {
      period: "Career Development",
      role: "Finance Professional",
      company: "British American Tobacco Nigeria (BATN) & Landmark",
      location: "Lagos, Nigeria",
      description:
        "Advanced through roles at leading multinational and local companies, developing comprehensive financial expertise and strategic thinking capabilities.",
      achievements: [
        "Gained experience in multinational corporate environment",
        "Developed skills in financial analysis and reporting",
        "Built expertise in compliance and risk management",
        "Enhanced understanding of diverse business models",
      ],
    },
    {
      period: "Career Launch",
      role: "Accounting Professional",
      company: "The Kitchen",
      location: "Lagos, Nigeria",
      description:
        "Launched professional career at a premier hospitality chain, where he honed core accounting skills and built foundation for future success.",
      achievements: [
        "Developed fundamental accounting and financial skills",
        "Gained experience in hospitality industry operations",
        "Built strong work ethic and professional standards",
        "Established foundation for career advancement",
      ],
    },
  ]

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">Professional Journey</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A career built on excellence, strategic thinking, and meaningful impact from Lagos, Nigeria to the United
            Kingdom
          </p>
        </div>

        {/* Career Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-50 p-8 rounded-lg text-center">
            <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">10+</h3>
            <p className="text-slate-600">Years of Experience</p>
          </div>

          <div className="bg-amber-50 p-8 rounded-lg text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">5+</h3>
            <p className="text-slate-600">Major Organizations</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg text-center">
            <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">2</h3>
            <p className="text-slate-600">Continents</p>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">Career Progression</h2>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <div className="text-sm font-medium text-amber-600 mb-2">{milestone.period}</div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{milestone.role}</h3>
                      <p className="text-slate-700 font-medium mb-1">{milestone.company}</p>
                      <p className="text-slate-600 text-sm flex items-center">
                        <Globe size={14} className="mr-1" />
                        {milestone.location}
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-slate-600 leading-relaxed mb-6">{milestone.description}</p>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-slate-600">
                              <Award size={16} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-slate-900 rounded-lg p-8 lg:p-12 text-white mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">Current Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Financial Leadership</h3>
              <p className="text-slate-200 leading-relaxed">
                As Finance Controller for HEL Limited, Mayowa oversees complex international financial operations,
                ensuring accuracy, transparency, and strategic alignment across EMEA and US regions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Board Governance</h3>
              <p className="text-slate-200 leading-relaxed">
                Serving on boards of three reputable companies across UK and Nigeria, providing strategic guidance on
                governance, risk management, and sustainable growth strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-12">Core Competencies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strategic Financial Planning</h3>
              <p className="text-slate-600 text-sm">
                Comprehensive financial strategy development and implementation across international markets
              </p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Analysis & Reporting</h3>
              <p className="text-slate-600 text-sm">
                Advanced financial modeling, analysis, and reporting capabilities
              </p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Leadership & Governance</h3>
              <p className="text-slate-600 text-sm">Board-level leadership and corporate governance expertise</p>
            </div>

            <div className="text-center">
              <Building2 className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
              <p className="text-slate-600 text-sm">Comprehensive risk assessment and mitigation strategies</p>
            </div>

            <div className="text-center">
              <Globe className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">International Operations</h3>
              <p className="text-slate-600 text-sm">Cross-border financial management and regulatory compliance</p>
            </div>

            <div className="text-center">
              <Award className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strategic Advisory</h3>
              <p className="text-slate-600 text-sm">Board advisory and strategic consulting across multiple sectors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profesional