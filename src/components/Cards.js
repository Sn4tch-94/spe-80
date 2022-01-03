import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

export default function Cards() {
	return (
		<div className='cards'>
			<h1>Une soirée inoubliable pour vous et vos invités.</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='https://dams-event.fr/wp-content/uploads/2018/10/dj-paris.jpg'
							text='N°1 de la culture musicale. Demandez-nous un titre, nous l’avons !'
							label='label1'
							path='/prestations'
						/>
						<CardItem
							src='https://dams-event.fr/wp-content/uploads/2019/05/Hotel-de-ville.jpg'
							text='Prestation DJ avec son, lumières, techniques et vidéos.'
							label='label2'
							path='/prestations'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='https://dams-event.fr/wp-content/uploads/2018/09/bg-mariage-2.jpg'
							text="Profitez de chaque instant, on s'occupe du reste."
							label='label3'
							path='/prestations'
						/>
						<CardItem
							src='https://dams-event.fr/wp-content/uploads/2019/01/DJ-pour-soirée-Anniversaire.jpg'
							text='Solutions techniques dernier cri.'
							label='label5'
							path='/prestations'
						/>
						<CardItem
							src='https://dams-event.fr/wp-content/uploads/2018/12/DJ-pour-Mariage.jpg'
							text='Prestation personnalisée selon vos exigences.'
							label='label5'
							path='/prestations'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}
