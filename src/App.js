import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Prestations from './components/pages/Prestations'
import Locations from './components/pages/Locations'
import Contact from './components/pages/Contact'

export default function App() {
  	return (
		<div className="App">
	  		<Router>
				<Navbar/>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/prestations' exact component={Prestations}/>
					<Route path='/locations' exact component={Locations}/>
					<Route path='/contact' exact component={Contact}/>
				</Switch>
	  		</Router>
		</div>
  	);
}