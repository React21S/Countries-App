import { NavLink} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
        <div>
        
<ul>
  <li><NavLink className={(navData) => navData.isActive ? "active" : "" }to="/" > Home </NavLink> </li>
  <li><NavLink className={(navData) => navData.isActive ? "active" : "" } to="/countries"> Countries</NavLink> </li>

</ul>
        </div>
    );
};

export default Nav;