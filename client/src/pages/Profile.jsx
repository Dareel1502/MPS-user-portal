import React, { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    idNumber: 'PNP-2023-12345',
    rank: 'Police Officer III',
    fullName: 'Juan Dela Cruz',
    station: 'Manila Police District',
    birthDate: '1990-05-15',
    contactNumber: '+639123456789',
    bloodType: 'O+',
    address: '123 PNP Housing, Taguig City'
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-10 flex justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
        <div className="bg-blue-900 text-white py-4 px-6 shadow-md rounded-t-lg mt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">PNP IDENTITY PROFILE</h1>
            <button 
              onClick={handleEdit}
              className={`px-3 py-1 rounded-md ${isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-600 hover:bg-yellow-700'} transition-colors`}
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
         
          <div className="bg-red-700 py-2 px-4 text-white font-semibold">
            <h2>OFFICIAL IDENTITY CARD</h2>
          </div>

          <div className="p-6">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-blue-100 border-4 border-blue-900 rounded-full flex items-center justify-center overflow-hidden">
                {profile.photo ? (
                  <img src={profile.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-blue-900 text-4xl font-bold">{profile.fullName.charAt(0)}</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <ProfileField 
                label="ID Number" 
                name="idNumber"
                value={profile.idNumber}
                isEditing={isEditing}
                onChange={handleChange}
                readOnly
              />
              
              <ProfileField 
                label="Rank/Position" 
                name="rank"
                value={profile.rank}
                isEditing={isEditing}
                onChange={handleChange}
              />

              <ProfileField 
                label="Full Name" 
                name="fullName"
                value={profile.fullName}
                isEditing={isEditing}
                onChange={handleChange}
              />

              <ProfileField 
                label="Station/Unit" 
                name="station"
                value={profile.station}
                isEditing={isEditing}
                onChange={handleChange}
              />

              <ProfileField 
                label="Date of Birth" 
                name="birthDate"
                value={profile.birthDate}
                isEditing={isEditing}
                onChange={handleChange}
                type="date"
              />

              <ProfileField 
                label="Contact Number" 
                name="contactNumber"
                value={profile.contactNumber}
                isEditing={isEditing}
                onChange={handleChange}
                type="tel"
              />

              <ProfileField 
                label="Blood Type" 
                name="bloodType"
                value={profile.bloodType}
                isEditing={isEditing}
                onChange={handleChange}
              />

              <ProfileField 
                label="Address" 
                name="address"
                value={profile.address}
                isEditing={isEditing}
                onChange={handleChange}
                textarea
              />
            </div>
          
          </div>
         <div className='flex justify-center item-center '>
         <button  className="w-56  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl 
         font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  " type="button">
        
        Logout
      </button>
         </div>
   
     
  
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Philippine National Police - Official Identification System</p>
          <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

      </div>


    </div>
  );
}

const ProfileField = ({ label, name, value, isEditing, onChange, type = 'text', textarea = false, readOnly = false }) => {
  return (
   
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {isEditing ? (
        textarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            className={`w-full px-3 py-2 border ${readOnly ? 'bg-gray-100' : 'bg-white'} border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        )
      ) : (
        <div className="px-3 py-2 bg-gray-50 rounded-md border border-gray-200 min-h-[42px] flex items-center">
          {value || <span className="text-gray-400">Not specified</span>}
        </div>
      )}
  
    
  
  


  
    </div>
    
  );
};





export default Profile;