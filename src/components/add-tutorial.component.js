import React, { Component } from "react";
import TutorialDataService from '../services/tutorial.service'

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    this.onChangeRoleId = this.onChangeRoleId.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      firstName: "",
      lastName: "",  
      email: "",  
      password: "",  
      age: "",  
      phoneNo: "",  
      roleId: "",  
      published: false,
      submitted: false
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  onChangePhoneNo(e) {
    this.setState({
      phoneNo: e.target.value
    });
  }

  onChangeRoleId(e) {
    this.setState({
      roleId: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      age: parseInt(this.state.age),
      phoneNo: parseInt(this.state.phoneNo),
      roleId: parseInt(this.state.roleId)
    };



    console.log("zsdcscdac======", data);


    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: response.data.password,
          age: response.data.age,
          phoneNo: response.data.phoneNo,
          roleId: response.data.roleId,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      phoneNo: "",
      roleId: "",
      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="mail"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNo">PhoneNo</label>
              <input
                type="number"
                className="form-control"
                id="phoneNo"
                required
                value={this.state.phoneNo}
                onChange={this.onChangePhoneNo}
                name="phoneNo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="roleId">RoleId</label>
              <input
                type="number"
                className="form-control"
                id="roleId"
                required
                value={this.state.roleId}
                onChange={this.onChangeRoleId}
                name="roleId"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
