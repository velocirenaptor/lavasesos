import React, { useState, useRef, useEffect } from 'react';
import '../styles/ProfileButton.css';

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-button-container">
      <button onClick={toggleMenu}>
      <img src={require('./icon.jpeg')} className="icon" alt='profile pic' /> 
      </button>
      {isOpen && (
        <div className="popup-window" ref={menuRef}>
          <div className="popup-header">
            <span>Menú</span>
            <button className="close-button" onClick={toggleMenu}>×</button>
          </div>
          <ul className="popup-content">
            <li>Cerrar Sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
