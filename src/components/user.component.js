import React, { Component } from "react";
import UserDataService from "../services/user.service"
import { Label, Input, Button, Col } from "reactstrap";


export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastName: "",
      email: "",
      age: "",
      phoneNo: "",
      roleId: "",
      submitClicked: false,
      searches: "",
      items: [],
      errors: {
        firstNameError: "",
        lastNameError: "",
        ageError: "",
        emailError: "",
        phoneNoError: "",
        roleIdError: ""
      }
    };
  }

  onChangeFirstName = (e) => {
    this.setState({
      firstname: e.target.value,
      errors: {...this.state.errors, firstNameError: "" }
    });
  };

  onChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
      errors: { ...this.state.errors, lastNameError: "" }
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
      errors: { ...this.state.errors, emailError: "" }
    });
  };

  onChangeAge = (e) => {
    this.setState({
      age: e.target.value,
      errors: { ...this.state.errors, ageError: "" }
    });
  };

  onChangePhoneNo = (e) => {
    this.setState({
      phoneNo: e.target.value,
      errors: { ...this.state.errors, phoneNoError: "" }
    });
  };

  onChangeRoleId = (e) => {
    this.setState({
      roleId: e.target.value,
      errors: { ...this.state.errors, roleIdError: "" }
    });
  };

  onClickButton = () => {
    let errors = this.state.errors;
    if (
      this.state.firstname &&
      this.state.lastName &&
      this.state.email &&
      this.state.age &&
      this.state.phoneNo &&
      this.state.roleId
    ) {
      let user = {
        firstname: this.state.firstname,
        lastName: this.state.lastName,
        email: this.state.email,
        age: this.state.age,
        phoneNo: this.state.phoneNo,
        roleId: this.state.roleId
      };

      // API call to create user
      UserDataService.create(user)
        .then(response => {
          console.log(response.data);
          this.setState((prevState) => ({
            submitClicked: true,
            items: [...prevState.items, user],
            firstname: "",
            lastName: "",
            email: "",
            age: "",
            phoneNo: "",
            roleId: "",
            errors: {
              firstNameError: "",
              lastNameError: "",
              ageError: "",
              emailError: "",
              phoneNoError: "",
              roleIdError: ""
            }
          }));
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      this.setState({
        errors: {
          firstNameError: !this.state.firstname ? "Enter Name" : "",
          lastNameError: !this.state.lastName ? "Enter Last Name" : "",
          emailError: !this.state.email ? "Enter E-mail" : "",
          ageError: !this.state.age ? "Enter Age" : "",
          phoneNoError: !this.state.phoneNo ? "Enter Phone No" : "",
          roleIdError: !this.state.roleId ? "Enter Role Id" : ""
        }
      });
    }
  };

  render() {

    return (
      <div className="body">
        <div className="home">
          <div className="form">
            <Label className="title">First Name</Label>
            <Input
              type="text"
              maxLength="10"
              onChange={this.onChangeFirstName}
              value={this.state.firstname}
            />
            <p className="text-danger">
              {!this.state.firstname ? this.state.errors.firstNameError : ""}
            </p>

            <Label className="title">Last Name</Label>
            <Input
              type="text"
              onChange={this.onChangeLastName}
              value={this.state.lastName}
            />
            <p className="text-danger">
              {!this.state.lastName ? this.state.errors.lastNameError : ""}
            </p>

            <Label className="title">Email</Label>
            <Input
              type="email"
              onChange={this.onChangeEmail}
              value={this.state.email}
            />
            <p className="text-danger">
              {!this.state.email ? this.state.errors.emailError : ""}
            </p>

            <Label className="title">Age</Label>
            <Input
              type="number"
              onChange={this.onChangeAge}
              value={this.state.age}
            />
            <p className="text-danger">
              {!this.state.age ? this.state.errors.ageError : ""}
            </p>

            <Label className="title">Phone No</Label>
            <Input
              type="number"
              onChange={this.onChangePhoneNo}
              value={this.state.phoneNo}
            />
            <p className="text-danger">
              {!this.state.phoneNo ? this.state.errors.phoneNoError : ""}
            </p>

            <Label className="title">Role Id</Label>
            <Input
              type="number"
              onChange={this.onChangeRoleId}
              value={this.state.roleId}
            />
            <p className="text-danger">
              {!this.state.roleId ? this.state.errors.roleIdError : ""}
            </p>

            <Button style={{ color: "blue" }} onClick={this.onClickButton}>
              SUBMIT
            </Button>
          </div>
        </div>

        <div>
          {this.state.items.map((item, index) => (
            <Col className="Col" item xs={5} key={index}>
              <p>
                <span>Name: {item.firstname}</span>
              </p>
              <p>
                <span>Last Name: {item.lastName}</span>
              </p>
              <p>
                <span>Email: {item.email}</span>
              </p>
              <p>
                <span>Age: {item.age}</span>
              </p>
              <p>
                <span>Phone No: {item.phoneNo}</span>
              </p>
              <p>
                <span>Role Id: {item.roleId}</span>
              </p>
            </Col>
          ))}
        </div>
      </div>
    );
  }
}
