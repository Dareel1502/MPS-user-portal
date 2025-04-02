import React, { useState } from 'react';

function Report() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const categories = ['Accidents/Incidents', 'Murder', 'Activity'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      category: selectedCategory,
      description,
      image
    });
    alert('Report submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Report</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Upload Evidence</h2>
          <div className="flex justify-center">
            {image ? (
              <div className="relative">
                <img 
                  src={image} 
                  alt="Uploaded preview" 
                  className="max-h-64 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">Tap to upload from gallery</p>
                </div>
                <input 
                  id="dropzone-file" 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => document.getElementById('dropzone-file').click()}
            >
              {image ? 'Change Image' : 'Select Image'}
            </button>
          </div>
        </div>

       
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Provide details about the report..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

      
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-3">Category</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  id={`category-${category}`}
                  name="category"
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />
                <label htmlFor={`category-${category}`} className="ml-3 block text-gray-700">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

 
        <button
          type="submit"
          disabled={!selectedCategory || !description}
          className={`w-full py-3 px-4 rounded-lg font-bold text-white ${(!selectedCategory || !description) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          SEND REPORT
        </button>
      </form>
    </div>
  );
}

export default Report;