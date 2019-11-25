import React, {Fragment} from "react"

const Basic = (props) => {
    const {
        firstName,
        onChange,
        errorFirstName,
        lastName,
        errorLastName,
        password,
        errorPassword,
        repeatPassword,
        errorRepeatPassword,
        gender,
        errorGender,
        onSubmitBasic
    } = props;

    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    className="form-control"
                    // className={ {errorFirstName} ? ( "invalid form-control" ) : "form-control"}
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    id="firstName"
                    onChange={onChange}
                    autoComplete="username"
                />
                {{errorFirstName} ? (
                    <div className="invalid-feedback">{errorFirstName}</div>
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
                    value={lastName}
                    autoComplete="username"
                    onChange={onChange}
                />
                {{errorLastName} ? (
                    <div className="invalid-feedback">{errorLastName}</div>
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
                    value={password}
                    autoComplete="new-password"
                    onChange={onChange}
                />
                {{errorPassword} ? (
                    <div className="invalid-feedback">{errorPassword}</div>
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
                    value={repeatPassword}
                    autoComplete="new-password"
                    onChange={onChange}
                />
                {{errorRepeatPassword} ? (
                    <div className="invalid-feedback">{errorRepeatPassword}</div>
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
                        onChange={onChange}
                        checked={gender === 'male'}

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
                        onChange={onChange}
                        checked={gender === 'female'}

                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>
                {{errorGender} ? (
                    <div className="invalid-feedback">{errorGender}</div>
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
                        onClick={onSubmitBasic}>
                    Next
                </button>
            </div>
        </Fragment>
    )

};

export default Basic;