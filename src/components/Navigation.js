import React from 'react'

const Navigation = props => {
  const { state, checkErrors, onPrevBtnClick, onReset } = props
  if (state === 1) {
    return (
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-light mr-4">
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={checkErrors}
        >
          Next
        </button>
      </div>
    )
  }

  if (state === 2 || state === 3) {
    return (
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-light mr-4"
          onClick={onPrevBtnClick}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={checkErrors}
        >
          Next
        </button>
      </div>
    )
  }

  if (state === 4) {
    return (
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Navigation
