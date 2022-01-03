import React from 'react'
import Item from './Item'

import asd_290 from '../ressources/images/asd_290.jpeg'
import asd_angle from '../ressources/images/asd_angle.jpeg'
import asd_platine from '../ressources/images/asd_platine.jpeg'
import asd_embase from '../ressources/images/asd_embase.jpeg'
import asd_grill from '../ressources/images/asd_grill.jpeg'
import asd_alt250 from '../ressources/images/asd_alt250.jpeg'
import asd_alt400 from '../ressources/images/asd_alt400.jpeg'
import asd_alt550 from '../ressources/images/asd_alt550.jpg'

export default function Structure() {
	return (
		<div style={{ margin: '30px' }}>
			<h4 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '25px'}}>Structure</h4>
			<ul className='items-line'>
				<Item
					title="Structure alu 1M"
					imageUrl={asd_290}
					body="Structure de 1M fabriquée en France par ASD, référence SX 290. Conçue pour l'agencement de stands d'expositions, scènes de théâtre, salles de spectacle."
					price='10€ TTC'
				/>
				<Item
					title="Structure alu 2M"
					imageUrl={asd_290}
					body="Structure de 2M fabriquée en France par ASD, référence SX 290. Conçue pour l'agencement de stands d'expositions, scènes de théâtre, salles de spectacle."
					price='5€ TTC'
				/>
				<Item
					title="Angle 90 degrés"
					imageUrl={asd_angle}
					body="Angle 90 degrés qui permet de raccorder 2 barres ensemble. Manchons et goupilles de fixations fournis."
					price='5€ TTC'
				/>
				<Item
					title="Platine légère"
					imageUrl={asd_platine}
					body="Platine qui permet de poser une extrémité de structure au sol, de manière stable."
					price='5€ TTC'
				/>
				<Item
					title="Embase lourde"
					imageUrl={asd_embase}
					body="Embase lestée de 60Kg servant à stabiliser des structures de grandes tailles."
					price='25€ TTC'
				/>
				<Item
					title="Grill"
					imageUrl={asd_grill}
					body="Ensemble complet mesurant 3 mètres par 4. Idéal pour une piste de danse ou pour un stand intérieur comme extérieur"
					price='200€ TTC'
				/>
				<Item
					title="Pied AL 250"
					imageUrl={asd_alt250}
					body="Pied de levage ASD à vis, permettant une charge de 70Kg, à 2,50m de hauteur"
					price='10€ TTC'
				/>
				<Item
					title="Pied ALT 400"
					imageUrl={asd_alt400}
					body="Pied de levage ASD à treuil, permettant une charge de 80Kg, à 4m de hauteur"
					price='10€ TTC'
				/>
				<Item
					title="Pied ALT 550"
					imageUrl={asd_alt550}
					body="Pied de levage professionnel ASD à treuil, permettant une charge de 225Kg, à 5,50m de hauteur"
					price='15€ TTC'
				/>
			</ul>
		</div>
	)
}
