import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function AboutUs() {
       const name = "Manjeet Kumar"; // Replace with your name
       const email = "manjeetkumar62054@gmail.com"; // Replace with your email
       const Contact = "6287773228"; // Replace with your email
       const mission = "Empowering individuals to build and share their professional identity."; // Customize mission
       const whatWeDo = "Provide an intuitive platform to create and customize portfolios easily."; // Customize 'what we do'

       return (
              <div className="">
                     <Header />
                     <section className="bg-gradient-to-r from-gray-900 to-gray-950 text-white py-12 min-h-screen">

                            <div className="max-w-6xl mx-auto px-6">
                                   <motion.h2
                                          className="text-4xl font-bold text-center mb-6 border-b-2 pb-6"
                                          initial={{ opacity: 0, y: -20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5 }}
                                   >
                                          About Us
                                   </motion.h2>

                                   <motion.div
                                          className="text-center mb-8"
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.6, delay: 0.2 }}
                                   >
                                          <p className="text-xl mt-2">Founder : {name} </p>
                                          <p className="text-xl mt-2">  Email : {email}</p>
                                          <p className="text-xl mt-2">Contact : {Contact}</p>
                                   </motion.div>

                                   {/* Mission Section */}
                                   <div className="text-center mb-12">
                                          <motion.h3
                                                 className="text-3xl font-semibold mb-4 border-b-2 pb-6 border-dashed border-opacity-50"
                                                 initial={{ opacity: 0, y: 20 }}
                                                 animate={{ opacity: 1, y: 0 }}
                                                 transition={{ duration: 0.5, delay: 0.3 }}
                                          >
                                                 Our Mission
                                          </motion.h3>
                                          <p className="text-lg md:text-xl px-6">{mission}</p>
                                   </div>

                                   {/* What We Do Section */}
                                   <div className="text-center mb-12">
                                          <motion.h3
                                                 className="text-3xl font-semibold mb-4 border-b-2 pb-6 border-dashed border-opacity-50"
                                                 initial={{ opacity: 0, y: 20 }}
                                                 animate={{ opacity: 1, y: 0 }}
                                                 transition={{ duration: 0.5, delay: 0.4 }}
                                          >
                                                 What We Do
                                          </motion.h3>
                                          <p className="text-lg md:text-xl px-6">{whatWeDo}</p>
                                   </div>

                                   {/* Socials Section */}
                                   <div className="flex justify-center gap-6 mt-12 border-b-2 pb-6 border-dashed border-opacity-50">
                                          <motion.a
                                                 href="https://www.linkedin.com/in/manjeet-kumar4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                                 className="text-2xl hover:text-indigo-300"
                                                 initial={{ opacity: 0 }}
                                                 animate={{ opacity: 1 }}
                                                 transition={{ duration: 0.5, delay: 0.5 }}
                                          >
                                                 LinkedIn
                                          </motion.a>
                                          <motion.a
                                                 href="https://github.com/Manjeetmathur"
                                                 className="text-2xl hover:text-indigo-300"
                                                 initial={{ opacity: 0 }}
                                                 animate={{ opacity: 1 }}
                                                 transition={{ duration: 0.5, delay: 0.6 }}
                                          >
                                                 GitHub
                                          </motion.a>
                                          <motion.a
                                                 href="https://www.instagram.com/mathur__manjeet/" 
                                                 className="text-2xl hover:text-indigo-300"
                                                 initial={{ opacity: 0 }}
                                                 animate={{ opacity: 1 }}
                                                 transition={{ duration: 0.5, delay: 0.7 }}
                                          >
                                                 Instagram
                                          </motion.a>
                                   </div>
                            </div>
                     </section>
                     <Footer/>
              </div>
       );
}
