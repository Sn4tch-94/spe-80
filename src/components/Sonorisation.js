import React from 'react'
import Item from './Item'

import pioneer_cdj850 from '../ressources/images/pioneer_cdj_850_pack.jpeg'
import pioneer_cdj900 from '../ressources/images/pioneer_cdj_900_pack.jpg'
import yamaha_mg16x from '../ressources/images/yamaha_mg16xu_front.jpg'
import numark_nv2 from '../ressources/images/numark_nv2_front.jpeg'
import tmix_1202 from '../ressources/images/tmix_xmix_1202fx.jpeg'
import apg_system from '../ressources/images/apg_systeme_kit.jpeg'
import audiophony_system from '../ressources/images/audiophony_system_kit.jpeg'
import mackie_thumps from '../ressources/images/mackie_thump_15.jpg'
import bst_bwa220 from '../ressources/images/bst_bwa220_front.jpeg'
import shure_sm58 from '../ressources/images/shure_sm58.jpeg'
import stageline_dm3s from '../ressources/images/stageline_dm3s.jpg'
import shure_pg58 from '../ressources/images/shure_pg58.jpeg'
import akg_wms420 from '../ressources/images/akg_wms420.jpeg'

export default function Sonorisation() {
	return (
		<div style={{ margin: '30px' }}>
			<h4 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '25px'}}>Sonorisation</h4>
			<ul className='items-line'>
					<Item
						title='Régie Pioneer CDJ 850'
						imageUrl={pioneer_cdj850}
						body="Lecteur multi-format pour DJ. De format 12'' vous aurez accès aux fonctionnalités les plus précieuses pour offrir un set DJ précis et de qualité."
						price='200€ TTC'
					/>
					<Item
						title='Régie Pioneer CDJ 900'
						imageUrl={pioneer_cdj900}
						body="Lecteur multi-format faisant partie des nouveaux modèles haut de gamme de chez Pioneer."
						price='150€ TTC'
					/>
					<Item
						title='Yamaha MG16XU'
						imageUrl={yamaha_mg16x}
						body="Console de mixage analogique polyvalente 16 canaux, 10 entrées, dotée d'une alimentation fantome 48V"
						price='60€ TTC'
					/>
					<Item
						title='Console t.mix'
						imageUrl={tmix_1202}
						body="Système de diffusion Line Array tout-en-un. Connectivité Bluetooth intégrée."
						price='50€ TTC'
					/>
					<Item
						title='Numark NVII'
						imageUrl={numark_nv2}
						body="Contrôleur DJ USB à 4 Decks equipés de deux écrans couleurs, Jog Wheels en Métal 5 pouces, 16 Pads Sensibles à la vélocité."
						price='60€ TTC'
					/>
					<Item
						title='Système son APG'
						imageUrl={apg_system}
						body="Composé de 4 caissons 146S et de 4 têtes MC2, ce kit prêt a l'emploi est capable de sonoriser tout type d'évènement grâce à sa puissance de 2800W."
						price='Prix sur demande'
					/>
					<Item
						title='Système son Audiophony'
						imageUrl={audiophony_system}
						body="D'une puissance de 1600W, ce kit polyvalent se démarque par sa qualité audio ainsi que par son encombrement réduit. Il est adapté pour des évènements de petite taille."
						price='200€ TTC'
					/>
					<Item
						title="Mackie thumps 15''"
						imageUrl={mackie_thumps}
						body="Enceinte de sonorisation active plug&play compacte qui convient pour une large variété d'applications. Possibilité d'installation sur pied, 2 unités disponibles."
						price='25€ TTC'
					/>
					<Item
						title='BST BWA 220'
						imageUrl={bst_bwa220}
						body="Enceinte mobile autonome amplifiée fonctionnant sur batterie. Lecteur CD/USB/SD, micro et bluetooth intégré."
						price='30€ TTC'
					/>
					<Item
						title='Shure SM58'
						imageUrl={shure_sm58}
						body="Microphone filaire légendaire de la marque SHURE, devenu référence mondiale grâce à sa technologie ainsi qu'à sa robustesse."
						price='10€ TTC'
					/>
					<Item
						title='StageLine DM3S'
						imageUrl={stageline_dm3s}
						body="Microphone filaire grand public qui se veut polyvalent. D'une qualité convenable, il est conseillé pour une utilisation type conférence."
						price='10€ TTC'
					/>
					<Item
						title='Shure PG58'
						imageUrl={shure_pg58}
						body="Microphone sans fil qui combine fiabilité et simplicité d'utilisation, pensé pour accentuer l'intelligibilité de la voix."
						price='20€ TTC'
					/>
					<Item
						title='AKG WMS420'
						imageUrl={akg_wms420}
						body="Micro sans fil de qualité professionelle qui se caractérise par son niveau de gain élévé qui lui permet d'être efficace même dans des situations bruyantes."
						price='20€ TTC'
					/>
			</ul>
		</div>
	)
}
