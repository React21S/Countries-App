import { NavLink} from 'react-router-dom';

import React from 'react';

const Nav = () => {
    return (
        <div>
   <nav>     
<ul>
  <li>
    <NavLink className="active"  to="/" > Home </NavLink> 
    </li>
  <li>
    <NavLink className="active"  to="/countries"> Countries</NavLink> 
    </li>

  
   

</ul>
</nav>
        </div>
    );
};

export default Nav;