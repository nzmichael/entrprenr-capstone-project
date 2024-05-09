import React, { useState } from 'react';
import './MentorSearchForm.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MentorSearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // console.log('Submitting search with query:', searchQuery, 'and filter:', selectedFilter);
    try {
      const response = await axios.get('http://localhost:8080/search', {
        params: { name: searchQuery, filter: selectedFilter }
      });
      onSearch(response.data);
      setSearchQuery('');
      navigate('/search-results');
    } catch (error) {
      console.error('Error searching for mentors:', error);
    }
  };

  return (
    <form className="mentor-search-form" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search Mentors"
        value={searchQuery}
        onChange={handleInputChange}
        className="mentor-search-form__input"
      />
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="mentor-search-form__select"
      >
        <option value="" disabled>Filter By</option>
        <option value="specialty">Specialty</option>
        <option value="industries">Industries</option>
        <option value="name">Name</option>
      </select>
      <button type="submit" className="mentor-search-form__submit">Search</button>
    </form>
  );
};

export default MentorSearchForm;
