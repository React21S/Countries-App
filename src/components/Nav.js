import { NavLink} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
      <div>
          <nav>     
            <ul>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/" > Home </NavLink> 
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about" > About </NavLink> 
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/countries"> Countries</NavLink> 
              </li> 

              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/form"> Form</NavLink> 
              </li> 
            </ul>
        </nav>
    </div>
    );
};

export default Nav;