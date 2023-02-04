import React, { Component } from 'react';
import history from '../containers/history';
import { useLocation } from "react-router-dom";


class Products extends Component {

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>{history.state} </h2>

                </div>
            </div>
        );
    }
}

export default Products;