import React, {Component} from "react";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        };
        this.getMenuItem();
    }

    getMenuItem() {
        axios.get('https://formula-test-api.herokuapp.com/menu')
            .then((response) => {
                // TODO: all dates are expired. That's why I picked a random date instead of currentDate.
                const menuItemsFilteredByDate = response.data.filter(item => item.expirationDate > "05-01-2018");
                this.setState({
                    menuItems: menuItemsFilteredByDate
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                <section id="wrapper">
                    <img src={require("../images/hotdog.png")}/>
                    <div className="dirty-dogs">
                        Dirty Dogs serves all-beef, vegan and <br/>vegatagian hot dogs.
                    </div>
                    <button className="button more-dogs">More Dogs ‘n Make Em Hot</button>
                </section>
                {this.state.menuItems.map(function (item, index) {
                    const {name, description, backgroundURL} = item;
                    return (
                        <div className="image-box" key={item.id}>
                            <div className={"description " + ((index % 2 === 0) ? 'order_0' : 'order_1')}>
                                <div className="dish-name">
                                    &#8212;&#160;&#160; {name}
                                </div>
                                <div className="dish-description">
                                    {description}
                                </div>
                            </div>
                            <img src={backgroundURL}/>
                        </div>
                    );
                })
                }
            </div>
        );
    }
}

export default Home;