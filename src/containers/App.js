import React, {Component} from 'react';
import '../styles/App.css';
import Home from '../components/Home';
import ContactForm from "../components/ContactForm";
import Products from "../components/Products";
import {Router, Link, Route, Routes} from "react-router-dom";
import history from './history';


class App extends Component {
    render() {
        return (
            <Router location={history.location} navigator={history}>
                <div>
                    <img src={require("../images/healthy_receries.png")} alt="" className="header-image"/>

                    <nav>
                        <div>
                            <Link to="/menu">menu</Link>
                            <Link to="/products">products</Link>
                            <Link to="/about">about</Link>
                            <Link to="/contact">contact</Link>

                        </div>
                    </nav>

                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/menu" element={<Home/>}/>
                        <Route path="/contact" element={<ContactForm/>}/>
                        <Route path="/products" element={<Products/>}/>

                    </Routes>

                </div>
            </Router>
        );
    }
}

export default App;