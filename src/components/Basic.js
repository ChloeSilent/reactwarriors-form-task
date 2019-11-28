import React, { Fragment } from 'react'

const Basic = props => {
  const { values, errors } = props

  const { onChange } = props

  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          className={errors.firstName ? 'form-control invalid' : 'form-control'}
          placeholder="Enter first name"
          name="firstName"
          value={values.firstName}
          id="firstName"
          onChange={onChange}
          autoComplete="username"
        />
        {errors.firstName ? (
          <div className="invalid-feedback">{errors.firstName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          className={errors.lastName ? 'form-control invalid' : 'form-control'}
          placeholder="Enter last name"
          name="lastName"
          id="lastName"
          value={values.lastName}
          autoComplete="username"
          onChange={onChange}
        />
        {errors.lastName ? (
          <div className="invalid-feedback">{errors.lastName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={errors.password ? 'form-control invalid' : 'form-control'}
          placeholder="Enter password"
          name="password"
          id="password"
          value={values.password}
          autoComplete="new-password"
          onChange={onChange}
        />
        {errors.password ? (
          <div className="invalid-feedback">{errors.password}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="repeatPassword">Repeat password</label>
        <input
          type="password"
          className={
            errors.repeatPassword ? 'form-control invalid' : 'form-control'
          }
          placeholder="Enter repeat password"
          name="repeatPassword"
          id="repeatPassword"
          value={values.repeatPassword}
          autoComplete="new-password"
          onChange={onChange}
        />
        {errors.repeatPassword ? (
          <div className="invalid-feedback">{errors.repeatPassword}</div>
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
            checked={values.gender === 'male'}
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
            onChange={props.onChange}
            checked={values.gender === 'female'}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
        {errors.gender ? (
          <div className="invalid-feedback">{errors.gender}</div>
        ) : null}
      </fieldset>
    </Fragment>
  )
}

export default Basic
