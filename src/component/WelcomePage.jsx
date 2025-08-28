import React from "react";
import Button from "./common/Button";

export default function WelcomePage({ onNavigate }) {
  return (
    <div className="page-wrapper bottom-aligned">
      <div>
        <h1>Welcome to PopX</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button
          text="Create Account"
          onClick={() => onNavigate("signup")}
          type="primary"
        />
        <div style={{ marginTop: "10px" }}>
          <Button
            text="Already Registered? Login"
            onClick={() => onNavigate("login")}
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
}
