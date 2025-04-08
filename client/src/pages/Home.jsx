import React, { useState } from 'react';
import alertIcon from '../assets/alert-icon.png';
import calendarIcon from '../assets/calendar-icon.png';
import statsIcon from '../assets/stats-icon.png';
import locationIcon from '../assets/location-icon.png';
import timeIcon from '../assets/time-icon.png';
import chevronRightIcon from '../assets/chevron-right-icon.png';
import checkIcon from '../assets/check-icon.png';



function Home() {
  const [currentReports] = useState([
    { id: 1, title: 'Burglary Report', location: 'Main St', time: '10:30 AM', status: 'Pending', priority: 'High' },
    { id: 2, title: 'Traffic Accident', location: 'Highway 101', time: '11:45 AM', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Disturbance Call', location: 'Park Ave', time: '12:15 PM', status: 'Completed', priority: 'Low' },
    { id: 4, title: 'Suspicious Activity', location: 'Oak Street', time: '1:30 PM', status: 'Pending', priority: 'Medium' },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Patrol Downtown Area', time: '3:00 PM - 5:00 PM', completed: false },
    { id: 2, title: 'Follow-up on Case #4521', time: 'Before end of shift', completed: false },
    { id: 3, title: 'Submit Weekly Report', time: 'By Friday', completed: false },
    { id: 4, title: 'Attend Community Meeting', time: 'Tomorrow 2:00 PM', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24 lg:pb-6">
      <div className="mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
        <header className="mb-6 lg:mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 lg:p-6 rounded-xl shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white">Officer Dashboard</h1>
                <p className="text-blue-100 text-sm lg:text-base mt-1">Welcome back, Officer Lagrimas</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full text-xs sm:text-sm text-white flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    On Duty
                  </div>
                  <div className="bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full text-xs sm:text-sm text-white">
                    Police ID #4521
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <img src={alertIcon} alt="Alert" className="h-5 w-5 mr-2" />
                Current Reports
              </h2>
              <button className="text-sm text-blue-700 font-medium hover:text-blue-900 transition-colors flex items-center">
                View All
                <img src={chevronRightIcon} alt="Chevron right" className="h-4 w-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              {currentReports.map(report => (
                <div key={report.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-shadow cursor-pointer group"
                  style={{
                    borderLeftColor: 
                      report.priority === 'High' ? '#dc2626' : 
                      report.priority === 'Medium' ? '#ea580c' : 
                      '#16a34a'
                  }}>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-medium text-gray-800 text-base group-hover:text-blue-700 transition-colors">
                      {report.title}
                    </h3>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        report.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 
                        report.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {report.status}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        report.priority === 'High' ? 'bg-red-100 text-red-800' : 
                        report.priority === 'Medium' ? 'bg-orange-100 text-orange-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {report.priority} Priority
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <img src={locationIcon} alt="Location" className="h-4 w-4 mr-1" />
                    {report.location}
                  </div>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <img src={timeIcon} alt="Time" className="h-3 w-3 mr-1" />
                    {report.time}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <img src={calendarIcon} alt="Calendar" className="h-5 w-5 mr-2" />
                Tasks To Do
              </h2>
              <button className="text-sm text-blue-700 font-medium hover:text-blue-900 transition-colors flex items-center">
                View All
                <img src={chevronRightIcon} alt="Chevron right" className="h-4 w-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-3">
              {tasks.map(task => (
                <div key={task.id} className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${task.completed ? 'opacity-75' : ''}`}>
                  <div className="flex items-start">
                    <button 
                      onClick={() => toggleTaskCompletion(task.id)}
                      className={`mt-0.5 mr-3 h-5 w-5 rounded border-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                        task.completed ? 'border-green-500 bg-green-500' : 'border-blue-500 hover:border-blue-600'
                      }`}
                    >
                      {task.completed && (
                        <img src={checkIcon} alt="Check" className="h-4 w-4" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium truncate ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800 hover:text-blue-700'} text-base transition-colors`}>
                        {task.title}
                      </h3>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <img src={timeIcon} alt="Time" className="h-4 w-4 mr-1" />
                        {task.time}
                      </div>
                    </div>
                    {task.completed && (
                      <img src={checkIcon} alt="Check" className="h-5 w-5 ml-2 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="hidden lg:block">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
              <img src={statsIcon} alt="Stats" className="h-5 w-5 mr-2" />
              Quick Stats
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-gray-500 text-xs font-medium">Active Reports</h3>
                <p className="text-xl font-bold text-blue-700 mt-1">12</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-gray-500 text-xs font-medium">Completed Today</h3>
                <p className="text-xl font-bold text-green-600 mt-1">5</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-gray-500 text-xs font-medium">Pending Actions</h3>
                <p className="text-xl font-bold text-amber-600 mt-1">3</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;