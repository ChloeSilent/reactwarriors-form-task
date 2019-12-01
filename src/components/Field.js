import React from 'react'

const Field = props => {
  const { label, type, error, placeholder, name, value, onChange } = props
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={error ? 'form-control invalid' : 'form-control'}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        autoComplete="new-password"
        onChange={onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  )
}

export default Field
