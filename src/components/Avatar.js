import React from 'react'

const defaultAvatar =
  'https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png'

const Avatar = props => {
  const { values, errors, onChange } = props

  const onChangeAvatar = event => {
    const reader = new FileReader()

    reader.onload = event => {
      onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <>
      <img
        className="mb-4"
        width="100%"
        src={values.avatar || defaultAvatar}
        alt="avatar"
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
    </>
  )
}

export default Avatar
