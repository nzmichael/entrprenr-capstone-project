import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import HomePage from './pages/HomePage/HomePage';
import MentorProfilePage from './pages/MentorProfilePage/MentorProfilePage';
import SignUp from './pages/SignUpPage/SignUpPage';
import SignUpGen from './pages/SignUpGeneral/SignUpGeneral';
import About from './pages/About/About';
import Community from './pages/CommunityPage/CommunityPage';
import Ressource from './pages/Ressource/Ressource';
import MentorSearchForm from './components/MentorSearchForm/MentorSearchForm';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get('http://localhost:8080/search', {
        params: { name: searchQuery }
      });
      setSearchResults(response.data);
      console.log('Search for:', searchQuery);
    } catch (error) {
      console.error('Error searching for mentors:', error);
    }
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/mentors/:id" element={<MentorProfilePage />} />
        <Route path="/mentor-signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUpGen />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community searchResults={searchResults}  />} />
        <Route path="/search-results" element={<SearchResultsPage searchResults={searchResults} />} />
        {/* <Route path="/ressources" element={<Ressource />} /> */}
      </Routes>
    </Router>
  );
}

export default App;