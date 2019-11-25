import React, {Fragment} from "react";
import countries from "../data/countries";


const Contacts = props => {
    const {
        email,
        onChange,
        errorEmail,
        mobile,
        errorMobile,
        country,
        getOptionsItems,
        city,
        getOptionsCities,
        onPrevContact,
        onSubmitContact
    } = props;
    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                       className="form-control"
                       id="email"
                       placeholder="Enter email"
                       name="email"
                       value={email}
                       onChange={onChange}
                />
                {{errorEmail} ? (
                    <div className="invalid-feedback">{errorEmail}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel"
                       className="form-control"
                       id="mobile"
                       placeholder="Enter mobile"
                       name="mobile" value={mobile}
                       onChange={onChange}/>
                {{errorMobile} ? (
                    <div className="invalid-feedback">{errorMobile}</div>
                ) : null}

            </div>

            <div className="form-group">
                <label htmlFor="country">select country</label>
                <select className="form-control"
                        id="country"
                        value={country}
                        name="country"
                        onChange={onChange}>
                    {getOptionsItems(countries)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="country">select city</label>

                <select className="form-control"
                        id="city"
                        value={city}
                        name="city"
                        onChange={onChange}>
                    {getOptionsCities(country)}
                </select>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button"
                        className="btn btn-light mr-4"
                        onClick={onPrevContact}
                >
                    Previous
                </button>
                <button type="button"
                        className="btn btn-secondary"
                        onClick={onSubmitContact}>
                    Next
                </button>
            </div>
        </Fragment>
    )
};

export default Contacts;
