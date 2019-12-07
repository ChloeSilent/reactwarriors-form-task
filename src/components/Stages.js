import React from 'react'
import classNames from 'classnames'

const STEPS = ['Basic', 'Contacts', 'Avatar', 'Finish']

class Stages extends React.Component {
  showPassingSteps = stepName => {
    return classNames(
      'step',
      { 'is-completed': stepName < this.props.currentStep },
      { 'is-active': stepName === this.props.currentStep }
    )
  }

  render() {
    return (
      <>
        <div className="steps mb-4">
          {STEPS.map((step, index) => {
            return (
              <div key={index} className={this.showPassingSteps(index + 1)}>
                <div className="step__marker">{index + 1}</div>
                <div className="step__title mt-1">{step}</div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Stages
