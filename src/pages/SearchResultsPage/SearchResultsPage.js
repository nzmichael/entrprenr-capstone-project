import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultsPage.scss';
const SearchResultsPage = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.map((mentor) => (
        <div key={mentor.id} className="search-result-item">
          <Link to={`/mentors/${mentor.id}`} className="mentor-name">{mentor.name}</Link>
          <p className="mentor-specialty">{mentor.specialty}</p>
          <p className="mentor-industries">{mentor.industries}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
