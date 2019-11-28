import React, { Fragment } from 'react'
import countries from '../data/countries'

const Contacts = props => {
  const { values, errors } = props

  const { onChange } = props
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className={errors.email ? 'form-control invalid' : 'form-control'}
          id="email"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={props.onChange}
        />
        {errors.email ? (
          <div className="invalid-feedback">{errors.email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="tel"
          className={errors.mobile ? 'form-control invalid' : 'form-control'}
          id="mobile"
          placeholder="Enter mobile"
          name="mobile"
          value={values.mobile}
          onChange={props.onChange}
        />
        {errors.mobile ? (
          <div className="invalid-feedback">{errors.mobile}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="country">select country</label>
        <select
          className={errors.country ? 'form-control invalid' : 'form-control'}
          id="country"
          value={values.country}
          name="country"
          onChange={props.onChange}
        >
          {props.getOptionsItems(countries)}
        </select>
        {errors.country ? (
          <div className="invalid-feedback">{errors.country}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="country">select city</label>

        <select
          className={errors.city ? 'form-control invalid' : 'form-control'}
          id="city"
          value={values.city}
          name="city"
          onChange={props.onChange}
        >
          {props.getOptionsCities(values.country)}
        </select>
        {errors.city ? (
          <div className="invalid-feedback">{errors.city}</div>
        ) : null}
      </div>
    </Fragment>
  )
}

export default Contacts
