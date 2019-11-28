import React, { Fragment } from 'react'

const Finish = props => {
  const {
    avatar,
    firstName,
    lastName,
    email,
    mobile,
    country,
    city,
  } = props.values
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img width="100%" src={avatar} alt={firstName} />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>
              {firstName} {lastName}
            </h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Mobile:</strong> {mobile}
            </p>
            <p>
              <strong>Location:</strong> {country}, {city}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Finish
