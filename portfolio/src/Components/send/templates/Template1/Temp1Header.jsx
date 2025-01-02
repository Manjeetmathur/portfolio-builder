import React from 'react'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

const Temp1Header = ({ postRef, blogRef, contactRef, color='' }) => {
       const toPostRef = () => {
              postRef.current.scrollIntoView({ behavior: 'smooth' });
       };
       const toBlogRef = () => {
              blogRef.current.scrollIntoView({ behavior: 'smooth' });
       };
       const tocontactRef = () => {
              contactRef.current.scrollIntoView({ behavior: 'smooth' });
       };
       const link = window.location.href
       const Openlink = async () => {
              await navigator.clipboard.writeText(link)
              toast('link copied')
              const shareData = {
                     title: "sharing your portfolio",
                     text: "share",
                     url: link,
              };
              if (navigator.share) {
                     navigator.share(shareData);
              }
       }
       return (
              <div className={`shadow-lg ${color} `}>
                     <nav className="flex justify-between items-center px-6 py-4 md:px-12">
                            {/* Navigation Links */}
                            <div className="flex space-x-6 md:space-x-10 text-sm md:text-lg font-medium">
                                   <NavLink
                                          onClick={toPostRef}
                                          className="hover:text-blue-500 transition duration-200"
                                   >
                                          Projects
                                   </NavLink>
                                   <NavLink
                                          onClick={toBlogRef}
                                          className="hover:text-blue-500 transition duration-200"
                                   >
                                          Blogs
                                   </NavLink>
                                   <NavLink
                                          onClick={tocontactRef}
                                          className="hover:text-blue-500 transition duration-200"
                                   >
                                          Contact
                                   </NavLink>
                            </div>

                            {/* Share Button */}
                            <button
                                   onClick={Openlink}
                                   className="border hidden md:block px-4 py-2 text-sm rounded-lg hover:bg-blue-500 hover:text-white transition duration-200"
                            >
                                   Share Your Portfolio
                            </button>
                            <button
                                   onClick={Openlink}
                                   className="border  md:hidden px-4 py-2 text-sm rounded-lg hover:bg-blue-500 hover:text-white transition duration-200"
                            >
                                   Share
                            </button>
                     </nav>
              </div>

       )
}
export default Temp1Header
