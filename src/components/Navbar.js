import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	const [click, setClick] = useState(false)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<Link to='/' className='navbar-logo' onClick={() => window.scrollTo({top: 0})}>
					SPE80
					<i className="fab fa-typo3"></i>
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/' className='nav-links' onClick={closeMobileMenu}>Accueil</Link>
					</li>
					<li className='nav-item'>
						<Link to='/prestations' className='nav-links' onClick={closeMobileMenu}>Prestations</Link>
					</li>
					<li className='nav-item'>
						<Link to='/locations' className='nav-links' onClick={closeMobileMenu}>Locations</Link>
					</li>
					<li className='nav-item'>
						<Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}