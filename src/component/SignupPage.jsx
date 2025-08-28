import React, { useState } from "react";
import InputField from "./common/InputField";
import Button from "./common/Button";

export default function SignupPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: true,
  });

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });
  const handleSubmit = () => onNavigate("profile");

  return (
    <div className="page-wrapper top-aligned">
      <h1 className="two-line">
        Create your <br /> PopX account
      </h1>
      <InputField
        label="Full Name"
        type="text"
        value={formData.fullName}
        onChange={handleChange("fullName")}
        required
      />
      <InputField
        label="Phone number"
        type="tel"
        value={formData.phone}
        onChange={handleChange("phone")}
        required
      />
      <InputField
        label="Email address"
        type="email"
        value={formData.email}
        onChange={handleChange("email")}
        required
      />
      <InputField
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
        required
      />
      <InputField
        label="Company name"
        type="text"
        value={formData.company}
        onChange={handleChange("company")}
      />

      <div className="agency-section">
        <p style={{ margin: "15px 0", fontWeight: "600" }}>
          Are you an Agency?*
        </p>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              checked={formData.isAgency}
              onChange={() => setFormData({ ...formData, isAgency: true })}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={!formData.isAgency}
              onChange={() => setFormData({ ...formData, isAgency: false })}
            />
            No
          </label>
        </div>
      </div>

      <Button text="Create Account" onClick={handleSubmit} type="primary" />
    </div>
  );
}
