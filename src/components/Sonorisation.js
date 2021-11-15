import React from 'react'
import Item from './Item'

import pioneer_cdj850 from '../ressources/images/pioneer_cdj_850_pack.jpeg'
import pioneer_cdj900 from '../ressources/images/pioneer_cdj_900_pack.jpg'
import yamaha_mg16x from '../ressources/images/yamaha_mg16xu_front.jpg'
import numark_nv2 from '../ressources/images/numark_nv2_front.jpeg'

export default function Sonorisation() {
	return (
		<div>
			<h4 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '25px'}}>Sonorisation</h4>
			<ul className='items-line'>
					<Item
						title='Régie Pioneer CDJ 850'
						imageUrl={pioneer_cdj850}
						body="Lecteur multi-formats pour DJ. De format 12' vous aurez accès aux fonctionnalits les plus précieuses pour offrir un set DJ précis et de qualité."
						price='200€ TTC'
					/>
					<Item
						title='Régie Pioneer CDJ 900'
						imageUrl={pioneer_cdj900}
						body="Lecteur mulit-formats faisant partie des nouveaux modèles haut de gamme de chez Pioneer."
						price='150€ HT'
					/>
					<Item
						title='Yamaha MG16XU'
						imageUrl={yamaha_mg16x}
						body="Console de mixage analogique polyvalente 16 canaux, 10 entrée, dotée d'une alimentation fantome 48V"
						price='60€ TTC'
					/>
					<Item
						title='Console t.mix'
						imageUrl=""
						body="Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée."
						price='50€ TTC'
					/>
					<Item
						title='Numark NVII'
						imageUrl={numark_nv2}
						body="Contrôleur DJ USB à 4 Decks equipée de deux écrans couleurs, Jog Wheels en Métal 5 pouces, 16 Pads Sensibles à la vélocité."
						price='60€ TTC'
					/>
				</ul>
				<ul className='items-line'>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
				</ul>
				<ul className='items-line'>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
					<Item
						title='JBL Eon One'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/jbleon1.png'
						body='Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée.'
						price='75€ HT'
					/>
				</ul>
		</div>
	)
}
