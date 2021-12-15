import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-container'>
			{/* <section className='social-media'> */}
				<div className='footer-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo' onClick={() => window.scrollTo({top: 0})} >
							SPE80
							<i className='fab fa-typo3' />
						</Link>
					</div>
					<div className='website-rights'>
						<small className='small'>80160 Plachy-Buyon</small>
						<small className='small'>SIREN : 527 838 221</small>
						<small className='small'>SPE80 © 2021</small>
					</div>
					<div className='social-icons'>
						<a
							className='social-icon-link'
							href='https://www.facebook.com/animationsonorisation.retourne'
							aria-label='Facebook'
						>
							<i className='fab fa-facebook-f' />
						</a>
					</div>
				</div>
			{/* </section> */}
		</div>
	);
}

export default Footer;
