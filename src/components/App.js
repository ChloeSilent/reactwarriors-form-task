import React from "react";
import styles from "./app.css";
import countries from "../data/countries";
import cities from "../data/cities";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
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
                gender: false,
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
        console.log("Submit is started!");
        const errors = {};
        if (this.state.firstName.length < 5) {
            errors.firstName = "Must be 5 characters or more";
        }
        if (this.state.lastName.length < 5) {
            errors.lastName = "Must be 5 characters or more";
        }
        if (!this.state.password.length < 6) {
            errors.password = "Must be 6 characters or more";
        }
        if (this.state.repeatPassword !== this.state.password) {
            errors.repeatPassword = "Must be equal password";
        }
        if (!this.state.gender) {
            errors.repeatPassword = "Required";
        }

        if (Object.keys(errors).length > 0) {
            this.setState(
                {errorsBasic: errors}
            )
        } else {
            this.setState(
                {errorsBasic: {}}
            );
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
                {errorsContacts: {}}
            );
            console.log("submit2", this.state.mail, this.state.mobile);
        }

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

        if ( this.state.avatar === "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png") {
            console.log("has errors");
            errors.avatar = "Required";
            this.setState(
                {errorsAvatar: errors}
            )
        } else {
            console.log("no errors");
            this.setState(
                {errorsAvatar: {}}
            );
        }
    };


    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <div className="steps mb-4">
                        <div className="step is-active">
                            <div className="step__marker">1</div>
                            <div className="step__title mt-1">Basic</div>
                        </div>
                        <div className="step">
                            <div className="step__marker">2</div>
                            <div className="step__title mt-1">Contacts</div>
                        </div>
                        <div className="step">
                            <div className="step__marker">3</div>
                            <div className="step__title mt-1">Avatar</div>
                        </div>
                        <div className="step">
                            <div className="step__marker">4</div>
                            <div className="step__title mt-1">Finish</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter first name"
                            name="firstName"
                            value={this.state.firstName}
                            id="firstName"
                            onChange={this.onChange}
                            autoComplete="username"
                        />
                        {this.state.errorsBasic.firstName ? (
                            <div className="invalid-feedback">{this.state.errorsBasic.firstName}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter last name"
                            name="lastName"
                            id="lastName"
                            value={this.state.lastName}
                            autoComplete="username"
                            onChange={this.onChange}
                        />
                        {this.state.errorsBasic.lastName ? (
                            <div className="invalid-feedback">{this.state.errorsBasic.lastName}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            autoComplete="new-password"
                            onChange={this.onChange}
                        />
                        {this.state.errorsBasic.password ? (
                            <div className="invalid-feedback">{this.state.errorsBasic.password}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Repeat password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter repeat password"
                            name="repeatPassword"
                            id="repeatPassword"
                            value={this.state.repeatPassword}
                            autoComplete="new-password"
                            onChange={this.onChange}
                        />
                        {this.state.errorsBasic.repeatPassword ? (
                            <div className="invalid-feedback">{this.state.errorsBasic.repeatPassword}</div>
                        ) : null}
                    </div>
                    <fieldset className="form-group">
                        <div>Gender</div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={this.onChange}
                                checked={this.state.gender === 'male'}

                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="female"
                                name="gender"
                                value="male"
                                onChange={this.onChange}
                                checked={this.state.gender === 'female'}

                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                        {this.state.errorsBasic.gender ? (
                            <div className="invalid-feedback">{this.state.errorsBasic.gender}</div>
                        ) : null}
                    </fieldset>
                    <div className="d-flex justify-content-center">
                        <button type="button"
                                className="btn btn-light mr-4"
                        >
                            Previous
                        </button>
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={this.onSubmitBasic}>
                            Next
                        </button>
                    </div>

                    {/*contacts*/}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               placeholder="Enter email"
                               name="email"
                               value={this.state.email}
                               onChange={this.onChange}
                        />
                        {this.state.errorsContacts.email ? (
                            <div className="invalid-feedback">{this.state.errorsContacts.email}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="tel"
                               className="form-control"
                               id="mobile"
                               placeholder="Enter mobile"
                               name="mobile" value={this.state.mobile}
                               onChange={this.onChange}/>
                        {this.state.errorsContacts.mobile ? (
                            <div className="invalid-feedback">{this.state.errorsContacts.mobile}</div>
                        ) : null}

                    </div>

                    <div className="form-group">
                        <label htmlFor="country">select country</label>
                        <select className="form-control"
                                id="country"
                                value={this.state.country}
                                name="country"
                                onChange={this.onChange}>
                            {this.getOptionsItems(countries)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">select city</label>

                        <select className="form-control"
                                id="city"
                                value={this.state.city}
                                name="city"
                                onChange={this.onChange}>
                            {this.getOptionsCities(this.state.country)}
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button"
                                className="btn btn-light mr-4"
                        >
                            Previous
                        </button>
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={this.onSubmitContact}>
                            Next
                        </button>
                    </div>
                    {/*contacts*/}
                    <img className="mb-4"
                         width="100%"
                         src={this.state.avatar}
                         alt={this.state.firstName}
                    />
                    <div className="mb-4">
                        <div className="custom-file">
                            <input type="file"
                                   className="custom-file-input"
                                   id="customFile"
                                   name="avatar"
                                   onChange={this.onChangeAvatar}
                            />
                            <label className="custom-file-label"
                                   htmlFor="customFile">Choose avatar</label>
                        </div>
                        {this.state.errorsAvatar.avatar ? (
                            <div className="invalid-feedback">{this.state.errorsAvatar.avatar}</div>
                        ) : null}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button"
                                className="btn btn-light mr-4"
                        >
                            Previous
                        </button>
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={this.onSubmitAvatar}>
                            Next
                        </button>
                    </div>
                    {/*finish*/}

                    <div className="container-fluid">
                        <div className="row mb-4">
                            <div className="col-4">
                                <img width="100%"
                                     src={this.state.avatar}
                                     alt={this.state.firstName}/>
                            </div>
                            <div className="col-8 d-flex align-items-center">
                                <h4>{this.state.firstName} {this.state.firstName}</h4>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <p><strong>Email:</strong> {this.state.email}</p>
                                <p><strong>Mobile:</strong> {this.state.mobile}</p>
                                <p><strong>Location:</strong> {this.state.country}, {this.state.city}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}
