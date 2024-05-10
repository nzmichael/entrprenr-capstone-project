import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import searchIcon from '../../assets/images/search.svg';
import accountIcon from '../../assets/images/account.png';
import MentorSearchForm from '../MentorSearchForm/MentorSearchForm';

const Header = ({ onSearch }) => {
  const [activeFilter, setActiveFilter] = useState('');

  const toggleSearch = (filter) => {
    setActiveFilter(filter === activeFilter ? '' : filter);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="search__bar">
        <img
          src={searchIcon}
          alt="search icon"
          className="search__icon"
          onClick={() => toggleSearch('name')}
        />
        {activeFilter === 'name' && <MentorSearchForm onSearch={onSearch} />}
        <img
          src={searchIcon}
          alt="search icon"
          className="search__icon"
          onClick={() => toggleSearch('specialty')}
        />
        {activeFilter === 'specialty' && <MentorSearchForm onSearch={onSearch} />}
        <img
          src={searchIcon}
          alt="search icon"
          className="search__icon"
          onClick={() => toggleSearch('industries')}
        />
        {activeFilter === 'industries' && <MentorSearchForm onSearch={onSearch} />}
      </div>
      <div className="header__buttons">
        <Link to="/signup">
          <img className="header__account" src={accountIcon} />
        </Link>
      </div>
    </header>
  );
};

export default Header;