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
                    <img src={require("../images/hotdogImages.png")} className="header-image"/>
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
                        <Route path="/contact" component={contactForm}/>
                    </Switch>
                    <footer className="footer">
                        <span className="copyright">
                            ® 2016 Dirty Dogs all rights reserved
                        </span>
                        <span className="address">
                            274 Marconi Blvd. Columbus, Ohio 43215 &#160;|&#160;614.538.0095 &#160;|&#160;Contact Us
                        </span>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;