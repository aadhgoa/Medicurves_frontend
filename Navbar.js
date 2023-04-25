import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav className='navbar'>
		<Bars />

		<NavMenu>
            <h4><b>Medicurves</b></h4>
            <br></br>
		<NavLink to='/Home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/Login' activeStyle>
			Login
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
