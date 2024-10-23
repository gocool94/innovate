import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Home from './components/Home';
import Login from './components/Login';
import MyIdeas from './components/MyIdeas'
import ReviewIdeas from './components/ReviewIdeas'
import ContactUs from './components/ContactUs' // Import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Load the Login page first */}
        <Route path="/home" element={<Home />} /> {/* Home page after login */}
        <Route path="/homepage" element={<Homepage />} /> {/* Assuming you still want a separate homepage */}
        <Route path="/my-ideas" element={<MyIdeas />} />
<Route path="/review-ideas" element={<ReviewIdeas />} />
<Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
