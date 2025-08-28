import React, { useState } from "react";
import InputField from "./common/InputField";
import Button from "./common/Button";

export default function LoginPage({ onNavigate }) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (field) => (e) =>
    setLoginData({ ...loginData, [field]: e.target.value });
  const handleSubmit = () => onNavigate("profile");

  return (
    <div className="page-wrapper top-aligned">
      <h1 className="two-line">
        Sign in to your <br /> PopX account
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <InputField
        label="Email Address"
        type="email"
        value={loginData.email}
        onChange={handleChange("email")}
        required
      />
      <InputField
        label="Password"
        type="password"
        value={loginData.password}
        onChange={handleChange("password")}
        required
      />
      <Button text="Login" onClick={handleSubmit} type="primary" />
    </div>
  );
}
