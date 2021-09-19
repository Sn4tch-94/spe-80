import React from 'react'
import Item from './Item'

import white_curve from '../ressources/images/nicols_white_curve_2.jpg'
import afx_1r from '../ressources/images/afx_beam1r_1.jpg'
import birdy_xs from '../ressources/images/nicols_birdy_xs_iii_1.jpg'
import tmh_x4 from '../ressources/images/eurolite_tmh_x4_3.jpg'

export default function Eclairage() {
	return (
		<div>
			<h4 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '25px'}}>Eclairage</h4>
			<ul className='items-line'>
					<Item
						title='Nicols White Curve'
						imageUrl={white_curve}
						body='Avec ses 8 LED blanche pilotable, cette lyre propose des effets étonnants du fait de ses multifaisceaux et de sa motorisation.'
						price='15€ TTC'
					/>
					<Item
						title='Afx 1R 100W'
						imageUrl={afx_1r}
						body="Lyre professionelle à lampe compacte offrant d'incroyables performances en intérieur comme en extérieur."
						price='25€ TTC'
					/>
					<Item
						title='Nicols Birdy XS III'
						imageUrl={birdy_xs}
						body="Une petite lyre Spot équipé d'une LED 30W avec un cercle lumineux pour des effets surprenants et inovants."
						price='15€ TTC'
					/>
					<Item
						title='Eurolite TMH-X4'
						imageUrl={tmh_x4}
						body="Lyre compacte équipée de 19 puissantes LED 15W qui convient pour tout types d'évènements."
						price='80€ TTC'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
			</ul>
			<ul className='items-line'>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
			</ul>
			<ul className='items-line'>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
					<Item
						title='Robe Esprite'
						imageUrl='http://www.cynergie-sonorisation-live.com/catalogue/assesprite.png'
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='250€ HT'
					/>
			</ul>
		</div>
	)
}
