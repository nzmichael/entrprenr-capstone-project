import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import searchIcon from '../../assets/images/search.svg';
import accountIcon from '../../assets/images/account.png';
import MentorSearchForm from '../MentorSearchForm/MentorSearchForm';


// const Header = ({ onSearch }) => {
//     const [isSearchActive, setIsSearchActive] = useState('');
//     // const history = useHistory();
//     // const [searchQuery, setSearchQuery] = useState('');

//   const toggleSearch = () => {
//     setIsSearchActive(!isSearchActive);
//   };

const Header = ({ onSearch }) => {
    const [isSearchActive, setIsSearchActive] = useState('');

    const toggleSearch = (filter) => {
        setIsSearchActive(filter === isSearchActive ? '' : filter);
    };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
            <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="search__bar">
      <img src={searchIcon} alt="search icon" className="search__icon" onClick={() => toggleSearch('name')} />
                {isSearchActive === 'name' && <MentorSearchForm onSearch={onSearch} filter="name" />}
                <img src={searchIcon} alt="search icon" className="search__icon" onClick={() => toggleSearch('specialty')} />
                {isSearchActive === 'specialty' && <MentorSearchForm onSearch={onSearch} filter="specialty" />}
                <img src={searchIcon} alt="search icon" className="search__icon" onClick={() => toggleSearch('industries')} />
                {isSearchActive === 'industries' && <MentorSearchForm onSearch={onSearch} filter="industries" />}
      {/* <form onSubmit={handleSearchSubmit}> */}
        {/* <img src={searchIcon} alt="search icon" className="search__icon" onClick={toggleSearch} /> */}
        {/* {isSearchActive && <MentorSearchForm onSearch={onSearch} />} */}
        {/* <input type="text" placeholder="Search" className={`search__input ${isSearchActive ? 'active' : ''}`} /> */}
        {/* </form> */}
      </div>
      <div className="header__buttons">
        <Link to="/signup"><img className="header__account" src={accountIcon}/></Link>
        {/* <Link to="/signup" className="header__buttons-signup">Sign Up</Link>
        <Link to="/signin" className="header__buttons-login">Log In</Link> */}
      </div>
    </header>
  );
};

export default Header;
