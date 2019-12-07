import React from 'react'
import Field from './Field'
import countries from '../data/countries'
import cities from '../data/cities'

const Contacts = props => {
  const { values, errors, onChange } = props

  const getOptions = list => {
    return list.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  const getOptionsCities = country => {
    let list = []
    for (let key in cities) {
      if (cities[key].country === Number(country)) {
        list.push({
          id: key,
          name: cities[key].name,
        })
      }
    }
    return [
      <option key="0" value="">
        select city
      </option>,
      ...getOptions(list),
    ]
  }

  return (
    <>
      <Field
        label="Email"
        type="text"
        error={errors.email}
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={onChange}
      />
      <Field
        label="Mobile"
        type="tel"
        error={errors.mobile}
        placeholder="Enter mobile"
        name="mobile"
        value={values.mobile}
        onChange={onChange}
      />
      <div className="form-group">
        <label htmlFor="country">select country</label>
        <select
          className={errors.country ? 'form-control invalid' : 'form-control'}
          id="country"
          value={values.country}
          name="country"
          onChange={onChange}
        >
          <option key="0" value="">
            select country
          </option>
          {getOptions(countries)}
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
          onChange={onChange}
        >
          {getOptionsCities(values.country)}
        </select>
        {errors.city ? (
          <div className="invalid-feedback">{errors.city}</div>
        ) : null}
      </div>
    </>
  )
}

export default Contacts
