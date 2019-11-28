import React, { Fragment } from 'react'

class Stages extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.currentStep !== this.props.currentStep) {
      return true
    } else {
      return false
    }
  }
  render() {
    return (
      <Fragment>
        <div className="steps mb-4">
          <div className={this.props.showPassingSteps(1)}>
            <div className="step__marker">1</div>
            <div className="step__title mt-1">Basic</div>
          </div>
          <div className={this.props.showPassingSteps(2)}>
            <div className="step__marker">2</div>
            <div className="step__title mt-1">Contacts</div>
          </div>
          <div className={this.props.showPassingSteps(3)}>
            <div className="step__marker">3</div>
            <div className="step__title mt-1">Avatar</div>
          </div>
          <div className={this.props.showPassingSteps(4)}>
            <div className="step__marker">4</div>
            <div className="step__title mt-1">Finish</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Stages
