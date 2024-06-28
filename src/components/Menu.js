import React from 'react'
import ProfileButton from './ProfileButton'
import './icon.jpeg'
import '../styles/style.css';

const Menu = () => {
  return (
    <div className="Menu">
      <button onClick={() => window.location.href = '/eventos'} className='btn'>Eventos</button> <span />
      <button onClick={() => window.location.href = '/registros'} className='btn'>Mis Registros</button> <span/>
      <ProfileButton />
    </div>
  )
}

export default Menu
