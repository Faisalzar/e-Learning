import React, { useRef, useState, useEffect } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "../FormGroup";

export default function RegistrationForm({
  handleCancel,
  showLogin,
  registered,
  handleRegistration,
}) {
 

  let fullName = useRef();
  useEffect(() => {
    fullName.current.focus();
  }, []);

  

  const [registration, setRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConf: "",
  });
 
  const handlerInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  function handleRegistration(e) {
    e.preventDefault();
    console.log("first");
    const events = {
      fullName: registration.fullName,
      email: registration.email,
      password: registration.password,
      passwordConf: registration.passwordConf,
      id: Math.floor(Math.random() * 1000),
    };
    

    const validateRegistrationForm = (obj) => {
      console.log(obj);
      if (
        Object.values(obj).every(
          (value) => value || (typeof value === "number" && value === 0)
        )
      ) {
        resetForm();
        if(registration.password === registration.passwordConf && window.alert("You have Registered Successfully")){
          showLogin();
        }if (registration.password !== registration.passwordConf) {
          alert('Passwords do not match!')
        }
       
      } else {
        window.alert("Complete all fields");
      }
    };
    validateRegistrationForm(events);
  }
  function resetForm() {
    setRegistration({
      fullName: "",
      email: "",
      password: "",
      passwordConf: "",
    });
  }
  return (
    <div className="form fadeIn" style={{ maxWidth: 500 }}>
      <Title text="Register" classes={"text-center mb-4"} />
      <Button
        classes={"btn-close-dark"}
        text={"x"}
        style={{ position: "absolute", top: 20, right: 30 }}
        onClick={handleCancel}
      />
      <form onSubmit={handleRegistration}>
        <FormGroup
          label={"Name"}
          placeholder={"Enter your name"}
          reffer={fullName}
          value={registration.fullName}
          onChange={handlerInputChange}
          name="fullName"
        />{" "}
        <FormGroup
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email"}
          value={registration.email}
          onChange={handlerInputChange}
          name="email"
        />{" "}
        <FormGroup
          label={"Password"}
          type={"password"}
          name="password"
          placeholder={"Enter your password"}
          value={registration.password}
          onChange={handlerInputChange}
        />{" "}
        <FormGroup
          label={"Confirm Password"}
          placeholder={"ReType your password"}
          type={"password"}
          name="passwordConf"
          value={registration.passwordConf}
          onChange={handlerInputChange}
        />
        <div className="d-flex alert-close">
          <Button
            classes={"btn-primary btn-lg"}
            type={"submit"}
            text={"Register"}
            onClick={() => console.log("Registered")}
          />

          <Button
            type={"button"}
            classes={"btn-lg"}
            text={"Login"}
            onClick={showLogin}
          />
        </div>
      </form>
    </div>
  );
}