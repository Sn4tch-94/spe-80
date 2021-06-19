import React, { useState } from 'react'
import './Contact.css'
import { FormControl, InputLabel, TextField, Select, MenuItem, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

export default function Contact() {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [mail, setMail] = useState('')
	const [phone, setPhone] = useState('')
	const [city, setCity] = useState('')
	const [demand, setDemand] = useState('')
	const [date, setDate] = useState(new Date('2021-01-01T12:00:00'))
	const [message, setMessage] = useState('')
	
	const printData = () => {
		console.log('firstName: ', firstName);
		console.log('lastName: ', lastName);
		console.log('email: ', mail);
		console.log('phone: ', phone);
		console.log('city:', city)
		console.log('demand: ', demand);
		console.log('date: ', date);
		console.log('message: ', message);
	};

	const handleDateChange = (date) => {
		setDate(date);
	  };

	return (
		<div className='contact-container'>
      		<h1>Merci de remplir ce formulaire</h1>
      		<form>
			  	<FormControl>
					<TextField label="Nom" value={firstName} onChange={event => setFirstName(event.target.value)}/>
					<TextField label="Prénom" value={lastName} onChange={event => setLastName(event.target.value)}/>
					<TextField label="Mail" value={mail} onChange={event => setMail(event.target.value)}/>
					<TextField label="Téléphone" value={phone} onChange={event => setPhone(event.target.value)}/>
					<TextField label="Ville" value={city} onChange={event => setCity(event.target.value)}/>
					<FormControl>
					<InputLabel>Type d'évènement</InputLabel>
        			<Select value={demand} onChange={event => setDemand(event.target.value)}>
          				<MenuItem value="Mariage">Mariage</MenuItem>
          				<MenuItem value="Anniversaire">Anniversaire</MenuItem>
          				<MenuItem value="Entreprise">Entreprise</MenuItem>
						<MenuItem value="Afterwork">Afterwork</MenuItem>
						<MenuItem value="Soirée privée">Soirée privée</MenuItem>
						<MenuItem value="Location">Location</MenuItem>
						<MenuItem value="Autre">Autre</MenuItem>
        			</Select>
					</FormControl>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker label="Date d'évènement" disableToolbar variant="inline" format="dd/MM/yyyy" margin="normal" value={date} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date',}}/>
					</MuiPickersUtilsProvider>
					<TextField label="Message" multiline rows={4} variant="outlined" value={message} onChange={event => setMessage(event.target.value)}/>
					<Button type="submit" onClick={printData} variant="contained" color="primary">Envoyer</Button>
				</FormControl>
      		</form>
    	</div>
	)
};
