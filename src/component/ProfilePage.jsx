import React from "react";

export default function ProfilePage() {
  return (
    <div className="page-wrapper top-aligned">
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <div className="profile-pic">
            <img
              src="https://www.nicepng.com/png/detail/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
              alt="Profile"
            />
          </div>
          <div className="camera-icon">📷</div>
        </div>
        <div className="profile-info">
          <h2>Marry Doe</h2>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <p>
        Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>

      {/* Dotted divider AFTER paragraph */}
      <div className="divider"></div>
    </div>
  );
}
