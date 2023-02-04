import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
import history from '../containers/history';

class Products extends Component {
     constructor(props) {
            super(props);
            this.state = {
                 item: props.item
                    };
        }

    render() {
    const item = this.state.item;

        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                            <div><h2>{history.state} </h2></div>
                            </div>
        );
    }
}

export default Products;