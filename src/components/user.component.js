import React, { Component } from "react";
import UserDataService from "../services/user.service"
import { Label, Input, Button, Col } from "reactstrap";


// // export default class UserData extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.onChangeFirstName = this.onChangeFirstName.bind(this);
// //     this.onChangeLastName = this.onChangeLastName.bind(this);
// //     this.onChangeEmail = this.onChangeEmail.bind(this);
// //     this.onChangePassword = this.onChangePassword.bind(this);
// //     this.onChangeAge = this.onChangeAge.bind(this);
// //     this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
// //     this.onChangeRoleId = this.onChangeRoleId.bind(this);
// //     this.saveUser = this.saveUser.bind(this);
// //     this.newUser = this.newUser.bind(this);

// //     this.state = {
// //       firstName: "",
// //       lastName: "",  
// //       email: "",  
// //       password: "",  
// //       age: "",  
// //       phoneNo: "",  
// //       roleId: "",  
// //       published: false,
// //       submitted: false
// //     };
// //   }

// //   onChangeFirstName(e) {
// //     this.setState({
// //       firstName: e.target.value
// //     });
// //   }

// //   onChangeLastName(e) {
// //     this.setState({
// //       lastName: e.target.value
// //     });
// //   }

// //   onChangeEmail(e) {
// //     this.setState({
// //       email: e.target.value
// //     });
// //   }

// //   onChangePassword(e) {
// //     this.setState({
// //       password: e.target.value
// //     });
// //   }

// //   onChangeAge(e) {
// //     this.setState({
// //       age: e.target.value
// //     });
// //   }

// //   onChangePhoneNo(e) {
// //     this.setState({
// //       phoneNo: e.target.value
// //     });
// //   }

// //   onChangeRoleId(e) {
// //     this.setState({
// //       roleId: e.target.value
// //     });
// //   }

// //   saveUser() {
// //     var data = {
// //       firstName: this.state.firstName,
// //       lastName: this.state.lastName,
// //       email: this.state.email,
// //       password: this.state.password,
// //       age: parseInt(this.state.age),
// //       phoneNo: parseInt(this.state.phoneNo),
// //       roleId: parseInt(this.state.roleId)
// //     };



// //     console.log("zsdcscdac======", data);


// //     UserDataService.create(data)
// //       .then(response => {
// //         this.setState({
          
// //           firstName: response.data.firstName,
// //           lastName: response.data.lastName,
// //           email: response.data.email,
// //           password: response.data.password,
// //           age: response.data.age,
// //           phoneNo: response.data.phoneNo,
// //           roleId: response.data.roleId,
// //           published: response.data.published,

// //           submitted: true
// //         });
// //         console.log(response.data);
// //       })
// //       .catch(e => {
// //         console.log(e);
// //       });
// //   }

//   // newUser() {
//   //   this.setState({
      
//   //     firstName: "",
//   //     lastName: "",
//   //     email: "",
//   //     password: "",
//   //     age: "",
//   //     phoneNo: "",
//   //     roleId: "",
//   //     published: false,
//   //     submitted: false
//   //   });
//   // }

// //   render() {
// //     return (
// //       <div className="submit-form">
// //         {this.state.submitted ? (
// //           <div>
// //             <h4>You submitted successfully!</h4>
// //             <button className="btn btn-success" onClick={this.newUser}>
// //               Add
// //             </button>
// //           </div>
// //         ) : (
// //           <div>
// //             <div className="form-group">
// //               <label htmlFor="firstName">First Name</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 id="firstName"
// //                 required
// //                 value={this.state.firstName}
// //                 onChange={this.onChangeFirstName}
// //                 name="firstName"
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="lastName">Last Name</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 id="lastName"
// //                 required
// //                 value={this.state.lastName}
// //                 onChange={this.onChangeLastName}
// //                 name="description"
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="email">Email</label>
// //               <input
// //                 type="mail"
// //                 className="form-control"
// //                 id="email"
// //                 required
// //                 value={this.state.email}
// //                 onChange={this.onChangeEmail}
// //                 name="email"
// //               />
// //             </div>
            
// //             <div className="form-group">
// //               <label htmlFor="password">password</label>
// //               <input
// //                 type="password"
// //                 className="form-control"
// //                 id="password"
// //                 required
// //                 value={this.state.password}
// //                 onChange={this.onChangePassword}
// //                 name="password"
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="age">age</label>
// //               <input
// //                 type="number"
// //                 className="form-control"
// //                 id="age"
// //                 required
// //                 value={this.state.age}
// //                 onChange={this.onChangeAge}
// //                 name="age"
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="phoneNo">PhoneNo</label>
// //               <input
// //                 type="number"
// //                 className="form-control"
// //                 id="phoneNo"
// //                 required
// //                 value={this.state.phoneNo}
// //                 onChange={this.onChangePhoneNo}
// //                 name="phoneNo"
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="roleId">RoleId</label>
// //               <input
// //                 type="number"
// //                 className="form-control"
// //                 id="roleId"
// //                 required
// //                 value={this.state.roleId}
// //                 onChange={this.onChangeRoleId}
// //                 name="roleId"
// //               />
// //             </div>

// //             <button onClick={this.saveUser} className="btn btn-success">
// //               Submit
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
// // }




