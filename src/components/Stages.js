import React from 'react'
import classNames from 'classnames'

class Stages extends React.Component {
  showPassingSteps = stepName => {
    return classNames(
      'step',
      { 'is-completed': stepName < this.props.currentStep },
      { 'is-active': stepName === this.props.currentStep }
    )
  }

  render() {
    const Steps = ['Basic', 'Contacts', 'Avatar', 'Finish']
    return (
      <>
        <div className="steps mb-4">
          {Steps.map((step, index) => {
            return (
              <div key={index + 1} className={this.showPassingSteps(index + 1)}>
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
