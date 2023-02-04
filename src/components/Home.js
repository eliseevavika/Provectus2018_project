import React, {Component} from "react";
import axios from "axios";
import history from '../containers/history';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            item: null
        };
        this.getMenuItem();
    }

    getMenuItem() {

        axios.get("../menu.json")
            .then((response) => {
                const menuItems = response.data;
                this.setState({
                    menuItems: menuItems
                });
            })
            .catch((error) => console.log(error));
    }

    render(){

        return (
            <div>
                <section id="wrapper">
                    <img src={require("../images/salad_icon.png")} alt="" />
                    <div className="dirty-dogs">
                        Whole-foods based recipes,<br/>healthy and easy dishes.
                    </div>
                    <button className="button more-dogs">More recepies</button>
                </section>
                 {this.state.menuItems.map(function (item) {
                    return (
                        <div className="image-box" key={item.id}>
                          <div className={"description " + ((item.id % 2 === 0) ? 'order_0' : 'order_1')}>
                           <form>

                            <button onClick={() => history.push({pathname: '/products', state: { item: item }})} >Click button to view products</button>


                                      </form>



                             {item.ingredients.map((ingredient) => (

                                         <ul key={ingredient}>
                                           <li key={ingredient}>{ingredient} </li>

                                         </ul>
                                     ))}
                                <div className="dish-name">
                                    &#8212;&#160;&#160; {item.title}
                                </div>
                           </div>
                          <img src={item.img} alt=" " />
                        </div>
                    );
                },this)
                }
            </div>
        );
    }
}

export default Home;