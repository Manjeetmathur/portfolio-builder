import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { context } from "../../../Context/Context";

const SecondCont = () => {
  const ref = useRef(); // Reference to the hidden file input
  const { updateTitle, updateProfile, updateDesc, updatePhone, updateResume } = useContext(context)

  const [loading, setLoading] = useState(null);

  const [profile, setProfile] = useState(null); // To store the selected image
  const [resume, setResume] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desc, setDesc] = useState("");

  const titleUpdate = async () => {
    try {
      setLoading('title');
      await updateTitle(title);
      setTitle("");
      setLoading(null);
    } catch (error) {
      setLoading(null);
      console.error("Error updating title", error);
    }
  }

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfile(file); // Set the selected file in state
    }
  }

  const handleProfileUpdate = async () => {
    try {
      setLoading("image");
      await updateProfile(profile); // Update the profile image
      setProfile(null); // Reset the profile state
      setLoading(null);
    } catch (error) {
      setLoading(null);
      console.error("Error updating profile image", error);
    }
  }

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for the animation
      once: false, // Run animation only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">Edit Your Profile</h1>
          <p className="text-gray-400 mt-4 text-lg">Customize your profile to make it stand out.</p>
        </div>

        {/* Card Container */}
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl">
          {/* Profile Image Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">Profile Image</h2>
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden">
                {profile ? (
                  <img
                    src={URL.createObjectURL(profile)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <button
                  className="bg-blue-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                  onClick={() => ref.current.click()} // Trigger file input
                >
                  Choose Image
                </button>
                <input
                  type="file"
                  ref={ref}
                  className="hidden"
                  onChange={handleProfileChange} // Handle the file change
                />
                <button
                  className={`bg-green-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-green-500 transition ${loading === "image" ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={handleProfileUpdate} // Trigger image update
                >
                  {loading === "image" ? "Updating..." : "Update Image"}
                </button>
              </div>
            </div>
          </div>

          {/* Reusable Input Section */}
          {[{
            label: "Work Title",
            placeholder: "Enter your work title",
            value: title,
            onChange: setTitle,
            onUpdate: titleUpdate,
            loadingKey: "title",
          },
          {
            label: "Resume Link",
            placeholder: "Enter your resume link",
            value: resume,
            onChange: setResume,
            onUpdate: async () => {
              setLoading("resume");
              await updateResume(resume);
              setResume("");
              setLoading(null);
            },
            loadingKey: "resume",
          },
          {
            label: "Phone Number",
            placeholder: "Enter your phone number",
            value: phoneNumber,
            onChange: setPhoneNumber,
            onUpdate: async () => {
              setLoading("phonenumber");
              await updatePhone(phoneNumber);
              setPhoneNumber("");
              setLoading(null);
            },
            loadingKey: "phonenumber",
          },
          {
            label: "Description",
            placeholder: "Write a short bio about yourself",
            value: desc,
            onChange: setDesc,
            onUpdate: async () => {
              setLoading("desc");
              await updateDesc(desc);
              setDesc("");
              setLoading(null);
            },
            loadingKey: "desc",
            isTextArea: true,
          }].map(({ label, placeholder, value, onChange, onUpdate, loadingKey, isTextArea }, idx) => (
            <div className="mb-10" key={idx}>
              <h2 className="text-2xl font-semibold text-white mb-4">{label}</h2>
              <div className="flex items-start gap-4">
                {isTextArea ? (
                  <textarea
                    rows={3}
                    className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
                <button
                  className={`bg-blue-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-blue-500 transition ${loading === loadingKey ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={onUpdate}
                >
                  {loading === loadingKey ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default SecondCont;
