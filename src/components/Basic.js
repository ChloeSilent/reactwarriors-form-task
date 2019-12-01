import React from 'react'
import Field from './Field'
const Basic = props => {
  const { values, errors, onChange } = props

  return (
    <>
      <Field
        label="First name"
        type="text"
        error={errors.firstName}
        placeholder="Enter first name"
        name="firstName"
        value={values.firstName}
        onChange={onChange}
      />
      <Field
        label="Last name"
        type="text"
        error={errors.lastName}
        placeholder="Enter last name"
        name="lastName"
        value={values.lastName}
        onChange={onChange}
      />
      <Field
        label="Password"
        type="password"
        error={errors.password}
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={onChange}
      />
      <Field
        label="Repeat password"
        type="password"
        error={errors.repeatPassword}
        placeholder="Enter repeat password"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={onChange}
      />
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
            onChange={onChange}
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
    </>
  )
}

export default Basic
