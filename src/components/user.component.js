import React, { useState } from "react";
import UserDataService from "../services/user.service";
import { Label, Input, Button } from "reactstrap";

const UserData = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0,
    phone_no: 0,
    role_id: 0,
  });
  const [message, setMessage] = useState("");

  const onClickButton = () => {
    UserDataService.create(formData)
      .then((response) => {
        setMessage("User added successfully!");
      })
      .catch((e) => {
        console.log(e);
        setMessage("User not added.");
      });
  };

  return (
    <div className="body">
      <div className="home">
        <div className="form">
          <Label className="title">First Name</Label>
          <Input
            type="text"
            maxLength="10"
            name="first_name"
            onChange={(e) =>
              setFormData({
                ...formData,
                first_name: e.target.value,
              })
            }
            value={formData.first_name}
          />
          <Label className="title">Last Name</Label>
          <Input
            type="text"
            name="last_name"
            onChange={(e) =>
              setFormData({
                ...formData,
                last_name: e.target.value,
              })
            }
            value={formData.last_name}
          />

          <Label className="title">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            value={formData.email}
          />

          <Label className="title">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            value={formData.password}
          />

          <Label className="title">Age</Label>
          <Input
            type="number"
            name="age"
            onChange={(e) =>
              setFormData({
                ...formData,
                age: parseInt(e.target.value, 10),
              })
            }
            value={formData.age}
          />
          <Label className="title">Phone No</Label>
          <Input
            type="number"
            name="phone_no"
            onChange={(e) =>
              setFormData({
                ...formData,
                phone_no: parseInt(e.target.value, 10),
              })
            }
            value={formData.phone_no}
          />

          <Label className="title">Role Id</Label>
          <Input
            type="number"
            name="role_id"
            onChange={(e) =>
              setFormData({
                ...formData,
                role_id: parseInt(e.target.value, 10),
              })
            }
            value={formData.role_id}
          />

          <Button style={{ color: "blue" }} onClick={onClickButton}>
            SUBMIT
          </Button>

          {message && <div className="message">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default UserData;
