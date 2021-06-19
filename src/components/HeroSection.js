import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

export default function HeroSection() {
	return (
		<div className='hero-container'>
			<video src='/videos/Nature.mp4' autoPlay loop muted/>
			<h1>LOREM IPSUM</h1>
			<p>Donec vel turpis at</p>
			<div className='hero-btns'>
				<Button
          			className='btns'
          			buttonStyle='btn--outline'
          			buttonSize='btn--large'
        		>
          		LOREM
        		</Button>
        		<Button
          			className='btns'
          			buttonStyle='btn--primary'
          			buttonSize='btn--large'
          			onClick={console.log('hey')}
        		>
          		IPSUM
				  	<i className='far fa-play-circle' />
        		</Button>
			</div>
		</div>
	)
}
