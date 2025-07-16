import React, {useState} from 'react'
import { Camera, Award, Users, Building, BookOpen, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import CoWorkerImage from '../assets/coworkers1.jpg';
import Headshot from "../assets/headshot.jpg";
import Campaign1 from "../assets/campaign1.jpg";
import Campaign2 from "../assets/campaign2.jpg";
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

   const galleryItems = [
    {
      id: 1,
      title: "Professional Headshot",
      description: "Mayowa Ojo, CPA.",
      category: "Professional",
      image: Headshot,
      icon: Users
    },
    {
      id: 2,
      title: "Office Environment",
      description: "With coworkers at Datal.",
      category: "Office",
      image: CoWorkerImage,
      icon: Building
    },
    {
      id: 3,
      title: "During Campaign",
      description: "Providing personalized financial advice and strategic planning to help clients achieve their financial goals.",
      category: "Services",
      image: Campaign1,
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Campaign Event",
      description: "Working diligently  ensuring compliance ",
      category: "Services",
      image: Campaign2,
      icon: BookOpen
    },
    {
      id: 5,
      title: "Professional Achievement",
      description: "Celebrating professional milestones and certifications that demonstrate our commitment to excellence.",
      category: "Achievement",
      image: "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Award
    },
    {
      id: 6,
      title: "Team Collaboration",
      description: "Working collaboratively to provide comprehensive financial solutions for our diverse client base.",
      category: "Professional",
      image: "https://images.pexels.com/photos/7688468/pexels-photo-7688468.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Users
    },
    {
      id: 7,
      title: "Financial Analysis",
      description: "Conducting detailed financial analysis and reporting to help businesses make informed decisions.",
      category: "Services",
      image: "https://images.pexels.com/photos/7688319/pexels-photo-7688319.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: TrendingUp
    },
    {
      id: 8,
      title: "Client Meeting Room",
      description: "Our dedicated meeting space where we conduct confidential client consultations and strategic planning sessions.",
      category: "Office",
      image: "https://images.pexels.com/photos/7688347/pexels-photo-7688347.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Building
    }
  ];
    const categories = ["All", "Professional", "Office", "Services", "Achievement"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
   <div className="min-h-screen pt-20">

     {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <Camera className="h-4 w-4 mr-2" />
            Professional Gallery
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up">
            Behind the Scenes
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up">
            Get to know me and experience the professional environment where i deliver exceptional  services to my valued clients.
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-600 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">8+</div>
              <div className="text-sm">Gallery Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4</div>
              <div className="text-sm">Categories</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-sm">Years Experience</div>
            </div> */}
          </div>
        </div>
      </section>

            {/* Filter Tabs */}
      <section className="py-12 px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  onClick={() => openModal(index)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {filteredItems[selectedImage].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {React.createElement(filteredItems[selectedImage].icon, {
                    className: "h-8 w-8 text-blue-600 mr-3"
                  })}
                  <h2 className="text-3xl font-bold text-gray-900">
                    {filteredItems[selectedImage].title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {filteredItems[selectedImage].description}
                </p>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <Camera className="h-4 w-4 mr-2" />
                  Professional Photography
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>  
  )
}

export default Gallery;