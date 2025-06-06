import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import { url } from '../../../../backendUrl/Backendurl';
import axios from 'axios';

const Template4 = () => {
       const id = useParams();
       const [loading, setloading] = useState(true);
       const [userData, setUser] = useState();
       const getUserDetails = async () => {
              try {
                     const endpoint = `${url}/user/all-info/id?id=${id.id}`;
                     const data = await axios.get(endpoint);
                     const res = data.data;
                     if (res.success) {
                            setUser(res.user);
                     }
              } catch (error) {
                     console.error(error);
              } finally {
                     setloading(false);
              }
       };
       useEffect(() => {

              getUserDetails();
       }, []);
       // const [userData] = useState({
       //        name: userDetails?.name,
       //        email: "manjeetkumar62054@gmail.com",
       //        phonenumber: "6287773228",
       //        profession: "Student",
       //        title: "Full Stack Web Developer",
       //        description: "Hii, I'm Manjeet currently pursuing Bachelor degree in Computer science (BCA). Currently I'm learning C || C++ || DSA || HTML || CSS || JS || React || Node.js || MongoDb || Python || DBMS || SQL || OS.",
       //        profile: {
       //               imageUrl: "http://res.cloudinary.com/dtwftajii/image/upload/v1744923903/yuq943pjafmmq1dyjuoh.jpg",
       //               publicId: "yuq943pjafmmq1dyjuoh"
       //        },
       //        resume: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:50c3e596-2db5-4ac1-824e-12150eb68aa6",
       //        skills: ["HTML", "CSS", "JavaScript", "Reactjs", "Nodejs", "Expressjs", "C++", "Python", "Nextjs"],
       //        certificates: [
       //               {
       //                      certificateTitle: "DSA",
       //                      certificateDescription: "DSA certificate by Coding Ninja",
       //                      certificateImage: "https://res.cloudinary.com/dtwftajii/image/upload/v1747689963/srvez8okcoxbrindmiho.jpg",
       //                      link: "https://files.codingninjas.in/certi_image53859739676c1f20879b525bd701f8b345a4a5.jpg"
       //               },
       //               {
       //                      certificateTitle: "Cpp certificate",
       //                      certificateDescription: "Cpp certificate by Coding Ninja",
       //                      certificateImage: "https://res.cloudinary.com/dtwftajii/image/upload/v1747690137/xqygb2hjgfl6kqawgwta.jpg",
       //                      link: "https://files.codingninjas.in/certi_image53662575f2aea2f592f3623e82eda48e131972.jpg"
       //               },
       //               {
       //                      certificateTitle: "Internship certificate",
       //                      certificateDescription: "Internship certificate by code soft for web development",
       //                      certificateImage: "https://res.cloudinary.com/dtwftajii/image/upload/v1747690716/n7oxjbvtok5ssuisjz0v.jpg",
       //                      link: "https://www.linkedin.com/posts/manjeet-kumar4_cip-activity-7223253760431521792-IGw2"
       //               }
       //        ],
       //        posts: [
       //               {
       //                      postTitle: "YourPort",
       //                      postDescription: "Built a full-stack web app where users can register, log in, and create customizable portfolios. ● Integrated light/dark theme templates with sections like skills, blogs, and project uploads. ● Enables users to edit and manage content from a dedicated dashboard, with profile sharing feature. ● Implemented secure JWT authentication and responsive UI for all devices.",
       //                      link: "https://portfolio-builder-manjeetmathurs-projects.vercel.app/profile",
       //                      postImage: { imageUrl: "https://res.cloudinary.com/dtwftajii/image/upload/v1744922404/dsmkrgngausys7usj166.png" }
       //               },
       //               {
       //                      postTitle: "Order your favourites gifts and artwork",
       //                      postDescription: "Developed and launched Ukart, a full-featured eCommerce platform. Built with responsive UI and RESTful APIs to ensure smooth user experience.",
       //                      link: "https://ecm-art-frontend.vercel.app/",
       //                      postImage: { imageUrl: "https://res.cloudinary.com/dtwftajii/image/upload/v1744922404/dsmkrgngausys7usj166.png" }
       //               },
       //               {
       //                      postTitle: "Order your lovely needs",
       //                      postDescription: "Developed and launched Ukart, a full-featured eCommerce platform for scalable data management and real-time updates.",
       //                      link: "https://ukart.vercel.app/",
       //                      postImage: { imageUrl: "https://res.cloudinary.com/dtwftajii/image/upload/v1744922404/dsmkrgngausys7usj166.png" }
       //               },
       //               {
       //                      postTitle: "Puja chanda",
       //                      postDescription: "Easily manage and track contributions (chanda/donations) with contact information for future reference and outreach.",
       //                      link: "https://puja-chanda.vercel.app",
       //                      postImage: { imageUrl: "https://res.cloudinary.com/dtwftajii/image/upload/v1744922404/dsmkrgngausys7usj166.png" }
       //               },
       //               {
       //                      postTitle: "MLM (multi network marketing) earn money",
       //                      postDescription: "Designed a multi-level marketing system and users can track earnings, with detailed wallet and KYC verification.",
       //                      link: "https://mlm-mfmw.vercel.app/",
       //                      postImage: { imageUrl: "https://res.cloudinary.com/dtwftajii/image/upload/v1744922404/dsmkrgngausys7usj166.png" }
       //               }
       //        ],
       //        facebooklink: "https://m.facebook.com/profile.php?id=100091275197470",
       //        githublink: "https://github.com/Manjeetmathur",
       //        instagramlink: "https://www.instagram.com/mathur__manjeet/",
       //        linkedinlink: "https://www.linkedin.com/in/manjeet-kumar4"
       // });

       useEffect(() => {
              AOS.init({ duration: 1000 });
       }, []);
       return (
              <div className="min-h-screen bg-gray-100 font-sans">
                     {/* Header */}
                     <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6">
                            <div className="container mx-auto px-4">
                                   <h1 className="text-4xl font-bold" data-aos="fade-down">{userData?.name}</h1>
                                   <p className="text-xl mt-2" data-aos="fade-down" data-aos-delay="100">{userData?.title}</p>
                            </div>
                     </header>

                     {/* Profile Section */}
                     <section className="container mx-auto px-4 py-12">
                            <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
                                   <img src={userData?.profile?.imageUrl} alt="Profile" className="w-48 h-48 rounded-full object-cover shadow-lg" />
                                   <div>
                                          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
                                          <p className="text-gray-600 mt-4">{userData?.description}</p>
                                          <a href={userData?.resume} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Download Resume</a>
                                   </div>
                            </div>
                     </section>

                     {/* Skills Section */}
                     <section className="bg-white py-12">
                            <div className="container mx-auto px-4">
                                   <h2 >Skills</h2>
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                          {userData?.skills.map((skill, index) => (
                                                 <div key={index} className="bg-gray-100 p-4 rounded-lg text-center shadow-md" data-aos="zoom-in" data-aos-delay={index * 100}>
                                                        <p className="text-gray-800 font-medium">{skill}</p>
                                                 </div>
                                          ))}
                                   </div>
                            </div>
                     </section>

                     {/* Certificates Section */}
                     <section className="container mx-auto px-4 py-12">
                            <h2 className="text-3xl font-semibold text-gray-800 text-center" data-aos="fade-up">Certificates</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                   {userData?.certificates.map((cert, index) => (
                                          <div key={index} className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                                                 <img src={cert.certificateImage} alt={cert.certificateTitle} className="w-full h-48 object-cover rounded-lg mb-4" />
                                                 <h3 className="text-xl font-semibold text-gray-800">{cert.certificateTitle}</h3>
                                                 <p className="text-gray-600 mt-2">{cert.certificateDescription}</p>
                                                 <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:underline">View Certificate</a>
                                          </div>
                                   ))}
                            </div>
                     </section>

                     {/* Projects Section */}
                     <section className="bg-white py-12">
                            <div className="container mx-auto px-4">
                                   <h2 className="text-3xl font-semibold text-gray-800 text-center" data-aos="fade-up">Projects</h2>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                          {userData?.posts.map((project, index) => (
                                                 <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                                                        <img src={project.postImage.imageUrl} alt={project.postTitle} className="w-full h-48 object-cover rounded-lg mb-4" />
                                                        <h3 className="text-xl font-semibold text-gray-800">{project.postTitle}</h3>
                                                        <p className="text-gray-600 mt-2">{project.postDescription}</p>
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:underline">View Project</a>
                                                 </div>
                                          ))}
                                   </div>
                            </div>
                     </section>

                     {/* Contact Section */}
                     <section className="container mx-auto px-4 py-12">
                            <h2 className="text-3xl font-semibold text-gray-800 text-center" data-aos="fade-up">Contact Me</h2>
                            <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="100">
                                   <p className="text-gray-600">Email: <a href={`mailto:${userData?.email}`} className="text-blue-600 hover:underline">{userData?.email}</a></p>
                                   <p className="text-gray-600 mt-2">Phone: <a href={`tel:${userData?.phonenumber}`} className="text-blue-600 hover:underline">{userData?.phonenumber}</a></p>
                                   <div className="flex justify-center gap-4 mt-4">
                                          <a href={userData?.linkedinlink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                                 <FaLinkedin className="w-6 h-6" />
                                          </a>
                                          <a href={userData?.githublink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                                 <FaGithub className="w-6 h-6" />
                                          </a>
                                          <a href={userData?.instagramlink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                                 <FaInstagram className="w-6 h-6" />
                                          </a>
                                          <a href={userData?.facebooklink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                                 <FaFacebook className="w-6 h-6" />
                                          </a>
                                   </div>
                            </div>
                     </section>

                     {/* Footer */}
                     <footer className="bg-gray-800 text-white py-6">
                            <div className="container mx-auto px-4 text-center">
                                   <p>© {new Date().getFullYear()} {userData?.name}. All rights reserved.</p>
                            </div>
                     </footer>
              </div>
              
       );
};

export default Template4;