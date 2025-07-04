import React from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare } from 'lucide-react';

function Contact() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Let's Start a Conversation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Ready to take control of your finances? Let's discuss how we can help you achieve your financial goals and streamline your accounting processes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+2341234567890"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <Phone className="h-5 w-5 mr-2" />
                            Call Now
                        </a>
                        <a
                            href="mailto:john.doe@email.com"
                            className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            Send Email
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;