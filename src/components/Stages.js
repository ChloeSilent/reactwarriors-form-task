import React from 'react'

class Stages extends React.Component {
  showPassingSteps = stepName => {
    if (stepName < this.props.currentStep) {
      return 'step is-completed'
    }
    if (stepName > this.props.currentStep) {
      return 'step '
    } else {
      return 'step is-active'
    }
  }

  render() {
    const Steps = ['Basic', 'Contacts', 'Avatar', 'Finish']
    return (
      <>
        <div className="steps mb-4">
          {Steps.map((step, index) => {
            return (
              <div className={this.showPassingSteps(index + 1)}>
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
