import React, { useState } from 'react'
import './Locations.css'
import Sonorisation from '../Sonorisation'
import Eclairage from '../Eclairage'
import Structure from '../Structure'
import Vidéo from '../Video'
import Mobilier from '../Mobilier'

export default function Locations() {
	const [component, setcomponent] = useState(<Sonorisation/>)

	return (
		<div className='locations'>
			<div className='menu-container'>
				<button className='menu-button' onClick={() => setcomponent(<Sonorisation/>)}>Sonorisation</button>
				<button className='menu-button' onClick={() => setcomponent(<Eclairage/>)}>Eclairage</button>
				<button className='menu-button' onClick={() => setcomponent(<Structure/>)}>Structure</button>
				<button className='menu-button' onClick={() => setcomponent(<Vidéo/>)}>Vidéo</button>
				<button className='menu-button' onClick={() => setcomponent(<Mobilier/>)}>Mobilier</button>
			</div>
			<div className='items-container'>
				{component}
			</div>
		</div>
	)
}
