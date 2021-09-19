import React, { useState } from 'react'
import './Locations.css'
import Sonorisation from '../components/Sonorisation'
import Eclairage from '../components/Eclairage'
import Structure from '../components/Structure'
import Vidéo from '../components/Video'
import Mobilier from '../components/Mobilier'

export default function Locations() {
	const [component, setcomponent] = useState(<Sonorisation/>)

	return (
		<div className='locations'>
			<div className='menu-container'>
				<div className='menu'>
					<button className='menu-button' onClick={() => {setcomponent(<Sonorisation/>); window.scrollTo({top: 0})}}>Sonorisation</button>
					<button className='menu-button' onClick={() => {setcomponent(<Eclairage/>); window.scrollTo({top: 0})}}>Eclairage</button>
					<button className='menu-button' onClick={() => {setcomponent(<Structure/>); window.scrollTo({top: 0})}}>Structure</button>
					<button className='menu-button' onClick={() => {setcomponent(<Vidéo/>); window.scrollTo({top: 0})}}>Vidéo</button>
					<button className='menu-button' onClick={() => {setcomponent(<Mobilier/>); window.scrollTo({top: 0})}}>Mobilier</button>
				</div>
			</div>
			<div className='items-container'>
				{component}
			</div>
		</div>
	)
}
