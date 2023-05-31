// import React from 'react';
// import {
// 	Nav,
// 	NavLink,
// 	Bars,
// 	NavMenu,
// 	NavBtn,
// 	NavBtnLink,
// } from '../NavbarElements';

// const Navbar = () => {
// 	return (
// 		<>
// 			<Nav className='navbar'>
// 				<Bars />

// 				<NavMenu>
// 					<h4 style={{ color: "#FFDB58" }}><b>Medicurves</b></h4>
// 					<br></br>

// 					<NavLink to='/About' activeStyle>
// 						About
// 					</NavLink>
// 					{/* <NavLink to='/Login' activeStyle>
// 						Login 
// 					</NavLink> */}
// 					<NavLink to='/Login' activeStyle>
// 						LogOut
// 					</NavLink>

// 					{/* Second Nav */}
// 					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 				</NavMenu>

// 			</Nav>
// 		</>
// 	);
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/details" style={{
					textDecoration: 'none'
				}}>
					<h4 style={{ color: "#FFDB58" }}><b>Medicurves</b></h4>
				</Link>
			</div>
			<div className='navbar-menu'>
				<ul className="navbar-menu-link">
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>

				<div className="navbar-button">
					<Link to="/login" className="btn btn-primary">
						Logout
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
