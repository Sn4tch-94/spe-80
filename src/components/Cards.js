import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

export default function Cards() {
	return (
		<div className='cards'>
			<h1>Maecenas a dui ac arcu sollicitudin congue vitae et neque.</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='https://picsum.photos/1920/104'
							text='Donec rhoncus leo at sagittis efficitur.'
							label='label1'
							path='/prestations'				
						/>
						<CardItem
							src='https://picsum.photos/1920/1080'
							text='Donec tincidunt et arcu scelerisque euismod.'
							label='label2'
							path='/prestations'				
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='https://picsum.photos/1920/1060'
							text='Proin vulputate rutrum enim sit amet interdum.'
							label='label3'
							path='/prestations'				
						/>
						<CardItem
							src='https://picsum.photos/1920/1070'
							text='Maecenas fringilla ex diam.'
							label='label4'
							path='/prestations'				
						/>
						<CardItem
							src='https://picsum.photos/1920/1050'
							text='Etiam ultricies neque lorem, et ullamcorper nulla cursus eu.'
							label='label5'
							path='/prestations'				
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}
