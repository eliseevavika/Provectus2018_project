import React, {Component} from "react";
import '../styles/ContactForm.css';
import axios from "axios";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            comment: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
            .post('https://formula-test-api.herokuapp.com/contact', {
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment
            })
            .then((response) => {
                this.setState({name: '', email: '', comment: ''});
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="contact-form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name='name'
                        type="text"
                        data-parse="uppercase"
                        value={this.state.name}
                        onChange={event => this.handleChange(event)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name='email'
                        type="email"
                        value={this.state.email}
                        onChange={event => this.handleChange(event)}
                    />
                    <label htmlFor="email">Comment:</label>
                    <textarea
                        rows="10"
                        cols="45"
                        name='comment'
                        value={this.state.comment}
                        onChange={event => this.handleChange(event)}
                    />
                    <button>Send data!</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;