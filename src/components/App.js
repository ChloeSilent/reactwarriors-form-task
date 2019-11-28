import React from 'react'
import './app.css'
import countries from '../data/countries'
import cities from '../data/cities'
import Basic from './Basic'
import Contacts from './Contacts'
import Stages from './Stages'
import Avatar from './Avatar'
import Finish from './Finish'
import Navigation from './Navigation'

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
      currentStep: 1,
      errorsBasic: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false,
      },
      errorsContacts: {
        email: false,
        mobile: false,
        country: false,
        city: false,
      },
      errorsAvatar: {
        avatar: false,
      },

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
    console.log('this.state.currentStep ', this.state.currentStep)
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
          this.setState({ errorsContacts: errors })
        } else {
          this.setState({
            errorsContacts: {},
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
            errorsAvatar: errors,
            currentStep: 4,
          })
        } else {
          this.setState({
            errorsAvatar: {},
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

  onSubmitBasic = e => {
    e.preventDefault()
    const errors = {}
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
      this.setState({ errorsBasic: errors })
    } else {
      this.setState({
        errorsBasic: {},
        currentStep: 2,
      })
    }
  }

  onSubmitContact = e => {
    e.preventDefault()

    const errors = {}

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
      this.setState({ errorsContacts: errors })
    } else {
      this.setState({
        errorsContacts: {},
        currentStep: 3,
      })
    }
  }

  onPrevContact = e => {
    e.preventDefault()
    this.setState({
      currentStep: 1,
    })
  }

  onSubmitAvatar = e => {
    e.preventDefault()

    const errors = {}

    if (
      this.state.values.avatar ===
      'https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png'
    ) {
      errors.avatar = 'Required'
      this.setState({
        errorsAvatar: errors,
        currentStep: 4,
      })
    } else {
      this.setState({
        errorsAvatar: {},
        currentStep: 4,
      })
    }
  }

  onPrevAvatar = e => {
    this.setState({
      currentStep: 2,
    })
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
              firstName={this.state.values.firstName}
              onChange={this.onChange}
              errorFirstName={this.state.errors.firstName}
              lastName={this.state.values.lastName}
              errorLastName={this.state.errors.lastName}
              password={this.state.values.password}
              errorPassword={this.state.errors.password}
              repeatPassword={this.state.values.repeatPassword}
              errorRepeatPassword={this.state.errors.repeatPassword}
              gender={this.state.values.gender}
              errorGender={this.state.errors.gender}
            />
          )}
          {this.state.currentStep === 2 && (
            <Contacts
              email={this.state.values.email}
              onChange={this.onChange}
              errorEmail={this.state.errors.email}
              mobile={this.state.values.mobile}
              errorMobile={this.state.errors.mobile}
              country={this.state.values.country}
              getOptionsItems={this.getOptionsItems}
              errorCountry={this.state.errors.country}
              city={this.state.values.city}
              errorCity={this.state.errors.city}
              getOptionsCities={this.getOptionsCities}
            />
          )}
          {this.state.currentStep === 3 && (
            <Avatar
              avatar={this.state.values.avatar}
              firstName={this.state.values.firstName}
              onChangeAvatar={this.onChangeAvatar}
              errorAvatar={this.state.errors.avatar}
            />
          )}
          {this.state.currentStep === 4 && (
            <Finish
              avatar={this.state.values.avatar}
              firstName={this.state.values.firstName}
              lastName={this.state.values.lastName}
              email={this.state.values.email}
              mobile={this.state.values.mobile}
              country={this.state.values.country}
              city={this.state.values.city}
            />
          )}
          <Navigation
            state={this.state.currentStep}
            next={this.checkErrors}
            onPrevBtnClick={this.onPrevBtnClick}
            onReset={this.onReset}
          />
        </form>
      </div>
    )
  }
}
