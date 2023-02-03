import React, {Component} from 'react';
import '../styles/App.css';
import Home from '../components/Home';
import ContactForm from "../components/ContactForm";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const home = () => <Home/>;
const contactForm = () => <ContactForm/>; 

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <img src={require("../images/healthy_receries.png")} alt="" className="header-image"/>
                    <nav>
                        <div>
                            <Link to="/menu">menu</Link>
                            <Link to="/catering">catering</Link>
                            <Link to="/about">about</Link>
                            <Link to="/contact">contact</Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={home}/>
                        <Route exact path="/menu" component={home}/>
                        <Route path="/contact" component={contactForm}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;