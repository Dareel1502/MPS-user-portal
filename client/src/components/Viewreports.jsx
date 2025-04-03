import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Viewreports({ reports = [], setReports }) {
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    category: '',
    description: '',
    image: ''
  });

  const handleEditClick = (report, index) => {
    setEditingId(index);
    setEditForm({
      category: report.category,
      description: report.description,
      image: report.image
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (index) => {
    const updatedReports = [...reports];
    updatedReports[index] = {
      ...updatedReports[index],
      category: editForm.category,
      description: editForm.description,
      image: editForm.image,
      date: new Date().toLocaleString() 
    };
    setReports(updatedReports);
    setEditingId(null);
    alert('Report successfully edited and update the admin!');
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      const updatedReports = reports.filter((_, i) => i !== index);
      setReports(updatedReports);
    }
  };

  return (
    <div className="p-4 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-1/2 xl:w-1/3">
        <button
          onClick={() => navigate('/report')}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Report
        </button>

        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6">My Reports</h1>
          
          {reports.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No reports submitted yet</p>
          ) : (
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  {editingId === index ? (
                    <div className="space-y-3">
                      <select
                        name="category"
                        value={editForm.category}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      >
                        <option value="Accidents/Incidents">Accidents/Incidents</option>
                        <option value="Murder">Murder</option>
                        <option value="Activity">Activity</option>
                        <option value="Vandalism">Specify other option</option>
                      </select>
                      
                      <textarea
                        name="description"
                        value={editForm.description}
                        onChange={handleEditChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="3"
                      />
                      
                      <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2 text-sm">
                          <span>Change Image:</span>
                          <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageChange}
                            className="text-sm"
                          />
                        </label>
                      </div>
                      
                      {editForm.image && (
                        <img 
                          src={editForm.image} 
                          alt="Preview" 
                          className="w-full rounded-lg object-contain border border-gray-200 max-h-48"
                        />
                      )}
                      
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1 bg-gray-200 rounded-lg"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSave(index)}
                          className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">{report.category}</h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditClick(report, index)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{report.description}</p>
                      <p className="text-sm text-gray-500 mt-2">{report.date}</p>
                      {report.image && (
                        <div className="mt-3">
                          <img 
                            src={report.image} 
                            alt={`Evidence for ${report.category} report`} 
                            className="w-full rounded-lg object-contain border border-gray-200 max-h-96"
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Viewreports;