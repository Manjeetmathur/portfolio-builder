import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
       useEffect(() => {
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easing function
                     once: true, // Only trigger the animation once
              });
       }, []);

       return (
              <div className="bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white min-h-screen flex flex-col">
                     {/* Hero Section */}
                     <section className="flex-1 flex flex-col items-center justify-center text-center px-8 md:px-20 py-20 md:py-28 space-y-8">
                            <h1
                                   className="text-4xl md:text-6xl font-extrabold leading-tight"
                                   data-aos="fade-up"
                            >
                                   Create Stunning <span className="text-blue-500">Portfolios</span> Effortlessly
                            </h1>
                            <p
                                   className="mt-6 text-gray-300 text-sm md:text-lg max-w-3xl mx-auto"
                                   data-aos="fade-up"
                                   data-aos-delay="200"
                            >
                                   Our platform helps you showcase your skills, achievements, and projects with ease.
                                   Perfect for professionals, students, and creators looking to stand out.
                            </p>
                            <div className="mt-8 space-y-4" data-aos="fade-up" data-aos-delay="400">
                                   <Link
                                          to="/create"
                                          className="bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-lg font-bold text-base md:text-lg shadow-md transition-all"
                                   >
                                          Create Now
                                   </Link>
                                   <div className="flex justify-center gap-6">
                                          <Link
                                                 to="/get-started"
                                                 className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium text-sm md:text-base transition-all"
                                          >
                                                 Get Started
                                          </Link>
                                          <Link
                                                 to="/features"
                                                 className="border border-blue-500 hover:bg-blue-500 hover:text-white py-3 px-8 rounded-lg font-medium text-sm md:text-base transition-all"
                                          >
                                                 Learn More
                                          </Link>
                                   </div>
                            </div>
                            <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
                                   <img
                                          src="https://via.placeholder.com/500x400"
                                          alt="Portfolio Showcase"
                                          className="rounded-lg shadow-lg transform hover:scale-105 transition-all"
                                   />
                            </div>
                     </section>

                     {/* Features Section */}
                     <section id="features" className="py-20 bg-gray-800">
                            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                                   <h2
                                          className="text-3xl md:text-4xl font-semibold mb-12"
                                          data-aos="fade-up"
                                   >
                                          Why <span className="text-blue-500">Choose Us</span>?
                                   </h2>
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                          <div
                                                 className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
                                                 data-aos="fade-up"
                                                 data-aos-delay="200"
                                          >
                                                 <h3 className="text-xl font-bold mb-4">User-Friendly</h3>
                                                 <p className="text-gray-300 text-sm">
                                                        Designed for simplicity and ease of use. Create your portfolio in minutes!
                                                 </p>
                                          </div>
                                          <div
                                                 className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
                                                 data-aos="fade-up"
                                                 data-aos-delay="400"
                                          >
                                                 <h3 className="text-xl font-bold mb-4">Fully Customizable</h3>
                                                 <p className="text-gray-300 text-sm">
                                                        Customize themes, layouts, and content to make your portfolio truly yours.
                                                 </p>
                                          </div>
                                          <div
                                                 className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
                                                 data-aos="fade-up"
                                                 data-aos-delay="600"
                                          >
                                                 <h3 className="text-xl font-bold mb-4">Professional Templates</h3>
                                                 <p className="text-gray-300 text-sm">
                                                        Choose from a variety of stunning templates crafted by experts.
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                     </section>

                     {/* Call-to-Action Section */}
                     <section className="py-16 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-center">
                            <h2
                                   className="text-3xl md:text-4xl font-bold mb-6 text-white"
                                   data-aos="fade-up"
                            >
                                   Start Building Your <span className="text-white">Portfolio</span> Today
                            </h2>
                            <p
                                   className="text-gray-300 text-sm md:text-lg mb-8 max-w-2xl mx-auto"
                                   data-aos="fade-up"
                                   data-aos-delay="200"
                            >
                                   Join thousands of professionals and creators who trust us to showcase their work.
                            </p>
                            <Link
                                   to="/create"
                                   className="bg-green-500 hover:bg-green-600 text-white py-4 px-12 rounded-lg font-bold text-base md:text-lg shadow-lg transition-all"
                                   data-aos="fade-up"
                                   data-aos-delay="400"
                            >
                                   Create Now
                            </Link>
                     </section>
              </div>
       );
};

export default Intro;
