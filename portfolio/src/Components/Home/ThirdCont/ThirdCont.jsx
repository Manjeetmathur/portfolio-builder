import React, { useContext, useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { context } from '../../../Context/Context';
const ThirdCont = () => {
       const ref = useRef()
       const [loading, setLoading] = useState(false);
       const [postImage, setPostImage] = useState('');
       const [title, setpostTitle] = useState('');
       const [link, setPostLink] = useState('');
       const [desc, setpostDesc] = useState('');
       const { uploadPost } = useContext(context)
       useEffect(() => {
              // Initialize AOS animation
              AOS.init({
                     duration: 1000, // Animation duration
                     easing: 'ease-in-out', // Easing function for the animation
                     once: false, // Run animation only once
              });
       }, []);

       return (

              <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center px-6 py-12">
                     <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-8 md:p-12 space-y-8">
                            {/* Project Image Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Upload Project Image</h1>
                                   <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-6">
                                          <input
                                                 type="file"
                                                 ref={ref}
                                                 className="hidden"
                                                 onChange={(e) => setPostImage(e.target.files?.[0])}
                                          />
                                          <button
                                                 className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition-all"
                                                 onClick={() => ref.current.click()}
                                          >
                                                 Select Image
                                          </button>
                                   </div>
                            </div>

                            {/* Project Title Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Project Title</h1>
                                   <input
                                          type="text"
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setpostTitle(e.target.value)}
                                          value={title}
                                          placeholder="Enter your project title"
                                   />
                            </div>

                            {/* Project Description Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Project Description</h1>
                                   <textarea
                                          rows={4}
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                          onChange={(e) => setpostDesc(e.target.value)}
                                          value={desc}
                                          placeholder="Enter your project description"
                                   />
                            </div>

                            {/* Project Link Section */}
                            <div className="space-y-4" data-aos="fade-up">
                                   <h1 className="text-xl font-semibold tracking-wide">Project Link</h1>
                                   <input
                                          type="text"
                                          className="w-full bg-gray-700 text-white rounded-md py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500"
                                          onChange={(e) => setPostLink(e.target.value)}
                                          value={link}
                                          placeholder="Enter your project link"
                                   />
                            </div>

                            {/* Upload Button */}
                            <div className="flex justify-center" data-aos="fade-up">
                                   <button
                                          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-8 rounded-md hover:shadow-lg hover:scale-105 transition-all"
                                          onClick={async () => {
                                                 setLoading(true);
                                                 await uploadPost(title, postImage, link, desc);
                                                 setpostDesc('');
                                                 setPostImage('');
                                                 setpostTitle('');
                                                 setPostLink('');
                                                 setLoading(false);
                                          }}
                                   >
                                          {loading ? 'Uploading...' : 'Upload Project'}
                                   </button>
                            </div>
                     </div>
              </div>



       )
}
export default ThirdCont