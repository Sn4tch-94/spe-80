import React from 'react'
import Item from './Item'

import white_curve from '../ressources/images/nicols_white_curve.jpg'
import afx_1r from '../ressources/images/afx_beam1r.jpg'
import birdy_xs from '../ressources/images/nicols_birdy_xs_iii.jpg'
import tmh_x4 from '../ressources/images/eurolite_tmh_x4.jpg'
import atomix_3000 from '../ressources/images/Martin_Atomic3000.jpeg'

import shehds_par64 from '../ressources/images/shehds_18x12w.webp'
import blackgun_uv from '../ressources/images/blackgun_uv.jpeg'
import cameo_multifx from '../ressources/images/cameo_multifxbar.jpeg'
import adj_minidekker from '../ressources/images/adj_minidekker.jpeg'
import mini_spider from '../ressources/images/fungeneration_minispider_2.jpeg'

export default function Eclairage() {
	return (
		<div style={{ margin: '30px' }}>
			<h4 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '25px'}}>Eclairage</h4>
			<ul className='items-line'>
					<Item
						title='Nicols White Curve'
						imageUrl={white_curve}
						body='Avec ses 8 LED blanches pilotables, cette lyre propose des effets étonnants du fait de ses multifaisceaux et de sa motorisation.'
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
						body="Une petite lyre Spot équipée d'une LED 30W avec un cercle lumineux pour des effets surprenants et innovants."
						price='15€ TTC'
					/>
					<Item
						title='Eurolite TMH-X4'
						imageUrl={tmh_x4}
						body="Lyre compacte équipée de 19 puissantes LED 15W qui convient pour tout type d'évènement."
						price='80€ TTC'
					/>
					<Item
						title='Atomic 3000'
						imageUrl={atomix_3000}
						body="Puissant stroboscope Xenon de 3000 Watts à impact, hyper brillant, pilotable en DMX."
						price='20€ TTC'
					/>
					<Item
						title='Shehds Par 64'
						imageUrl={shehds_par64}
						body="Par multifonctions puissant, doté de 18 LED RGBW pilotables de 12W chacune, utilisable en eclairage architectural."
						price='5€ TTC'
					/>
					<Item
						title='Blackgun UV'
						imageUrl={blackgun_uv}
						body="Projecteur ultraviolet extrêmement puissant avec réflecteur haute qualité pour une lumière noire intense."
						price='15€ TTC'
					/>
					<Item
						title='Caméo MultiFX Bar'
						imageUrl={cameo_multifx}
						body="Solution complète avec 3 effets : 4 spots, 2 derby et 4 stroboscopes. Mise en œuvre très rapide, programmes intégrés."
						price='40€ TTC'
					/>
					<Item
						title='ADJ Mini Dekker'
						imageUrl={adj_minidekker}
						body="Equipé de 2 LED RGBW de 10W chacune, produisants des faisceaux multicolores à partir de 48 lentilles."
						price='5€ TTC'
					/>
					<Item
						title='Fun Generation MiniSpider'
						imageUrl={mini_spider}
						body='Lyre professionelle de dernière génération. Nouvelle venue de la marque ROBE. Puissance de 650W à gobos variables.'
						price='15€ TTC'
					/>
			</ul>
		</div>
	)
}
