import React, { useState } from 'react';
import { FaBell, FaHome, FaLightbulb, FaClipboardList, FaEnvelope } from 'react-icons/fa'; // Icons for nav
import { FiUser } from 'react-icons/fi'; // User Icon

const Homepage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    // Handle logout logic here
    console.log('Logged out');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and navigation links */}
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-8 w-8" /> {/* Your logo */}
            <h1 className="ml-3 text-xl font-semibold text-green-600">kipi.innovate</h1>
          </div>

          {/* Navigation Links with Icons */}
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-600 font-medium hover:text-green-600 flex items-center">
              <FaHome className="mr-2" /> Homepage
            </a>
            <a href="#my-ideas" className="text-gray-600 font-medium hover:text-green-600 flex items-center">
              <FaLightbulb className="mr-2" /> My Ideas
            </a>
            <a href="#review-ideas" className="text-gray-600 font-medium hover:text-green-600 flex items-center">
              <FaClipboardList className="mr-2" /> Review Ideas
            </a>
            <a href="#contact" className="text-gray-600 font-medium hover:text-green-600 flex items-center">
              <FaEnvelope className="mr-2" /> Contact Us
            </a>
          </div>

          {/* Notification Bell and User Icon */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <FaBell className="text-gray-600 text-xl hover:text-green-600 cursor-pointer" />

            {/* User Profile and Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  G {/* First letter of user's name */}
                </div>
                <FiUser className="text-gray-600 text-xl" />
              </button>

              {/* Dropdown for Logout */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

       {/* Review Idea Status */}
 <div className="container mx-auto px-4 py-6">
 <h2 className="text-xl font-semibold text-gray-800">Review Idea Status</h2>
 <div className="grid grid-cols-5 gap-4 mt-4">
   {[
     { title: 'Total Ideas Received', count: 50, bgColor: 'bg-green-100', borderColor: 'border-green-400' },
     { title: 'Ideas Reviewed', count: 30, bgColor: 'bg-blue-100', borderColor: 'border-blue-400' },
     { title: 'Ideas Pending', count: 20, bgColor: 'bg-yellow-100', borderColor: 'border-yellow-400' },
     { title: 'Ideas Approved', count: 25, bgColor: 'bg-teal-100', borderColor: 'border-teal-400' },
     { title: 'Ideas Tried', count: 5, bgColor: 'bg-red-100', borderColor: 'border-red-400' },
   ].map((item, idx) => (
     <div key={idx} className={`${item.bgColor} p-4 border-t-4 ${item.borderColor} rounded-lg shadow-md`}>
       <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
       <p className="text-3xl font-bold text-gray-800">{item.count}</p>
     </div>
   ))}
 </div>
</div>

{/* Recent Ideas Shared */}
<div className="container mx-auto px-4 py-6 bg-white shadow-md rounded-lg">
 <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Ideas Shared</h2>
 <table className="min-w-full table-auto">
   <thead>
     <tr className="bg-gray-200 text-gray-600 text-left">
       <th className="py-2 px-4">Employee Name</th>
       <th className="py-2 px-4">Employee Email</th>
       <th className="py-2 px-4">Idea Title</th>
       <th className="py-2 px-4">Idea Category</th>
       <th className="py-2 px-4">Received Date</th>
       <th className="py-2 px-4">Beans Earned</th>
       <th className="py-2 px-4">Idea Review Status</th>
       <th className="py-2 px-4">Action</th>
     </tr>
   </thead>
   <tbody>
     {[
       { name: 'John Doe', email: 'john.doe@kipi.ai', title: 'Idea 1', category: 'Category 1', date: '03/09/2024', beans: 'N/A', status: 'Pending' },
       { name: 'Jane Smith', email: 'jane.smith@kipi.ai', title: 'Idea 2', category: 'Category 1', date: '03/09/2024', beans: 'N/A', status: 'Pending' },
       { name: 'Emily Johnson', email: 'emily.johnson@kipi.ai', title: 'Idea 3', category: 'Category 3', date: '03/09/2024', beans: 'N/A', status: 'Pending' },
       { name: 'David Wilson', email: 'david.wilson@kipi.ai', title: 'Idea 4', category: 'Category 2', date: '03/09/2024', beans: 'N/A', status: 'Pending' },
       { name: 'Michael Brown', email: 'michael.brown@kipi.ai', title: 'Idea 5', category: 'Category 3', date: '02/09/2024', beans: 'N/A', status: 'Pending' },
     ].map((idea, idx) => (
       <tr key={idx} className="border-t">
         <td className="py-2 px-4">{idea.name}</td>
         <td className="py-2 px-4">{idea.email}</td>
         <td className="py-2 px-4">{idea.title}</td>
         <td className="py-2 px-4">{idea.category}</td>
         <td className="py-2 px-4">{idea.date}</td>
         <td className="py-2 px-4">{idea.beans}</td>
         <td className="py-2 px-4">
           <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full">Pending</span>
         </td>
         <td className="py-2 px-4">
           <a href="#" className="text-blue-500 hover:underline">View</a>
         </td>
       </tr>
     ))}
   </tbody>
 </table>
</div>

{/* Top 5 Submitters and Documentation Section */}
<div className="container mx-auto px-4 py-6 grid grid-cols-2 gap-4">
 {/* Top 5 Submitters */}
 <div className="bg-white shadow-md rounded-lg p-4">
   <h2 className="text-xl font-semibold text-gray-800 mb-4">Top 5 Submitters</h2>
   <table className="min-w-full table-auto">
     <thead>
       <tr className="bg-gray-200 text-gray-600 text-left">
         <th className="py-2 px-4">Rank</th>
         <th className="py-2 px-4">Name</th>
         <th className="py-2 px-4">No. of Ideas Shared</th>
         <th className="py-2 px-4">Points</th>
       </tr>
     </thead>
     <tbody>
       {[
         { rank: 1, name: 'Cooper Workman', ideas: 23, points: 800 },
         { rank: 2, name: 'Charlie Lipshutz', ideas: 19, points: 650 },
         { rank: 3, name: 'Emily Johnson', ideas: 18, points: 600 },
         { rank: 4, name: 'Riley Thompson', ideas: 17, points: 575 },
         { rank: 5, name: 'David Wilson', ideas: 15, points: 525 },
       ].map((submitter, idx) => (
         <tr key={idx} className="border-t">
           <td className="py-2 px-4">{submitter.rank}</td>
           <td className="py-2 px-4">{submitter.name}</td>
           <td className="py-2 px-4">{submitter.ideas}</td>
           <td className="py-2 px-4">{submitter.points}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>

 {/* Documentation for Idea Review */}
 <div className="bg-white shadow-md rounded-lg p-4">
   <h2 className="text-xl font-semibold text-gray-800 mb-4">Documentation for Idea Review</h2>
   <div className="relative">
     <img
       src="https://via.placeholder.com/400x200" // Replace with actual image
       alt="Documentation"
       className="rounded-lg"
     />
     <a href="#" className="absolute bottom-4 left-4 bg-green-600 text-white py-2 px-4 rounded-full text-sm">Know More</a>
   </div>
 </div>
</div>
</div>
);
};


export default Homepage;
