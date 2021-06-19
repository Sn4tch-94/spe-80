import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-container'>
			<section class='social-media'>
				<div class='social-media-wrap'>
					<div class='footer-logo'>
						<Link to='/' className='social-logo'>
							SPE80
							<i class='fab fa-typo3' />
						</Link>
					</div>
					<small class='website-rights'>SPE80 © 2021</small>
					<div class='social-icons'>
						<Link
							class='social-icon-link facebook'
							to='/'
							//target='_blank'
							aria-label='Facebook'
						>
							<i class='fab fa-facebook-f' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
