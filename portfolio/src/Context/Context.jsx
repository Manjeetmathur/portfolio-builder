import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../backendUrl/Backendurl";
import { postsData } from "../store/postSlice";
import { userDetails } from "../store/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const context = createContext()

const ContextProvider = ({ children }) => {
       const { userData } = useSelector(st => st.auth)
       const dispatch = useDispatch()

       const uploadPost = async (title, postImage, link, desc) => {
              const formData = new FormData()
              formData.append('title', title)
              formData.append('postImage', postImage)
              formData.append('link', link)
              formData.append('desc', desc)
              try {
                     const data = await axios.post(`${url}/post/upload-post`,
                            formData,
                            {
                                   headers: { 'content-type': 'multipart/formdata' },
                                   withCredentials: true,
                                   withXSRFToken: true
                            }
                     )
                     const res = data.data
                     if (res.success) {
                            toast.success(res.message)
                     } else {
                            toast.error(res.message)
                     }
              } catch (error) {

              }

       }
       const uploadBlog = async (title, desc) => {
              try {
                     const data = await axios.post(`${url}/blog/create-blog`,
                            { 'content': desc, 'title': title }, {
                            headers: { "content-type": "application/json" },
                            withCredentials: true,
                            withXSRFToken: true,
                     });
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
              }
       }

       //get details
       useEffect(() => {
              try {
                     const getUserDetails = async () => {

                            const endpoint = `${url}/user/all-info/id?id=${userData?.id}`;
                            console.log(endpoint);

                            const data = await axios.get(endpoint);
                            const res = data.data;
                            console.log("res", res);

                            if (res.success) {
                                   dispatch(userDetails(res.user));
                            }
                     };
                     getUserDetails();
              } catch (error) {
                     console.log(error);
              }
       }, []);
       // const [loading3,setLoading3]= useState(false);

       //update profile
       const updateProfile = async (profile) => {
              const formData = new FormData();
              formData.append("profile", profile);
              try {
                     const data = await axios.patch(`${url}/user/update-image`, formData, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: true,
                            withXSRFToken: true,
                     });
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateResume = async (resume) => {

              const formData = new FormData();
              formData.append("resume", resume);
              try {
                     const data = await axios.patch(`${url}/user/update-resume`, formData, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: true,
                            withXSRFToken: true,
                     });
                     const res = data.data;
                     console.log(res);
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       //update Title
       const updateTitle = async (title) => {
              const userTitle = title;
              try {
                     // setLoading3(true);
                     const data = await axios.patch(
                            `${url}/user/update-user-title`,
                            { userTitle },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              } finally {
                     // setLoading3(false);
              }
       };

       

       const updateProfession = async (profession) => {
              try {
                     const data = await axios.patch(
                            `${url}/user/update-user-profession`,
                            { profession },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              } 
       };
       const updateDesc = async (desc) => {
              try {
                     console.log(desc);

                     const data = await axios.patch(
                            `${url}/user/update-user-desc`,
                            { desc },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };

       const updatePhone = async (phonenumber) => {
              try {
                     const data = await axios.patch(
                            `${url}/user/update-user-phone`,
                            { phonenumber },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateName = async (name) => {
              console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/user/update-name`,
                            { name },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateEmail = async (email) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/user/update-email`,
                            { email },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateLinked = async (linkedinlink) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/user/update-linkedin`,
                            { linkedinlink },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateGit = async (githublink) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/user/update-git`,
                            { githublink },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateInsta = async (instagramlink) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/user/update-insta`,
                            { instagramlink },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateFace = async (facebooklink) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/user/update-face`,
                            { facebooklink },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };


       const updatePostTitle = async (postTitle, postId) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/post/edit-post-title`,
                            { postTitle, postId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updatePostDesc = async (desc, postId) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/post/edit-post-desc`,
                            { desc, postId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updatePostLink = async (link, postId) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/post/edit-post-link`,
                            { link, postId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updatePostImage = async (postImage, postId) => {
              const formData = new FormData();
              formData.append("postImage", postImage);
              formData.append("postId", postId);
              try {
                     const data = await axios.patch(`${url}/post/edit-post-image`, formData,
                            {
                                   headers: { "Content-Type": "multipart/form-data" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            });
                     const res = data.data;
                     console.log(res);
                     if (res.success) {
                            toast.success(res.message);
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const deletePost = async (postId) => {
              // console.log(name);

              try {
                     const data = await axios.post(
                            `${url}/post/delete-post`,
                            { postId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateBlogTitle = async (blogTitle, blogId) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/blog/edit-blog-title`,
                            { blogTitle, blogId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const updateBlogContent = async (blogContent, blogId) => {
              // console.log(name);

              try {
                     const data = await axios.patch(
                            `${url}/blog/edit-blog-content`,
                            { blogContent, blogId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };
       const deleteBlog = async ( blogId) => {
              // console.log(name);

              try {
                     const data = await axios.post(
                            `${url}/blog/delete-blog`,
                            {  blogId },
                            {
                                   headers: { "Content-Type": "application/json" },
                                   withCredentials: true,
                                   withXSRFToken: true,
                            }
                     );
                     const res = data.data;
                     console.log(res);

                     if (res.success) {
                            toast.success(res.message);
                            // navigate('/profile')
                     } else {
                            toast.error(res.message);
                     }
              } catch (error) {
                     toast.error(error.message);
              }
       };

       const showPdf = (resume) => {
              window.open(`${url}/f/${resume}`)
       }



       return (
              <context.Provider
                     value={{
                            uploadPost,uploadBlog,showPdf,
                            updateTitle, updateProfile,
                            updateDesc, updatePhone, updateResume,
                            updateName, updateEmail, updateProfession,
                            updateFace, updateGit, updateInsta, updateLinked,
                            updatePostDesc, updatePostImage, updatePostLink, deletePost, updatePostTitle,
                            updateBlogTitle,updateBlogContent,deleteBlog
                     }}>
                     {children}
              </context.Provider>
       )
}
export default ContextProvider