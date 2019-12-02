import React from 'react'

const Navigation = props => {
  const { currentStep, onPreviousStep, onNextStep, onReset } = props

  if (currentStep < 4) {
    return (
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-light mr-4"
          disabled={currentStep === 1}
          onClick={onPreviousStep}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onNextStep}
        >
          Next
        </button>
      </div>
    )
  }

  if (currentStep === 4) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary" onClick={onReset}>
            Reset
          </button>
        </div>
      </>
    )
  }
}

export default Navigation
