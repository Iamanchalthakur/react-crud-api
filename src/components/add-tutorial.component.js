import React, { useState } from "react";
import TutorialDataService from '../services/tutorial.service';

const AddTutorial = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [roleId, setRoleId] = useState("");
  const [published, setPublished] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChangeFirstName = (e) => setFirstName(e.target.value);
  const onChangeLastName = (e) => setLastName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangePhoneNo = (e) => setPhoneNo(e.target.value);
  const onChangeRoleId = (e) => setRoleId(e.target.value);

  const saveTutorial = () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
      age: parseInt(age),
      phoneNo: parseInt(phoneNo),
      roleId: parseInt(roleId),
      published
    };

    TutorialDataService.create(data)
      .then(response => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setAge(response.data.age);
        setPhoneNo(response.data.phoneNo);
        setRoleId(response.data.roleId);
        setPublished(response.data.published);
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAge("");
    setPhoneNo("");
    setRoleId("");
    setPublished(false);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
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
              value={firstName}
              onChange={onChangeFirstName}
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
              value={lastName}
              onChange={onChangeLastName}
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={onChangeEmail}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={password}
              onChange={onChangePassword}
              name="password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              required
              value={age}
              onChange={onChangeAge}
              name="age"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phoneNo"
              required
              value={phoneNo}
              onChange={onChangePhoneNo}
              name="phoneNo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="roleId">Role ID</label>
            <input
              type="number"
              className="form-control"
              id="roleId"
              required
              value={roleId}
              onChange={onChangeRoleId}
              name="roleId"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
