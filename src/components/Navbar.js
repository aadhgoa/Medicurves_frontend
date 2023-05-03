import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from '../NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav className='navbar'>
				<Bars />

				<NavMenu>
					<h4 style={{color: "#FFDB58" }}><b>Medicurves</b></h4>
					<br></br>
				
					<NavLink to='/About' activeStyle>
						About
					</NavLink>
					{/* <NavLink to='/Login' activeStyle>
						Login 
					</NavLink> */}
					<NavLink to='/Login' activeStyle>
						LogOut
					</NavLink>

					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>

			</Nav>
		</>
	);
};

export default Navbar;
