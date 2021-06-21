import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-container'>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							SPE80
							<i className='fab fa-typo3' />
						</Link>
					</div>
					<small className='website-rights'>SPE80 © 2021</small>
					<div className='social-icons'>
						<Link
							className='social-icon-link facebook'
							to='/'
							//target='_blank'
							aria-label='Facebook'
						>
							<i className='fab fa-facebook-f' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
