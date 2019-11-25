import React from "react";
import "./app.css";
import countries from "../data/countries";
import cities from "../data/cities";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Stages from "./Stages";
import Avatar from "./Avatar";
import Finish from "./Finish";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: "Contacts",
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "male",
      errorsBasic: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false
      },
      email: "",
      mobile: "",
      country: "Ukraine",
      city: "",
      errorsContacts: {
        email: false,
        mobile: false,
        country: false,
        city: false
      },
      avatar:
        "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png",
      errorsAvatar: {
        avatar: false
      },
      completeBasic: "step is-active",
      completeContacts: "step",
      completeAvatar: "step",
      completeFinish: "step"
    };
  }

  getOptionsItems = items => {
    return items.map(item => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    });
  };

  getOptionsCities = country => {
    // let idCountry = countries.findIndex(land => land.name === country);

    // console.log(idCountry);
    // let allCitiesList = Object.values(cities);
    // console.log(allCitiesList);
    // let chosenCities = allCitiesList.filter(city => city.country === idCountry + 1);
    //
    // return (
    //     chosenCities.map((city) => {
    //         return <option  key={Object.keys(cities).find(key => cities[key] === city)}
    //                        value={city.name}>{city.name}</option>;
    //     })
    // )

    let idCountry = countries.find(land => land.name === country); //выбранная страна
    let allCitiesList = Object.values(cities);
    let chosenCities = allCitiesList.filter(
      city => city.country === idCountry.id
    );

    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    return chosenCities.map(city => {
      let key = getKeyByValue(cities, city);
      console.log(key);
      return (
        <option key={key} value={city.name}>
          {city.name}
        </option>
      );
    });
  };

  onChangeAvatar = e => {
    const reader = new FileReader();
    reader.onload = e => {
      this.setState({
        avatar: e.target.result
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  onReset = e => {
    e.preventDefault();
    window.location.reload(false);
  };

  onSubmitBasic = e => {
    e.preventDefault();
    const errors = {};
    if (this.state.firstName.length < 5) {
      errors.firstName = "Must be 5 characters or more";
    }
    if (this.state.lastName.length < 5) {
      errors.lastName = "Must be 5 characters or more";
    }
    if (this.state.password.length < 1) {
      errors.password = "Must be 6 characters or more";
    }
    if (this.state.repeatPassword !== this.state.password) {
      errors.repeatPassword = "Must be equal password";
    }
    if (!this.state.gender) {
      errors.repeatPassword = "Required";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errorsBasic: errors });
    } else {
      this.setState({
        errorsBasic: {},
        show: "Contacts",
        completeBasic: "step is-completed",
        completeContacts: "step is-active"
      });
    }
  };

  onSubmitContact = e => {
    e.preventDefault();

    const errors = {};
    let regMail = /.+@.+\.[A-Za-z]+$/;
    const regMobile = /^[(]?[0-9]{4}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
    if (regMail.test(this.state.email) === false) {
      errors.email = "Invalid email address";
    }
    if (regMobile.test(this.state.mobile) === false) {
      errors.mobile = "Invalid mobile";
    }
    if (!this.state.country) {
      errors.country = "Required";
    }
    if (!this.state.city) {
      errors.city = "Required";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errorsContacts: errors });
    } else {
      this.setState({
        errorsContacts: {},
        show: "Avatar",
        completeContacts: "step is-completed",
        completeAvatar: "step is-active"
      });
    }
  };

  onPrevContact = e => {
    e.preventDefault();
    this.setState({
      show: "Basic",
      completeContacts: "step",
      completeBasic: "step is-active"
    });
  };

  onSubmitAvatar = e => {
    e.preventDefault();

    const errors = {};

    if (
      this.state.avatar ===
      "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png"
    ) {
      errors.avatar = "Required";
      this.setState({
        errorsAvatar: errors,
        show: "Finish"
      });
    } else {
      this.setState({
        errorsAvatar: {},
        show: "Finish",
        completeAvatar: "step is-completed",
        completeFinish: "step is-active"
      });
    }
  };

  onPrevAvatar = e => {
    this.setState({
      show: "Contacts",
      completeAvatar: "step",
      completeContacts: "step is-active"
    });
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  show = e => {
    if (this.state.show === "Contacts") {
      return (
        <Contacts
          email={this.state.email}
          onChange={this.onChange}
          errorEmail={this.state.errorsContacts.email}
          mobile={this.state.mobile}
          errorMobile={this.state.errorsContacts.mobile}
          country={this.state.country}
          getOptionsItems={this.getOptionsItems}
          errorCountry={this.state.errorsContacts.country}
          city={this.state.city}
          errorCity={this.state.errorsContacts.city}
          getOptionsCities={this.getOptionsCities}
          onPrevContact={this.onPrevContact}
          onSubmitContact={this.onSubmitContact}
        />
      );
    }
    if (this.state.show === "Avatar") {
      return (
        <Avatar
          avatar={this.state.avatar}
          firstName={this.state.firstName}
          onChangeAvatar={this.onChangeAvatar}
          errorAvatar={this.state.errorsAvatar.avatar}
          onSubmitAvatar={this.onSubmitAvatar}
          onPrevAvatar={this.onPrevAvatar}
        />
      );
    }
    if (this.state.show === "Finish") {
      return (
        <Finish
          avatar={this.state.avatar}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          mobile={this.state.mobile}
          country={this.state.country}
          city={this.state.city}
          onReset={this.onReset}
        />
      );
    } else {
      return (
        <Basic
          firstName={this.state.firstName}
          onChange={this.onChange}
          errorFirstName={this.state.errorsBasic.firstName}
          lastName={this.state.lastName}
          errorLastName={this.state.errorsBasic.lastName}
          password={this.state.password}
          errorPassword={this.state.errorsBasic.password}
          repeatPassword={this.state.repeatPassword}
          errorRepeatPassword={this.state.errorsBasic.repeatPassword}
          gender={this.state.gender}
          errorGender={this.state.errorsBasic.gender}
          onSubmitBasic={this.onSubmitBasic}
        />
      );
    }
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Stages
            complete1={this.state.completeBasic}
            complete2={this.state.completeContacts}
            complete3={this.state.completeAvatar}
            complete4={this.state.completeFinish}
          />
          {this.show(this.state.show)}
        </form>
      </div>
    );
  }
}