// export default class UserData extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: "",
//       lastName: "",
//       email: "",
//       age: "",
//       phoneNo: "",
//       roleId: "",
//       submitClicked: false,
//       searches: "",
//       items: [],
//       errors: {
//         firstNameError: "",
//         lastNameError: "",
//         ageError: "",
//         emailError: "",
//         phoneNoError: "",
//         roleIdError: ""
//       }
//     };
//   }
//   onChangeFirstName = (e) => {
//     this.setState({
//       firstname: e.target.value,
//       firstNameError: ""
//     });
//   };
//   onChangeLastName = (e) => {
//     this.setState({
//       lastName: e.target.value,
//       lastNameError: ""
//     });
//   };
//   onChangeEmail = (e) => {
//     console.log("email", e);
//     this.setState({
//       email: e.target.value,
//       emailError: ""
//     });
//   };
//   onChangeAge = (e) => {
//     this.setState({
//       age: e.target.value,
//       ageError: ""
//     });
//   };
//   onChangePhoneNo = (e) => {
//     this.setState({
//       phoneNo: e.target.value,
//       phoneNoError: ""
//     });
//   };
//   onChangeRoleId = (e) => {
//     this.setState({
//       roleId: e.target.value,
//       roleIdError: ""
//     });

//   onClickButton = () => {
//     let errors = this.state.errors;
//     if (
//       this.state.firstname &&
//       this.state.lastName &&
//       this.state.email &&
//       this.state.age &&
//       this.state.phoneNo &&
//       this.state.roleId
      
//     ) {
//       let user = {
//         firstname: this.state.firstname,
//         lastName: this.state.lastName,
//         email: this.state.email,
//         age: this.state.age,
//         phoneNo: this.state.phoneNo,
//         roleId:this.state.roleId
        
//       };
//       let userD = Object.assign([], this.state.items);
//       userD.push(user);
//       this.setState({
//         submitClicked: true,
//         items: userD
//       });
//     } else {
//       if (!this.state.firstname) {
//         this.setState({
//           firstNameError: "Enter Name"
//         });
//       }
//       if (!this.state.lastName) {
//         this.setState({
//           lastNameError: "Enter Last Name"
//         });
//         if (!this.state.email) {
//           this.setState({
//             emailError: "Enter E-mail"
//           });
//         }  
//       }
//       if (!this.state.age) {
//         this.setState({
//           ageError: "Enter Age"
//         });
//       }
//       if (!this.state.phoneNo) {
//         this.setState({
//           phoneNoError: "Enter Phone No"
//         });
//       }
//       if (!this.state.roleId) {
//         this.setState({
//           roleIdError: "Enter Role Id"
//         });
//       }
//     }
//   };



//   UserDataService.create(data)
//          .then(response => {
//            this.setState({
            
//              firstName: response.data.firstName,
//              lastName: response.data.lastName,
//              email: response.data.email,
//              password: response.data.password,
//              age: response.data.age,
//              phoneNo: response.data.phoneNo,
//              roleId: response.data.roleId,
//              published: response.data.published,
  
//              submitted: true
//            });
//            console.log(response.data);
//          })
//          .catch(e => {
//            console.log(e);
//          });
//      }
  
//      newUser() {
//        this.setState({
        
//          firstName: "",
//          lastName: "",
//          email: "",
//          password: "",
//          age: "",
//          phoneNo: "",
//          roleId: "",
//          published: false,
//          submitted: false
//        });
//      }

//   render() {
//     console.log("ARRay", this.state.items);
//     return (
//       <div className="body">
//         <div className="home">
//           <div className="form">


//             <Label className="title"> First Name </Label>
//             <Input
//               type="text"
//               maxLength="10"
//               onChange={this.onChangeFirstName}
//               value={this.state.firstname}
//             />
//             <p className="text-danger">
//               {!this.state.firstname ? this.state.firstNameError : ""}
//             </p>


//             <br />

//             <Label className="title"> Last Name </Label>
//             <Input
//               type="text"
//               onChange={this.onChangeLastName}
//               value={this.state.lastName}
//             />
//             <p className="text-danger">
//               {!this.state.lastName ? this.state.lastNameError : ""}
//             </p>


//             <br />


//             <Label className="title"> Email </Label>
//             <Input
//               type="mail"
//               onChange={this.onChangeEmail}
//               value={this.state.email}
//             />
//             <p className="text-danger">
//               {!this.state.email ? this.state.emailError : ""}
//             </p>


//             <br />

//             <Label className="title"> AGE </Label>
//             <Input
//               type="number"
//               onChange={this.onChangeAge}
//               value={this.state.age}
//             />
//             <p className="text-danger">
//               {!this.state.age ? this.state.ageError : ""}
//             </p>


//             <br />


//             <Label className="title"> PhoneNo </Label>
//             <Input
//               type="number"
//               onChange={this.onChangePhoneNo}
//               value={this.state.phoneNo}
//             />
//             <p className="text-danger">
//               {!this.state.phoneNo ? this.state.phoneNoError : ""}
//             </p>

//             < br />



//             <Label className="title"> Role Id </Label>
//             <Input
//               type="number"
//               onChange={this.onChangeRoleId}
//               value={this.state.roleId}
//             />
//             <p className="text-danger">
//               {!this.state.roleId ? this.state.roleIdError : ""}
//             </p>

//             <br />


            


            
            

//             <Button style={{ color: "blue" }} onClick={this.onClickButton}>
//               {" "}
//               SUBMIT
//             </Button>
//           </div>
//         </div>

//         <div>
//           {this.state.items.map((item, index) => {
//             return (
//               <Col classname="Col" item xs={5} key={index}>
//                 <p>
//                   <span>Name:{item.firstname}</span>
//                 </p>
//                 <p>
//                   <span>Last Name:{item.lastName}</span>
//                 </p>
//                 <p>
//                   <span>Email:{item.email}</span>
//                 </p>
//                 <p>
//                   <span>AGE:{item.age}</span>
//                 </p>
//                 <p>
//                   <span>Phone No:{item.phoneNo}</span>
//                 </p>
//                 <p>
//                   <span>roleId: {item.roleId}</span>
//                 </p>
//               </Col>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// };



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
