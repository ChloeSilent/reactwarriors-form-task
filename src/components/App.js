import React from 'react'
import './app.css'
import countries from '../data/countries'
import cities from '../data/cities'
import Basic from './Basic'
import Contacts from './Contacts'
import Stages from './Stages'
import Avatar from './Avatar'
import Finish from './Finish'

const regMail = /.+@.+\.[A-Za-z]+$/
const regMobile = /^[(]?[0-9]{4}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: 'Ukraine',
        city: '',
        avatar:
          'https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png',
      },
      currentStep: 3,

      errors: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false,
        country: false,
        city: false,
        avatar: false,
      },
    }
  }

  getOptionsItems = items => {
    return items.map(item => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      )
    })
  }

  getOptionsCities = country => {
    let idCountry = countries.find(land => land.name === country)
    let allCitiesList = Object.values(cities)
    let chosenCities = allCitiesList.filter(
      city => city.country === idCountry.id
    )

    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value)
    }

    return chosenCities.map(city => {
      let key = getKeyByValue(cities, city)
      return (
        <option key={key} value={city.name}>
          {city.name}
        </option>
      )
    })
  }

  onChangeAvatar = e => {
    const reader = new FileReader()

    const values = this.state.values

    reader.onload = e => {
      values.avatar = e.target.result
      this.setState({
        values,
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  checkErrors = e => {
    e.preventDefault()
    const errors = {}

    switch (this.state.currentStep) {
      case 1:
        if (this.state.values.firstName.length <= 1) {
          errors.firstName = 'Must be 5 characters or more'
        }
        if (this.state.values.lastName.length <= 1) {
          errors.lastName = 'Must be 5 characters or more'
        }
        if (this.state.values.password.length <= 1) {
          errors.password = 'Must be 6 characters or more'
        }
        if (this.state.values.repeatPassword !== this.state.values.password) {
          errors.repeatPassword = 'Must be equal password'
        }
        if (!this.state.values.gender) {
          errors.repeatPassword = 'Required'
        }

        if (Object.keys(errors).length > 0) {
          this.setState({
            errors: errors,
          })
        } else {
          this.setState({
            errors: {},
            currentStep: 2,
          })
        }
        break

      case 2:
        if (regMail.test(this.state.values.email) === false) {
          errors.email = 'Invalid email address'
        }
        if (regMobile.test(this.state.values.mobile) === false) {
          errors.mobile = 'Invalid mobile'
        }
        if (!this.state.values.country) {
          errors.country = 'Required'
        }
        if (!this.state.values.city) {
          errors.city = 'Required'
        }

        if (Object.keys(errors).length > 0) {
          this.setState({
            errors: errors,
          })
        } else {
          this.setState({
            errors: {},
            currentStep: 3,
          })
        }
        break
      case 3:
        if (
          this.state.values.avatar ===
          'https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png'
        ) {
          errors.avatar = 'Required'
          this.setState({
            errors: errors,
          })
        } else {
          this.setState({
            errors: {},
            currentStep: 4,
          })
        }
        break
    }
  }

  onPrevBtnClick = e => {
    e.preventDefault()
    console.log(this.state.currentStep)
    switch (this.state.currentStep) {
      case 2:
        this.setState({
          currentStep: 1,
        })
        break
      case 3:
        this.setState({
          currentStep: 2,
        })
        break
    }
  }

  onReset = e => {
    e.preventDefault()
    window.location.reload(false)
  }

  onChange = e => {
    const values = { ...this.state.values }
    values[e.target.name] = e.target.value
    this.setState({ values })
  }

  showPassingSteps = stepName => {
    if (stepName < this.state.currentStep) {
      return 'step is-completed'
    }
    if (stepName > this.state.currentStep) {
      return 'step '
    } else {
      return 'step is-active'
    }
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Stages
            currentStep={this.state.currentStep}
            showPassingSteps={this.showPassingSteps}
          />
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
              getOptionsItems={this.getOptionsItems}
              getOptionsCities={this.getOptionsCities}
            />
          )}
          {this.state.currentStep === 3 && (
            <Avatar
              values={this.state.values}
              errors={this.state.errors}
              onChangeAvatar={this.onChangeAvatar}
            />
          )}
          {this.state.currentStep === 4 && (
            <Finish values={this.state.values} />
          )}
          {this.state.currentStep === 1 ? (
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-light mr-4">
                Previous
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.checkErrors}
              >
                Next
              </button>
            </div>
          ) : null}

          {this.state.currentStep === 2 || this.state.currentStep === 3 ? (
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-light mr-4"
                onClick={this.onPrevBtnClick}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.checkErrors}
              >
                Next
              </button>
            </div>
          ) : null}
          {this.state.currentStep === 4 ? (
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          ) : null}
        </form>
      </div>
    )
  }
}
