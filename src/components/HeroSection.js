import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import hero1 from '../ressources/images/hero1.jpeg' // 'http://www.bookingdj.fr/wp-content/uploads/2015/07/soiree-privee-dj-appartement.jpg'
import hero2 from '../ressources/images/hero2.jpeg' // 'https://www.sortiraparis.com/images/80/66131/550998-coronavirus-mariage-fetes-de-famille-seminaire-peut-on-recuperer-un-acompte-deja.jpg'
import hero3 from '../ressources/images/hero3.png' // 'https://www.cadeau-maestro.com/img/cms/anniversaire/organiser-anniversaire-surprise.png'
import hero4 from '../ressources/images/hero4.jpeg' // 'https://weezevent.com/wp-content/uploads/2019/01/12145054/organiser-soiree.jpg'
import hero5 from '../ressources/images/hero5.jpeg' // 'https://www.parisbouge.com/build/images/event-category-cover-pictures-soiree.4486070b.jpg',

export default function HeroSection() {
	const images = [ hero1, hero2, hero3, hero4, hero5 ]

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
