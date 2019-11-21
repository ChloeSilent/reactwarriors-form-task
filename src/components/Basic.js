import React, {Fragment} from 'react';

export default class Basic extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName: "",
            password: "",
            repeatPassword: "",
            gender: "male"
        }
    }

    onChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
            }
        )
        console.log(e.target.name, e.target.value)
    }

    onSubmit = e => {

    }
    render() {
        return(
            <Fragment>
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter first name"
                        name="firstName"
                        id="firstName"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter last name"
                        name="lastName"
                        id="lastName"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        id="password"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter repeat password"
                        name="repeatPassword"
                        id="repeatPassword"
                        onChange={this.onChange}
                    />
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
                            value="female"
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-center">
                    <button type="button"
                            className="btn btn-light mr-4"
                    >
                        Prev
                    </button>
                    <button type="submit"
                            className="btn btn-secondary"
                            onClick={this.onSubmit}>
                        Next
                    </button>
                </div>

            </Fragment>
        )

    }
}