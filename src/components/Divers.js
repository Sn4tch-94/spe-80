import React from 'react'
import Item from './Item'

import videoprojecteur from '../ressources/images/videoprojecteur_ecran_pack.jpeg'
import pupitre from '../ressources/images/monacor_pupitre.jpeg'
import mange_debout from '../ressources/images/mange_debout.jpeg'
import granita_3 from '../ressources/images/granita_3.jpeg'
import granita_1 from '../ressources/images/granita_1.jpeg'
import evolite_heavyfog from '../ressources/images/evolite_heavyfog_3000C.jpeg'
import ue_proline_snow_350 from '../ressources/images/ue_proline_snow_350.png'
import ue_projection_tube from '../ressources/images/ue_projection_tube.png'
import boomtone_double_bubble from '../ressources/images/boomtone_double_bubble_v2.jpeg'
import fe_kit_support from '../ressources/images/fe_kit_support.webp'
import fe_jet_de_scene from '../ressources/images/fe_jet_de_scene.webp'

import escalier_scene from '../ressources/images/escalier_scene.jpg'

export default function Divers() {
	return (
		<div style={{ margin: '30px' }}>
			<h4 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '25px'}}>Divers</h4>
			<ul className='items-line'>
					<Item
						title='Pack Vidéo'
						imageUrl={videoprojecteur}
						body="Un vidéoprojecteur ultra-performant fournit avec tous ses accessoires, idéal pour toutes les occasions : soirée film, karaoké, conférence, etc."
						price='70€ TTC'
					/>
					<Item
						title='Pupitre de scène'
						imageUrl={pupitre}
						body="Pupitre professionnel avec unité récepteur 2 canaux multi-fréquences intégrée, UHF PLL et amplificateur classe D."
						price='70€ TTC'
					/>
					<Item
						title='Mange debout'
						imageUrl={mange_debout}
						body="Diamètre 80cm, Hauteur 110cm. Pliable pour un transport et un stockage plus facile."
						price='0€ TTC'
					/>
					<Item
						title='Machine à granita'
						imageUrl={granita_3}
						body="Ses 3 bacs de 10 litres permettent de proposer un assortiment de 3 parfums à servir ensemble ou séparément. "
						price='50€ TTC'
					/>
					<Item
						title='Machine à granita'
						imageUrl={granita_1}
						body="Bac simple de 10 litres, facile d'utilisation. Son petit format s'adapte à toutes les circonstances."
						price='20€ TTC'
					/>
					<Item
						title='Evolite HeavyFog 3000C'
						imageUrl={evolite_heavyfog}
						body="Machine à fumée lourde professionnelle compacte qui ne nécessite pas de glace. Permet d'obtenir une fumée bien epaisse collée au sol."
						price='120€ TTC'
					/>
					<Item
						title='UE Proline Snow 350'
						imageUrl={ue_proline_snow_350}
						body="Machine à projection de neige, elle répond aux exigences des professionnels et est destinée aux moyennes et grandes installations fixes ou mobiles."
						price='200€ TTC'
					/>
					<Item
						title='UE Projection Tube'
						imageUrl={ue_projection_tube}
						body="Machine à projection de confettis et d’un grand nombre d’autres produits tels que la neige papier, les pétales de fleurs, le pop corn, les balles en mousse, etc."
						price='50€ TTC'
					/>
					<Item
						title='BoomTone DJ Double Bubble V2'
						imageUrl={boomtone_double_bubble}
						body="Machine à bulles gros débit BoomToneDJ, modèle sur roulettes, contrôlable via sa télécommande sans fil."
						price='50€ TTC'
					/>
					<Item
						title='Kit de support - Jets de scène'
						imageUrl={fe_kit_support}
						body="Support sans fil qui vous permet de déclencher vos jets de scène à distance à l'aide d'une télécommande !"
						price='20€ TTC'
					/>
					<Item
						title='Jets de scène'
						imageUrl={fe_jet_de_scene}
						body="Permet de projeter des étincelles dorées de 1m à 5m pendant des durées variants de 1s à 60s. Utilisable en intérieur/extérieur."
						price='Prix sur demande'
					/>
			</ul>
		</div>
	)
}
