import React, { useContext, useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { context } from '../../../Context/Context';
const SixthCont = () => {
       const ref = useRef()
       const [loading, setLoading] = useState(false);
       const [certificateImage, setcertificateImage] = useState('');
       const [title, setcertificateTitle] = useState('');
       const [link, setcertificateLink] = useState('');
       const [desc, setcertificateDesc] = useState('');
       const { uploadCertificate } = useContext(context)
       useEffect(() => {
              // Initialize AOS animation
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easing function for the animation
                     once: false, // Run animation only once
              });
       }, []);

       return (

              <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-6 py-6">
                     <h1 className="text-4xl font-extrabold mb-8 text-white tracking-wide">Upload Your Certificate</h1>

                     <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-8 md:p-12 space-y-8">
                            {/* Certificate Image Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Upload Certificate Image</h1>
                                   <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-6">
                                          <input
                                                 type="file"
                                                 ref={ref}
                                                 className="hidden"
                                                 onChange={(e) => setcertificateImage(e.target.files?.[0])}
                                          />
                                          <button
                                                 className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition-all"
                                                 onClick={() => ref.current.click()}
                                          >
                                                 Select Image
                                          </button>
                                   </div>
                            </div>

                            {/* Certificate Title Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Certificate Title</h1>
                                   <input
                                          type="text"
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setcertificateTitle(e.target.value)}
                                          value={title}
                                          placeholder="Enter your Certificate title"
                                   />
                            </div>

                            {/* Certificate Description Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Certificate Description</h1>
                                   <textarea
                                          rows={4}
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                          onChange={(e) => setcertificateDesc(e.target.value)}
                                          value={desc}
                                          placeholder="Enter your Certificate description"
                                   />
                            </div>

                            {/* Certificate Link Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Certificate Link</h1>
                                   <input
                                          type="text"
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setcertificateLink(e.target.value)}
                                          value={link}
                                          placeholder="Enter your Certificate link"
                                   />
                            </div>

                            {/* Upload Button */}
                            <div className="flex justify-center" data-aos="fade-up">
                                   <button
                                          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-8 rounded-md hover:shadow-lg hover:scale-105 transition-all"
                                          onClick={async () => {
                                                 setLoading(true);
                                                 await uploadCertificate(title, certificateImage, link, desc);
                                                 setcertificateDesc('');
                                                 setcertificateImage('');
                                                 setcertificateTitle('');
                                                 setcertificateLink('');
                                                 setLoading(false);
                                          }}
                                   >
                                          {loading ? 'Uploading...' : 'Upload Certificate'}
                                   </button>
                            </div>
                     </div>
              </div>



       )
}
export default SixthCont