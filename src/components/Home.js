import React, {Component} from "react";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        };
        this.getMenuItem();
      this.onItemClick = this.onItemClick.bind(this);
    }

     onItemClick(item) {
        console.log(item);
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

    render() {
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
                        <button onClick={() => this.onItemClick(item)}>Show Content</button>
                          <div className={"description " + ((item.id % 2 === 0) ? 'order_0' : 'order_1')}>
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