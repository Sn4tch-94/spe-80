import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Prestations from './pages/Prestations'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  	return (
		<>
	  		<Router>
				<Navbar/>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/prestations' exact component={Prestations}/>
					<Route path='/locations' exact component={Locations}/>
					<Route path='/contact' exact component={Contact}/>
				</Switch>
				<Footer/>
	  		</Router>
		</>
  	);
}