import React, { useState } from 'react'
import './Contact.css'
import { FormControl, InputLabel, TextField, Select, MenuItem, Button, Grid, Snackbar } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import emailjs from 'emailjs-com';
import { Alert } from '@material-ui/lab'

export default function Contact() {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [mail, setMail] = useState('')
	const [phone, setPhone] = useState('')
	const [adress, setAdress] = useState('')
	const [city, setCity] = useState('')
	const [demand, setDemand] = useState('')
	const [date, setDate] = useState(new Date('2021-01-01T12:00:00'))
	const [message, setMessage] = useState('')

	const [open, setOpen] = React.useState(false);

	const handleDateChange = (date) => {
		setDate(date);
	  };

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const templateParams = {
				firstName: firstName,
				lastName: lastName,
				mail: mail,
				phone : phone,
				adress: adress,
				city: city,
				demand: demand,
				date: date,
				message: message
			}

			await emailjs.send(
				"SPE80",
				"Devis",
				templateParams,
				"user_c4mrOQWOgQGbUJu39Mu2D"
			)

		} catch (e) {
			console.log(e)
		}
	}

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (reason) => {
		if (reason === 'clickaway') {
			return;
		}
	
		setOpen(false);
	};

	return (
		<div className='contact'>
      		<h1 className='title'>Devis gratuit</h1>
      		<form className='form' onSubmit={onSubmit}>
		  		<FormControl fullWidth className='form-control'>
					<Grid className='grid'>
						<TextField className='field' label="Nom" value={firstName} onChange={event => setFirstName(event.target.value)}/>
						<TextField className='field' label="Prénom" value={lastName} onChange={event => setLastName(event.target.value)}/>
					</Grid>
					<Grid className='grid'>
						<TextField className='field' label="Mail" value={mail} onChange={event => setMail(event.target.value)}/>
						<TextField className='field' label="Téléphone" value={phone} onChange={event => setPhone(event.target.value)}/>
					</Grid>
					<Grid className='grid'>
						<TextField className='field' label="Adresse" value={adress} onChange={event => setAdress(event.target.value)}/>
						<TextField className='field' label="Ville" value={city} onChange={event => setCity(event.target.value)}/>
					</Grid>
					<Grid className='grid'>
						<FormControl className='field'>
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
							<KeyboardDatePicker className='field' label="Date d'évènement" disableToolbar variant="inline" format="dd/MM/yyyy" value={date} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date',}}/>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid className='grid'>
						<TextField className='large-field' label="Décrivez votre demande" multiline rows={4} variant="outlined" value={message} onChange={event => setMessage(event.target.value)}/>
					</Grid>
					<Grid className='grid'>
						<Button className='field' type="submit" variant="contained" color="primary" onClick={handleClick}>Envoyer</Button>
					</Grid>
					<Grid className='grid'>
						<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  							<Alert onClose={handleClose} severity="success" variant="filled">Message Envoyé !</Alert>
						</Snackbar>
					</Grid>
				</FormControl>
      		</form>
   		</div>
	)
};
