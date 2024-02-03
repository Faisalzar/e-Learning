import { useState, useEffect, useRef } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "../FormGroup";

export default function LoginForm({ handleCancel, loggedIn, showRegister }) {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // References

  let emailRef = useRef();
  let passwordRef = useRef();

  // Handlers

  const changeEmail = (e) => {
    setEmail(e.target.value);
    
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      email: email,
      password: password,
      id: Math.floor(Math.random() * 1000),
    };
    console.log(event);
    validateLoginForm();
  };

  function resetForm() {
    setEmail("");
    setPassword("");
  }



  function validateLoginForm() {
    email === "" && window.alert("Please enter your email!");
    password === "" || password.length <= 4
      ? window.alert("Please enter your password!")
      : loggedIn();
  }
  // Effects

  useEffect(() => {
    emailRef.current.focus();
  }, []);


  
  return (
    <div className="form fadeIn" style={{ maxWidth: 500 }}>
      <Title text="Login" classes={"text-center mb-4"} />
      <h4 className="subtitle">Enter your credentials</h4>

      <form onSubmit={handleSubmit}>
        <FormGroup
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email"}
          value={email}
          onChange={changeEmail}
          reffer={emailRef}
        />
        <FormGroup
          label={"Password"}
          type={"password"}
          placeholder={"Enter your password"}
          value={password}
          onChange={changePassword}
          reffer={passwordRef}
        />

        <div className="d-flex alert-close">
          <Button
            classes={"btn-primary"}
            type={"submit"}
            text={"Login"}
            onClick={() => window.alert("Form submission")}
          />
          <Button
        classes={"btn-close-dark"}
        text={"x"}
        onClick={handleCancel}
       />
          <Button type={"button"} text={"Register"} onClick={showRegister} />
        </div>
      </form>
    </div>
  );
}