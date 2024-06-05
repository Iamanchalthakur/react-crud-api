import React, { useState } from "react";
import UserDataService from '../services/user.service';
import { Label, Input, Button, Col } from "reactstrap";

const UserData = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastName: "",
    email: "",
    age: "",
    phoneNo: "",
    roleId: "",
  });

  const [submitClicked, setSubmitClicked] = useState(false);
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    ageError: "",
    emailError: "",
    phoneNoError: "",
    roleIdError: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [`${name}Error`]: "",
    }));
  };

  const onClickButton = () => {
    if (
      formState.firstname &&
      formState.lastName &&
      formState.email &&
      formState.age &&
      formState.phoneNo &&
      formState.roleId
    ) {
      let user = {
        firstname: formState.firstname,
        lastName: formState.lastName,
        email: formState.email,
        age: formState.age,
        phoneNo: formState.phoneNo,
        roleId: formState.roleId
      };

      // API call to create user
      UserDataService.create(user)
        .then(response => {
          console.log(response.data);
          setSubmitClicked(true);
          setItems((prevItems) => [...prevItems, user]);
          setFormState({
            firstname: "",
            lastName: "",
            email: "",
            age: "",
            phoneNo: "",
            roleId: "",
          });
          setErrors({
            firstNameError: "",
            lastNameError: "",
            ageError: "",
            emailError: "",
            phoneNoError: "",
            roleIdError: ""
          });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      setErrors({
        firstNameError: !formState.firstname ? "Enter Name" : "",
        lastNameError: !formState.lastName ? "Enter Last Name" : "",
        emailError: !formState.email ? "Enter E-mail" : "",
        ageError: !formState.age ? "Enter Age" : "",
        phoneNoError: !formState.phoneNo ? "Enter Phone No" : "",
        roleIdError: !formState.roleId ? "Enter Role Id" : ""
      });
    }
  };

  return (
    <div className="body">
      <div className="home">
        <div className="form">
          <Label className="title">First Name</Label>
          <Input
            type="text"
            maxLength="10"
            name="firstname"
            onChange={onChange}
            value={formState.firstname}
          />
          <p className="text-danger">
            {!formState.firstname ? errors.firstNameError : ""}
          </p>

          <Label className="title">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            onChange={onChange}
            value={formState.lastName}
          />
          <p className="text-danger">
            {!formState.lastName ? errors.lastNameError : ""}
          </p>

          <Label className="title">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={onChange}
            value={formState.email}
          />
          <p className="text-danger">
            {!formState.email ? errors.emailError : ""}
          </p>

          <Label className="title">Age</Label>
          <Input
            type="number"
            name="age"
            onChange={onChange}
            value={formState.age}
          />
          <p className="text-danger">
            {!formState.age ? errors.ageError : ""}
          </p>

          <Label className="title">Phone No</Label>
          <Input
            type="number"
            name="phoneNo"
            onChange={onChange}
            value={formState.phoneNo}
          />
          <p className="text-danger">
            {!formState.phoneNo ? errors.phoneNoError : ""}
          </p>

          <Label className="title">Role Id</Label>
          <Input
            type="number"
            name="roleId"
            onChange={onChange}
            value={formState.roleId}
          />
          <p className="text-danger">
            {!formState.roleId ? errors.roleIdError : ""}
          </p>

          <Button style={{ color: "blue" }} onClick={onClickButton}>
            SUBMIT
          </Button>
        </div>
      </div>

      <div>
        {items.map((item, index) => (
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
};

export default UserData;
