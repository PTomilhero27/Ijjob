import React from 'react';
import { Link } from 'react-router-dom';
import PerfilUser from '../PerfilUser';

import './Style.css';

function MenuLateral() {

  return (
    <>

      <div className="main_box">
        <input type="checkbox" id="check" />
        <div className="btn_one">
          <label htmlFor="check">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <div className="sidebar_menu">
          <div className="logo">
            <Link to="/">Ijob</Link>
          </div>
          <div className="btn_two">
            <label htmlFor="check">
              <i className="fas fa-times"></i>
            </label>
          </div>
          <div className="menu">
            <ul>

              <li><i className="fas iiiiiiiiiiiyktktkjkjhkhjkgjkghkghjkjgjkhjkjh"></i>
                <PerfilUser/>
              </li>
              <li>
                <i className="fas fa-sliders-h"></i>
                <Link to="/">Help</Link>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <Link to="/">Security</Link>
              </li>

              <li>
                <i className="fas fa-question-circle"></i>
                <Link to="/"> Privacy </Link>
              </li>
              <li>
                <i className="fas fa-phone-volume"></i>
                <Link to="/">Exit</Link>
              </li>

            </ul>
          </div>
          <div className="social_media">
            <ul>
              <Link to="/"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/"><i className="fab fa-twitter"></i></Link>
              <Link to="/"><i className="fab fa-instagram"></i></Link>
              <Link to="/"><i className="fab fa-youtube"></i></Link>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default MenuLateral;