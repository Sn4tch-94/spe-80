import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function HeroSection() {
	const images = [
		'http://www.bookingdj.fr/wp-content/uploads/2015/07/soiree-privee-dj-appartement.jpg',
		'https://www.sortiraparis.com/images/80/66131/550998-coronavirus-mariage-fetes-de-famille-seminaire-peut-on-recuperer-un-acompte-deja.jpg',
		'https://www.cadeau-maestro.com/img/cms/anniversaire/organiser-anniversaire-surprise.png',
		'https://weezevent.com/wp-content/uploads/2019/01/12145054/organiser-soiree.jpg',
		'https://www.parisbouge.com/build/images/event-category-cover-pictures-soiree.4486070b.jpg',
	]

	return (
		<div className='slide-container'>
			<Slide pauseOnHover={false} duration={3000}>
			{images.map((each, index) => (
				<div className='each-slide'>
            		<div style={{'backgroundImage': `url(${images[index]})`}}></div>
          		</div>
			))}
        	</Slide>
			<div className='slide-buttons'>
				<Button className='button' buttonStyle='btn--outline' buttonSize='btn--large'>TEST</Button>
			</div>
		</div>
	)
}
