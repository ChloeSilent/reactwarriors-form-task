import React, { Fragment } from 'react'

const Avatar = props => {
  const { values, errors } = props
  const { onChangeAvatar } = props
  return (
    <Fragment>
      <img
        className="mb-4"
        width="100%"
        src={values.avatar}
        alt={values.firstName}
      />
      <div className="mb-4">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            name="avatar"
            onChange={onChangeAvatar}
          />
          <label className="custom-file-label" htmlFor="customFile">
            Choose avatar
          </label>
        </div>
        {errors.avatar ? (
          <div className="invalid-feedback">{errors.avatar}</div>
        ) : null}
      </div>
    </Fragment>
  )
}

export default Avatar
