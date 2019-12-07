import React from 'react'
import './app.css'

import Basic from './Basic'
import Contacts from './Contacts'
import Stages from './Stages'
import Avatar from './Avatar'
import Finish from './Finish'
import Navigation from './Navigation'

const regularExpressionEmail = /.+@.+\.[A-Za-z]+$/
const regularExpressionMobile = /^[(]?[0-9]{4}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/
const initialState = {
  currentStep: 2,
  values: {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    gender: 'male',
    email: '',
    mobile: '',
    country: '',
    city: '',
    avatar: '',
  },

  errors: {},
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }

  checkErrors = () => {
    const errors = {}
    switch (this.state.currentStep) {
      case 1:
        if (this.state.values.firstName.length <= 5) {
          errors.firstName = 'Must be 5 characters or more'
        }
        if (this.state.values.lastName.length <= 5) {
          errors.lastName = 'Must be 5 characters or more'
        }
        if (this.state.values.password.length <= 6) {
          errors.password = 'Must be 6 characters or more'
        }
        if (this.state.values.repeatPassword !== this.state.values.password) {
          errors.repeatPassword = 'Must be equal password'
        }
        if (!this.state.values.gender) {
          errors.repeatPassword = 'Required'
        }
        break

      case 2:
        if (!regularExpressionEmail.test(this.state.values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!regularExpressionMobile.test(this.state.values.mobile)) {
          errors.mobile = 'Invalid mobile'
        }
        if (!this.state.values.country) {
          errors.country = 'Required'
        }
        if (!this.state.values.city) {
          errors.city = 'Required'
        }
        break
      case 3:
        if (!this.state.values.avatar) {
          errors.avatar = 'Required'
        }
        break
      default:
    }

    return errors
  }

  onNextStep = event => {
    event.preventDefault()
    const errors = this.checkErrors()

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      })
    } else {
      this.setState(state => ({
        errors: {},
        currentStep: state.currentStep + 1,
      }))
    }
  }

  onPreviousStep = event => {
    event.preventDefault()
    this.setState(state => ({
      currentStep: state.currentStep - 1,
    }))
  }

  onReset = event => {
    event.preventDefault()
    this.setState({ ...initialState })
  }

  onChange = event => {
    const values = { ...this.state.values }
    values[event.target.name] = event.target.value
    if (event.target.name === 'city') {
      values.city = ''
    }
    this.setState({ values })
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Stages currentStep={this.state.currentStep} />
          {this.state.currentStep === 1 && (
            <Basic
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {this.state.currentStep === 2 && (
            <Contacts
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {this.state.currentStep === 3 && (
            <Avatar
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {this.state.currentStep === 4 && (
            <Finish values={this.state.values} />
          )}
          <Navigation
            currentStep={this.state.currentStep}
            onPreviousStep={this.onPreviousStep}
            onNextStep={this.onNextStep}
            onReset={this.onReset}
          />
        </form>
      </div>
    )
  }
}
