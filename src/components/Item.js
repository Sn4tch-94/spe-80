import React from 'react'
import './Item.css'

export default function Item({title, imageUrl, body, price}) {
	return (
		<div className='item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt=''/>
			</div>
			<div className='item-content'>
				<div className='item-title'>
					<h3>{title}</h3>
				</div>
				<div className='item-body'>
					<p>{body}</p>
				</div>
			</div>
			<div className='item-price'>
				<p>{price}</p>
			</div>
		</div>
	)
}