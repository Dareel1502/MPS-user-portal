import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './pages/Report';
import Viewreports from './components/Viewreports';
import { useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';

function App() {
  const [reports, setReports] = useState([
    {
      category: 'Accidents/Incidents',
      description: 'Car accident on Main Street near the intersection with 5th Avenue. Major injuries reported.',
      date: new Date('2023-05-15').toLocaleString(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2kMXNyN6pi0IPG8QALFPgyZw2Ko6RgmiBw&s'
    },
    {
      category: 'Murder',
      description: 'Suspicious activity reported in the downtown area late at night. Heard loud arguments followed by gunshots.',
      date: new Date('2023-05-10').toLocaleString(),
      image: 'https://wheldonlaw.co.uk/wp-content/uploads/2024/03/Murder-and-Manslaughter.jpeg'
    },
    {
      category: 'Activity',
      description: 'Patroling on the streets.',
      date: new Date('2023-05-05').toLocaleString(),
      image: 'https://img.bomboradyo.com/vigan/2024/06/PNP-CHECKPOINT.jpg'
    },
    {
      category: 'Vandalism',
      description: 'Graffiti on the side of the community center building. Appears to be gang-related.',
      date: new Date('2023-04-28').toLocaleString(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV945jdH1OsMZB7tpOs_RzubcFeqtRKQjMZQ&s'
    },
    {
      category: 'Theft',
      description: 'Break-in reported at the convenience store on Elm Street. Cash register was stolen.',
      date: new Date('2023-04-20').toLocaleString(),
      image: 'https://i0.wp.com/psbalita.com/wp-content/uploads/2021/12/267886076_689241572058528_3431567604485105131_n.jpg?fit=720%2C332&ssl=1'
    }
  ]);

  const addReport = (newReport) => {
    setReports([newReport, ...reports]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-grow pb-16">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home as default route */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/report" element={<Report addReport={addReport} />} />
            <Route path="/my-reports" element={<Viewreports reports={reports} setReports={setReports} />} />
          </Routes>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;