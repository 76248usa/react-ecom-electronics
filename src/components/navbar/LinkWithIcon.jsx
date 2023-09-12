import React from 'react'
import './LinkWithIcon.css'
import { NavLink } from 'react-router-dom';

function LinkWithIcon({emoji, link, title, sidebar}) {
  return (
    <div>
        <NavLink to={link} className={sidebar ? 'align_center sidebar_link' : 
        'align_center' }>{title} <img src={emoji} alt="" 
          className="link_emoji " />
          </NavLink>
    </div>
  )
}

export default LinkWithIcon