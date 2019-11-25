import React from "react";
import styles from "./app.css";
import countries from "../data/countries";
import cities from "../data/cities";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Stages from "./Stages";
import Avatar from "./Avatar";
import Finish from "./Finish";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            show: "Basic",
            firstName: "",
            lastName: "",
            password: "",
            repeatPassword: "",
            gender: "male",
            errorsBasic: {
                firstName: false,
                lastName: false,
                password: false,
                repeatPassword: false,
            },
            email: "",
            mobile: "",
            country: "Ukraine",
            city: "",
            errorsContacts: {
                email: false,
                mobile: false,
                country: false,
                city: false
            },
            avatar: "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
            errorsAvatar: {
                avatar: false
            }
        }
    }

    onChange = e => {
        e.preventDefault();
        this.setState({
                [e.target.name]: e.target.value
            }
        );
        console.log(e.target.name, e.target.value)
    };

    onSubmitBasic = e => {
        e.preventDefault();
        const errors = {};
        if (this.state.firstName.length < 5) {
            errors.firstName = "Must be 5 characters or more";
        }
        if (this.state.lastName.length < 5) {
            errors.lastName = "Must be 5 characters or more";
        }
        if (this.state.password.length < 6) {
            errors.password = "Must be 6 characters or more";
        }
        if (this.state.repeatPassword !== this.state.password) {
            errors.repeatPassword = "Must be equal password";
        }
        if (!this.state.gender) {
            errors.repeatPassword = "Required";
        }

        if (Object.keys(errors).length > 0) {
            console.log("Basic has Errors");
            this.setState(
                {errorsBasic: errors}
            )
        } else {
            this.setState(
                {
                    errorsBasic: {},
                    show: "Contacts"
                }
            )
            ;
            console.log("submit1", this.state.password, this.state.username);
        }
    };
    getOptionsItems = (items) => {
        return (
            items.map((item) => {
                return <option key={item.id} value={item.name}>{item.name}</option>;
            })
        )
    };

    getOptionsCities = (country) => {
        let i = countries.findIndex(cntr => cntr.name === country);
        let k = Object.values(cities);
        let m = k.filter(city => city.country === i + 1);
        return (
            m.map((city) => {
                return <option key={Object.keys(cities).find(key => cities[key] === city)}
                               value={city.name}>{city.name}</option>;
            })
        )
    };

    onSubmitContact = e => {
        e.preventDefault();
        console.log("Submit is started!");
        const errors = {};
        let regMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regMobile = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (regMail.test(this.state.email) === false) {
            errors.email = "Invalid email address";
        }
        if (Object.keys(errors).length > 0) {
            console.log("has errors");
            this.setState(
                {errorsContacts: errors}
            )
        } else {
            console.log("no errors");
            this.setState(
                {errorsContacts: {}}
            );
            console.log("submit2", this.state.mail, this.state.mobile);
        }
        if (Object.keys(errors).length > 0) {
            console.log("has errors");
            this.setState(
                {errorsContacts: errors}
            )
        } else {
            console.log("no errors");
            this.setState(
                {errorsContacts: {},
                    show: "Avatar"}
            );
            console.log("submit2", this.state.mail, this.state.mobile);
        }

    };
    onPrevContact = e => {
        e.preventDefault();
        this.setState({
            show:"Basic"
        })
    };

    onChangeAvatar = e => {
        const reader = new FileReader();
        reader.onload = e => {
            this.setState({
                avatar: e.target.result
            })
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    onSubmitAvatar = e => {
        e.preventDefault();
        console.log("Submit Avatar is started!");
        const errors = {};

        if (this.state.avatar === "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png") {
            console.log("has errors");
            errors.avatar = "Required";
            this.setState(
                {errorsAvatar: errors,
                show: "Finish"}
            )
        } else {
            console.log("no errors");
            this.setState(
                {errorsAvatar: {},
                    show: "Finish"}
            );
        }
    };

    onPrevAvatar = e => {
        this.set({
            show: "Contacts"
        })
    };

    onReset = e => {
        e.preventDefault();
        window.location.reload(false);
    };

    show = e => {

        if (this.state.show === "Contacts") {
            return (
                <Contacts email={this.state.email}
                          onChange={this.onChange}
                          errorEmail={this.state.errorsContacts.email}
                          mobile={this.state.mobile}
                          errorMobile={this.state.errorsContacts.mobile}
                          country={this.state.country}
                          getOptionsItems={this.getOptionsItems}
                          city={this.state.city}
                          getOptionsCities={this.getOptionsCities}
                          onPrevContact={this.onPrevContact}
                          onSubmitContact={this.onSubmitContact}
                />
            )
        }
        if (this.state.show === "Avatar") {
            return (
                <Avatar avatar={this.state.avatar}
                        firstName={this.state.firstName}
                        onChangeAvatar={this.onChangeAvatar}
                        errorAvatar={this.state.errorsAvatar.avatar}
                        onSubmitAvatar={this.onSubmitAvatar}
                        onPrevAvatar={this.onPrevAvatar}
                />
            )
        }
        if (this.state.show === "Finish") {
            return (
                <Finish
                    avatar={this.state.avatar}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    mobile={this.state.mobile}
                    country={this.state.country}
                    city={this.state.city}
                    onReset={this.onReset}/>
            )
        } else {
            return (
                <Basic firstName={this.state.firstName}
                       onChange={this.onChange}
                       errorFirstName={this.state.errorsBasic.firstName}
                       lastName={this.state.lastName}
                       errorLastName={this.state.errorsBasic.lastName}
                       password={this.state.password}
                       errorPassword={this.state.errorsBasic.password}
                       repeatPassword={this.state.repeatPassword}
                       errorRepeatPassword={this.state.errorsBasic.repeatPassword}
                       gender={this.state.gender}
                       errorGender={this.state.errorsBasic.gender}
                       onSubmitBasic={this.onSubmitBasic}
                />
            )
        }
    };


    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <Stages/>
                    {this.show(this.state.show)}

                </form>
            </div>
        );
    }
}
